const { request, response } = require("express")
const Empleado = require("../models/Empleado")
const Salon = require("../models/Salon")


/**
 * Method GET
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const empleadoGet = async (req = request, res = response) => {

    const { limit = 10, areaId, salonId } = req.query
    const query = { estado: true }

    if(areaId)
        query.areaId = areaId

    if(salonId)
        query.salonId = salonId

    try {
        const [ total, empleados ] = await Promise.all([
            Empleado.countDocuments(query),
            Empleado.find(query).limit(Number(limit))
        ])

        return res.json({ total, empleados })
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            messsage: 'Error en parametros'
        })
    }
}

/**
 * Method POST
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const empleadoPost = async (req = request, res = response) => {

    const { cedula, nombre, correo, clasificacion, tipo, areaId, salonId } = req.query

    const empleado = new Empleado({ cedula, nombre, correo, clasificacion, tipo, areaId, salonId})
    empleado.save()


    return res.json({
        message: 'Empleado creado correctamente',
        empleado
    })
}

/**
 * Method PUT
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const empleadoPut = async (req = request, res = response) => {

    const { id } = req.params
    const { _id, correo, estado, ...dataEmpleado } = req.body

    const empleado = await Empleado.findByIdAndUpdate(id, dataEmpleado)

    return res.json({
        message: 'Empleado actualizado correctamente',
        empleado
    })
}

/**
 * Method DELETE
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const empleadoDelete = async (req = request, res = response) => {

    const { id } = req.params

    const empleado = await Empleado.findByIdAndUpdate(id, { estado: false })

    return res.json({
        message: 'Empleado eliminado correctamente',
        empleado
    })
}

module.exports = {
    empleadoGet,
    empleadoPost,
    empleadoPut,
    empleadoDelete
}