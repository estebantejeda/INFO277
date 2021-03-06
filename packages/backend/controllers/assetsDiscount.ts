import {Request, Response} from "express";
import AssetsDiscount from "../models/AssetsDiscount";
import Employee from "../models/Employee";
import {Op} from 'sequelize';
import Parameters from "../models/Parameters";
import Afp from "../models/Afp";
import Isapre from "../models/Isapre";

export const postAssetsDiscount = async (req: Request, res: Response) => {
    if(!req.body.rut) return res.json({
        ok: false,
        msge: "rut Not Found"
    });
    const employee = await Employee.findOne({where: {rut: req.body.rut}})
    if(!employee) return res.json({
       ok: false,
       msge: "Employee Not found"
    });
    const employeeId = employee.getDataValue('id');
    const assetsDiscount = await AssetsDiscount.findOne({
        where: {
            [Op.and]: [
                {id: employeeId},
                {date: new Date(req.body.date)}
            ]
        }
    });
    if(assetsDiscount != null) return res.json({
        ok: false,
        msge: "Assets-Discount already exist in this date"
    });
    return AssetsDiscount.create({
        workedDays: req.body.workedDays,
        gratification: req.body.gratification,
        familyWelfare: req.body.familyWelfare,
        otherDiscount: req.body.otherDiscount,
        employeeId: await employee.getDataValue("id"),
        date: new Date(req.body.date)
    })
        .then(assetDiscount => res.json(assetDiscount))
        .catch(err => res.json(err));
}

export const postGenerateAssetsDiscount = async (req: Request, res: Response) => {
    if(!req.body.rut) return res.json({
        ok: false,
        msge: "rut Not Found"
    });
    const employee = await Employee.findOne({where: {rut: req.body.rut}});
    if(employee === null) return res.json({
        ok: false,
        msge: "Employee Not Found"
    });
    const employeeJoinAssets = await Employee.findOne({
        include: [{
            model: AssetsDiscount
        }],
        where: {
            [Op.and]: [
                {id: await employee.getDataValue('id')},
                {'$assets_discount.date$': new Date(req.body.date)}
            ]
        }
    });
    if(employeeJoinAssets === null) return res.json({
        ok: false,
        msge: "Assets-Discount not found"
    });
    const assetsDiscountId = employeeJoinAssets.getDataValue('assets_discount').id;
    const assetsDiscount = await AssetsDiscount.findOne({where: {id: assetsDiscountId}});
    if(assetsDiscount === null) return res.json({
        ok: false,
        msge: "Assets-Discount not found"
    });
    const parameters = await Parameters.findOne(); //Corregir fecha
    if(parameters === null) return res.json({
       ok: false,
       msge: "Parameters not found"
    });
    const afp = await Afp.findOne({where: {id: employee.getDataValue('afpId')}});
    if(afp === null) return res.json({
        ok: false,
        msge: "AFP not found"
    });
    const baseSalary = employee.getDataValue('baseSalary');
    const gratification = assetsDiscount.getDataValue('gratification');
    const commission = 0;
    const taxable = baseSalary+gratification+commission;
    const refugeesAmount = employee.getDataValue('refugees')*parameters.getDataValue('refugeesAmount');
    const totalAssets = taxable + refugeesAmount;
    const pension = taxable*0.1;
    const health = taxable*0.07;
    const socialSecurity = taxable * afp.getDataValue('tax')/100;
    const totalForecast = pension+health+socialSecurity;
    const totalDiscount = totalForecast+assetsDiscount.getDataValue('familyWelfare')+assetsDiscount.getDataValue('otherDiscount');
    const netSalary = totalAssets-totalDiscount;
    return AssetsDiscount.update({
        baseSalary,
        commission,
        taxable,
        refugeesAmount,
        totalAssets,
        pension,
        health,
        socialSecurity,
        totalForecast,
        totalDiscount,
        netSalary
    },{where: {id: assetsDiscountId}})
        .then(() => res.json({
            ok: true,
            msge: "Assets-Discount successful generate"
        }))
        .catch(err => res.json(err));
}

export const getAssetsDiscount = async (req: Request, res: Response) => {
    const assetsDiscount = await AssetsDiscount.findAll({
        attributes: ['id', 'date', 'netSalary'],
        include: [{
            model: Employee,
            attributes: ['name']
        }],
        where: {employeeId: req.params.employeeId}
    });
    if(Object.entries(assetsDiscount).length === 0) return res.json({
        ok: false,
        error: "Assets-Discount not found"
    });
    return res.json(assetsDiscount);
}

export const getDateAssetsDiscount = async (_req: Request, res: Response) => {
    const assetsDiscount = await AssetsDiscount.findAll({
        attributes: ['date'],
        where: {
            baseSalary: {[Op.ne]: null}
        },
        group: 'date'
    });
    return res.json(assetsDiscount);
}

export const getAssetsDiscountDetail = async (req: Request, res: Response) => {
    const assetsDiscount = await AssetsDiscount.findByPk(req.params.id, {
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'employeeId']
        },
        include: [{
            model: Employee,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'afpId', 'isapreId']
            },
            include: [
                {
                    model: Afp,
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                },
                {
                    model: Isapre,
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                }
            ]
        }]
    });
    if (assetsDiscount == null) return res.json({
        ok: false,
        msge: "Assets-Discount not found with id"
    });
    return res.json(assetsDiscount);
}

export const getAllAssetsDiscountDetail = async (req: Request, res: Response) => {
    const dateAssetDiscount = req.params.date;
    const assetsDiscount = await AssetsDiscount.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'employeeId']
        },
        where: {date: new Date(dateAssetDiscount)},
        include: [{
            model: Employee,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'afpId', 'isapreId']
            },
            include: [
                {
                    model: Afp,
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                },
                {
                    model: Isapre,
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                }
            ]
        }]
    });
    if (assetsDiscount == null) return res.json({
        ok: false,
        msge: "Assets-Discount not found in date"
    });
    return res.json(assetsDiscount);
}