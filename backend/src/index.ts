import { Hono } from 'hono'
import apiRoutes from './routes/userRoutes'
import blogRoutes from './routes/blogRoutes'
import { cors } from 'hono/cors'

const app = new Hono()
app.use(cors());
app.route("/api/v1/user" , apiRoutes);
app.route("/api/v1/blog" , blogRoutes);


export default app
