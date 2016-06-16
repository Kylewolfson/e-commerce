import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  body: DS.attr(),
  rating: DS.attr(),
  product: DS.belongsTo('product', { async: true})
});
