const Generos = require('../models/GenerosModel.js')

class GenerosController {
    static add = async (req, res) => {
        try {
            const genero = {
                titulo: req.body.titulo
            }
    
            await Generos.create(genero)
    
            res.status(200).json({
                mensagem: "Genero inserido com sucesso.",
                dados: genero,
                stauts: 200
            })    
        } catch (error) {
            res.status(500).json({
                mensagem: 'Ocorreu um erro interno no servidor!',
                status: 500
            })
        }
    }

    static exibirTodos = async (req, res) => {
        try {
            const generos = await Generos.findAll()

            res.status(200).json(generos)
        } catch (error) {
            res.status(500).json({
                mensagem: 'Ocorreu um erro interno no servidor!',
                status: 500
            })
        }
    }

    static exibirUm = async (req, res) => {
        try {
            const {id} = req.params

            const genero = await Generos.findByPk(id)

            res.status(200).json(genero)
        } catch (error) {
            res.status(500).json({
                mensagem: 'Ocorreu um erro interno no servidor!',
                status: 500
            })
        }
    }

    static atualizar = async (req, res) => {
        try {
            const {id} = req.params

            const dados = {
                titulo: req.body.titulo
            }

            const genero = await Generos.findByPk(id)
            await genero.update(dados)

            res.status(200).json({
                mensagem: 'Genero atualizado com sucesso!',
                dados,
                status: 200
            })
            
        } catch (error) {
            res.status(500).json({
                mensagem: 'Ocorreu um erro interno no servidor!',
                status: 500
            })
        }
    }

    static deletar = async (req, res) => {
        try {
            const {id} = req.params

            const genero = await Generos.findByPk(id)

            await genero.destroy()

            res.status(200).json({
                mensagem: 'Genero deletado com sucesso',
                status: 200
            })
        } catch (error) {
            res.status(500).json({
                mensagem: 'Ocorreu um erro interno no servidor!',
                status: 500
            })
        }
    }

}

module.exports = GenerosController