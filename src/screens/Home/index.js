import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import RegularButton from '../../components/RegularButton'

import Logo from '../../components/Logo'
import { Container } from './styles'

const Home = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Logo />
      <RegularButton title={'Iniciar'} handlePress={() => navigate('Selection')} />
    </Container>
  )
}

export default Home