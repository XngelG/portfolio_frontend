import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { useState } from 'react'

export default function Home() {
  const [isCompleted,setIsCompleted,] = useState(false)
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
    const res = await fetch('http://localhost:8000/api/sentiment/',options)
    const result = await res.json()
    setData(result)
    console.log('result',result)
    setIsCompleted(true)
    return result;
  }

  if(process.browser){
    return(
      <div>
        <div>
          <form onSubmit={getSentiment}>
          <label htmlFor="name">Keyword</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
          <button type="submit">Submit</button>
          </form> 
        </div>
        {isCompleted?
          <div>
            <div>
              <h1>positive</h1>
              <ReactWordcloud options={{rotations: 2,rotationAngles: [-90, 0],fontSizes: [20,100],deterministic:true,enableOptimizations:true,}} 
                words={data.wordcloud_pos} 
                size = {[600, 600]}
                />
            </div>
    
            <div>
              <h1>negative</h1>
              <ReactWordcloud options={{rotations: 2,rotationAngles: [-90, 0],fontSizes: [20,100],deterministic:true,enableOptimizations:true,}}
              words={data.wordcloud_neg}
              size = {[600, 600]} 
              />
            </div>          
          </div>:<div></div>
        }
      </div>
      //
      )
  }
  else{
    return <div></div>
  }
  
}

