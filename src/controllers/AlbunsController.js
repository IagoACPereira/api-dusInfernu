const { mySql } = require("../config/dbConnect.js")
const Albuns = require("../models/AlbunsModel.js")

class AlbunsController {
    static add = async (req, res) => {
        try {
            const album = {
                titulo: req.body.titulo,
                ano_lancamento: req.body.ano_lancamento,
                imagem_album: req.body.imagem_album,
                link_video: req.body.link_video,
                artista_id: req.body.artista_id,
                gravadora_id: req.body.gravadora_id,
            }

            await Albuns.create(album)

            res.status(200).json({
                mensagem: "Album registrado com sucesso!",
                dados: album,
                status: 200
            })
        } catch (error) {
            res.status(500).json({
                mensagem: "ocorrer um erro interno no servidor.",
                error,
                status: 500
            })
        }
    }

    static exibirTodos = async (req, res) => {
        try {
            const albuns = await Albuns.findAll()

            res.status(200).json(albuns)
        } catch (error) {
            res.status(500).json({
                mensagem: "ocorrer um erro interno no servidor.",
                error,
                status: 500
            })
        }
    }

    static exibirUm = async (req, res) => {
        try {
            const {id} = req.params;
            const album = await Albuns.findByPk(id);

            res.status(200).json(album)
        } catch (error) {
            res.status(500).json({
                mensagem: "ocorrer um erro interno no servidor.",
                error,
                status: 500
            })
        }
    }

    static exibirAlbumPorIdBanda = async (req, res) => {
        try {
            const {id} = req.params;

            mySql.query(`select * from albuns where artista_id = ${id}`, (erro, resposta) => {
                res.status(200).json(resposta);
            })            
        } catch (error) {
            res.status(500).json({
                mensagem: "ocorrer um erro interno no servidor.",
                error,
                status: 500
            })
        }
    }

    static atualizar = async (req, res) => {
        try {
            const {id} = req.params;
            const album = await Albuns.findByPk(id);
            const dados = {
                titulo: req.body.titulo,
                ano_lancamento: req.body.ano_lancamento,
                imagem_album: req.body.imagem_album,
                link_video: req.body.link_video,
                artista_id: req.body.artista_id,
                gravadora_id: req.body.gravadora_id,
            }
            await album.update(dados);

            res.status(200).json({
                mensagem: 'Album atualizado com sucesso!',
                dados,
                status: 200
            })

        } catch (error) {
            res.status(500).json({
                mensagem: "ocorrer um erro interno no servidor.",
                error,
                status: 500
            })
        }
    }

    static deletar = async (req, res) => {
        try {
            const {id} = req.params;
            const album = await Albuns.findByPk(id);
            await album.destroy();

            res.status(200).json({
                mensagem: "Album deletado com sucesso!",
                status: 200
            })
        } catch (error) {
            res.status(500).json({
                mensagem: "ocorrer um erro interno no servidor.",
                error,
                status: 500
            })
        }
    }
}

module.exports = AlbunsController