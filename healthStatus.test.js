import { getHealthStatus } from './healthStatus';
describe('getHealthStatus', () => {
    test('should return "healthy" if health is more than 50', () => {
        const character = { name: 'Маг', health: 90 };
        expect(getHealthStatus(character)).toBe('healthy');
    });

    test('should return "wounded" if health is between 50 and 15', () => {
        const character = { name: 'Маг', health: 30 };
        expect(getHealthStatus(character)).toBe('wounded');
    });

    test('should return "critical" if health is less than 15', () => {
        const character = { name: 'Маг', health: 10 };
        expect(getHealthStatus(character)).toBe('critical');
    });
});