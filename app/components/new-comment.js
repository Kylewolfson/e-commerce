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
    // selectRating: function(selection, comment) {
    //   if (selection) {
    //     this.set('selection', selection)
    //   } else {
    //     this.set('selection', component.get('default'))
    //   }
    // }
    commentFormShow() {
      this.set('addNewComment', true);
    }
  }
});
