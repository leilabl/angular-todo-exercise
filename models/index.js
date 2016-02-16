var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

module.exports = {
  Activity: require('./activity'),
  ListItem: require('./listItem')
};
