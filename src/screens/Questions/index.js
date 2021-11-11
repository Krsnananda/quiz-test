import React, { useState, useEffect } from "react"
import { decode } from "html-entities"
/**
 * ========
 * Components
 * ========
 */
import { Text } from "react-native"
import Loading from './../../components/Loading'
/**
 * ========
 * Styles
 * ========
 */
import { Container } from "../../shared/styles"
import { Stack, QuestionCard } from "./styles"
/**
 * ========
 * Services
 * ========
 */
import api from "../../services/api"



export default function Questions({ route }) {
  const questions = route.params.questions
  const [swiping, setSwiping] = useState(null)
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    api.get(`api.php?amount=${questions}&category=11&type=boolean`).then((res) => {
      console.log(res.data)
      setList(res.data.results)
      setIsLoading(false)
    }).catch((error) => console.log(error))

  }, [])

  return (
    isLoading ? (
      <Loading />
    ) : (
      <Container>
        <Stack ref={swiper => setSwiping(swiper)}>
          {list.map((item, index) => (
            <QuestionCard key={index}><Text>{decode(item.question)}</Text></QuestionCard>
          ))}
        </Stack>
      </Container>
    )
  )
}