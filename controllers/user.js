/**
 * User Controlller
 * 
 * created by: Camilo Jimenez
 * date: 2021-11-23
 */

const { response, request } = require('express')


/**
 * User GET
 * @param {*} req 
 * @param {*} res 
 */
const userGet = (req = request, res = response) => {

    const query = req.query

    res.json({
        msg: 'Get desde el controlador',
        query
    })
}

/**
 * User POST
 * @param {*} req 
 * @param {*} res 
 */
const userPost = (req = request, res = response) => {

    const { name, age} = req.body;

    res.json({
        msg: 'POST desde el controlador',
        name,
        age
    })
}

/**
 * User PUT
 * @param {*} req 
 * @param {*} res 
 */
const userPut = (req = request, res = response) => {
    
    const id = req.params.id

    res.json({
        msg: 'PUT desde el controlador',
        id
    })
}

/**
 * User PATCH
 * @param {*} req 
 * @param {*} res 
 */
const userPatch = (req = request, res = response) => {
    res.json({
        msg: 'PATCH desde el controlador'
    })
}

/**
 * User DELETE
 * @param {*} req 
 * @param {*} res 
 */
const userDelete = (req = request, res = response) => {
    res.json({
        msg: 'DELETE desde el controlador'
    })
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete,
}