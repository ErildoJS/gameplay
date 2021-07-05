import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { theme } from '../global/styles/theme'
import { Avatar } from './Avatar'

export function Profile() {
  return (
    <View style={styles.container}>

      <Avatar urlImage="https://github.com/ErildoJS.png"/>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>OlaDINho</Text>

          <Text style={styles.username}>erildo</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitoria</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    flexDirection: 'row'
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6,
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight

  }
})