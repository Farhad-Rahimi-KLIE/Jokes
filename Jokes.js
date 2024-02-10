import React,{useState, useEffect} from 'react'
import './Jokes.css'
const Jokes = () => {
    const [joke,setJoke] = useState("loading")
    const [fname,setFname] = useState("Farhad")
    const [sname,setSname] = useState("Rahimi")
    useEffect(()=>{
        clicktoadd(fname,sname)
    },[])
    const clicktoadd = ()=>{
        fetch(`this api${fname} fetch ${sname}here`).then((response)=>{
            return response.json();
        }).then((data)=>{
            setJoke(data.value)
        })
    }
  return (
    <>
    <h3>Jokes Application</h3>
      <div className="container">
        <input type="text" value={fname} onChange={(e)=> setFname(e.target.value)} />
        <input type="text" value={sname} onChange={(e)=> setSname(e.target.value)} />
        <span className='main-joke'>{joke}</span>
        <button className='btn btn-primary' onClick={clicktoadd}>Jokes Generate</button>
      </div>
    </>
  )
}

export default Jokes
