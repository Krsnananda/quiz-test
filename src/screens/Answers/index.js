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
import { List, Caption, Divider, Colors } from "react-native-paper"
/**
 * ========
 * Utils
 * ========
 */
import { decode } from "html-entities"
import { View } from "react-native"

export default function Answers({ route }) {
  const answers = route.params.answers
  const list = route.params.list

  return (
    <Container>
      <QuestionWrapper>
        <QuestionList>
          <List.Section>
            {list.map((item, index) => (
              <View key={index}>
                <Item>
                  <Description>{decode(item.question)}</Description>
                  <Caption>Right answer: {item.correct_answer}</Caption>
                  {answers.map((unique, i) => (
                    unique.quest == index && (
                      <Caption key={i} style={{ color: unique.answer == 'True' ? Colors.green200 : Colors.red200 }}>
                        {'Player: ' + unique.answer}
                      </Caption>
                    )
                  ))}
                </Item>
                <Divider />
              </View>
            ))}
          </List.Section>
        </QuestionList>
      </QuestionWrapper>
    </Container>
  )
}