import {Request, Response} from "express";
import Parameters from "../models/Parameters";

export const postParameters = (req: Request, res: Response) => {
    Parameters.create({
        uf: req.body.uf,
        utm: req.body.utm,
        refugeesAmount: req.body.refugeesAmount,
        daysPerMonth: req.body.daysPerMonth,
        incomeTax: req.body.incomeTax
    })
        .then(parameters => res.json(parameters))
        .catch(err => res.json(err));
}

export const getAllParameters = async (_req: Request, res: Response) => {
    const parameters = await Parameters.findAll();
    if(Object.entries(parameters).length === 0) res.json({error: 'Parameters not found'});
    return res.json(parameters);
}

export const putParameters = async (req: Request, res: Response) => {
    Parameters.update({
        uf: req.body.uf,
        utm: req.body.utm,
        refugeesAmount: req.body.refugeesAmount,
        daysPerMonth: req.body.daysPerMonth,
        incomeTax: req.body.incomeTax
    }, {where: {id: req.params.id}})
        .then(() => res.json({msge: 'Successful update'}))
        .catch(err => res.json(err))
}

export const delParameters = async (req: Request, res: Response) => {
    Parameters.destroy({
        where: {id: req.params.id}
    })
        .then(parameter => res.json(parameter))
        .catch(err => res.json(err))
}