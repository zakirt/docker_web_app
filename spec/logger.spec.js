describe('logger', () => {
    'use strict';

    const logger = require('../utils/logger');

    it('should have logInfo, logError methods', () => {
        expect(typeof logger.logInfo).toBe('function');
        expect(typeof logger.logError).toBe('function');
    });

    describe('logInfo', () => {
        beforeEach(() => {
            spyOn(console, 'log').and.callFake(() => { });
        });

        it('should call console.log', () => {
            const args = ['This is a custom message', 55, [1, 2, 3]];
            logger.logInfo(...args);
            expect(console.log).toHaveBeenCalledWith(...args);
        });

        it('should return reference to logger object', () => {
            const result = logger.logInfo('test message');
            expect(result).toBe(logger);
        });
    });

    describe('logError', () => {
        beforeEach(() => {
            spyOn(console, 'error').and.callFake(() => { });
        });

        it('should call console.error', () => {

            const args = ['This is a custom message', 55, [1, 2, 3]];
            logger.logError(...args);
            expect(console.error).toHaveBeenCalledWith(...args);
        });

        it('should return reference to logger object', () => {
            const result = logger.logError('test message');
            expect(result).toBe(logger);
        });
    });
});
