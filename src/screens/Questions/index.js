import React, { useState, useEffect } from "react"
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
/**
 * ========
 * Components
 * ========
 */
import { IconButton, Colors, Subheading, Headline, List } from "react-native-paper"
import { decode } from "html-entities"
import Loading from './../../components/Loading'
/**
 * ========
 * Styles
 * ========
 */
import { Container } from "../../shared/styles"
import {
  Stack,
  QuestionCard,
  Title,
  ContainerButton,
  ScoreBlock,
  ScoreTitle,
  Description,
  Section
} from "./styles"
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
  const [activeQuestion, setActiveQuestion] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [corretAnswers, setCorrectAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [template, setTemplate] = useState([])
  const [report, setReport] = useState([])
  const { navigate } = useNavigation()

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
        {activeQuestion <= list.length ? (
          <>
            <Subheading>{`${activeQuestion}/${list.length}`}</Subheading>
            <Headline>Score: {corretAnswers}</Headline>
            <Stack
              ref={swiper => setSwiping(swiper)}
              disableTopSwipe
              disableBottomSwipe
              duration={500}
              onSwiped={(item) => setActiveQuestion(item + 2)}
              onSwipedLeft={(index) => {
                list[index].correct_answer == 'True' ? setCorrectAnswers(corretAnswers + 1) : setWrongAnswers(wrongAnswers + 1)
                template.push({ quest: index, answer: 'True' })
              }}
              onSwipedRight={(index) => {
                list[index].correct_answer == 'False' ? setCorrectAnswers(corretAnswers + 1) : setWrongAnswers(wrongAnswers + 1)
                template.push({ quest: index, answer: 'False' })
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
          </>
        ) : (
          <>
            <ScoreBlock>
              <ScoreTitle>Total Score</ScoreTitle>
              <Section>
                <List.Item
                  style={{ width: '50%' }}
                  title={<Description>{corretAnswers}</Description>}
                  left={() => <List.Icon color={Colors.green200} icon="check" />}
                />
                <List.Item
                  style={{ width: '50%' }}
                  title={<Description>{wrongAnswers}</Description>}
                  left={() => <List.Icon color={Colors.red200} icon="close" />}
                />
              </Section>
            </ScoreBlock>
            <Button
              onPress={() => navigate('Answers', {
                answers: template,
                list: list
              })}
              title={'teste'}
            />
          </>
        )}
      </Container>
    )
  )
}