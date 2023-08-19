import { Request, Response } from 'express';

const healthcheckHandler = (req: Request, res: Response) => {
  return res.status(200).send({ message: 'Server ok' });
};

export default {
  healthcheckHandler,
};
