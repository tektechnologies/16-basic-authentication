'use strict';

import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
});

export default mongoose.model('users', userSchema);
