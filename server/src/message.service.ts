import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  public accumulate(data: string): string {
    return `Hello ${data}!`;
  }
}
