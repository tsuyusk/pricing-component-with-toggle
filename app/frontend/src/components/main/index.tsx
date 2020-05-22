import React from 'react';
import Card, { ICard } from "./card";
import { Container } from "./styled";

interface Props {
  cards: ICard[];
  priceIndex: number;
}

const Cards: React.FC<Props> = ({cards, priceIndex}) => {
  return (
    <Container>
      {cards.map((card, index) => <Card key={index} card={card} priceIndex={priceIndex}/>)}
    </Container>
  );
}

export default Cards;
