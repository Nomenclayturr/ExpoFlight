import { View, StyleSheet } from 'react-native';
import SearchForm from '../components/SearchForm';
import React, { useState } from 'react';
import FlightOptionItem from '../components/FlightOptionItem';
import data from './data.json';

export default function IndexScreen() {
  const onSearch = async (data: { from: string; to: string }) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <SearchForm onSearch={onSearch} />
      <FlightOptionItem flight={data[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});