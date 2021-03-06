import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  image: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  cost: DS.attr(),
  comments: DS.hasMany('comment', { async: true})
});
