import { Request, Response } from "express";
import { Users } from "./user.types";
import { AuthRequest } from "../../auth/auth.types";

import {
   getAllUsers,
   getUserByEmail,
   getUserById,
   createUser,
   updateUser,
   deleteUser
} from "./user.services";

export async function getAllUsersHandler(req: Request, res: Response) {
   const users = await getAllUsers();
   return res.status(200).json(users);
}

export async function getUserByIdHandler(req: AuthRequest, res: Response) {
   const { id } = req.users as Users;

   const user = await getUserById(id);

   if (!user) {
      return res.status(404).json({
         message: "User not found"
      });
   }

   return res.status(200).json(user);
}

export async function getUserByEmailHandler(req: AuthRequest, res: Response) {
   const { email } = req.users as Users;

   const user = await getUserByEmail(email);

   if (!user) {
      return res.status(404).json({
         message: "User not found"
      });
   }

   return res.status(200).json(user);
}

export async function createUserHandler(req: Request, res: Response) {
   const data = req.body;

   const user = await createUser(data);

   return res.status(201).json(user);
}

export async function updateUserHandler(req: AuthRequest, res: Response) {
   const { id } = req.users as Users;

   const user = await updateUser(id);

   if (!user) {
      return res.status(404).json({
         message: "User not found"
      });
   }

   return res.status(200).json(user);
}

export async function deleteUserHandler(req: AuthRequest, res: Response) {
   const { id } = req.users as Users;
   const user = await getUserByEmail(id);

   if (!user) {
      return res.status(404).json({
         message: "User not found"
      });
   }

   await deleteUser(id);
}
