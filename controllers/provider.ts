import {Request, Response} from 'express';
import Provider from "../models/provider";

export const setProvider = (req: Request, res: Response) => {
    Provider.create({...req.body})
        .then(result => res.json({result, ok: true}))
        .catch(err => res.json({err, ok: false}));
}