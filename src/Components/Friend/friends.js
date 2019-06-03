import React from 'react'
import './myStyles.css'


function Friend(props) {

   return <img onClick={() => props.onClick(props.id)} src={props.src} alt="place holder"/> 



}

export default Friend