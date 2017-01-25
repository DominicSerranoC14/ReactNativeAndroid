'use strict';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray'
  },
  formTitle: {
    fontSize: 30,
    fontFamily: 'Times New Roman',
    color: 'black'
  },
  formDesc: {
    fontSize: 20,
    width: 300,
    margin: 10,
    color: 'black',
    textAlign: 'center'
  },
  formInput: {
    height: 40,
    width: 300,
    margin: 20,
    fontSize: 20,
    color: 'black'
  },
  formButton: {
    width: 300
  },

  searchContainer: {
    backgroundColor: 'lightgray'
  },
  searchHeaderView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom: 20
  },
  searchHeaderTitle: {
    fontSize: 30,
    fontFamily: 'Times New Roman', textAlign: 'center',
    marginLeft: 40,
    color: 'black'
  },
  movieContainer: {
    flexDirection: 'row',
    backgroundColor: 'gray', alignItems: 'center',
    padding: 10,
    marginTop: 15
  },
  movieImage: {
    width: 150,
    height: 175
  },
  movieTextView: {
    flex: 1
  },
  movieTitleText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Times New Roman', color: 'white'
  },
  movieYearText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Times New Roman', color: 'lightgray'
  }

});
