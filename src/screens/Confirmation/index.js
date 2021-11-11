import React from "react"
import Surfaces from './../../components/Surfaces'
/**
 * =======
 * Styles
 * =======
 */
import { Container } from "../../shared/styles"
import { Box, Title } from "./styles";

export default function Confirmation() {
  return (
    <Container>
      <Title>Are you ready?</Title>
      <Surfaces title={'Start'} type={'start'} handlePress={() => console.log('sss')} />
      <Surfaces title={'Cancel'} type={'cancel'} handlePress={() => console.log('sss')} />
    </Container>
  )
}
