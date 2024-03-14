import { createClient } from '@libsql/client'
import 'dotenv/config'

import { drizzle } from 'drizzle-orm/libsql'


// const TURSO_CONNECTION_URL="libsql://janvani-karthik-s-salian.turso.io"
// const TURSO_AUTH_TOKEN="eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJleHAiOjE3MTA3MjAwMTIsImlhdCI6MTcxMDQyMDkyMywiaWQiOiI1M2E0NDE5NC0zMzg0LTQ4NTctYjgzMS0zNGYzZjdlMDMzMjYifQ.Pt8PlzMHnzfUKJhH422BoxzOjVBK8E1lgrp024hXjyY2ZY0sjtnoclnac5SN2mTQJ5xkTr6xM9hbO-gvtv-jBQ"

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})
export const db = drizzle(client)