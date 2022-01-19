import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Bars } from 'react-loader-spinner'

export default function Home() {
  const [isCompleted,setIsCompleted,] = useState(false)
  const [isLoading,setIsLoading,] = useState(false)
  const [data,setData] = useState({keyword:"",
                                    email:"",
                                    positive:0,
                                    negative:0,
                                    neutral:0,
                                    wordcloud_neg:{},
                                    wordcloud_pos:{}})
  const getSentiment = async event => {
    event.preventDefault()
    const options ={
      method: "POST",
      body: JSON.stringify(
        {
          keyword: event.target.name.value,
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
    const res = await fetch('http://localhost:8000/api/sentiment/',options)
    const result = await res.json()
    setData(result)
    console.log('result',result)
    setIsLoading(false)
    setIsCompleted(true)
    return result;
  }

  if(process.browser){
    return(
      <main className={styles.Main}>
        <div className={styles.InnerContent}>
          <div className={styles.Form}>
            <form onSubmit={getSentiment}>
            <h1 className={styles.keywordText}>Analyze sentiment of any topic!</h1>
            <input id="name" name="name" type="text" autoComplete="name" required className={styles.keywordBox}/>
            <button type="submit" className={styles.keywordSubmit}>Search</button>
            </form> 
          </div>
          {isLoading?
            <div>
              <div className={styles.loadingBar} >
                <Bars color="#408080" height={80} width={120} />
              </div>
              <p className={styles.loadingText}>PROCESSING INFO</p>
            </div>:<div></div>
          }
          {isCompleted?
          <div>
            <div>
              <div className={styles.gradientParent}> 
                <p className={styles.gradientNeg}>{data.negative}% </p>
                <p className={styles.gradientNeu}>{data.neutral}% </p>
                <p className={styles.gradientPos}>{data.positive}% </p>
              </div>
            </div>
            <div className={styles.wordcloudGrid}>
              <div className={styles.leftGrid}>
                <h1 className={styles.wordcloudText}>Recurring positive words</h1>
                <div className={styles.wordcloudBox}>
                  <div className={styles.wordCloud}>
                    <ReactWordcloud options={{rotations: 2,rotationAngles: [-90, 0],fontSizes: [30,100],deterministic:true,enableOptimizations:true,colors:["#1F994E","#12592D","#2BD96E","#2EE674","#26C261"],}} 
                    words={data.wordcloud_pos} 
                    />
                  </div>
                </div>
              </div>
      
              <div className={styles.rightGrid}>
                <h1 className={styles.wordcloudText}>Recurring negative words</h1>
                <div className={styles.wordcloudBox}>
                  <div className={styles.wordCloud}>
                    <ReactWordcloud options={{rotations: 2,rotationAngles: [-90, 0],fontSizes: [30,100],deterministic:true,enableOptimizations:true,colors:["#992822","#591714","#D93830","#E63B32","#C7332C"],}}
                    words={data.wordcloud_neg}
                    />
                  </div>
                </div>
              </div>     
            </div>     
            </div>:<div></div>
          }
        </div>
      </main>
      //
      )
  }
  else{
    return <div></div>
  }
  
}

