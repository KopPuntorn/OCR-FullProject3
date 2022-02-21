import React from 'react'
import './Card.css';

function Cards(props) {
    const { CardData, onCardClick } = props;
    return (
        <div className="">
            <div className="card-item">
                <img src={require('./Card5.png').default} alt="card"  onClick={() => {onCardClick(CardData)}} />
                <div className="card-text">{CardData.name}</div>
             </div>
        </div>
    )
}

export default Cards
