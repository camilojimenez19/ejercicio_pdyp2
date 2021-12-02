const { request, response } = require("express")
const Area = require("../models/Area")

/**
 * Method GET
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const areaGet = async (req = request, res = response) => {

    const { limit = 10 } = req.query
    const query = { estado: true }

    const [ total, areas ] = await Promise.all([
        Area.countDocuments(query),
        Area.find(query).limit(Number(limit))
    ])

    return res.json({ total, areas })
}

/**
 * Method POST
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const areaPost = async (req = request, res = response) => {

    const { nombre } = req.body

    const area = new Area({ nombre })
    area.save()

    return res.json({
        message: 'Area creada correctamente',
        area
    })
}

/**
 * Method PUT
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const areaPut = async (req = request, res = response) => {

    const { id } = req.params
    const {_id, estado, ...dataArea } = req.body

    const area = await Area.findByIdAndUpdate(id, dataArea)

    return res.json({
        message: 'Area actualizada correctamente',
        area
    })
}

/**
 * Method DELETE
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const areaDelete = async (req = request, res = response) => {

    const { id }= req.params

    const area = await Area.findByIdAndUpdate(id, { estado: false })

    return res.json({
        message: 'Area eliminada correctamente',
        area
    })
}

module.exports = {
    areaGet,
    areaPost,
    areaPut,
    areaDelete
}