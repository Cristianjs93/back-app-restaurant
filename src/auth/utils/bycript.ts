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
  const comparePass = await bcrypt.compare(password, hashedPassword);

  return comparePass;
};
