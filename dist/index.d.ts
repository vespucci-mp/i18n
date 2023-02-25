import { type LanguagePack, type BaseLanguagePack } from './types';
export declare const languagePacks: BaseLanguagePack;
export declare const createLanguagePack: (systemId: string, messages: LanguagePack, serverside?: boolean | undefined) => Promise<void>;
export declare const getLanguagePack: (systemId: string, specificLanguage?: "RO" | "EN" | undefined) => {
    get: (messageId: string, args?: object | undefined) => string;
};
export * from './types';
//# sourceMappingURL=index.d.ts.map