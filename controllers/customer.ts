import {Request, Response} from 'express';
import Customer from "../models/customer";

export const setCustomer = (req: Request, res: Response) => {
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