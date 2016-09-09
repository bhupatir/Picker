import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'
import Router from './components/PickerExample'

class Picker extends Component {
   render() {
      return (
         <Picker />
      )
   }
}

AppRegistry.registerComponent('Picker', () => Picker)
