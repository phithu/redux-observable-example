import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import AppConfig from '../constant/AppConfig';
import ProductService from './service';

class ProductItem extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const { name, address, id } = this.props.item;

    return (
      <View style={styles.itemContainer}>
        <Text>id: {id}</Text>
        <Text>name: {name}</Text>
        <Text>address: {address}</Text>
      </View>
    );
  }

}

class Products extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      // only get products when have not entities in store
      if (this.props.product.entities === null) {
        ProductService.getProducts();
      }
    });
    // sync data local with remote after `AppConfig.syncTime`
    setTimeout(() => ProductService.syncProducts(), AppConfig.syncTime);
  }

  shouldComponentUpdate(nextProps) {
    const thisProducts = this.props.product;
    const nextProducts = nextProps.product;

    return thisProducts.entities.length !== nextProducts.entities.length ||
      thisProducts.isLoading !== nextProducts.isLoading;

  }

  componentWillUnmount() {
    // remove sync interval
    clearInterval(ProductService.syncProductsInterval);
  }

  getItemLayout = (data, index) => {
    const heightAVG = 80;
    return {
      length: heightAVG,
      offset: heightAVG * index,
      index,
    };
  };

  getProducts = () => {
    // ProductService.getProducts();
  };

  deleteProduct = () => {
    // ProductService.deleteProduct('15');
  };

  renderContent() {
    const { entities, isLoading, error } = this.props.product;

    if (isLoading || entities === null) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator/>
        </View>
      );
    }
    if (entities !== null && error === null) {
      return (
        <FlatList
          initialNumToRender={10}
          windowSize={10}
          removeClippedSubviews={true}
          getItemLayout={this.getItemLayout}
          style={{ flex: 1 }}
          keyExtractor={(item, index) => index.toString()}
          data={entities}
          renderItem={({ item }) => <ProductItem item={item}/>}
        />
      );
    }
    return <Text>{JSON.stringify(error)}</Text>;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: '100%',
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    padding: 10,
  },
};

const mapStateToProps = state => {
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps, null)(Products);