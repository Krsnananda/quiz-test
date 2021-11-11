import React from 'react'
import { Image } from 'react-native'

import { LogoImage } from './styles'
import logoIcon from './../../assets/quiz.png'

export default function Logo() {
  return <LogoImage source={logoIcon} style={{ resizeMode: 'contain' }} />
}