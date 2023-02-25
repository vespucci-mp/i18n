"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  createLanguagePack: () => createLanguagePack,
  createServerLanguagePack: () => createServerLanguagePack,
  getLanguagePack: () => getLanguagePack,
  languagePacks: () => languagePacks
});
var languagePacks = {};
var createLanguagePack = /* @__PURE__ */ __name(async (systemId, messages, serverside) => {
  if (serverside === true && languagePacks[systemId])
    return;
  if (languagePacks[systemId] !== void 0) {
    throw new Error(`Language pack with id "${systemId}" already exists. Please use a different identifier.`);
  }
  languagePacks[systemId] = messages;
}, "createLanguagePack");
var createServerLanguagePack = /* @__PURE__ */ __name(async (systemId, messages) => createLanguagePack(systemId, messages, true), "createServerLanguagePack");
var getLanguagePack = /* @__PURE__ */ __name((systemId, specificLanguage) => {
  if (languagePacks[systemId] === void 0) {
    throw new Error(`Language pack "${systemId}" doesn't exist.`);
  }
  return {
    get: (messageId, args) => {
      try {
        const messagePack = languagePacks[systemId][messageId];
        const desiredMessage = messagePack[specificLanguage];
        const message = desiredMessage !== void 0 ? desiredMessage : messagePack["EN"];
        if (message === void 0) {
          return messageId;
        }
        return typeof message === "string" ? message : message(args);
      } catch (error) {
        return messageId;
      }
    }
  };
}, "getLanguagePack");
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createLanguagePack,
  createServerLanguagePack,
  getLanguagePack,
  languagePacks
});
