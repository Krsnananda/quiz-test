import styled from "styled-components"
import CardStack, { Card } from 'react-native-card-stack-swiper'

export const Stack = styled(CardStack)`
  height: 70%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: red;
`
export const QuestionCard = styled(Card)`
  background-color: aliceblue;
  height: 500px;
  width: 300px;
  border-radius: 20px;
  align-items: center;
`