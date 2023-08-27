import { Users } from '../api/users/user.types.ts';

export const welcomeEmail = (users: Users) => {
  type Styles = {
    container: string;
    title: string;
  };

  const styles: Styles = {
    container: `
      background-color: #f9f9f9;
      text-align: center;
    `,
    title: `
      font-size: 2rem;
      color: #f13f4b;
    `,
  };

  const email = {
    from: 'AdminRicaApp<proyect.restaurant@gmail.com>',
    to: users.email,
    subject: 'Welcome to Rica App',
    html: `
    <div>
      <h1>Welcome to Rica App</h1>
      <p>Hi, ${users.firstName} ${users.lastName}!</p>
      <p>Thank you for joining our site! We are thrilled to have you as a member. Your profile has been successfully created, and now you can enjoy all of our features. If you have any questions or need assistance, please don't hesitate to contact us.</p>
      <p>We hope you enjoy your time on our app.!</p>
      <br>
      <p>Greetings!</p>
      <p>The Rica App Team</p>
      <p>&copy; 2023 Rica App Inc. All rights reserved.</p>
    </div>
  `,
    text: 'Welcome to Rica App',
  };

  return email;
};
