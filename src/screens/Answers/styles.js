import styled from "styled-components"
import { Dimensions } from "react-native"

export const QuestionList = styled.ScrollView`
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
  margin-top: 20px;
`
export const QuestionWrapper = styled.View`
  height: 90%;
`
export const Item = styled.View`
  width: ${Dimensions.get('screen').width - 35}px;
  margin: 10px 0;
  padding: 0 10px;
`
export const Description = styled.Text`
  font-size: 20px;
  flex-wrap: wrap;
`