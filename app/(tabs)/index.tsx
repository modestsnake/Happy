import { StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { Text, View } from '@/components/Themed';
import { Picker } from '@react-native-picker/picker'; 

const dishes = [
  { name: 'Fishfingers With Zesty Dip', description: 'Crispy fish fingers paired with zesty tomato sauce for a satifying meal in the morning.', price: 109.99 },
  { name: 'Chicken and Veggie Bowl', description: 'Tender chickn strips served with boiled egg, crispy fried onions and chopped carrots for a wholesome meal.', price: 120.99 },
  { name: 'Chocolate Pancakes', description: 'Flutty chocolate with a choice of whipped cream or berries.', price: 79.99 },
  { name: 'Classic Chicken Burger', description: 'Seasoned petty served on a toasted bun, topped with crisp lettuce and onions.', price: 109.99 },
  { name: 'Heaty Lasagna', description: 'Layers of rich meat sauce and tender pasta baked to perfection with metled cheese.', price: 119.99 },
  { name: 'Garden Veggie Pizza', description: 'Crispy crust topped with a colourful meldey of fresh vegetables and zesty sauce.', price: 199.99 },
  { name: 'Tropical Breeze', description: 'Refreshing cocktail of zety lemon or blueberries.', price: 79.99 },
  { name: 'Berry Bliss', description: 'Cocktail mixed berries and sparkling water served with ice and garnished with fresh berries.', price: 69.99 },
  { name: 'Guava Sunrise', description: 'Smooth tropical drink bursting with sweet guava flavour.', price: 59.99 },
];

const App = () => {
  const [selectedDish, setSelectedDish] = useState(dishes[0].name);
  const [quantities, setQuantities] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Breakfast"); 

  const handleQuantityChange = (dishName, quantity) => {
    const numQuantity = Math.max(0, parseInt(quantity) || 0);
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [dishName]: numQuantity,
    }));
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
        {filteredDishes().map((dish, index) => (
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
            {index === 0 && selectedCategory === "Breakfast" && (
              <Image 
                source={require('C:/Users/lab_services_student/Desktop/Mobile App Part 2/Happy/assets/images/break1.jpeg')} 
                style={styles.image} 
              />
            )}
            {index === 1 && selectedCategory === "Breakfast" && (
              <Image 
                source={require('C:/Users/lab_services_student/Desktop/Mobile App Part 2/Happy/assets/images/break2.jpeg')} 
                style={styles.image} 
              />
            )}
            {index === 2 && selectedCategory === "Breakfast" && (
              <Image 
                source={require('C:/Users/lab_services_student/Desktop/Mobile App Part 2/Happy/assets/images/break3.jpeg')} 
                style={styles.image} 
              />
            )}
            {index === 0 && selectedCategory === "Lunch and Dinner" && (
              <Image 
                source={require('C:/Users/lab_services_student/Desktop/Mobile App Part 2/Happy/assets/images/break4.jpeg')} 
                style={styles.image} 
              />
            )}
            {index === 1 && selectedCategory === "Lunch and Dinner" && (
              <Image 
                source={require('C:/Users/lab_services_student/Desktop/Mobile App Part 2/Happy/assets/images/break5.jpeg')} 
                style={styles.image} 
              />
            )}
            {index === 2 && selectedCategory === "Lunch and Dinner" && (
              <Image 
                source={require('C:/Users/lab_services_student/Desktop/Mobile App Part 2/Happy/assets/images/break6.jpeg')} 
                style={styles.image} 
              />
            )}
            {index === 0 && selectedCategory === "Drinks" && (
              <Image 
                source={require('C:/Users/lab_services_student/Desktop/Mobile App Part 2/Happy/assets/images/drink1.jpg')} 
                style={styles.image} 
              />
            )}
            {index === 1 && selectedCategory === "Drinks" && (
              <Image 
                source={require('C:/Users/lab_services_student/Desktop/Mobile App Part 2/Happy/assets/images/drink2.jpg')} 
                style={styles.image} 
              />
            )}
            {index === 2 && selectedCategory === "Drinks" && (
              <Image 
                source={require('C:/Users/lab_services_student/Desktop/Mobile App Part 2/Happy/assets/images/drink3.jpg')} 
                style={styles.image} 
              />
            )}
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
    color: '#FF0000',  
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
  image: {
    width: '100%',
    height: 200, 
    resizeMode: 'cover',
  },
});

export default App;
