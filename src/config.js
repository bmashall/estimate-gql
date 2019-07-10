import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

export const connect = ()=>{
    const url = 'mongodb://localhost:27017/estimate_db';

    mongoose.connect(url, { useNewUrlParser: true });
    mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));
    return mongoose
}
