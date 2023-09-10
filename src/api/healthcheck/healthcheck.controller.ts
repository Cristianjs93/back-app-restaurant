import { Request, Response } from 'express';

export const healthcheckHandler = (req: Request, res: Response) => {
  res.status(200).send({ message: 'Server ok' });
};
