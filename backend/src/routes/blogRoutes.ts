import { Hono } from 'hono'
import { verify } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {createPostInput , updatePostInput} from '@ritikbora/common';


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables :{
    userId: string
  }
}>()

app.use('/*', async (c, next) => {

  const jwt = c.req.header('Authorization');
  
  if(!jwt)
  {
    c.status(401);
		return c.json({ error: "unauthorized" });
  }
  
  const token = jwt.split(' ')[1];
	const payload = await verify(token, c.env.JWT_SECRET);
  if(!payload)
  {
    c.status(401);
		return c.json({ error: "unauthorized" });
  }
    
  c.set('userId', payload.id);
	await next()
})


app.post('/', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const {success} = createPostInput.safeParse(body);

  if(!success)
  {
    c.status(401);
		return c.json({ error: "invalid post body" });
  }

  try
  {
    const post = await prisma.post.create({
      data : {
        title : body.title,
        content: body.content,
        authorId : c.get('userId')
      }
    })
    c.status(200);
    return c.json({id : post.id});
  }catch(err)
  {
    console.log(err);
    c.status(500);
		return c.json({ error: "Error occured while adding blog" });
  }
})

app.put('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const {success} = updatePostInput.safeParse(body);

  if(!success)
  {
    c.status(401);
		return c.json({ error: "invalid post body" });
  }

  try
  {
    await prisma.post.update({
      where : {
        id : body.id,
        authorId : c.get('userId')
      },
      data : {
        title : body.title,
        content : body.content
      }
    });
    return c.text('updated post');

  }catch(err)
  {
    console.log(err);
    c.status(500);
		return c.json({ error: "Error occured while updating blog" });
  }
})

app.get("/:id" , async (c) =>
{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param('id').trim();
        
    try
    {
      const post = await prisma.post.findUnique({
        where: {
          id : id
        }
      });
      return c.json(post);
    }catch(err)
    {
      c.status(500);
      return c.json({ error: "Error occured while fetching blog" });
    }
    
})


const blogRoutes = app;
export default blogRoutes;
