import React, { useState } from 'react';
import CardSymbols from '../card-symbols/CardSymbols';
import styles from './Card.module.scss';

const Card = ({cardClass, symbol, number}) =>{

    let [flipped, setFlipped] = useState(cardClass);
  
    const handleClick = (e) =>{
      e.preventDefault();
      flipped === false ? setFlipped(flipped=true) : setFlipped(flipped=false);
    }

        return <div onClick={handleClick} className={flipped ? styles.card : `${styles.card} ${styles.flipped}`} symbol={symbol} number={number}>
        <div className={styles.container}>
          <div className={styles.front}>
            {/* a */}
          <div className={styles.cardCorner}>
            <div>{number}</div>
            <div>{symbol}</div>
          </div>
          {/* a */}
            <div className={styles.symbols}>
              <CardSymbols number ={number} symbol ={symbol} styleClass={styles.image}/>
            </div>
            {/* a */}
            <div className={styles.cardCorner}>
              <div>{number}</div>
              <div>{symbol}</div>
          </div>
          {/* a */}
          </div>          
          <div className={styles.back}></div>
        </div>
      </div>
  }
  export default Card;
