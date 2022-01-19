import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { useState } from 'react'

export default function Home() {
  const [isCompleted,setIsCompleted,] = useState(false)
  const result = null;
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
    const res = await fetch('http://localhost:8000/api/sentiment/',options)
    result = await res.json()
    console.log('result',result)
    setIsCompleted(true)
  }

  if(process.browser){
    return(
      <div>
        {!isCompleted?
          <div>
            <form onSubmit={getSentiment}>
            <label htmlFor="name">Keyword</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
            <button type="submit">Submit</button>
            </form> 
          </div>:<div>
            <div>
              <h1>{result.positive}</h1>
              {/* <ReactWordcloud words={result.wordcloud_pos} /> */}
            </div>
    
            <div>
              <h1>{result.negative}</h1>
              {/* <ReactWordcloud words={result.wordcloud_neg} /> */}
            </div>          
          </div>
        }
      </div>
      //
      )
  }
  else{
    return <div></div>
  }
  
}

