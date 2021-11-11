import styled from "styled-components"
import { Caption } from 'react-native-paper';

export const Wrapper = styled.View`
  align-items: center;
`
export const WrapperSelector = styled.View`
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
`
export const SelectedValue = styled(Caption)`
  font-size: 20px;
`
export const Helper = styled.View`
  align-self: flex-end;
  margin: 0 10% 20% 0;
`