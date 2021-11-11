import React from "react"
import { Text } from "react-native"
import { Container } from "../../shared/styles"

export default function Questions({ route }) {
  const questions = route.params.questions

  return (
    <Container>
      <Text>{questions}</Text>
    </Container>
  )
}