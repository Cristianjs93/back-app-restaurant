import { Request, Response } from 'express';
import { Users } from './user.types.ts';
import { AuthRequest } from '../../auth/auth.types.ts';

import {
  getAllUsers,
  getUserByEmail,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from './user.services.ts';

export async function getAllUsersHandler(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    return res.status(200).send(users);
  } catch (e: unknown) {
    let message;
    if (typeof e === 'string') {
      message = e.toUpperCase();
    } else if (e instanceof Error) {
      message = e.message;
    }
    return res.status(400).send(message);
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

    return res.status(200).send(user);
  } catch (e: unknown) {
    let message;
    if (typeof e === 'string') {
      message = e.toUpperCase();
    } else if (e instanceof Error) {
      message = e.message;
    }
    return res.status(400).send(message);
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

    return res.status(200).json(user);
  } catch (e: unknown) {
    let message;
    if (typeof e === 'string') {
      message = e.toUpperCase();
    } else if (e instanceof Error) {
      message = e.message;
    }
    return res.status(400).send(message);
  }
}

export async function createUserHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const user = await createUser(data);

    return res.status(201).json(user);
  } catch (e: unknown) {
    let message;
    if (typeof e === 'string') {
      message = e.toUpperCase();
    } else if (e instanceof Error) {
      message = e.message;
    }
    return res.status(400).send(message);
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

    return res.status(200).json(user);
  } catch (e: unknown) {
    let message;
    if (typeof e === 'string') {
      message = e.toUpperCase();
    } else if (e instanceof Error) {
      message = e.message;
    }
    return res.status(400).send(message);
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

    return await deleteUser(id);
  } catch (e: unknown) {
    let message;
    if (typeof e === 'string') {
      message = e.toUpperCase();
    } else if (e instanceof Error) {
      message = e.message;
    }
    return res.status(400).send(message);
  }
}
