import { Request, Response } from 'express';

import { getUserByEmail } from '../../api/users/user.services';
import { comparePassword } from '../utils/bycript';
import { signToken } from '../auth.services';
import errorHandler from '../../utils/errorHandler';

export async function loginHandler(req: Request, res: Response) {
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
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.roleId,
    };

    res.status(200).send({ token, newUser });
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}
