import bcrypt from 'bcrypt';

export const hashPassword = async (password: string, factor?: number) => {
  const salt = await bcrypt.genSalt(factor);
  const data = await bcrypt.hash(password, salt);
  return data;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => {
  const comparedPassword = await bcrypt.compare(password, hashedPassword);
  return comparedPassword;
};

export const hashPasswordSync = (password: string, factor?: number) => {
  const salt = bcrypt.genSaltSync(factor);
  return bcrypt.hashSync(password, salt);
};
