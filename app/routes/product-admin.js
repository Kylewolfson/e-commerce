import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  actions: {
    destroyProduct(product) {
      product.destroyRecord();
      this.transitionTo('admin-portal');
    }
  }
});
