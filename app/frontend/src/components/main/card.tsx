import React from "react";
import { Item, Title, Price, Details, Storage, UsersAllowed, SendUp, Button }  from "./styled";

export interface ICard {
  main: boolean;
  title: string;
  prices: number[];
  storage: string;
  users: number;
  sendUp: number;
}

interface Props {
  card: ICard;
  priceIndex: number;
}

const Card: React.FC<Props> = ({card: {main, title, prices, storage, users, sendUp}, priceIndex}) => {
  return (
    <Item main={main}>
      <Title>{title}</Title>
      <Price>{prices[priceIndex].toLocaleString("en")}</Price>
      <Details>
        <Storage>{storage} Storage</Storage>
        <UsersAllowed>{users} Users Allowed</UsersAllowed>
        <SendUp>Send up to {sendUp} gb</SendUp>
      </Details>
      <Button main={main}>Learn more</Button>
    </Item>
  )
}

export default Card;
