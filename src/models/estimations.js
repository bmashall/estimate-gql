import mongoose from 'mongoose'
const { Schema } = mongoose;

const estimationSchema = new Schema({
    title: String,
    id: Number,
    skills: [String]
});

const Estimation = mongoose.model('estimation', estimationSchema); 

export {Estimation}