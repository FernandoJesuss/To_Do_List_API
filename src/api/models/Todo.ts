import mongoose from "mongoose";

export interface ITodo extends mongoose.Document {
    task: string,
    finished?: boolean;
    createAL?: Date,
}


const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    finished: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model<ITodo>("Todo", todoSchema)

export default Todo;
