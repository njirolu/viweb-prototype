const { sendData } = require('../../shared/jsonapi');

function getHealth(_req, res) {
  return sendData(res, {
    data: {
      type: 'health',
      id: 'api',
      attributes: {
        status: 'ok',
        time: new Date().toISOString(),
      },
    },
  });
}

module.exports = {
  getHealth,
};
