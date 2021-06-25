// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {Deck} from '../../../lib/deck.js';

const deck = new Deck()
export default function handler(req, res) {
    const hand = deck.dispatchCards(req.query.quantity)
    res.status(200).json(hand);
    console.log(req.query.quantity)
  }
  