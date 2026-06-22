import { Elysia } from 'elysia'

new Elysia()
    .get('/user/:id', ({ params: { id } }) => id)
    .listen(3000)
    
console.log(
  `🦊 Elysia is running`
);
