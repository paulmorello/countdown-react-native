import React, { Component } from 'react';
import {
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import ActionButton from 'react-native-action-button';
import { getEvents } from './api';

// File Imports
import EventCard from './EventCard';

// Styles
const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3'
  },
});

class EventList extends Component {
  state = {
    events: []
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    this.props.navigation.addListener(
      'didFocus',
      () => {
        getEvents().then(events => this.setState({ events }));
      }
    );
  }


  handleAddEvent = () => {
    this.props.navigation.navigate('form');
  }


  render () {
    return [
      <FlatList
        key='flatlist'
        style={styles.list}
        data={this.state.events}
        keyExtractor={ item => item.id }
        renderItem={({ item }) => (
          <EventCard
            event={ item }
          />
        )}
      />,

      <ActionButton
        key='fab'
        onPress={this.handleAddEvent}
        buttonColor="rgba(231, 76, 60, 1)"
      />
    ];
  }
}

export default EventList;
