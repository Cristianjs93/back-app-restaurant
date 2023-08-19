import bcrypt from 'bcrypt';

export const hashPassword = async (password: string, factor?: number) => {
  const salt = await bcrypt.genSalt(factor);

  await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => {
  await bcrypt.compare(password, hashedPassword);
};
