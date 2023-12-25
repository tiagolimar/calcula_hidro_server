import db from '../model/index.js';

const Tubo = db.tubo;

export const tuboController = {
    create: (request,response)=>{
        const tubo = request.body;
        Tubo.create(tubo)
        .then(data=>{
            response.send(data);
        })
        .catch(e=>{
            response.status(500).send({message : e.message || "O tubo não pôde ser criado."});
        })
    },

    createAll: async (request,response)=>{
        let datas = []
        let tubos = []
        let success = 0
        
        if (request.body.isArray()){
            tubos = request.body.sort((a,b)=>a.id-b.id)
        }else{
            tubos = [request.body]
        }

        for (let tubo_ of tubos) {
            const {id,...tubo} = tubo_
            try {
                const data = await Tubo.create(tubo)
                success += 1;
            } catch (error) {
                response.status(500).send({message : e.message || `O tubo ${id} não pôde ser criado.`});
            }
        }
        response.send(`${success} tubos adicionados com sucesso.`);
    },

    findAll: (_,response)=>{
        Tubo.findAll()
        .then(data=>{
            response.send(data);
        })
        .catch(e=>{
            response.status(500).send({message : e.message || "Não foi possível encontrar os tubos."});
        })
    },

    findById: (request,response)=>{
        const id = request.params.id
        Tubo.findByPk(id)
        .then(data=>{
            response.send(data);
        })
        .catch(e=>{
            response.status(500).send({message : e.message || `Não foi possível encontrar o tubo ${id}.`});
        })
    },

    update: async (request,response)=>{
        const id = request.params.id;
        const tubo = request.body;

        const tuboBd = await Tubo.findByPk(id);

        if (tuboBd) {
            tuboBd.update(tubo)
            .then(data=>{
                response.send(data);
            })
            .catch(e=>{
                response.status(500).send({message : e.message || `Não foi possível atualizar o tubo ${id}.`});
            })
            
        } else {
            response.status(404).send({message : e.message || `O tubo ${id} não existe.`})
        }

    },

    deleteById: async (request,response)=>{
        const id = request.params.id;
        const tuboBd = await Tubo.findByPk(id);

        if (tuboBd) {
            await tuboBd.destroy();
            response.status(204).json('O tubo foi excluído com sucesso');
        }else{
            response.status(404).json('O tubo não existe.');
        }
    },

    deleteALL: async (_,response)=>{
        try {
            await Tubo.destroy({where:{}})
            response.status(204).json('Todos os tubos foram excluídos com sucesso!')
        } catch (error) {
            response.status(500).json('Falha ao tentar excluir todo os tubos.')
        }
    },
}