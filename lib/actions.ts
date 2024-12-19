"use server"
import { neon } from "@neondatabase/serverless"

export async function getBalance(pan: string) {
  // biome-ignore lint/style/noNonNullAssertion: DATABASE_URL will always be defined in env
  const sql = neon(process.env.DATABASE_URL!)
  const data = await sql`SELECT balance FROM users WHERE card_number = ${pan}`

  if (!data || data.length === 0) {
    return undefined
  }

  return data[0].balance
}