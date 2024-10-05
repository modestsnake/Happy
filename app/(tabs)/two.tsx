import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serving You is Our Priority!</Text>
      <View style={styles.separator} />
      <Text style={styles.description}>
        Welcome to Christoffel's Food App! Our app provides you with a delightful selection of three courses to choose from: Breakfast, Lunch/Dinner, and Drinks. Whether you're starting your day with a hearty breakfast, enjoying a delicious meal for lunch or dinner, or refreshing yourself with a variety of drinks, our app makes it easy to explore and customize your dining experience. Discover your favorites and enjoy seamless ordering at your fingertips!
      </Text>
      <Text style={styles.description}>
        For inquiries or feedback, contact us at:
      </Text>
      <Text style={styles.description}>
        Email: support@christoffelsfoodapp.com{"\n"}Phone: +1 (555) 123-4567
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(120, 49, 49, 0.6)',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0000000',
  },
  description: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    backgroundColor: '#000000',
  },
});
