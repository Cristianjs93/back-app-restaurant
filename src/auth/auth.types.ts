import { Request } from "express";
import { Users } from "../api/users/user.types";

export type PayloadType = {
   id: string;
   email: string;
   iat?: number;
   exp?: number;
};

export interface AuthRequest extends Request {
   users?: Users;
}
