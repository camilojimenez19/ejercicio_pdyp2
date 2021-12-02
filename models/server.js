const express = require('express')
const cors = require('cors');
const hbs = require('hbs');
const path = require('path');

const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3000

        /** URL's for EndPoints */
        this.salonPath = '/api/salon'
        this.areaPath = '/api/area'
        this.empleadoPath = '/api/empleado'

        /** Connect to DB */
        this.connectDB();

        /** Middlewares */
        this.middlewares()

        /** My application's routes */
        this.routes()
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        /** CORS */
        this.app.use(cors())

        /** Read and parse of body */
        this.app.use(express.json())

        /** Usar Handlebars template */
        this.app.set('view engine', 'hbs');
        hbs.registerPartials(path.join(__dirname, "../", "/views/partials"));

        /** Public dir */
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.salonPath, require('../routes/salon'));
        this.app.use(this.areaPath, require('../routes/area'));
        this.app.use(this.empleadoPath, require('../routes/empleado'));

        /** Rutas HBS */
        this.app.get('/', (req, res) => {
            res.render('empleado', {
                esPaginaEmpleado: true
            })
        })

        this.app.get('/salones', (req, res) => {
            res.render('salones', {
                esPaginaSalon: true
            })
        })

        this.app.get('/areas', (req, res) => {
            res.render('areas', {
                esPaginaArea: true
            })
        })

        this.app.get('/reportes', (req, res) => {
            res.render('reporte', {
                esPaginaArea: true
            })
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        })
    }
}

module.exports = Server