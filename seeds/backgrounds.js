const backgroundData = require('../seed_data/backgroundData');

exports.seed = function(knex) {
  return knex('backgrounds')
    .del()
    .then(() => {
      return knex('backgrounds').insert(backgroundData);
    });
};
