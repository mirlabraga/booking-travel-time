export class TravelTimeQueryService {
    private static instance: TravelTimeQueryService;
    
    public constructor() {}
    
    public static getInstance(): TravelTimeQueryService {
        if (!TravelTimeQueryService.instance) {
        TravelTimeQueryService.instance = new TravelTimeQueryService();
        }
        return TravelTimeQueryService.instance;
    }

    public async getValidHourForYearAndDay(year: any, day: any) {
    }

    public async getValidHourOnYearAndMonth(year: any, month: any) {
    }
}