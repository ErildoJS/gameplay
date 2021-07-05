import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image, TouchableOpacityProps } from 'react-native'
import DiscordImg from '../assets/discord.png'
import { theme } from '../global/styles/theme'
import {LinearGradient} from 'expo-linear-gradient'
import { ReactNode } from 'react'
type Props = TouchableOpacityProps & {
  children: ReactNode
}

export function Background({children}: Props) {
  const {secondary80, secondary100} = theme.colors; {/**100 comeca em cima, 80 termina em baixo */}
  return (
    <LinearGradient style={styles.container}
     colors={[secondary80, secondary100]}
     >
      {children}
    </LinearGradient>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})