import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {GET_PRODUCT_REQUEST} from '../redux/actions';
import Button from '../components/Button';

class ProductDetails extends Component {
  componentDidMount() {
    this.props.fetchProductData();
  }

  render() {
    const {product, loading, error} = this.props;

    return (
      <View style={styles.container}>
        {product ? (
          <View style={styles.detailsContainer}>
            <Image source={{uri: product.image}} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description} numberOfLines={4}>Description: {product.description}</Text>
          </View>
        ) : (
          <Text>Loading product data...</Text>
        )}
        <Button title="Next" onPress={this.props.fetchProductData} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 30,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    bottom: 20,
    borderRadius: 10,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: 'red',
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    width: 350,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    top: 50,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
  },
});
const mapStateToProps = state => ({
  product: state.product,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  fetchProductData: () => dispatch({ type: GET_PRODUCT_REQUEST }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);