import _ from 'underscore';

import Card from 'cards/card.js';

/*
// AMD module
define(['cards/card.js'], function DeckFactory(Card) {
  Card = Card.default;

  function Deck() {
    this.unShuffled = function unShuffled() {
      return _.chain(Card.ranksInImagesOrder)
          .map(function (rank) {
            return Card.suitsInImagesOrder.map(function (suit) {
              return {
                suit: suit,
                rank: rank
              };
            });
          })
          .flatten()
          .map(function (card) {
            return new Card(card);
          })
          .value();
    };

    this.shuffled = function shuffled() {
      return _.shuffle(this.unShuffled());
    };
  }
  return Deck;
});
*/

export function Deck() {
    this.unShuffled = function unShuffled() {
        return _.chain(Card.ranksInImagesOrder)
            .map(function (rank) {
                return Card.suitsInImagesOrder.map(function (suit) {
                    return {
                        suit: suit,
                        rank: rank
                    };
                });
            })
            .flatten()
            .map(function (card) {
                return new Card(card);
            })
            .value();
    };

    this.shuffled = function shuffled() {
        return _.shuffle(this.unShuffled());
    };
}