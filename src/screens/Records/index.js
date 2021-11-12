import React, { useEffect, useState } from "react"
import { decode } from "html-entities"
import { Text, ScrollView, View, ToastAndroid } from "react-native"
import { Container } from "../../shared/styles"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ActivityIndicator, Caption, Colors, Divider, Title } from "react-native-paper"
import { ButtonWrapper, ContainerRecord, DateRecord, TitleQuest } from './styles'
import RegularButton from './../../components/RegularButton'

export default function Records() {
  const [quests, setQuests] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    async function getData() {
      try {
        const value = await AsyncStorage.getItem('@Quiz:record')
        if (value !== null) {
          const list = JSON.parse(value)
          console.log(value, '------')
          setQuests(list)
        } else {
          setIsEmpty(true)
        }
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getData()

  }, [])

  const clearData = async () => {
    try {
      await AsyncStorage.removeItem('@Quiz:record')
      ToastAndroid.show('Successfully cleared!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    isLoading ? (
      <Container>
        <ActivityIndicator color={Colors.cyan200} size={'large'} />
      </Container>
    ) : (
      <Container>
        {isEmpty ? (
          <Title>Still no records!</Title>
        ) : (
          <>
            <ContainerRecord>
              {(quests && quests.game) && (quests.game.map((item, index) => (
                <View key={index}>
                  <DateRecord>{item.date}</DateRecord>
                  {item.quests.map((unique, i) => (
                    <View key={i}>
                      <TitleQuest>{decode(unique.question)}</TitleQuest>
                      <Caption>Correct answer: {unique.correct_answer} </Caption>
                      <Caption>Player: {(unique.answers && unique.answers[i].quest == i.toString()) && unique.answers[i].answer} </Caption>
                      <Divider />
                    </View>
                  ))}
                </View>
              )))}
            </ContainerRecord>
            <ButtonWrapper>
              <RegularButton title={'Clear Records'} handlePress={() => clearData()} />
            </ButtonWrapper>
          </>
        )}
      </Container>
    )
  )
}