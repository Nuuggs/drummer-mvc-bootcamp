import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

import initReservationModel from './reservation.mjs';
import initDrummerModel from './drummer.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Reservation = initReservationModel(sequelize, Sequelize.DataTypes);
db.Drummer = initDrummerModel(sequelize, Sequelize.DataTypes);

// The following 2 lines enable Sequelize to recognise the 1-M relationship
// between Reservation and Drummer models, providing the mixin association methods.
db.Reservation.belongsTo(db.Drummer);
db.Drummer.hasMany(db.Reservation);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;