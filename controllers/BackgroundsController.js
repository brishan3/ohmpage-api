const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('backgrounds')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Links: ${err}`)
    );
};