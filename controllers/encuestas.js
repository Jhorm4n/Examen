const { response } = require('express')
const Encuesta = require('../models/encuestas')

const getEncuesta = async (req,res = response) => {
    const encuesta = await Encuesta.find()
    res.json({
        msg: 'GET API ENCUESTA',
        encuesta
    })
}

const postEncuesta = async (req,res) => {
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado,edad,genero,empleado} = req.body;

    const encuesta = new Encuesta({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado,edad,genero,empleado})

    encuesta.save()

    res.json({

        msg: 'POST API ENCUESTA',
        nombreEncuesta,
        fecha,
        documentoEncuestado,
        nombreEncuestado,
        edad,
        genero,
        empleado

    })
}

const deleteEncuesta = async(req,res) =>{
    const { documentoEncuestado } = req.query
    const encuesta = await Encuesta.findOneAndDelete({documentoEncuestado : documentoEncuestado})
    
    res.json({
        msg: 'DELETE API ENCUESTA',
        encuesta
    })

}

const putEncuesta = async(req,res) =>{
    const {nombreEncuesta, fecha, documentoEncuestado, documentonNuevoEncuestado, nombreEncuestado,edad,genero,empleado} = req.body

    const encuesta = await Encuesta.findOneAndUpdate({documentoEncuestado:documentoEncuestado},{ documentoEncuestado:documentonNuevoEncuestado,nombreEncuesta: nombreEncuesta, fecha : fecha, nombreEncuestado : nombreEncuestado, edad : edad, genero : genero, empleado : empleado })

    res.json({
        msg: 'UPDATE API ACTUALIZACION ENCUESTA',
        encuesta
    })
}

const patchEncuesta = async(req, res) =>{
    const {documentoEncuestado,nombreEncuestado} = req.body
    const encuesta = await Encuesta.findOneAndUpdate({documentoEncuestado:documentoEncuestado},{nombreEncuestado: nombreEncuestado})
    res.json({
            msg: 'PATCH API ENCUESTA',
            encuesta
        })
}

module.exports = {
    getEncuesta,
    postEncuesta,
    putEncuesta,
    patchEncuesta,
    deleteEncuesta,   
}