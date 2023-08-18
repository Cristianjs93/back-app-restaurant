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
   try {
      const users = await getAllUsers();
      res.status(200).json(users);

   } catch (error: any) {
      res.status(400).send({ message: error.message });
   }
}

export async function getUserByIdHandler(req: AuthRequest, res: Response) {
   try {
      const { id } = req.users as Users;

      const user = await getUserById(id);
   
      if (!user) {
         return res.status(404).json({
            message: "User not found"
         });
      }
   
      res.status(200).json(user);

   } catch (error: any) {
      res.status(400).send({ message: error.message });
   }
}

export async function getUserByEmailHandler(req: AuthRequest, res: Response) {
   try {
      const { email } = req.users as Users;

      const user = await getUserByEmail(email);

      if (!user) {
         return res.status(404).json({
            message: "User not found"
         });
      }

   return res.status(200).json(user);

   } catch (error: any) {
      res.status(400).send({ message: error.message });
   }
}

export async function createUserHandler(req: Request, res: Response) {
   try {
      const data = req.body;

      const user = await createUser(data);

      res.status(201).json(user);

   } catch (error: any) {
      res.status(400).send({ message: error.message });
   }
}

export async function updateUserHandler(req: Request, res: Response) {
   try {
      const data = req.body

      const user = await updateUser( data );

      if (!user) {
         return res.status(404).json({
            message: "User not found"
         });
      }

      res.status(200).json(user);

   } catch (error: any) {
      res.status(400).send({ message: error.message });
   }
}

export async function deleteUserHandler(req: AuthRequest, res: Response) {
   try {
      const { id } = req.users as Users;
      const user = await getUserByEmail(id);

      if (!user) {
         return res.status(404).json({
            message: "User not found"
         });
      }

      await deleteUser(id);

   } catch (error: any) {
      res.status(400).send({ message: error.message });
   }
}
