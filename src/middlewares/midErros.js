const erro404 = (req, res, next) => {
    res.status(404).json({
        mensagem: 'Este endpoint não existe!',
        status: 404
    })

    next()
}

const erro500 = erro => {
    return res.status(500).json({
        mensagem: 'Ocorreu um erro interno no servidor!',
        status: 500,
    })
}

module.exports = {erro404, erro500}