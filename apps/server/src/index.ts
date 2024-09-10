import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono()

app.use('/*', cors({
    origin: ['http://localhost:3000']
}))
app.get(logger())

const route = app.get('/', (c) => {
    return c.text('Hello Hono!')
})

const port = 8080
console.log(`Server is running on port ${port}`)

serve({
    fetch: app.fetch,
    port
})

export type AppType = typeof route