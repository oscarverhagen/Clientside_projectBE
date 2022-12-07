const errors = require("../errors")



// the schema is supplied by injection

class CrudController {

    constructor(model) {

        this.model = model

    }



    // we HAVE to use lambda functions here, as they have

    // lexical scope for 'this'

    create = async (req, res, next) => {

        const entity = new this.model(req.body)

        await entity.save()

        res.status(201).json({id: entity.id})

    }



    getAll = async (req, res, next) => {

        console.log(this.model);

        const entities = await this.model.find()

        console.log(entities);

        res.status(200).send(entities)

    }



    getById = async (req, res, next) => {

        const entity = await this.model.findOne({id:req.params.id})

        if(entity == null){

            return res.status(204).send();

        }

        res.status(200).send(entity)

    }
    update = async (req, res, next) => {

        await this.model.findOneAndUpdate({id:req.params.id}, req.body)

        res.status(204).end()

    }



    delete = async (req, res, next) => {

        // this happens in two steps to make mongoose middleware run

        const entity = await this.model.findOne({id:req.params.id})

        if(entity == null){

            return res.status(204).send();

        }  

        await entity.delete()

        res.status(204).end()

    }

}



module.exports = CrudController