const db = require('./db')

const Pagamento = db.sequelize.define('pagamentos', {
    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }

})

// Cria tabela
/* Sempre que executado recria a tabela
Pagamento.sync({force: true})*/

module.exports = Pagamento
