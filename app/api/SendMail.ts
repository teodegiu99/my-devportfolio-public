// console.log("dajeeeeeee")
// const formData = req.body;
// console.log(formData)
// interface formdata {
//   email: string;
//   name: string;
//   description: string;
// }
"use server";


export const sendMail = async(data: Record<string, string>) => {

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const formDataString = JSON.stringify(data);

const msg = {
  to: process.env.MAIL, // Change to your recipient
  from: process.env.MAIL, // Change to your verified sender
  subject: 'Nuovo contatto',
  text: formDataString,
  html: `Email: ${data.email}\n <br><br> Name: ${data.name}\n <br><br> Description: ${data.description} \n <br><br>  ${formDataString}`,
}
await sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error: any) => {
    console.error(error)
  })

  console.log("Email sent!");
console.log(formDataString);


// <strong>${formDataString}</strong>


}