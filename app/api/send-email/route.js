import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { email, company, enquiry, country, number, name, message } = await req.json()

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@wildcurepharma.in',
      subject: 'New Enquiry!',
      text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nCompany: ${company}\nCountry: ${country}\nEnquiry: ${enquiry}\nMessage: ${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}