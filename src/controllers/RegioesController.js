const Regioes = require("../models/RegioesModel")

class RegioesController {
    static add = async (req, res) => {
        try {
            const regiao = {
                pais: req.body.pais
            }  
            
            await Regioes.create(regiao)

            res.status(200).json({
                mensagem: 'Regiao armazenada com sucesso!',
                dados: regiao,
                status: 200
            })
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor",
                status: 500
            })
        }
    }

    static exibirTodos = async (req, res) => {
        try {
            const regioes = await Regioes.findAll()

            res.status(200).json(regioes)
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor",
                status: 500
            })
        }
    }

    static exibirUm = async (req, res) => {
        try {
            const {id} = req.params

            const regiao = await Regioes.findByPk(id)

            res.status(200).json(regiao)
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor",
                status: 500
            })
        }
    }

    static atualizar = async (req, res) => {
        try {
            const {id} = req.params

            const regiao = await Regioes.findByPk(id)

            const dados = {
                pais: req.body.pais
            }

            await regiao.update(dados)

            res.status(200).json({
                mensagem: 'Regiao atualizada com sucesso!'
            })
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor",
                status: 500
            })
        }
    }

    static deletar = async (req, res) => {
        try {
            const {id} = req.params

            const regiao = await Regioes.findByPk(id)

            await regiao.destroy()

            res.status(200).json({
                mensagem: "Regiao deletada com sucesso!",
                status: 200
            })
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor",
                status: 500
            })
        }
    }
}

module.exports = RegioesController