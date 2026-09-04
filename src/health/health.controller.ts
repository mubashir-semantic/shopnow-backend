import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  checkHealth() {
    return {
      success: true,
      message: 'ShopNow NestJS Backend is up and running!',
      timestamp: new Date().toISOString(),
    };
  }
}