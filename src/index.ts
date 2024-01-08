import {  LanguagePack,  BaseLanguagePack } from './types';

export const languagePacks: BaseLanguagePack = {};

export const createLanguagePack = async (systemId: string, messages: LanguagePack, allowOverwrites?: boolean) => { 	
	if (languagePacks[systemId] !== undefined && allowOverwrites !== true) {
		throw new Error(
			`Language pack with id "${systemId}" already exists. Please use a different identifier.`
		);
	}

	languagePacks[systemId] = messages;
};

export const getLanguagePack = (systemId: string, specificLanguage?: 'RO' | 'EN'  |'DE' | 'ES' | 'IT' | 'RU') => {
	if (languagePacks[systemId] === undefined) {
		throw new Error(`Language pack "${systemId}" doesn't exist.`);
	}

	return {
		get: (messageId: string, args?: object) => {
			try {
				const messagePack = languagePacks[systemId][messageId];
				const desiredMessage = messagePack[specificLanguage!];
				const message = desiredMessage !== undefined ? desiredMessage : messagePack['EN'];

				if (message === undefined) {
					return messageId;
				}

				return typeof message === 'string' ? message : message(args);				
			} catch(error: any) {
				return messageId;	
			}
		}
	};
};

export * from './types';
