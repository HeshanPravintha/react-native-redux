// ProductDetails.js
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchProductData} from '../redux/actions';
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
          <View>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text>Description: {product.description}</Text>
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
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 24,
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

export default connect(mapStateToProps, {fetchProductData})(ProductDetails);
