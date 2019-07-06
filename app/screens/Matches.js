import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text, StatusBar } from 'react-native';
import { liveMatches, upcomingMatches } from '../constants/matches';
import MatchView from '../components/match-view';

export default class Matches extends Component {
  state = {
    liveMatches: [],
    upcomingMatches: []
  }
  componentWillMount() {
    this.setState({ liveMatches, upcomingMatches });
  }
  _renderItem = ({item}) => (
    <MatchView
      id={item.id}
      {...item}
    />
  );
  _keyExtractor = (item) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', color: 'green' }}>Live Matches</Text>
        <FlatList
          data={this.state.liveMatches}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20
  }
});