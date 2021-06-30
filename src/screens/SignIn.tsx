import React from 'react'
import {Text, View, Image, StyleSheet } from 'react-native'
import IllustrationImg from '../assets/illustration.png'
export function SignIn() {
  return (
    <View style={styles.container}>

      <Image source={IllustrationImg} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus jogos games {`\n`}
           favoritos com seus amigos
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})