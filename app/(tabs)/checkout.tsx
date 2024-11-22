import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CheckoutScreen = () => {
  const totalCost = 350.0;  // Example total cost

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.subTitle}>Total Price: ${totalCost.toFixed(2)}</Text>
      <Text>Items:</Text>
      {/* Display the list of items selected in the cart */}
      <Text style={styles.cartItem}>Dish 1 - Quantity: 2</Text>
      <Text style={styles.cartItem}>Dish 2 - Quantity: 1</Text>
      <Button title="Proceed to Payment" onPress={() => console.log('Proceeding to payment')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subTitle: { fontSize: 18, marginVertical: 10 },
  cartItem: { fontSize: 16, marginVertical: 5 },
});

export default CheckoutScreen;
