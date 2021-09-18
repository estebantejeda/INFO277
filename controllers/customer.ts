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
        .then(customer => res.json(customer))
        .catch(err => res.json({
            error: err.errors[0].message,
            type: err.errors[0].type,
            value: err.errors[0].value
        }));
}

export const getCustomer = async (req: Request, res: Response) => {
    const customer = await Customer.findByPk(req.params.id);
    if(!customer) return res.json({error: "Id not found"});
    return res.json(customer);
}

export const getAllCustomer = async (_req: Request, res: Response) => {
    const customers = await Customer.findAll();
    if(Object.entries(customers).length === 0) return res.json({error: "Customers not found"});
    return res.json(customers);
}

export const putCustomer = (req: Request, res: Response) => {
    Customer.update({
        rut: req.body.rut,
        name: req.body.name,
        address: req.body.name,
        city: req.body.city,
        email: req.body.city
    }, {where: {id: req.params.id}})
        .then(() => res.json({msge: "Successful update"}))
        .catch(err => res.json({
            error: err.errors[0].message,
            type: err.errors[0].type,
            value: err.errors[0].value
    }));
}