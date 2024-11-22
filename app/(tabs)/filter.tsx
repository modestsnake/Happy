import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FilterMenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu by Category</Text>
      <Button title="Breakfast" onPress={() => console.log('Filter Breakfast')} />
      <Button title="Lunch and Dinner" onPress={() => console.log('Filter Lunch and Dinner')} />
      <Button title="Drinks" onPress={() => console.log('Filter Drinks')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
});

export default FilterMenuScreen;
