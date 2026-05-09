# micro:bit Themes for VS Code

Six VS Code colour themes inspired by the micro:bit.
**Pixel**, **Spark**, and **Halo**, each in light and dark versions.

![placeholder hero screenshot](docs/screenshots/hero.png)
*Hero screenshot pending.*

## Themes

| Theme                 | Mode  | Chrome pair      |
| --------------------- | ----- | ---------------- |
| micro:bit Pixel Light | Light | Green / Blue     |
| micro:bit Pixel Dark  | Dark  | Green / Blue     |
| micro:bit Spark Light | Light | Red / Orange     |
| micro:bit Spark Dark  | Dark  | Red / Orange     |
| micro:bit Halo Light  | Light | Purple / Teal    |
| micro:bit Halo Dark   | Dark  | Purple / Teal    |

## Install

**From the Marketplace**

1. Open the Extensions view (`⇧⌘X` / `Ctrl+Shift+X`).
2. Search for `micro:bit Themes`.
3. Click **Install**.

## Activate a theme

1. Press `F1` (or `⇧⌘P` / `Ctrl+Shift+P`).
2. Run **Preferences: Color Theme**.
3. Pick any **micro:bit …** entry.

## Screenshots

Screenshots of each theme live in `docs/screenshots/`. They are not
yet captured — see `TODO.md`.

## Local development

This is a themes-only extension; no compilation is needed.

1. Open the repo in VS Code.
2. Press `F5` — the Extension Development Host launches with the
   themes available.
3. In the dev host: **F1 → Preferences: Color Theme** to pick one.

To produce a `.vsix` for manual install or release:

```sh
npm install -g @vscode/vsce
vsce package
code --install-extension microbit-themes-<version>.vsix
```

To list everything that would ship and validate the manifest without
producing a package:

```sh
vsce ls
```

## Disclaimer

These themes are not affiliated with or endorsed by the Micro:bit
Educational Foundation.

## License

[MIT](LICENSE).
