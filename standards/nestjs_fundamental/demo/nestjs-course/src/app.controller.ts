import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get() // method: GET, path "" ~ "/"
  getHello(): string {
    return 'Welcome to NestJS Course!';
  }
}

// GET http://localhost:3000/ --> AppController.getHello()