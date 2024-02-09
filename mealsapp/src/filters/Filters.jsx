import React, { useState } from 'react'
import "./filters.css"
import { Accordion, AccordionDetails, AccordionSummary,       Typography } from '@mui/material'
const Filters = ({categorrry,onCategoryChange,ongouse}) => {

const[max,setMax]=useState(1000)
const[min,setMin]=useState(0)

 
   




  return (

    <div className='set-filters'>
      <Accordion  >
        <AccordionSummary >
          <Typography id='tom'>Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
     {  categorrry.map((item)=><div><input onChange={(e)=> (onCategoryChange(item,e.target.checked))}  type="checkbox" /> {item} </div>)}
        
      

        
        </AccordionDetails>
        
      </Accordion>
      <Accordion >
        <AccordionSummary >
          <Typography id='tom'>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
         {<div>
          <input type='number' value={min} onChange={(e)=>setMin(e.target.value)}/>
          <input type='number' value={max} onChange={(e)=>setMax(e.target.value)}/>
          <button onClick={()=>ongouse(min,max)}>Go</button>
          </div>}
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary >
          <Typography id='tom'>Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
        </AccordionDetails>
      </Accordion>
    </div>
    
  );
}



export default Filters