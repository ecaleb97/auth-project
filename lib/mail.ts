import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);  

export const sendVerificationEmail = async (
  email: string,
  token: string
) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`
  console.log(email)
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your email",
    html: `
      <h1>Verify your email</h1>
      <p>Click <a href="${confirmLink}">here</a> to verify your email.</p>
    `
  })
}

export const sendResetPasswordEmail = async (
  email: string,
  token: string
) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `
      <h1>Reset your password</h1>
      <p>Click <a href="${resetLink}">here</a> to reset your password.</p>
    `
  })
}

export const sendTwoFactorEmail = async (
  email: string,
  token: string
) => {

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Two factor authentication code",
    html: `
      <p> Your two factor authentication code: ${token}</p>
    `
  })
}