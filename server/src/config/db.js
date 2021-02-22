/* eslint-disable no-console */

import constants from './constants';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.set('debug', true); // debug mode on

try {
  mongoose.connect(constants.DB_URL//, {useMongoClient: true,}
    );
} catch (err) {
  mongoose.createConnection(constants.DB_URL//,{useMongoClient: true,}
    );
}

mongoose.connection
  .once('open', () => console.log('\n**** MongoDB RUNNING ****\n'))
  .on('error', e => {
    throw e;
  });