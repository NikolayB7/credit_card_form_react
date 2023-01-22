import React from 'react';

const Card = ({ cardInfo }) => {

    // console.log(props, '___CARD');
    let { number, holder, month } = cardInfo
    return (
        <div className='card-body'>
            Card:{number}
            <br></br>
            holder:{holder}
            <br></br>
            month:{month}
        </div>
    );
};

export default Card;