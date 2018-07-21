import React, { Component } from 'react';
import {
  FlatList,
  Text,
  StyleSheet
} from 'react-native';

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
    setInterval( () => {
      this.setState({
        events: this.state.events.map(e => ({
          ...e,
          timer: Date.now(),
        })),
      });
    }, 1000)

    const events = require('./db.json').events.map( e => ({
      ...e,
      date: new Date(e.date),
    }));
    this.setState({ events });
  }


  render () {
    return (
      <FlatList
        style={styles.list}
        data={this.state.events}
        keyExtractor={ item => item.id }
        renderItem={({ item }) => (
          <EventCard
            event={ item } 
          />
        )}
      />
    );
  }
}

export default EventList;
