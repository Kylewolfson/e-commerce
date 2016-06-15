import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: this.get('cost')
      };
      this.sendAction('save2', params);
    }
  }
});
