import React from 'react';
import styles from './CardSymbols.module.scss';

const CardSymbols = ({number, symbol, styleClass}) =>{
    const isNumber = !isNaN(number);
    if(number === "A"){
      return <div>
        {symbol}
      </div>
    }
    if(isNumber){
        return new Array(parseInt(number))
        .fill(symbol)
        .map((cardSymbol, index) =>{
          return <div key={index}>
          {cardSymbol}
          </div>
        })
      
    }
    return <div className={styleClass}></div>
  }
  export default CardSymbols;
