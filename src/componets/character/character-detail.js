import React from 'react'
import './character-detail.css'

const CharacterDetail = (props) => {

  const {characterDetail} = props
  console.log(props);

  
  const handlerClose = () => {
    props.onClick()
  }

  return (
    <div className="Character-detail">
      <div className="Character-content">
        <button className="Character-close" onClick={handlerClose}>X</button>
        <picture className="Character-avatar">
          <img src={characterDetail.image} alt={characterDetail.name}></img>
        </picture>
        <div className="Character-information">
          <div className="Character-information-content">
            <h2>{characterDetail.name}</h2>
            <p><b>Status:</b> {characterDetail.status}</p>
            <p><b>Species:</b> {characterDetail.species}</p>
            <p><b>Gender:</b> {characterDetail.gender}</p>
            <p><b>Origin:</b> {characterDetail.origin.name}</p>
            <p><b>Location:</b> {characterDetail.location.name}</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CharacterDetail;