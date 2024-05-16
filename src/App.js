
import React,{useState} from 'react';
import './index.css';
import data from './data'
function App() {
 const [selected,setSelected]=useState();
 function Handlers(getID){
  setSelected(getID===selected?null:getID)}
  return(
    <div className='container'>
      <div className='wrapper'>
        {
          data && data.length>0?
          data.map((dataItem)=><div className='item'>
            <div className='unit' onClick={()=>Handlers(dataItem.id)}>
              <h1>{dataItem.player}</h1>
              <h1>+</h1>
            </div>
            {
              selected===dataItem.id?
              <div className='content'>
                <div>{dataItem.player}</div>
                <div>{dataItem.role}</div>
              </div>
              :null
            }
          </div>)
          :<div>No data has been found</div>
        }
      </div>
    </div>
  )
 }

export default App;
