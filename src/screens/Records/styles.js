import { List } from "react-native-paper"
import styled from "styled-components"

export const ContainerRecord = styled.ScrollView`
  width: 90%;
  background-color: #fff;
  margin: 15px;
  padding: 20px;
  border-radius: 10px;
`
export const DateRecord = styled.Text`
  font-size: 18px;
  font-weight: bold;
`
export const TitleQuest = styled.Text`
  font-size: 16px;
  margin: 15px 0;
`
export const ButtonWrapper = styled.View`
  margin: 15px 0 30px 0;
`
export const Section = styled(List.Section)`
  flex-direction: row;
  align-self: center;
`
export const Description = styled.Text`
  font-size: 20px;
  flex-wrap: wrap;
`