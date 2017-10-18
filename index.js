import { Server, GET, Response, MediaType } from 'organiser'

class HelloWorld {
  @GET
  async foo () {
    return Response.ok('Hello, world!', MediaType.TEXT_PLAIN).build()
  }
}

const server = new Server()
server.routes(HelloWorld)
server.boot()
