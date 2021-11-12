import styled from "styled-components"
import { Colors, Surface, List } from "react-native-paper"
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
`
export const Description = styled.Text`
  font-size: 20px;
  flex-wrap: wrap;
`
export const ScoreBlock = styled(Surface)`
  width: 90%; 
  align-items: center; 
  justify-content: center; 
  padding: 20px;
  border-radius: 20px;
  height: 150px;
`
export const ScoreTitle = styled.Text`
  align-self: center;
  font-size: 20px; 
  font-weight: bold;
`
export const Section = styled(List.Section)`
  flex-direction: row;
  align-self: center;
`
export const ContainerAnswerButton = styled.View`
  margin-top: 30%;
`
export const ContainerActions = styled.View`
  margin-top: 60%;
`