import mongoose from "mongoose";
import {MONGO_URI, MONGO_DB_NAME, PORT} from './config.js'

export const mongoConnection = async (app) => {
    try {
        await mongoose.connect(MONGO_URI, {
            dbName: MONGO_DB_NAME,
        });
        console.log("DB Connected!")
        app.listen(PORT, () => console.log("Server Up"))
    } catch (err) {
        console.log("Error en DB")
    }
}