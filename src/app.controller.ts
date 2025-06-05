import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
// if injection token is string then we use @inject in constructor
  // ****************************************
// constructor(@Inject('Mail') private email: string[]) {
  // console.log(this.email);
// }
// with the help of private we can access it inside the class anywhere using this.email
// ****************************************
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
