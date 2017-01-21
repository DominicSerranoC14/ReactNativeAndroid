'use strict';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    color: 'black'
  },
  year: {
    textAlign: 'center',
    color: 'black'
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
