import React from 'react'
import { ButtonText, RegularButton } from './styles'


const index = ({ handlePress, title, disabled }) => {
  return (
    <RegularButton disabled={disabled} onPress={() => {
      handlePress()
    }}>
      <ButtonText>{title}</ButtonText>
    </RegularButton>
  )
}

export default index