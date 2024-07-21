import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import img1 from '../assets/image1.jpeg'
import img2 from '../assets/image2.jpg'
const Recent = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      product: 'Product A',
      details: 'Details A',
      image1: img1,
      image2: img2
    },
    {
      id: 2,
      product: 'Product B',
      details: 'Details B',
      image1: img1,
      image2: img2
    },
  ]);

  const renderProduct = (product) => {
    return (
      <View key={product.id} style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image source={product.image1} style={styles.image} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={product.image2} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.productText}>{product.product}</Text>
          <Text style={styles.detailsText}>{product.details}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products Showcase</Text>
      <View style={styles.productsContainer}>
        {products.map((product) => renderProduct(product))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  productContainer: {
    width: '48%',
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  productText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 14,
    color: '#888',
  },
});

export default Recent;