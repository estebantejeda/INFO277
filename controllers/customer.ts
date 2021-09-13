import {Request, Response} from 'express';
import Customer from "../models/customer";

export const postCustomer = (req: Request, res: Response) => {
    Customer.create({
        rut: req.body.rut,
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        email: req.body.email
    })
        .then(result => res.json({result, ok: true}))
        .catch(err => res.json({err, ok: false}));
}

export const getCustomer = (req: Request, res: Response) => {
    Customer.findByPk(req.params.id)
        .then(customer => res.json(customer))
        .catch(err => res.json(err));
}

export const getAllCustomer = (_req: Request, res: Response) => {
    Customer.findAll()
        .then(customers => res.json(customers))
        .catch(err => res.json(err))
}

export const putCustomer = (req: Request, res: Response) => {
    Customer.update({
        rut: req.body.rut,
        name: req.body.name,
        address: req.body.name,
        city: req.body.city,
        email: req.body.city
    }, {
        where: {id: req.params.id}
    })
        .then(customer => res.json(customer))
        .catch(err => res.json(err));
}