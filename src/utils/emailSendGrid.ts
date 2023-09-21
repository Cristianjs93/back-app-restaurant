import { Users } from '../api/users/user.types';

export const welcomeEmail = (user: Users) => {
  const emailData = {
    from: 'AdminRicaApp <proyect.restaurant@gmail.com>',
    to: user.email,
    subjet: 'Welcome to Rica App',
    templateId: 'd-3db2b553b737446a8f0d7e80e706e6fe',
    dynamic_template_data: {
      firstName: user.firstName,
      lastName: user.lastName,
    },
  };

  return emailData;
};
