import React,{useState} from 'react'

function Inputs(){
    const[counter,setCounter]=useState(0);
    const[name,setName]=useState("");
    const[age,setAge]=useState("")
    function increaseCount(){
        setCounter(counter+1)
    }
    function decreaseCount(){
        setCounter(counter-1)
    }
    return(
        <div className='inputs'>
            <h1>INPUT AND FORM SECTION</h1>
            <input type='text' onChange={e=>setName(e.target.value)}/>
            <input type='text' onChange={e=>setAge(e.target.value)}/>
            <p>You are {age} Years Old</p>
            <p>{name}  has Clicked {counter} times</p>
              <button onClick={decreaseCount}>Decrease Count</button>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}
export default Inputs;