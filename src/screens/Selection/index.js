import React, { useState } from 'react'
import CircleSizeSelector from 'react-native-circle-size-selector'
import { Container, SelectedValue, Submit, TitleButton, Wrapper, WrapperSelector } from './styles'


export default function Selection() {
  const [value, setValue] = useState(0)

  return (
    <Container>
      <Wrapper>
        <WrapperSelector>
          <CircleSizeSelector
            minValue={1}
            maxValue={50}
            initialValue={3}
            onChange={(item) => setValue(item)}
          >
            <SelectedValue> {value} </SelectedValue>
          </CircleSizeSelector>
        </WrapperSelector>
        <Submit>
          <TitleButton>Selecionar</TitleButton>
        </Submit>
      </Wrapper>
    </Container>
  )
}