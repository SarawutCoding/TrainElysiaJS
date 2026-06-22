import { Elysia } from "elysia";

new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/Hello", () => {
    return "Hello World";
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running`
);
