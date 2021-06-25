import Head from 'next/head'
import Image from 'next/image'
import Deck from '../components/deck/Deck';
import {Deck as DeckLibrary} from '../lib/deck';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const tableQuery = gql`
query {
  table{
    number,
    symbol
  }
}
`;

const getCardsQuery = gql`
query {
  getCards(cards: 2){
    number,
    symbol
  }
}
`;

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

  const tableData = await client.query({
    query: tableQuery
  });
  const handData = await client.query({
    query: getCardsQuery,
    variables: {
      cards: 2
    },
    fetchPolicy: 'no-cache'
  });
  return {
    props: {
      title: 'Poker.js',
      table: tableData.data.table,
      hand: handData.data.getCards
    }// will be passed to the page component as props
  }
}