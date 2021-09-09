import {Request, Response} from 'express';
import Provider from "../models/provider";

export const setProvider = (req: Request, res: Response) => {
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