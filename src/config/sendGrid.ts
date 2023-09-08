import sgMail from '@sendgrid/mail';

export const sendMailSenGrid = (data: sgMail.MailDataRequired) => {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;
  sgMail.setApiKey(SENDGRID_API_KEY);

  return sgMail.send(data);
};
