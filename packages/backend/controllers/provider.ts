import {Request, Response} from 'express';
import Provider from "../models/provider";

export const postProvider = (req: Request, res: Response) => {
    Provider.create({
        rut: req.body.rut,
        name: req.body.name,
        companyName: req.body.companyName,
        lineBusiness: req.body.lineBusiness,
        address: req.body.address,
        city: req.body.city,
        email: req.body.email
    })
        .then(provider => res.json(provider))
        .catch(err => res.json({
            error: err.errors[0].message,
            type: err.errors[0].type,
            value: err.errors[0].value
        }));
}

export const getProvider = async (req: Request, res: Response) => {
    const provider = await Provider.findByPk(req.params.id);
    if(!provider) return res.json({error: "Id not found"});
    return res.json(provider);
}

export const getAllProvider = async (_req: Request, res: Response) => {
    const providers = await Provider.findAll();
    if(Object.entries(providers).length === 0) return res.json({err: "Providers not found"});
    return res.json(providers);
}

export const putProvider = (req: Request, res: Response) => {
    Provider.update({
        rut: req.body.rut,
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        email: req.body.email
    }, {where: {id: req.params.id}})
        .then(() => res.json({msge: "Successful update"}))
        .catch(err => res.json({
            error: err.errors[0].message,
            type: err.errors[0].type,
            value: err.errors[0].value
    }));
}