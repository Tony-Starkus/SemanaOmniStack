const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const [count] = await connection('incidents').count();
        console.log(count)
        //Paginação
        const {page = 1} = request.query;
        const incidents = await connection('incidents').join('ongs', 'ongs.id', '=', 'incidents.ong_id').limit(5).offset((page - 1) * 5).select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
        //Paginação

        response.header('X-Total-Count', count['count(*)'])
        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;  // request.headers <- Aqui onde fica os dados do user logado.
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        return response.json({"ong_id": ong_id, "id_incident": id});
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if(incident.ong_id != ong_id) {
            return response.state(401).json({ error: "Operation not permitted." })
        }
        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
        /**
         * O status(204) pode ser usado quando a operação é um sucesso mas não tem nada a retornar.
         */
    }

}