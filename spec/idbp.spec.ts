import { IDBP } from '../src/idbp';


describe('IDBP', () => {

	describe('initialize', () => {
		const testName : string = 'testName';

		it('ok', () => {
			const idb : IDBP = new IDBP();
			expect(idb).toBeTruthy();
		});

		describe('disabled', () => {
			beforeAll(() => {
				spyOnProperty(window, 'indexedDB', 'get').and.returnValue(undefined);
			});

			it('not init', () => {
				const idb : IDBP = new IDBP();
				expect(idb).toBeTruthy();
				// TODO: another check
			});
		});

	});

});
