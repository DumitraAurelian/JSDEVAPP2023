import React from 'react'

export default function Salut(props) {
    let element;
    if (props.curs){
        element=<div>Salut sunt {props.nume} si particip la cursul de {props.curs}</div>;
    }
    else {
        element=<div>Salut  {props.nume}</div>;
    }
  return (
   element
  )
}
