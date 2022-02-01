import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { useState } from 'react'
import styles from '../styles/Sentiment.module.css'
import { Bars } from 'react-loader-spinner'
import {Doughnut} from 'react-chartjs-2';
import 'chart.js/auto';
import { Resizable } from "re-resizable";
import Link from 'next/link'
import Head from 'next/head'

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
return(
  <div>

    <Head>
      <title>
        Ángel Gallardo | Sentiment Analysis
      </title>
      <meta name="description" content="Angel Gallardo's sentiment analysis implementation"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>

    <main className={styles.Main}>
    <Image src="https://res.cloudinary.com/dfcshdnfp/image/upload/v1643647216/7d0JQqq_nbufbe.png" alt="Background" layout='fill' objectFit='cover' objectPosition='center' priority/>
      <div className={styles.Wrapper}>

        <div className={styles.Content}>

          <div className={styles.NavBar}>
              <div className={styles.NavContent}>
                <Link href={"/"}>HOME</Link>
              </div>
              <div className={styles.NavContent}>
                <Link href={"/portfolio/"}>PORTFOLIO</Link>
                </div>            
            </div>
          <div className={styles.Line}/>

          <div className={styles.Form}>
            <form onSubmit={getSentiment}>
              <h1 className={styles.KeywordText}>Analyze sentiment of any topic!</h1>
              <input id="name" name="name" type="text" autoComplete="on" required className={styles.KeywordBox} onChange={(e)=>{setKeyword(e.target.value);}} placeholder={keywordSearch}/>
              <button type="submit" className={styles.KeywordSubmit}>Search</button>
            </form> 
          </div>

          <div className={styles.Form2}>
            <form onSubmit={getSentiment}>

              <div className={styles.TrendButtonAlign}>
                <button type="submit" value={trendData.trend_1} onClick={(e)=>{setKeyword(e.target.value);}} className={styles.ButtonTrends}>{trendData.trend_1}</button>
              </div>
              <div className={styles.TrendButtonAlign}>
                <button type="submit" value={trendData.trend_2} onClick={(e)=>{setKeyword(e.target.value);}} className={styles.ButtonTrends}>{trendData.trend_2}</button>
              </div>
              <div className={styles.TrendButtonAlign}>
                <button type="submit" value={trendData.trend_3} onClick={(e)=>{setKeyword(e.target.value);}} className={styles.ButtonTrends}>{trendData.trend_3}</button>
              </div>
              <div className={styles.TrendButtonAlign}>
                <button type="submit" value={trendData.trend_4} onClick={(e)=>{setKeyword(e.target.value);}} className={styles.ButtonTrends}>{trendData.trend_4}</button>
              </div>
              <div className={styles.TrendButtonAlign}>
                <button type="submit" value={trendData.trend_5} onClick={(e)=>{setKeyword(e.target.value);}} className={styles.ButtonTrends}>{trendData.trend_5}</button>
              </div>

            </form>
          </div>

          {isLoading?
            <div className={styles.LoadingScreen}>
              <div className={styles.LoadingBar} >
                <Bars color="gold" height={80} width={120} />
              </div>
              <p className={styles.LoadingText}>PROCESSING INFO</p>
            </div>:<div></div>
          }

          {isCompleted?
            <div>

              <div className={styles.WordcloudGrid}>

                <div className={styles.LeftGrid}>
                  <p className={styles.ReportText}>&apos;{data.keyword}&apos; returns a {pos_parse}% of positive opinions and {neg_parse}% of negative opinions </p>
                  <div className={styles.DataChart}>
                    <Doughnut data={dataChart} />
                  </div>
                </div>
        
                <div className={styles.RightGrid}>

                  <h1 className={styles.WordcloudText}>Recurring positive words</h1>
                  <div className={styles.WordcloudBox}>
                    <div className={styles.WordCloud}>
                      {process.browser?
                        <div>
                            <ReactWordcloud options={{rotations: 2,rotationAngles: [-90, 0],
                                            fontSizes: [15,60],
                                            colors:["#1B5E20","#2E7D32","#388E3C","#43A047"],
                                            fontFamily:'Bebas Neue',}} 
                                            words={data.wordcloud_pos} 
                                            />
                        </div>:<div></div>
                      }
                    </div>
                  </div>

                  <h1 className={styles.WordcloudText}>Recurring negative words</h1>
                  <div className={styles.wordcloudBox}>
                    <div className={styles.wordCloud}>
                      {process.browser?
                        <div>
                            <ReactWordcloud options={{rotations: 2,rotationAngles: [-90, 0],
                                            fontSizes: [15,60],
                                            colors:["#B71C1C","#C62828","#D32F2F","#E53935"],
                                            fontFamily:'Bebas Neue',}}
                                            words={data.wordcloud_neg}
                                            />
                        </div>:<div></div>
                      }
                    </div>
                  </div>

                 </div>
                      
              </div>
     
            </div>:<div></div>
          }

          <div className={styles.Footer}/> 

        </div>

      </div>
    </main>

  </div>
)
  
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