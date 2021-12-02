const { Router } = require("express");
const { check } = require("express-validator");
const EmpleadoController = require("../controllers/EmpleadoController");
const { esClasificacionEmpValida, esTipoEmpValido, existeAreaPorId, existeSalonPorId, existeEmail } = require("../helpers/dbValidaciones");
const { validarCampos } = require("../middlewares/validarCampos");


const router = new Router()

router.get('/', EmpleadoController.empleadoGet)

router.post('/', [
    check('cedula', 'La cedula es obligatoria').notEmpty(),
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('correo', 'El correo no es correcto').isEmail(),
    check('correo').custom(existeEmail),
    check('clasificacion', 'La clasificacion del empleado es obligatoria').notEmpty(),
    check('clasificacion').custom(esClasificacionEmpValida),
    check('tipo', 'el tipo del empleado es obligatoria').notEmpty(),
    check('tipo').custom(esTipoEmpValido),
    check('areaId').custom(existeAreaPorId),
    check('salonId').custom(existeSalonPorId),
    validarCampos    
], EmpleadoController.empleadoPost)

router.put('/:id', [
    check('id', 'El id del empleado no es valido').isMongoId(),
    check('cedula', 'La cedula es obligatoria').notEmpty(),
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('clasificacion', 'La clasificacion del empleado es obligatoria').notEmpty(),
    check('clasificacion').custom(esClasificacionEmpValida),
    check('tipo', 'el tipo del empleado es obligatoria').notEmpty(),
    check('tipo').custom(esTipoEmpValido),
    check('areaId', 'El id de area no es valido').isMongoId(),
    check('areaId').custom(existeAreaPorId),
    check('salonId', 'El id del salon no es valido').isMongoId(),
    check('salonId').custom(existeSalonPorId),
    validarCampos    
],EmpleadoController.empleadoPut)

router.delete('/:id',[
    check('id', 'El id del empleado no es valido').isMongoId(),
    validarCampos
], EmpleadoController.empleadoDelete)


module.exports = router