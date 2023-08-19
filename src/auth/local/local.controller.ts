import { Request, Response } from 'express';

import { getUserByEmail } from '../../api/users/user.services.ts';
import { comparePassword } from '../utils/bycript.ts';
import { signToken } from '../auth.services.ts';

async function loginHandler(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    const payload = {
      id: user.id,
      email: user.email,
    };
    const token = signToken(payload);

    const newUser = {
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
      role: user.roleId,
    };

    return res.status(200).json({ token, newUser });
  } catch (error: any) {
    return res.status(400).send({ message: error.message });
  }
}

export default {
  loginHandler,
};
