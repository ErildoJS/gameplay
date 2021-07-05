import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { theme } from '../global/styles/theme'

type Props = {
  urlImage: string
}


export function Avatar({urlImage}: Props) {
  const {secondary50, secondary70} = theme.colors; {/**100 comeca em cima, 80 termina em baixo */}

  return (
      <LinearGradient style={styles.container}
     colors={[secondary50, secondary70]}
     >
      <Image source={{uri: urlImage}} style={styles.avatar}/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 49,
    height: 49,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 22
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 8,
  },
  
})