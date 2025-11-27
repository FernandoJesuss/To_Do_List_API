import mongoose from "mongoose";

class Database {
    constructor() {
        this.connect();
    }
    
    async connect() {
        try {
            await mongoose.connect("mongodb://localhost:27018/to-do");
            console.log("MongoDB Connected");
        } catch (err) {
            console.log("Error:", err);
            process.exit(1); 
        }
    }
}

export default new Database();
