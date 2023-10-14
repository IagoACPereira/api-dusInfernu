class Controller {
    static inicio = (req, res) => {
        res.status(200).json({
            titulo: 'DusInfernu',
            desc: 'A página de metal mais cabulosa da internet.'
        })
    }
}

module.exports = Controller