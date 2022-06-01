import { Request } from "express";

export interface calculatorRequest extends Request {
    params?: {
        number: number
    };
}
