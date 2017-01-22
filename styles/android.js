'use strict';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 5
  },
  thumbnail: {
    width: 100,
    height:200,
    marginLeft: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white'
  },
  year: {
    textAlign: 'center',
    color: 'white'
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
