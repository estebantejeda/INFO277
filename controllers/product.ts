import {Request, Response} from 'express';
import Product from "../models/product";

export const setProduct = (req: Request, res: Response) => {
    Product.create({...req.body})
        .then(result => res.json({result, ok: true}))
        .catch(err => res.json({err, ok: false}));
}