/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	collectCoverageFrom: [
		'./server/**/*.{js,jsx,ts,tsx}',
		'./client/**/*.{js,jsx,ts,tsx}',
		'./src/**/*.{js,jsx,ts,tsx}',
		'!**/*.test.{js,jsx,ts,tsx}',
		'!**/dist/*.{js,jsx,ts,tsx}',
	],
	coverageDirectory: 'coverage/jest',
	coverageReporters: ['json-summary', 'text', 'json'],
	testEnvironment: 'node',
	testMatch: ['**.test.ts'],
	transform: {
		'.*.ts': [
			'ts-jest',
			{
				tsconfig: 'server/tsconfig.json',
			},
		],
	},
};
