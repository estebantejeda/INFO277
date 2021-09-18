import {Request, Response} from "express";
import SaleLedger from "../models/saleLedger";

export const getSaleLedger = async (_req: Request, res: Response) => {
    const saleLedgers = await SaleLedger.findAll();
    if(Object.entries(saleLedgers).length === 0) return res.json({error: "Sale Ledgers not found"});
    return res.json(saleLedgers);
}