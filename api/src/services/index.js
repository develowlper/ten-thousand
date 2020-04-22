const { connect } = require('mongodb').MongoClient;
const service = require('feathers-mongodb');
// eslint-disable-next-line no-unused-vars
module.exports = async function (app) {
  app.use(
    '/game-boards',
    service({
      paginate: {
        default: 2,
        max: 4,
      },
    })
  );

  const client = await connect('mongodb://localhost:27017', {
    useUnifiedTopology: true,
  });

  app.service('/game-boards').Model = client
    .db('ten-thousand')
    .collection('gameBoards');
};
