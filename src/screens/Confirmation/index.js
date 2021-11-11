import React from "react"
import { useNavigation } from '@react-navigation/native'
import Surfaces from './../../components/Surfaces'
/**
 * =======
 * Styles
 * =======
 */
import { Container } from "../../shared/styles"
import { Title } from "./styles";

export default function Confirmation({ route }) {
  const { goBack, navigate } = useNavigation()
  const questions = route.params.quantity

  return (
    <Container>
      <Title>Are you ready?</Title>
      <Surfaces title={'Start'} type={'start'} handlePress={() => {
        navigate('Questions', {
          questions: questions
        })
      }} />
      <Surfaces title={'Cancel'} type={'cancel'} handlePress={() => goBack()} />
    </Container>
  )
}
