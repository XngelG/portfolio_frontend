import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Bars } from 'react-loader-spinner'
import {Doughnut} from 'react-chartjs-2';
import 'chart.js/auto';
import { Resizable } from "re-resizable";

export default function Home({trendData,trendError}) {
  const [isCompleted,setIsCompleted,] = useState(false)
  const [isLoading,setIsLoading,] = useState(false)
  const [keywordSearch,setKeyword] = useState("")
  var pos_parse = 0.0;
  var neu_parse = 0.0;
  var neg_parse = 0.0;
  const [data,setData] = useState({keyword:"",
                                    email:"",
                                    positive:0,
                                    negative:0,
                                    neutral:0,
                                    wordcloud_neg:{},
                                    wordcloud_pos:{}})

  var dataChart = null; 

  const getSentiment = async event => {
    event.preventDefault()
    const options ={
      method: "POST",
      body: JSON.stringify(
        {
          keyword: keywordSearch,
          email: "",
          positive: 0,
          negative: 0,
          neutral: 0,
          wordcloud_neg: {},
          wordcloud_pos: {}
        }),
      headers:{
          'Content-Type': 'application/json'
      }
    }
    setIsCompleted(false)
    setIsLoading(true)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/sentiment/`,options)
    const result = await res.json()
    setData(result)
    setIsLoading(false)
    setIsCompleted(true)
    return result;
  }
  if(isCompleted){
    pos_parse = parseFloat(data.positive).toFixed(2)
    neu_parse = parseFloat(data.neutral).toFixed(2)
    neg_parse = parseFloat(data.negative).toFixed(2)

    dataChart = {
      labels: [
        'Positive',
        'Negative',
        'Neutral'
      ],
      datasets: [{
        data: [data.positive, data.negative, data.neutral],
        backgroundColor: [
          '#43A047',
          '#E53935',
          '#00ACC1'
        ],
        hoverBackgroundColor: [
          '#1B5E20',
          '#B71C1C',
          '#006064'
        ]
      }],
      
    };

  }

  if(process.browser){
    return(
      <main>
        <div className={styles.Main}>
          <div className={styles.InnerContent}>
            <div className={styles.Form}>
              <form onSubmit={getSentiment}>
              <h1 className={styles.keywordText}>Analyze sentiment of any topic!</h1>
              <input id="name" name="name" type="text" autoComplete="on" required className={styles.keywordBox} onChange={(e)=>{setKeyword(e.target.value);}} placeholder={keywordSearch}/>
              <button type="submit" className={styles.keywordSubmit}>Search</button>
              </form> 
            </div>
            <div className={styles.Form2}>
              <form onSubmit={getSentiment}>
                <button type="submit" value={trendData.trend_1} onClick={(e)=>{setKeyword(e.target.value);}} className={styles.buttonTrends}>{trendData.trend_1}</button>
                <button type="submit" value={trendData.trend_2} onClick={(e)=>{setKeyword(e.target.value);}} className={styles.buttonTrends}>{trendData.trend_2}</button>
                <button type="submit" value={trendData.trend_3} onClick={(e)=>{setKeyword(e.target.value);}} className={styles.buttonTrends}>{trendData.trend_3}</button>
                <button type="submit" value={trendData.trend_4} onClick={(e)=>{setKeyword(e.target.value);}} className={styles.buttonTrends}>{trendData.trend_4}</button>
                <button type="submit" value={trendData.trend_5} onClick={(e)=>{setKeyword(e.target.value);}} className={styles.buttonTrends}>{trendData.trend_5}</button>
              </form>
            </div>
            {isLoading?
              <div>
                <div className={styles.loadingBar} >
                  <Bars color="#212121" height={80} width={120} />
                </div>
                <p className={styles.loadingText}>PROCESSING INFO</p>
              </div>:<div></div>
            }
            {isCompleted?
            <div>
              <div className={styles.wordcloudGrid}>
                <div className={styles.leftGrid}>
                  <div className={styles.reportText}> 
                    <p>{data.keyword} returns a {pos_parse}% of positive opinions and {neg_parse}% of negative opinions </p>
                  </div>
                  <div className={styles.dataChart}>
                    <Doughnut data={dataChart} />
                  </div>
                </div>
        
                <div className={styles.rightGrid}>
                  <h1 className={styles.wordcloudText}>Recurring positive words</h1>
                  <div className={styles.wordcloudBox}>
                    <div className={styles.wordCloud}>
                      <Resizable>
                        <ReactWordcloud options={{rotations: 2,rotationAngles: [-90, 0],fontSizes: [15,60],colors:["#1B5E20","#2E7D32","#388E3C","#43A047"],}} 
                        words={data.wordcloud_pos} 
                        />
                      </Resizable>
                    </div>
                  </div>
                  <h1 className={styles.wordcloudText}>Recurring negative words</h1>
                  <div className={styles.wordcloudBox}>
                    <div className={styles.wordCloud}>
                      <Resizable>
                        <ReactWordcloud options={{rotations: 2,rotationAngles: [-90, 0],fontSizes: [15,60],colors:["#B71C1C","#C62828","#D32F2F","#E53935"],}}
                        words={data.wordcloud_neg}
                        />
                      </Resizable>
                    </div>
                  </div>
                </div>     
              </div>     
              </div>:<div></div>
            }
          </div>
        </div>
      </main>
      //
      )
  }
  else{
    return <div></div>
  }
  
}


export async function getServerSideProps(){
  let trendData = []
  let trendError = null;
  try {
    const options ={
      method: "POST",
      body: JSON.stringify(
        {
          "trend_1": "",
          "trend_2": "",
          "trend_3": "",
          "trend_4": "",
          "trend_5": ""
        }),
      headers:{
          'Content-Type': 'application/json'
      }
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/trends/`,options)
    trendData = await response.json()
  } catch (err) {
    console.log('err', err);
    trendError = err.message?err.message:"Something went wrong"
  }

  return{
    props:{
      trendData,
      trendError,
    }
  }
}