// /api/send-email.js
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' })
  }

  const { email,company,enquiry,country,number, name, message } = req.body

  const msg = {
    from: 'ameramm7777@gmail.com', // Must be verified in SendGrid
    to: 'info@wildcurepharma.in', 
    subject: 'New enquiry!',
    text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nCompany: ${company}\nCountry: ${country}\nEnquiry: ${enquiry}\nMessage: ${message}`,
  }

  try {
    await sgMail.send(msg)
    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: error.message })
  }
}
