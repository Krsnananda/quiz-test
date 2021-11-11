import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, TitleBox } from './styles'

const index = ({ handlePress, title, type }) => {
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <Box type={type} style={{ elevation: 4 }}>
        <TitleBox>{title}</TitleBox>
      </Box>
    </TouchableOpacity>
  )
}

export default index