import styled from "styled-components"
import { Colors } from "react-native-paper"
import CardStack, { Card } from 'react-native-card-stack-swiper'

export const Stack = styled(CardStack)`
  height: 60%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`
export const QuestionCard = styled(Card)`
  background-color: ${Colors.cyan100};
  height: 300px;
  width: 300px;
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
  align-items: center;
`
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`
export const ContainerButton = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`