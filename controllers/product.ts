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

export const getProduct = (req: Request, res: Response) => {
    Product.findByPk(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.json(err));
}

export const getAllProduct = (_req: Request, res: Response) => {
    Product.findAll()
        .then(post => res.json(post))
        .catch(err => res.json(err));
}

export const putProduct = (req: Request, res: Response) => {
    Product.update({
        description: req.body.description,
        cost: req.body.cost,
        stock: req.body.stock,
        price: req.body.price
    },{
        where: {id: req.params.id}
    })
        .then(post => res.json(post))
        .catch(err => res.json(err));
}