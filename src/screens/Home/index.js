import React, { useState } from 'react'
import CircleSizeSelector from 'react-native-circle-size-selector'
import { Title } from 'react-native-paper'

import { Container, WrapperSelector, SelectedValue, Wrapper, Submit, TitleButton } from './styles'

const Home = () => {
  const [value, setValue] = useState(3)

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

export default Home