import React from 'react'
import { Image } from 'react-native'

import { LogoIcon } from './styles'
import logo from './../../assets/quiz.png'

export default function Logo() {
  return <LogoIcon source={logo} style={{ resizeMode: 'contain' }} />
}