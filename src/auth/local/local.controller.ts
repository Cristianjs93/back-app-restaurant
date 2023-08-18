import { Request, Response } from 'express';

import { getUserByEmail } from '../../api/users/user.services';
import { comparePassword } from '../utils/bycript';
import { signToken } from '../auth.services'; 

export async function loginHandler(req: Request, res: Response){
  const { email, password } = req.body;

  try {
    const users = await getUserByEmail(email);

    if(!users) {
      return res.status(401).send('Invalid credentials');
    }

    const isMatch = await comparePassword(password, users.password)
    
    if(!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    const payload = {
      id: users.id,
      email: users.email,
    }
    const token = signToken(payload)

    const newUser = {
      firstName: users.firstname,
      lastName: users.lastname,
      email: users.email,      
      role: users.roleId
    }

    return res.status(200).json({ token, newUser})

  } catch(error) {}
}