const { Schema, model } = require("mongoose");


const TipoSalonSchema = Schema({
    tipo: String
})

module.exports = model('TipoSalon', TipoSalonSchema)