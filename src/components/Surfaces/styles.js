import styled from "styled-components"
import { Surface } from "react-native-paper"

export const Box = styled(Surface)`
  padding: 8px;
  height: 120px;
  width: 120px;
  background-color: ${(props) => props.type == 'start' ? '#baebb5' : '#ebb5b5'};
  margin-bottom: 30px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`
export const TitleBox = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`