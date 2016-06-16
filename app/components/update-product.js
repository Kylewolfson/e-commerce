import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },
    update(product) {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: this.get('cost')
      };
      this.set('updateProductForm', false);
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          product.set(key,params[key]);
        }
      });
      product.save();
    }
  }
});
