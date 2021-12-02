const { response, request } = require("express")
const Salon = require("../models/Salon")

/**
 * Method GET
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const salonGet = async (req = request, res = response ) => {

    const { limit = 10, areaId } = req.query
    const estado = true
    let salones, total

    if(!areaId){
        [salones, total] = await Promise.all([
            Salon.find({ estado }).limit(Number(limit)),
            Salon.countDocuments({ estado })
        ])

    }else{
        [salones, total] = await Promise.all([
            Salon.find({ areaId, estado }).limit(Number(limit)),
            Salon.countDocuments({ areaId, estado })
        ])
    }
    
    return res.json({ total, salones })
}

/**
 * Method POST
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const salonPost = async (req = request, res = response ) => {

    const { tipo, codigo, areaId } = req.body

    const salon = new Salon({ tipo, codigo, areaId})
    salon.save();

    return res.json({
        message: 'Salon creado correctamente',
        salon
    })
}

/**
 * Method PUT
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const salonPut = async (req = request, res = response ) => {

    const { id } = req.params
    const { _id, codigo, estado, ...dataSalon} = req.body

    const salon = await Salon.findByIdAndUpdate(id, dataSalon)

    return res.json({
        message: 'Salon actualizado correctamente',
        salon
    })
}

/**
 * Method DELETE
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const salonDelete = async (req = request, res = response ) => {

    const { id } = req.params

    const salon = await Salon.findByIdAndUpdate(id, { estado: false })

    return res.json({
        message: 'Salon eliminado correctamente',
        salon
    })
}

module.exports = {
    salonGet,
    salonPost,
    salonPut,
    salonDelete
}