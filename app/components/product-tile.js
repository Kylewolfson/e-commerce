import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  sortBy: ['date:desc'],
  sortedComments: Ember.computed.sort('model.comments', 'sortBy'),

  sortBy: ['rating:desc'],
  sortedComments: Ember.computed.sort('model.comments', 'sortBy'),

  actions: {
    addToCart(product) {
      this.get('shoppingCart').add(product);
    },
    saveComment(params) {
      this.sendAction('saveComment', params);
    }
  }
});
