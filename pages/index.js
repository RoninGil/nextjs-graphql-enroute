import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Deck from '../components/deck/Deck';
import {Deck as DeckLibrary} from '../lib/deck';

export default function Home({ table, hand }) {
  return (<div className="App">
      <header className="App-header">
        <Deck title="table" cards={table} flipped="2"/>
        <Deck title = "hands" cards={hand} flipped="2"/>
      </header>
      
    </div>
  )
}

export async function getServerSideProps(context) {
  const deck = new DeckLibrary();
  const hand = deck.dispatchCards(2);
  const table = deck.dispatchCards(5);
  return {
    props: {
      title: 'Poker.js',
      table,
      hand
    }// will be passed to the page component as props
  }
}