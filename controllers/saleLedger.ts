import {Request, Response} from "express";
import SaleLedger from "../models/saleLedger";

export const getSaleLedger = (_req: Request, res: Response) => {
    SaleLedger.findAll()
        .then(ans => res.json(ans))
        .catch(err => res.json(err));
}