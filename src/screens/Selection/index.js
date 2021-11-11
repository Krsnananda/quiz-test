import React, { useState } from 'react'
import { ToastAndroid } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import CircleSizeSelector from 'react-native-circle-size-selector'

import RegularButton from '../../components/RegularButton'
import { Container, Helper, SelectedValue, Wrapper, WrapperSelector } from './styles'

export default function Selection() {
  const [value, setValue] = useState(1)

  return (
    <Container>
      <Helper>
        <IconButton icon="help-circle" color={Colors.cyan100} size={35} onPress={() => {
          ToastAndroid.showWithGravity(
            'Pressione e arraste o círculo para selecionar a quantidade de perguntas',
            ToastAndroid.LONG,
            ToastAndroid.CENTER
          )
        }} />
      </Helper>
      <Wrapper>
        <WrapperSelector>
          <CircleSizeSelector
            minValue={1}
            maxValue={20}
            initialValue={1}
            onChange={(item) => setValue(item)}
          >
            <SelectedValue> {value} </SelectedValue>
          </CircleSizeSelector>
        </WrapperSelector>
        <RegularButton title={'Selecionar'} handlePress={() => console.log('ee')} />
      </Wrapper>
    </Container>
  )
}