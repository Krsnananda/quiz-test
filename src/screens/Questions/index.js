import React, { useState, useEffect } from "react"
import { useNavigation, StackActions } from '@react-navigation/native'
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
  Section,
  ContainerAnswerButton,
  ContainerActions
} from "./styles"
/**
 * ========
 * Services
 * ========
 */
import api from "../../services/api"
import RegularButton from "../../components/RegularButton"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Questions({ route }) {
  const questions = route.params.questions
  const [swiping, setSwiping] = useState(null)
  const [list, setList] = useState([])
  const [activeQuestion, setActiveQuestion] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [corretAnswers, setCorrectAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [template, setTemplate] = useState([])
  const { navigate, dispatch } = useNavigation()
  const [isStored, setIsStored] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    api.get(`api.php?amount=${questions}&type=boolean`).then((res) => {
      setList(res.data.results)
      setIsLoading(false)
    }).catch((error) => console.log(error))

  }, [])

  const handleHours = (time) => {
    return time < 10 ? '0' + time : time
  }

  const storeDate = async (questions, answers) => {
    const today = new Date()
    const log = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()} - ${handleHours(today.getHours())}:${handleHours(today.getMinutes())}`

    const list = {
      game: [
        {
          quests: questions,
          date: log,
          answers: answers,
          correct: corretAnswers,
          wrong: wrongAnswers
        }
      ]
    }

    try {
      const value = await AsyncStorage.getItem('@Quiz:record')
      if (value !== null) {
        const oldRecords = JSON.parse(value)
        const updatedList = oldRecords.game.push({
          quests: questions,
          date: log,
          answers: answers,
          correct: corretAnswers,
          wrong: wrongAnswers
        })

        try {
          await AsyncStorage.setItem('@Quiz:record', JSON.stringify(oldRecords))
        } catch (error) {
          console.log(error)
        }

      } else {
        try {
          await AsyncStorage.setItem('@Quiz:record', JSON.stringify(list))
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

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
            <ContainerAnswerButton>
              <RegularButton
                handlePress={() => navigate('Answers', {
                  answers: template,
                  list: list
                })}
                title={'Answers'}
              />
            </ContainerAnswerButton>
            <ContainerActions>
              <ContainerButton>
                <IconButton
                  style={{ marginHorizontal: 60 }}
                  icon="reload"
                  color={Colors.cyan300}
                  size={50}
                  onPress={() => navigate('Selection')}
                />
                <IconButton
                  style={{ marginHorizontal: 60 }}
                  icon="archive"
                  color={Colors.blueGrey300}
                  size={50}
                  onPress={() => {
                    if (isStored == false) {
                      storeDate(list, template)
                      setIsStored(true)
                    }
                    const pushAction = StackActions.push('Records')
                    dispatch(pushAction)
                  }}
                />
              </ContainerButton>
            </ContainerActions>
          </>
        )}
      </Container>
    )
  )
}