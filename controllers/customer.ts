import {Request, Response} from 'express';
import Customer from "../models/customer";

export const setCustomer = (req: Request, res: Response) => {
    Customer.create({...req.body})
        .then(result => res.json({result, ok: true}))
        .catch(err => res.json({err, ok: false}));
}