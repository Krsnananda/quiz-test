import React, { useState, useEffect } from "react"
/**
 * ========
 * Components
 * ========
 */
import { IconButton, Colors, Subheading, Caption, Badge, Chip, Headline } from "react-native-paper"
import { decode } from "html-entities"
import Loading from './../../components/Loading'
/**
 * ========
 * Styles
 * ========
 */
import { Container } from "../../shared/styles"
import { Stack, QuestionCard, Title, ContainerButton } from "./styles"
/**
 * ========
 * Services
 * ========
 */
import api from "../../services/api"
import { Text } from "react-native"

export default function Questions({ route }) {
  const questions = route.params.questions
  const [swiping, setSwiping] = useState(null)
  const [list, setList] = useState([])
  const [activeQuestion, setActiveQuestion] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [corretAnswers, setCorrectAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [report, setReport] = useState([])

  useEffect(() => {
    setIsLoading(true)

    api.get(`api.php?amount=${questions}&category=11&type=boolean`).then((res) => {
      console.log('========')
      console.log(res.data)
      console.log('========')
      setList(res.data.results)
      setIsLoading(false)
    }).catch((error) => console.log(error))

  }, [])

  return (
    isLoading ? (
      <Loading />
    ) : (
      <Container>
        {activeQuestion <= list.length && (
          <>
            <Subheading>{`${activeQuestion}/${list.length}`}</Subheading>
            <Headline>Score: {corretAnswers}</Headline>
          </>
        )}

        <Stack
          ref={swiper => setSwiping(swiper)}
          disableTopSwipe
          disableBottomSwipe
          onSwiped={(item) => setActiveQuestion(item + 2)}
          onSwipedLeft={(index) => {
            list[index].correct_answer == 'True' ? setCorrectAnswers(corretAnswers + 1) : setWrongAnswers(wrongAnswers + 1)
          }}
          onSwipedRight={(index) => {
            list[index].correct_answer == 'False' ? setCorrectAnswers(corretAnswers + 1) : setWrongAnswers(wrongAnswers + 1)
          }}
        >
          {list.map((item, index) => (
            <QuestionCard key={index}>
              <Title>{decode(item.question)}</Title>
            </QuestionCard>
          ))}
        </Stack>
        <ContainerButton>
          <IconButton icon="check-circle" color={Colors.green200} size={100} onPress={() => swiping.swipeLeft()} />
          <IconButton icon="close-circle" color={Colors.red200} size={100} onPress={() => swiping.swipeRight()} />
        </ContainerButton>
      </Container>
    )
  )
}