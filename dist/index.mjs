var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.ts
var languagePacks = {};
var createLanguagePack = /* @__PURE__ */ __name(async (systemId, messages) => {
  if (languagePacks[systemId] !== void 0) {
    throw new Error(`Language pack with id "${systemId}" already exists. Please use a different identifier.`);
  }
  languagePacks[systemId] = messages;
}, "createLanguagePack");
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
export {
  createLanguagePack,
  getLanguagePack,
  languagePacks
};
