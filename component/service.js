import axios from 'axios';
import { Store } from '../store';
import fromProduct from '../redux/product';
import AppConfig from '../constant/AppConfig';

const DOMAIN = 'http://5a0031a3bb3aeb00123a7c5f.mockapi.io/products';

export default class ProductService {

  static syncProductsInterval = null;

  static syncProducts() {
    this.syncProductsInterval = setInterval(() => {
      Store.dispatch(fromProduct.actions.syncProducts());
    }, AppConfig.syncTime);
  }

  static getProducts() {
    Store.dispatch(fromProduct.actions.getProducts());
  }

  static deleteProduct(id) {
    Store.dispatch(fromProduct.actions.deleteProduct(id));
  }

  static async fetchGetProducts() {
    return await axios.get(`${DOMAIN}/products`);
  }

  static async fetchDeleteProduct(id) {
    return await axios.delete(`${DOMAIN}/products/${id}`);
  }
}