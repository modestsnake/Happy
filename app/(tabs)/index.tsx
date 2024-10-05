import { StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { Text, View } from '@/components/Themed';
import { Picker } from '@react-native-picker/picker'; 

const dishes = [
  { name: 'Spaghetti Carbonara', description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.', price: 109.99 },
  { name: 'Margherita Pizza', description: 'Fresh mozzarella, tomatoes, and basil on a traditional crust.', price: 120.99 },
  { name: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.', price: 79.99 },
  { name: 'Chicken Alfredo', description: 'Grilled chicken with creamy Alfredo sauce and fettuccine pasta.', price: 209.99 },
  { name: 'Vegetable Stir-Fry', description: 'Mixed vegetables stir-fried in a savory sauce, served with rice.', price: 119.99 },
  { name: 'Grilled Salmon', description: 'Fresh salmon fillet, grilled to perfection, served with vegetables.', price: 199.99 },
  { name: 'Beef Tacos', description: 'Soft tacos with seasoned beef, cheese, lettuce, and salsa.', price: 189.99 },
  { name: 'Chicken Parmesan', description: 'Breaded chicken breast topped with marinara and melted cheese.', price: 149.99 },
  { name: 'Eggplant Parmesan', description: 'Crispy eggplant with marinara sauce and melted mozzarella.', price: 129.99 },
];

const App = () => {
  const [selectedDish, setSelectedDish] = useState(dishes[0].name);
  const [quantities, setQuantities] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Breakfast"); 

  const handleQuantityChange = (dishName, quantity) => {
    const numQuantity = Math.max(0, parseInt(quantity) || 0);
    setQuantities(prevQuantities => {
      console.log("Updated quantities: ", { ...prevQuantities, [dishName]: numQuantity });
      return {
        ...prevQuantities,
        [dishName]: numQuantity,
      };
    });
  };

  const totalCost = Object.keys(quantities).reduce((sum, dishName) => {
    const dishInfo = dishes.find(dish => dish.name === dishName);
    return sum + (dishInfo ? dishInfo.price * quantities[dishName] : 0);
  }, 0);

  const filteredDishes = () => {
    switch (selectedCategory) {
      case "Breakfast":
        return dishes.slice(0, 3); 
      case "Lunch and Dinner":
        return dishes.slice(3, 6); 
      case "Drinks":
        return dishes.slice(6, 9); 
      default:
        return dishes;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="Breakfast" value="Breakfast" />
        <Picker.Item label="Lunch and Dinner" value="Lunch and Dinner" />
        <Picker.Item label="Drinks" value="Drinks" />
      </Picker>

      <RadioButton.Group onValueChange={value => setSelectedDish(value)} value={selectedDish}>
        {filteredDishes().map((dish) => (
          <View key={dish.name} style={styles.radioContainer}>
            <View style={styles.radioButtonRow}>
              <RadioButton value={dish.name} color="#f5c74c" />
              <Text style={styles.dishName}>{dish.name}</Text>
            </View>
            <View style={styles.dishDetails}>
              <Text style={styles.dishDescription}>{dish.description}</Text>
              <Text style={styles.dishPrice}>Price: R{dish.price.toFixed(2)}</Text>
              <TextInput
                style={styles.quantityInput}
                placeholder="Quantity"
                keyboardType="numeric"
                value={quantities[dish.name]?.toString() || ''}
                onChangeText={text => handleQuantityChange(dish.name, text)}
              />
            </View>
          </View>
        ))}
      </RadioButton.Group>
      <Text style={styles.selected}>Selected Dish: {selectedDish}</Text>
      <Text style={styles.selected}>Quantity: {quantities[selectedDish] || 0}</Text>
      <Text style={styles.totalCost}>Total Price: ${totalCost.toFixed(2)}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(120, 49, 49, 0.6)', 
  },
  selected: {
    marginTop: 20,
    color: '#FFFFFF', 
    fontSize: 20,
  },
  totalCost: {
    marginTop: 10,
    fontSize: 18, 
    color: '#FF0000',  // Change to red for visibility
    fontWeight: 'bold', 
  },
  radioContainer: {
    marginBottom: 20, 
  },
  radioButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#783131', 
    padding: 10,
  },
  dishName: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10, 
    flex: 1, 
  },
  dishDetails: {
    backgroundColor: '#783131',
    padding: 10,
  },
  dishDescription: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 5,
  },
  dishPrice: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 5,
  },
  quantityInput: {
    height: 40,
    borderColor: '#790000', 
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff', 
    color: '#000000', 
  },
  picker: {
    height: 50,
    width: 200,
    color: '#ffffff', 
    backgroundColor: '#783131', 
    marginBottom: 20, 
  },
});

export default App;
