import { Request, Response } from 'express';

export const healthcheckHandler = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server ok' });
};
