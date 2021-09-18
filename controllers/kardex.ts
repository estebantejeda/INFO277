import {Request, Response} from "express";
import Kardex from "../models/kardex";

export const getKardex = async (_req: Request, res: Response) => {
    const karedexes = await Kardex.findAll();
    if(Object.entries(karedexes).length === 0) return res.json({error: "Kardexes not found"});
    return res.json(karedexes);
}