'use strict';

import express from 'express';
const authRouter = express.Router();

import User from './model';
import auth from './middleware';


export default authRouter;
