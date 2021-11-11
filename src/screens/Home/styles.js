import styled from "styled-components"
import { Caption } from 'react-native-paper';
import { Dimensions } from "react-native";

const height = Dimensions.get('screen').height

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`
export const Wrapper = styled.View`
  align-items: center;
`
export const WrapperSelector = styled.View`
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`
export const SelectedValue = styled(Caption)`
  font-size: 20px;
`
export const Submit = styled.TouchableOpacity`
  border-radius: 50px;
  width: 50%;
  background-color: #3297ab;
  margin-bottom: 30px;
  height: 60px;
  align-items: center;
  justify-content: center;
`
export const TitleButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`