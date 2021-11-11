import React from 'react'
import { ButtonText, RegularButton } from './styles'


const index = ({ handlePress, title }) => {
  return (
    <RegularButton onPress={() => {
      handlePress()
    }}>
      <ButtonText>{title}</ButtonText>
    </RegularButton>
  )
}

export default index