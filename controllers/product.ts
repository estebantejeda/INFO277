import {Request, Response} from 'express';
import Product from "../models/product";

export const setProduct = (req: Request, res: Response) => {
    Product.create({
        description: req.body.description,
        cost: req.body.cost,
        date: req.body.date,
        stock: req.body.stock,
        price: req.body.price
    })
        .then(result => res.json({result, ok: true}))
        .catch(err => res.json({err, ok: false}));
}