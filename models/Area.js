const { Schema, model } = require("mongoose");


const AreaSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
})

AreaSchema.methods.toJSON = function() {
    const { __v, _id, estado, ...area } = this.toObject()
    area.uid = _id;
    return area
}

module.exports = model('Area', AreaSchema)