import { transform, untransform } from './schema-transform';

describe('schema transform', () => {
	test('transform remote bookmark to local bookmark', () => {
		const remoteBm: RemoteBookmark = {
			id: 123,
			metadata: 'meta',
			desc: '',
			url: 'URL',
			tags: '1,b,xx,',
			flags: 0,
		};

		const expectedLocalBm: LocalBookmark = {
			id: 123,
			title: 'meta',
			tags: new Set(['1', 'b', 'xx']),
			url: 'URL',
			desc: '',
			flags: 0,
		};

		expect(transform(remoteBm)).toMatchObject(expectedLocalBm);
	});

	test('untransform local bookmark to remote bookmark', () => {
		const localBm: LocalBookmark = {
			id: 123,
			title: 'meta',
			tags: new Set(['1', 'b', 'xx']),
			url: 'URL',
			desc: '',
			flags: 0,
		};

		const expectedRemoteBm: RemoteBookmark = {
			id: 123,
			metadata: 'meta',
			desc: '',
			url: 'URL',
			tags: '1,b,xx',
			flags: 0,
		};

		expect(untransform(localBm)).toMatchObject(expectedRemoteBm);
	});
});
