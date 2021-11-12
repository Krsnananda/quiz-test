import styled from "styled-components"

export const RegularButton = styled.TouchableOpacity`
  background-color: ${(props) => props.outlined ? 'transparent' : '#16ab90'};
  border-radius: 50px;
  padding: 15px 0 15px 0;
  width: 300px;
  border-color: ${(props) => props.outlined ? '#16ab90' : 'transparent'};
  border-width: 2px;
  align-items: center;
  margin-top: 5px;
`
export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.outlined ? '#16ab90' : '#fff'};
`
