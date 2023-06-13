import React from 'react'

export default function Masina(props) {
  return (
    <div>Masina cu care am venit la curs este {props.car.name}, modelul {props.car.model}</div>
  )
}