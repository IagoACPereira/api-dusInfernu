const Gravadoras = require("../models/GravadorasModel.js")

class GravadorasController {
    static add = async (req, res) => {
        try {
            const gravadora = {
                nome: req.body.nome,
                regiao_id: req.body.regiao_id
            }

            await Gravadoras.create(gravadora)

            res.status(200).json({
                mensagem: 'Gravadora inserida com sucesso!',
                dados: gravadora,
                status: 200
            })
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor!",
                status: 500,
                error
            })
        }
    }

    static exibirTodos = async (req, res) => {
        try {
            const gravadoras = await Gravadoras.findAll()

            res.status(200).json(gravadoras)
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor!",
                status: 500,
                error
            })
        }
    }

    static exibirUm = async (req, res) => {
        try {
            const {id} = req.params;
            const gravadora = await Gravadoras.findByPk(id);

            res.status(200).json(gravadora)
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor!",
                status: 500,
                error
            })
        }
    }

    static atualizar = async (req, res) => {
        try {
            const {id} = req.params;
            const gravadora = await Gravadoras.findByPk(id);
            const dados = {
                nome: req.body.nome,
                regiao_id: req.body.regiao_id,
            };
            await gravadora.update(dados);

            res.status(200).json({
                mensagem: "Gravadora atualizada com sucesso.",
                dados,
                status: 200

            })
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor!",
                status: 500,
                error
            })
        }
    }

    static deletar = async (req, res) => {
        try {
            const {id} = req.params;
            const gravadora = await Gravadoras.findByPk(id);
            await gravadora.destroy()

            // if(!gravadora) {
            //     res.status(400).json({
            //         mensagem: `Não existem gravadoras com este ID:${id}` 
            //     })
            // }
            
            res.status(200).json({
                mensagem: "Gravadora deletada com sucesso.",
                status: 200
            })
        } catch (error) {
            res.status(500).json({
                mensagem: "Ocorreu um erro interno no servidor!",
                status: 500,
                error
            })
        }
    }
}

module.exports = GravadorasController