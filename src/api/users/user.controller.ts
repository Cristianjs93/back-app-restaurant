import { Request, Response } from 'express';
import { Users } from './user.types';
import { AuthRequest } from '../../auth/auth.types';
import errorHandler from '../../utils/errorHandler';

import {
  getAllUsers,
  getUserByEmail,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from './user.services';
import { sendMailSenGrid } from '../../config/sendGrid';

export async function getAllUsersHandler(req: Request, res: Response) {
  try {
    const users = await getAllUsers();

    const responseUsers = users;

    responseUsers.forEach((user: any) => delete user.id);

    res.status(200).send(responseUsers);
  } catch (exception: unknown) {
    const message = errorHandler(exception);

    res.status(400).send({ message });
  }
}

export async function getUserByIdHandler(req: AuthRequest, res: Response) {
  try {
    const { id } = req.users as Users;

    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).send(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}

export async function getUserByEmailHandler(req: AuthRequest, res: Response) {
  try {
    const { email } = req.users as Users;

    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}

export async function createUserHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const user = await createUser(data);

    const emailData = {
      from: 'AdminRicaApp <proyect.restaurant@gmail.com>',
      to: user.email,
      subjet: 'Welcome to Rica App',
      templateId: 'd-3db2b553b737446a8f0d7e80e706e6fe',
      dynamic_template_data: {
        firstname: user.firstName,
        lastname: user.lastName,
      },
    };
    sendMailSenGrid(emailData);

    res.status(201).json(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}

export async function updateUserHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const user = await updateUser(data);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}

export async function deleteUserHandler(req: AuthRequest, res: Response) {
  try {
    const { id } = req.users as Users;
    const user = await getUserByEmail(id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    await deleteUser(id);

    res.status(200).send(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}
