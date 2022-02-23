import {Request, Response} from "express";
import Isapre from "../models/Isapre";

export const postIsapre = (req: Request, res: Response) => {
    Isapre.create({name: req.body.name})
        .then(isapre => res.json(isapre))
        .catch(err => res.json(err));
}

export const getAllIsapre = async (_req: Request, res: Response) => {
    const isapres = await Isapre.findAll();
    if(Object.entries(isapres).length === 0) res.json({error: 'Isapres not found'});
    return res.json(isapres);
}

export const putIsapre = async (req: Request, res: Response) => {
    Isapre.update({name: req.body.name}, {where: {id: req.params.id}})
        .then(() => res.json({msge: 'Successful update'}))
        .catch(err => res.json(err));
}

export const delIsapre = async (req: Request, res: Response) => {
    Isapre.destroy({
        where: {id: req.params.id}
    })
        .then(isapre => res.json(isapre))
        .catch(err => res.json(err))
}