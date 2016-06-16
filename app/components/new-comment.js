import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveComment() {
      var params = {
        name: this.get('name'),
        body: this.get('body'),
        rating: this.get('rating'),
        date: Date.now(),
        product: this.get('product')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    },
    commentFormShow() {
      this.set('addNewComment', true);
    }
  }
});
