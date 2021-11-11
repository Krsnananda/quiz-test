import React, { useState } from 'react'
import { ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { IconButton, Colors } from 'react-native-paper'
import CircleSizeSelector from 'react-native-circle-size-selector'

import RegularButton from '../../components/RegularButton'
import { Container } from '../../shared/styles'
import { Helper, SelectedValue, Wrapper, WrapperSelector } from './styles'

export default function Selection() {
  const { navigate } = useNavigation()
  const [value, setValue] = useState(1)
  const [selected, setSelected] = useState(1)

  return (
    <Container>
      <Helper>
        <IconButton icon="help-circle" color={Colors.cyan100} size={35} onPress={() => {
          ToastAndroid.showWithGravity(
            'Press and drag the circle to select the number of questions',
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
            onSelected={(item) => setSelected(item)}
          >
            <SelectedValue> {value} </SelectedValue>
          </CircleSizeSelector>
        </WrapperSelector>
        <RegularButton title={'Select'} handlePress={() => {
          navigate('Confirmation', {
            quantity: selected
          })
        }} />
      </Wrapper>
    </Container>
  )
}