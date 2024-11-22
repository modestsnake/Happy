import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const averagePrice = 100.0;  // Example average price calculation (can be dynamic)

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.subTitle}>Average Price: ${averagePrice}</Text>
      {/* Display Menu Items */}
      {/* Implement your menu display logic here */}
      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuItem')} />
      <Button title="Filter Menu" onPress={() => navigation.navigate('FilterMenu')} />
      <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subTitle: { fontSize: 18, marginVertical: 10 },
});

export default HomeScreen;
