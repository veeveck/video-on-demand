import React from 'react'
import "./PlanScreen.css"

const plan=[
    {
    name:'Premium',
    desc:'4k + HDR'
},
{
    name:'Standard',
    desc:'1080p'
},
{
    name:'Basic',
    desc:'720p'
},]
const PlanScreen = () => {
    return (
        <div className='planScreen'>
            {plan.map((item)=>{
                return(
               <div className='plan'>     
                <div className='planInfo'>
                    <h5>{item.name}</h5>
                    <h6>{item.desc}</h6>
                </div>  
                <button>Subscribe</button>
                </div>  
            )})}
             
             
        </div>
    )
}

export default PlanScreen
