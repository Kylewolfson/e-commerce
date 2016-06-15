import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store');
  this.route('product', {path: '/product/:product_id'});
  this.route('admin-portal');
  this.route('product-admin', {path: '/product-admin/:product_id'});
});

export default Router;
