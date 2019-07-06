import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MatchView extends Component {
  render() {
    const { id, team1, team2, toss, teamBattingFirst, team1Score, team2Score, overs, venue, matchType, date } = this.props;
    return(
      <View key={id} style={styles.rowContainer}>
        <View style={styles.rowText}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode ={'tail'}>
            {matchType} {team1} vs {team2}
          </Text>
          <Text style={styles.score} numberOfLines={1} ellipsizeMode ={'tail'}>
            Toss:- {toss}
          </Text>
          <Text style={styles.score} numberOfLines={1} ellipsizeMode ={'tail'}>
            {team1} {team1Score} in {overs} overs
          </Text>
          <Text style={styles.score} numberOfLines={1} ellipsizeMode ={'tail'}>
            {team2} {team2Score}
          </Text>
        </View>
      </View>
    );    
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  score: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
  });