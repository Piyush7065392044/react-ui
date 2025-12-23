import React from 'react'


const Card1 = (props) => {
    console.log(props.cardData)
  return (
   <>
   
   <div className="parents">
    {/* top items  */}
    <div className="top">
        <div className="left">
            <button>{props.status}</button>
        </div>
        <div className="right">
        {props.price}
        </div>
    </div>
    {/*  center image  */}
    <div className="center">
        <div className="img">
{props.id}
        </div>
        <div className="name">
      {props.name}
        </div>
        <div className="jobrole">
         {props.jobRole}
        </div>
        <div className="epiccoder">
   {props.company}
        </div>

    </div>
    <div className="skills">
      {props.skills}
    </div>
<div className="bottom">
   {props.description}
</div>
   </div>
   </>
  )
}

export default Card1