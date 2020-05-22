import styled from "styled-components";
interface Props {
  main: boolean;
}

export const Container = styled.main`
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  padding: ${(props: Props) => props.main ? "30px" : "23px"};
  background-color: ${(props: Props) => props.main ? "#9094EB" : "#fff"};
  color: ${(props: Props) => props.main ? "#fff" : "#494C60"};
  box-shadow: ${(props: Props) => props.main ? "#fff" :"#ddd"} 1px 1px 10px;
  @media screen and (max-width: 700px) {
    padding: 23px;
    margin: 5px;
  }
`;

export const Title = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin: 4px;
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 2em;
  font-weight: bold;
  margin: 8px;
  &::before {
    content: "$";
    font-size: 0.8em;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  & > div {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    margin: 10px;
    padding: 15px;
  }
`;

export const Storage = styled.div``;

export const UsersAllowed = styled.div``;

export const SendUp = styled.div``;

export const Button = styled.button`
  border-radius: 5px;
  outline: none;
  display: block;
  border: none;
  width: 100%;
  height: 40px;
  cursor: pointer;
  background-color: ${(props: Props) => props.main ? "#fff" : "#9094EB" };
  color: ${(props: Props) => props.main ? "#8786C6" : "#fff"};
  transition: all ease .3s;
  &:hover {
    color: ${(props: Props) => props.main ? "#fff" : "#8786c6"};
    border: 1px solid ${(props: Props) => props.main ? "#fff" : "#8786c6"};
    background-color: ${(props: Props) => props.main ? "#9094eb" : "#fff"};
  }
`;
