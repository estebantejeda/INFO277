import {Request, Response} from "express";
import Kardex from "../models/kardex";

export const setKardex = (req: Request, res: Response) => {
    Kardex.create().then().catch()
    console.log(req);
    console.log(res);
}