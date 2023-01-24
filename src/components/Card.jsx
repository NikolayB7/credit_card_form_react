import React from 'react';

const Card = ({ cardInfo, stateCard }) => {

    let { number, holder, month, day, cvv } = cardInfo
    return (
        <div className="card-body-wrap">
            <div className={`body-card ${stateCard ? `rotate` : ``}`}>
                <div className="card-front">
                    <div className="number">{number}</div>
                    <div className="holder">{holder}</div>
                    <div className="date d-flex">
                        <div className="month">{month}</div>
                        {(day.length) ? '/' : ''}
                        <div className="day">{day}</div>
                    </div>
                </div>
                <div className="card-back">
                    <div className="cvv-num">{cvv}</div>
                </div>
            </div>
        </div >
    );
};

export default Card;