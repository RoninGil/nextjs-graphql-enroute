import React, { useEffect, useState } from 'react';
import Card from '../card/Card.js'
import styles from '../deck/Deck.module.scss';


const Deck = ({ title, cards, flipped }) =>{

    return <div>
    <h3 className = {title}>{title}</h3>
    <div className={styles.deck}>{cards.map((card, index) =>{
      const number = card.slice(0, -1);
      const symbol = card.slice(-1);
      if(index<=parseInt(flipped)){
        // me falta ponerle el flipped despues de styles.card
        return <Card cardClass={true} number={number} symbol={symbol} key={index}></Card>
      }
      return <Card
      cardClass= {false} 
      number={number} 
      symbol={symbol} 
      key={index}></Card>
    })}</div>
    </div >
  
  }
  export default Deck;
