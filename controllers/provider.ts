import {Request, Response} from 'express';
import Provider from "../models/provider";

export const postProvider = (req: Request, res: Response) => {
    Provider.create({
        rut: req.body.rut,
        name: req.body.name,
        companyName: req.body.companyName,
        lineBusiness: req.body.lineBusiness,
        address: req.body.address,
        email: req.body.email
    })
        .then(result => res.json({result, ok: true}))
        .catch(err => res.json({err, ok: false}));
}

export const getProvider = (req: Request, res: Response) => {
    Provider.findByPk(req.params.id)
        .then(provider => res.json(provider))
        .catch(err => res.json(err));
}

export const getAllProvider = (_req: Request, res: Response) => {
    Provider.findAll()
        .then(providers => res.json(providers))
        .then(err => res.json(err))
}

export const putProvider = (req: Request, res: Response) => {
    Provider.update({
        rut: req.body.rut,
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        email: req.body.email
    }, {
        where: {id: req.params.id}
    })
        .then(provider => res.json(provider))
        .catch(err => res.json(err));
}