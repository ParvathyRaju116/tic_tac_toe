import React from 'react'

function Square(props) {

  let textColor = 'black';

  if (props.value === 'X') {
    textColor = 'rgb(62,157,233)'; 
  } else if (props.value === 'O') {
    textColor = 'rgb(107,240,171)'; 
  }

  return (
    <div
    onClick={props.onClick}
    style={{
     
       height:'100px',
       width:'100px',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       margin:'5px',
      borderRadius:'20px',
      color:textColor,
    }} 
    className='square  shadow'>
        <p className='xORo'>{props.value}</p>
    </div>
  )
}

export default Square