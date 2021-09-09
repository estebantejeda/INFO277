import {Request, Response} from "express";
import SaleLedger from "../models/saleLedger";

export const postSale = (req: Request, res: Response) => {
    SaleLedger.create({
        month: req.body.month,
        year: req.body.year,
        docNumber: req.body.docNumber,
        netValue: req.body.netValue,
        tax: req.body.tax,
        total: req.body.total
    })
        .then(result => res.json(result))
        .catch(err => res.json(err));
}