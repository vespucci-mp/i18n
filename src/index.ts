import { type LanguagePack, type BaseLanguagePack } from './types';

export const languagePacks: BaseLanguagePack = {};

export const createLanguagePack = async (systemId: string, messages: LanguagePack) => {
	if (languagePacks[systemId] !== undefined) {
		throw new Error(
			`Language pack with id "${systemId}" already exists. Please use a different identifier.`
		);
	}

	languagePacks[systemId] = messages;
};

export const getLanguagePack = (systemId: string, specificLanguage?: 'RO' | 'EN') => {
	if (languagePacks[systemId] === undefined) {
		throw new Error(`Language pack "${systemId}" doesn't exist.`);
	}

	return {
		get: (messageId: string, args: object) => {
			const messagePack = languagePacks[systemId][messageId];
			const desiredMessage = messagePack[specificLanguage!];
			const message = desiredMessage !== undefined ? desiredMessage : messagePack['EN'];

			return typeof message === 'string' ? message : message(args);
		}
	};
};
