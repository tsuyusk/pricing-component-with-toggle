import React, { useState } from 'react';
import Switch from "./Switch";
import { Header, Title, Row, Text } from "./styled";

interface Props {
  handleChange: () => void;
}

const HeaderScreen: React.FC<Props> = ({handleChange}) => {
  const [checked, setChecked] = useState(true);
  const onChange = () => {
    setChecked(!checked);
    handleChange();
  }
  return (
    <Header>
      <Title>Our pricing</Title>
      <Row>
        <Text>Anually</Text>
        <Switch onChange={onChange} checked={checked} />
        <Text>Mensally</Text>
      </Row>
    </Header>
  );
}

export default HeaderScreen;
