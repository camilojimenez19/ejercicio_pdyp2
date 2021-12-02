const { Schema, model } = require('mongoose');

const SalonSchema = Schema({
    codigo: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum: ['CLASE', 'OFICINA', 'OTRO']
    },
    estado: {
        type: Boolean,
        default: true
    },
    areaId: {
        type: String
    }
})

SalonSchema.methods.toJSON = function() {
    const { __v, _id, estado, ...salon } = this.toObject()
    salon.uid = _id;
    return salon
}

module.exports = model('Salon', SalonSchema)