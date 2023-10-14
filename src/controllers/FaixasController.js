const { mySql } = require("../config/dbConnect.js");
const Faixas = require("../models/FaixasModel.js");


class FaixasController {
    static add = async (req, res) => {
        try {
            const faixa = {
                titulo: req.body.titulo,
                tempo_reproducao: req.body.tempo_reproducao,
                num_faixa: req.body.num_faixa,
                album_id: req.body.album_id,
            };

            await Faixas.create(faixa)

            res.status(200).json({
                mensagem: "Faixa registrada com sucesso!",
                dados: faixa,
                status: 200
            });
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor!",
                error,
                status: 500
            });
        }
    }

    static exibirTodos = async (req, res) => {
        try {
            const faixas = await Faixas.findAll()

            res.status(200).json(faixas);
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor!",
                error,
                status: 500
            });
        }
    }

    static exibirUm = async (req, res) => {
        try {
            const {id} = req.params;
            const faixa = await Faixas.findByPk(id)

            res.status(200).json(faixa);
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor!",
                error,
                status: 500
            });
        }
    }

    static exibirPorIdDoAlbum = async (req, res) => {
        try {
            const {idAlbum} = req.params;

            mySql.query(`select * from faixas where album_id = ${idAlbum}`, (erro, faixas) => {
                res.status(200).json(faixas)         
            });

        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor!",
                error,
                status: 500
            });
        }
    }

    static atualizar = async (req, res) => {
        try {
            const {id} = req.params;
            const faixa = await Faixas.findByPk(id);
            const dados = {
                titulo: req.body.titulo,
                tempo_reproducao: req.body.tempo_reproducao,
                num_faixa: req.body.num_faixa,
                album_id: req.body.album_id,
            };
            await faixa.update(dados);

            res.status(200).json({
                mensagem: "Faixa atualizada com sucesso!",
                dados,
                status: 200
            });
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor!",
                error,
                status: 500
            });
        }
    }

    static deletar = async (req, res) => {
        try {
            const {id} = req.params;
            const faixa = await Faixas.findByPk(id);
            await faixa.destroy();

            res.status(200).json({
                mensagem: "Faixa deletada com sucesso!",
                status: 200
            });
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor!",
                error,
                status: 500
            });
        }
    }
};

module.exports = FaixasController