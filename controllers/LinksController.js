const knex = process.env.NODE_ENV === 'production'
  ? require('knex')(require('../knexfile').production)
  : require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('links')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Links: ${err}`)
    );
};