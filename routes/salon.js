const { Router } = require('express');
const { check } = require('express-validator');

const SalonController = require('../controllers/SalonController');
const { esTipoSalonValido, existeAreaPorId, existeSalonPorId } = require('../helpers/dbValidaciones');
const { validarCampos } = require('../middlewares/validarCampos');

const router = new Router();

router.get('/', SalonController.salonGet)

router.post('/', [
    check('tipo', 'El tipo es obligatorio').notEmpty(),
    check('tipo').custom(esTipoSalonValido),
    check('codigo', 'El Codigo es obligatorio').notEmpty(),
    check('areaId', 'El id del area no es correcto').isMongoId(),
    check('areaId').custom(existeAreaPorId),
    validarCampos,
], SalonController.salonPost)

router.put('/:id', [
    check('id', 'El id no es correcto').isMongoId(),
    check('id').custom(existeSalonPorId),
    check('tipo').custom(esTipoSalonValido),
    check('areaId', 'El id del area no es correcto').isMongoId(),
    check('areaId').custom(existeAreaPorId),
    validarCampos
], SalonController.salonPut)

router.delete('/:id', [
    check('id', 'El id no es correcto').isMongoId(),
    check('id').custom(existeSalonPorId),
    validarCampos
], SalonController.salonDelete)

module.exports = router;
