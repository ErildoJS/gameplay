import React from 'react'
import { StyleSheet, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Profile } from '../components/Profile'


export function Home() {
  return (
   <View >
     <View style={styles.header}>
       <Profile />
     </View>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  
})