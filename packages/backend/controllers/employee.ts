import {Request, Response} from "express";
import Employee from "../models/Employee";

export const postEmployee = (req: Request, res: Response) => {
    Employee.create({
        rut: req.body.rut,
        name: req.body.name,
        gender: req.body.gender,
        birthDate: req.body.birthDate,
        refugees: req.body.refugees,
        baseSalary: req.body.baseSalary,
        salesCommission: req.body.salesCommission,
        afpId: req.body.afpId,
        isapreId: req.body.isapreId
    })
        .then(employee => res.json(employee))
        .catch(err => res.json(err));
}

export const getEmployee = async (req: Request, res: Response) => {
    const employee = await Employee.findByPk(req.params.id);
    if(!employee) return res.json({error: "Id not found"});
    return res.json(employee);
}

export const getAllEmployee = async (_req: Request, res: Response) => {
    const employees = await Employee.findAll();
    if(Object.entries(employees).length === 0) return res.json({error: "Employees not found"});
    return res.json(employees);
}

export const putEmployee = async (req: Request, res: Response) => {
    Employee.update({
        rut: req.body.rut,
        name: req.body.name,
        gender: req.body.gender,
        birthDate: req.body.birthDate,
        refugees: req.body.refugees,
        baseSalary: req.body.baseSalary,
        salesCommission: req.body.salesCommission,
        afpId: req.body.afpId,
        isapreId: req.body.isapreId,
    }, {where: {id: req.params.id}})
        .then(() => res.json({msge: 'Successful update'}))
        .catch(err => res.json(err));
}

export const delEmployee = async (req: Request, res: Response) => {
    Employee.destroy({where: {id: req.params.id}})
        .then(employee => res.json(employee))
        .catch(err => res.json(err));
}