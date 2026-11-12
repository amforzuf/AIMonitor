import { Controller, Get } from "@nestjs/common";

export interface HealthResponse {
    status: 'ok',
    service: 'agentops-api',
}

@Controller('health/live')
export class HealthController {
    @Get()
    getHealth(): HealthResponse {
        return {
            status: 'ok',
            service: 'agentops-api',
        }
    }
}