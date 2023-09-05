import { describe, expect, it, jest } from '@jest/globals';
import { logVersion } from './index';

describe('index', () => {
	describe('logVersion', () => {
		it('says app version', () => {
			const console = {
				log: jest.fn(),
			};
			logVersion(console);
			expect(console.log).toHaveBeenCalledWith(`current application version: ${process.env.APP_VERSION}`);
		});
	});
});
