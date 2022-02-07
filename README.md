# Vespucci Multiplayer - i18n Integration

> A simple library used to handle our multi-language needs.

> :warning: **Important!** This is a very simple implementation of i18n used in Vespucci Multiplayer projects

# 📦 Installation

-   Using yarn: `yarn add github:vespucci-mp/i18n#build`
-   Using npm: `npm i github:vespucci-mp/i18n#build`
-   Using pnpm: `pnpm add github:vespucci-mp/i18n#build`

# 🤓 Usage

```ts
import { createLanguagePack, getLanguagePack } from '@vmp/i18n';

createLanguagePack(`Login`, {
	WELCOME_USER: {
		EN: ({ name }) => `Welcome ${name}!`
	}
});

const lang = getLanguagePack('Login', 'EN');

console.log(lang.get('WELCOME_USER', { name: 'Vatto ' }));
```

## 👨‍💻 Contributing

To contribute to this repository, feel free to create a new fork of the repository and submit a pull request.

1. Fork / Clone and select the `main` branch.
2. Create a new branch in your fork.
3. Make your changes.
4. Commit your changes, and push them.
5. Submit a Pull Request [here](https://github.com/vespucci-mp/i18n/pulls)!

## 📋 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
