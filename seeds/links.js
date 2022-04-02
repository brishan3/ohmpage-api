const linkData = require('../seed_data/linkData');

exports.seed = function(knex) {
  return knex('links')
    .del()
    .then(() => {
      return knex('links').insert(linkData);
    });
};
