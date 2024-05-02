import { Hono } from 'hono'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import {signupInput , signinInput} from '@ritikbora/common'
import { authMiddleware } from '../middlewares/auth';


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	},
   Variables :{
    userId: string
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

        const userResponse  = {
          id : user.id,
          name : user.name
        }
      const jwtToken =  await sign({id : user.id} , c.env.JWT_SECRET);

      return c.json({token : jwtToken , user : userResponse});
    }catch(err)
    {
      c.status(403);
		  return c.json({ error: "Error while signing up." });
    }
  }

  c.status(403);
	return c.json({ error: "Please fill all inputs" });
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
        },
        select : {
          id: true,
          name : true
        }
      })
  
      if(!user)
      {
        c.status(401);
        return c.json({error : "Invalid credentials"});
      }
     
        const jwtToken =  await sign({id : user.id} , c.env.JWT_SECRET);
        return c.json({token : jwtToken , user : user});
    }catch(err)
    {
      c.status(403);
      return c.json({ error: "Error while signing in" });
    }
  }
  c.status(403);
	return c.json({ error: "Error while signing in" });
})



app.get("/me" , authMiddleware ,async(c) =>
{
  
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const userId = c.get('userId');
  try
  {
    const user = await prisma.user.findFirst({
    where : {
      id : userId,
    },
    select :{
      name : true,
    }});

    c.status(200);
    return c.json({user : user})

  }catch(err)
  {
    c.status(403);
      return c.json({ error: "Error while fetching user details" });
  }
})




const userRoutes = app;
export default userRoutes;
