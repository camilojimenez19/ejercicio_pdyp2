const mongoose = require('mongoose');
const MONGODB_CNN = process.env.MONGODB_CNN;

const dbConnection = async() => {
    try {

        await mongoose.connect(MONGODB_CNN, {
            useNewUrlParser: true
        });

        console.log('DB connected');

    } catch (error) {
        console.error(error);
        throw new Error ('Error to init Database connection')
    }
}

module.exports = {
    dbConnection
}