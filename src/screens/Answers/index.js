import React from "react"
/**
 * ========
 * Styles
 * ========
 */
import { Container } from "../../shared/styles"
import { Description, Item, QuestionList, QuestionWrapper } from "./styles"
/**
 * ========
 * Components
 * ========
 */
import { List, Caption } from "react-native-paper"
/**
 * ========
 * Utils
 * ========
 */
import { decode } from "html-entities"

export default function Answers({ route }) {
  const answers = route.params.answers
  const list = route.params.list

  return (
    <Container>
      <QuestionWrapper>
        <QuestionList>
          <List.Section>
            {list.map((item, index) => (
              <Item key={index}>
                <Description>{decode(item.question)}</Description>
                <Caption>Right answer: {item.correct_answer}</Caption>
                {answers.map((unique, i) => (
                  <Caption key={i} >{unique.quest == index && unique.answer}</Caption>
                ))}
              </Item>
            ))}
          </List.Section>
        </QuestionList>
      </QuestionWrapper>
    </Container>
  )
}