const Artistas = require("../models/ArtistasModel.js")

class ArtistasController {
    static add = async (req, res) => {
        try {
            const artista = {
                nome: req.body.nome,
                ano_formacao: req.body.ano_formacao,
                ativa: req.body.ativa,
                genero_id: req.body.genero_id,
                regiao_id: req.body.regiao_id,
                descricao: req.body.descricao,    
            }

            await Artistas.create(artista)

            res.status(200).json({
                mensagem: 'Artista armazenado com sucesso!',
                dados: artista,
                status: 200
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
            const artistas = await Artistas.findAll()

            res.status(200).json(artistas)
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

            const artista = await Artistas.findByPk(id)

            res.status(200).json(artista)
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

            const artista = await Artistas.findByPk(id)

            const dados = {
                nome: req.body.nome,
                ano_formacao: req.body.ano_formacao,
                ativa: req.body.ativa,
                genero_id: req.body.genero_id,
                regiao_id: req.body.regiao_id,
                descricao: req.body.descricao,
            }

            await artista.update(dados)

            res.status(200).json({
                mensagem: "Artista atualizado com sucesso!",
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

            const artista = await Artistas.findByPk(id)
            await artista.destroy()

            res.status(200).json({
                mensagem: 'Artista deletado com sucesso!',
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

module.exports = ArtistasController