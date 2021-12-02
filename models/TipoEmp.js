const { Schema, model } = require("mongoose")


const TipoEmpSchema = Schema({
    nombre: String
})

module.exports = model('TipoEmp', TipoEmpSchema)