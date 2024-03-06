import { Hono } from 'hono'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign  } from 'hono/jwt';
import {signupInput , signinInput} from '@ritikbora/common'


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	}
}>();

app.post('/signup', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const {success} = signupInput.safeParse(body);

  if(success)
  {
    try
    {
       const user = await prisma.user.create({data :
        {
          name: body.name,
          email : body.email,
          password : body.password
        }});

      const jwtToken =  await sign({id : user.id} , c.env.JWT_SECRET);

      return c.json({token : jwtToken});
    }catch(err)
    {
      c.status(403);
      console.log(err);
		  return c.json({ error: "error while signing up" });
    }
  }

  c.status(403);
	return c.json({ error: "error while signing up" });
})

app.post('/signin', async(c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const {success} = signinInput.safeParse(body);

  if(success)
  {
    try
    {
      const user = await prisma.user.findUnique({
        where: {
          email : body.email,
          password : body.password
        }
      })
  
      if(!user)
      {
        c.status(401);
        return c.json({error : "Invalid credentials"});
      }
     
        const jwtToken =  await sign({id : user.id} , c.env.JWT_SECRET);
        return c.json({token : jwtToken});
    }catch(err)
    {
      c.status(403);
      return c.json({ error: "Error while signing in" });
    }
  }
  c.status(403);
	return c.json({ error: "Error while signing in" });
})


const userRoutes = app;
export default userRoutes;
