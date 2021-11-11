import React, { useState, useEffect } from "react"
import { Text } from "react-native"
import { Container } from "../../shared/styles"
import api from "../../services/api"

import { Stack, QuestionCard } from "./styles"

export default function Questions({ route }) {
  const questions = route.params.questions
  const [swiping, setSwiping] = useState(null)

  useEffect(() => {
    api.get(`api.php?amount=${questions}&category=11&type=boolean`).then((res) => {
      console.log(res.data)
    }).catch((error) => console.log(error))

  }, [])

  return (
    <Container>
      <Stack ref={swiper => setSwiping(swiper)}>
        <QuestionCard><Text>A</Text></QuestionCard>
        <QuestionCard><Text>B</Text></QuestionCard>
        <QuestionCard><Text>C</Text></QuestionCard>
      </Stack>
    </Container>
  )
}