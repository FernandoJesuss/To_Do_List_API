import mongoose from "mongoose";

class Database {
    constructor() {
        this.mongo
    }
    mongo() {
         mongoose.connect("mongodb://localhost:27018/to-do").then(() => {
            console.log("MongoDB Connected");
         }).catch((err) => {
            console.log("Error:" +err);
         })
    }
}

export default new Database();