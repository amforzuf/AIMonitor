import { Test, TestingModule } from "@nestjs/testing";
import { HealthController } from "./health.controller.js";

describe('HealthController', () => {
    let controller: HealthController;

    beforeEach(async () => {
        const module: TestingModule = 
            await Test.createTestingModule({
                controllers: [HealthController],
            }).compile();
        
        controller = module.get<HealthController>(
            HealthController,
        );
    })

    describe('getHealth', () => {
        it('should return health status', () => {
            const result = controller.getHealth();

            expect(result).toEqual({
                status: 'ok',
                service: 'agentops-api',
            })
        })
    });
});

