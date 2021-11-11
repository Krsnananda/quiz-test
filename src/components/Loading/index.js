import React from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper'
import { Container } from '../../shared/styles'

const index = () => {
  return (
    <Container>
      <ActivityIndicator animating={true} color={Colors.cyan100} size={"large"} />
    </Container>
  )
}

export default index