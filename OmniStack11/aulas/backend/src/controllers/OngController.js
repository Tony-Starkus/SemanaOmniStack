const connection = require('../database/connection');
const crypto = require('crypto');  //Gerar uma string aleatória.

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
    //const params = request.query; //Pegando os parâmetros que estão vindo da requisição/url (Esses são os Query Params)
    //const params = request.params; //Pegando o id que está vindo na URL (Isso é um Route Params) | Rota usada: /users/:id
    //const body = request.body;  //Criando usuário | Utilizar método POST
    //return response.send("Olá, mundo!");
    //const data = request.body;
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX'); //4 bytes de caracteres hexadecimal
    //Inserindo dados
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    });
    return response.json({ id });
    }

}