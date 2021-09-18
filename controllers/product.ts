import {Request, Response} from 'express';
import Product from "../models/product";

export const postProduct = (req: Request, res: Response) => {
    Product.create({
        description: req.body.description,
        cost: req.body.cost,
        date: req.body.date,
        stock: req.body.stock,
        price: req.body.price
    })
        .then(product => res.json(product))
        .catch(err => res.json({
            error: err.errors[0].message,
            type: err.errors[0].type,
            value: err.errors[0].value
        }));
}

export const getProduct = async (req: Request, res: Response) => {
    const product = await Product.findByPk(req.params.id);
    if(!product) return res.json({error: "Id not found"});
    return res.json(product);
}

export const getAllProduct = async (_req: Request, res: Response) => {
    const products = await Product.findAll();
    if(Object.entries(products).length === 0) return res.json({error: "Products not found"});
    return res.json(products);
}

export const putProduct = (req: Request, res: Response) => {
    Product.update({
        description: req.body.description,
        cost: req.body.cost,
        stock: req.body.stock,
        price: req.body.price
    },{where: {id: req.params.id}})
        .then(post => res.json(post))
        .catch(err => res.json({
            error: err.errors[0].message,
            type: err.errors[0].type,
            value: err.errors[0].value
        }));
}