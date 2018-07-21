import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

// File Imports
import EventList from './EventList';
import EventForm from './EventForm';

export default createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: "Your Events",
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: "Add an Event",
    })
  },
});
