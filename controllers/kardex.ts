import {Request, Response} from "express";
import Kardex from "../models/kardex";

export const getKardex = (_req: Request, res: Response) => {
    Kardex.findAll()
        .then(ans => res.json(ans))
        .catch(err => res.json(err));
}