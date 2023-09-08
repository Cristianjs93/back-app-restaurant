import sgMail from '@sendgrid/mail';

export const sendMailSenGrid = (data: sgMail.MailDataRequired) => {
  const appikey = process.env.SENDGRID_API_KEY as string;
  sgMail.setApiKey(appikey);

  return sgMail.send(data);
};
