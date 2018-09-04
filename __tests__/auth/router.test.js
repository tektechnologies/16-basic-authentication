'use strict';

import app from '../../src/app';
const request = require('supertest')(app);

const mongoConnect = require('../../src/util/mongo-connect');

const MONGODB_URI = process.env.MONGODB_URI ||
  'mongodb://localhost/401-2018-auth';

describe('auth routes', () => {
  beforeAll(async () => {
    await mongoConnect(MONGODB_URI);
  });
});
