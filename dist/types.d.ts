export declare type LanguagesCallback = (args?: any) => string;
export interface Languages {
    EN: LanguagesCallback | string;
    RO?: LanguagesCallback | string;
    DE?: LanguagesCallback | string;
    ES?: LanguagesCallback | string;
    IT?: LanguagesCallback | string;
    RU?: LanguagesCallback | string;
}
export interface LanguagePack {
    [key: string]: Languages;
}
export interface BaseLanguagePack {
    [key: string]: LanguagePack;
}
//# sourceMappingURL=types.d.ts.map