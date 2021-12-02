const { Schema, model } = require("mongoose")


const ClasificacionEmpSchema = Schema({
    nombre: String
})

module.exports = model('ClasificacionEmp', ClasificacionEmpSchema)