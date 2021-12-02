const Area = require("../models/Area")
const ClasificacionEmp = require("../models/ClasificacionEmp")
const Empleado = require("../models/Empleado")
const Salon = require("../models/Salon")
const TipoEmp = require("../models/TipoEmp")
const TipoSalon = require("../models/TipoSalon")



const esTipoSalonValido = async (tipo = '') => {

    const esValido = await TipoSalon.findOne({ tipo })
    if (!esValido)
        throw new Error('El tipo de salon no es valido')
}

const existeAreaPorId = async (areaId) => {

    const existeSalon = await Area.findById(areaId)
    if (!existeSalon)
        throw new Error('El area no existe')
}

const existeSalonPorId = async (id) => {

    const existeSalon = await Salon.findById(id);
    if (!existeSalon)
        throw new Error('El salon no existe')
}

const esClasificacionEmpValida = async (clasificacion = '') => {

    const esValida = await ClasificacionEmp.findOne({ nombre: clasificacion })
    if (!esValida)
        throw new Error('La clasificacion del empleado no es valida')
}

const esTipoEmpValido = async (tipo = '') => {

    const esValida = await TipoEmp.findOne({ nombre: tipo })
    if (!esValida)
        throw new Error('El tipo de empleado no es valida')
}

const existeEmail = async (correo = '' ) => {

    const existeEmail = await Empleado.findOne({ correo })
    if(existeEmail)
        throw new Error('El correo ya esta registrado')
}

module.exports = {
    esTipoSalonValido,
    existeAreaPorId,
    existeSalonPorId,
    esClasificacionEmpValida,
    esTipoEmpValido,
    existeEmail
    
}