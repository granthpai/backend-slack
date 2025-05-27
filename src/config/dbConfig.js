import mongoose from 'mongoose';

import { DEV_DB_URL, NODE_ENV } from './serverConfig.js';

export default async function connectDB(){
    try {
        await mongoose.connect(DEV_DB_URL);
        console.log(`Connected to mongodb database from ${NODE_ENV} environment`);
    } catch (error) {
        console.log('Error connecting to database', error);
    }
}