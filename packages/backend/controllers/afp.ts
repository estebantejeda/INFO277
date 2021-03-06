import {Request, Response} from "express";
import Afp from "../models/Afp";
import Employee from "../models/Employee";

export const postAfp = (req: Request, res: Response) => {
    Afp.create({
        name: req.body.name,
        tax: req.body.tax
    })
        .then(afp => res.json(afp))
        .catch(err => res.json(err));
}

export const getAllAfp = async(_req: Request, res: Response) => {
    const afps = await Afp.findAll();
    if(Object.entries(afps).length === 0) res.json({error: 'AFPs not found'});
    return res.json(afps);
}

export const getAfp = async (req: Request, res: Response) => {
    const afpId = req.params.id;
    const afp = await Afp.findAll({
        where: {id: afpId},
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: {
            model: Employee,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'afpId', 'isapreId', 'salesComission', 'refugees', 'birthDate', 'gender', 'salesCommission']
            }
        }
    });
    if (afp == null) return res.json({
        ok: false,
        msge: "Employees not found in the AFP"
    });
    return res.json(afp);
}

export const putAfp = async (req: Request, res: Response) => {
    Afp.update({
        name: req.body.name,
        tax: req.body.tax
    }, {where: {id: req.params.id}})
        .then(() => res.json({msge: 'Successful update'}))
        .catch(err => res.json(err));
}

export const delAfp = async (req: Request, res: Response) => {
    Afp.destroy({
        where: {id: req.params.id}
    })
        .then(afp => res.json(afp))
        .catch(err => res.json(err));
}