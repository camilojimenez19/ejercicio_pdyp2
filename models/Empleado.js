const { Schema, model } = require("mongoose");


const EmpleadoSchema = Schema({
    cedula: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        require: [true, 'El correo es obligatorio'],
        uniqued: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    clasificacion: {
        type: String,
        required: true,
        enum: [ 'PROFESOR', 'ADMINISTRATIVO']
    },
    tipo: {
        type: String,
        required: true,
        enum: [ 'PLANTA', 'CONTRATISTA']
    },
    areaId: {
        type: String,
        required: true
    },
    salonId: {
        type: String,
        required: true
    }
})

EmpleadoSchema.methods.toJSON = function() {
    const { __v, _id, estado, ...empleado } = this.toObject()
    empleado.uid = _id;
    return empleado
}


module.exports = model('Empleado', EmpleadoSchema)