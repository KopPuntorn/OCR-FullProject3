import React from 'react'
import './Card.css';

function Cards(props) {
    const { CardData, onCardClick } = props;
    return (
        <div className="">
            <div className="card-item">
                <img src={require('../Img/CardImg/Card1.JPG').default} alt="card"  onClick={() => {onCardClick(CardData)}} />
                <div className="card-text">{CardData.name}</div>
             </div>
        </div>
    )
}

export default Cards
