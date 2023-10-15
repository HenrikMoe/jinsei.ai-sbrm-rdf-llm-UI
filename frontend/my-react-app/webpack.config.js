
const path = require('path');

module.exports = {
  // Your existing Webpack configuration here...

  resolve: {
    alias: {
      path: require.resolve('path-browserify'),
    },
  },
};
