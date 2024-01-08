export type LanguagesCallback = (args?: any) => string;

export interface Languages {
	EN: LanguagesCallback | string;
	RO?: LanguagesCallback | string;
	DE?: LanguagesCallback | string;
}

export interface LanguagePack {
	[key: string]: Languages;
}

export interface BaseLanguagePack {
	[key: string]: LanguagePack;
}
