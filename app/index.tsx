import { View, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import FlightOptionItem from '../components/FlightOptionItem';
import data from './data.json';
import { Flight } from '../components/FlightOptionItem';
import { searchFlights } from '../services/api';

interface SearchData {
  from: string;
  to: string;
  departDate: Date;
  returnDate: Date;
}

export default function TabOneScreen() {
  const [items, setItems] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);

  const onSearch = async (data: SearchData): Promise<void> => {
    setLoading(true);
    setItems([]);

    const response = await searchFlights(data);
    if (response.error) {
      Alert.alert(response.error);
    } else {
      setItems(response.data);
    }

    setLoading(false);
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