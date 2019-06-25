const { getObjectId } = require('../../helpers/index');

const name = 'Another Genre';

module.exports = {
  id: getObjectId(name),
  name,
};