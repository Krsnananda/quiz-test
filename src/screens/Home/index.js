import React from 'react'
import { useNavigation } from '@react-navigation/native'
/**
 * =======
 * Components
 * =======
 */
import Logo from '../../components/Logo'
import RegularButton from '../../components/RegularButton'
/**
 * =======
 * Styles
 * =======
 */
import { Container } from './styles'

const Home = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Logo />
      <RegularButton title={'Enter'} handlePress={() => navigate('Selection')} />
    </Container>
  )
}

export default Home