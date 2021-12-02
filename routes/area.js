const { Router } = require("express");
const { check } = require("express-validator");

const AreaController = require('../controllers/AreaController');
const { existeAreaPorId } = require("../helpers/dbValidaciones");
const { validarCampos } = require('../middlewares/validarCampos') 

const router = new Router();

router.get('/', AreaController.areaGet)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    validarCampos
], AreaController.areaPost)

router.put('/:id', [
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeAreaPorId),
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    validarCampos
], AreaController.areaPut)

router.delete('/:id', [
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeAreaPorId),
    validarCampos
], AreaController.areaDelete)

module.exports = router