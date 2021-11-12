import React from 'react'
import { ButtonText, RegularButton } from './styles'


const index = ({ handlePress, title, disabled, outlined }) => {
  return (
    <RegularButton disabled={disabled} outlined={outlined} onPress={() => {
      handlePress()
    }}>
      <ButtonText outlined={outlined}>{title}</ButtonText>
    </RegularButton>
  )
}

export default index