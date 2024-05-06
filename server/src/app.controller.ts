import { Controller } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private messageService: MessageService) {}
  @MessagePattern('user')
  async accumulate(data: string) {
    return this.messageService.accumulate(data);
  }
}
