# Developer Notes

## Quick start

```sh
npm install
npm run build
```

Press **F5** in VS Code to launch the Extension Development Host with all six themes loaded.
Then CMD+K + CMD+T to open the theme picker and try them out.

## Adding or changing colours

1. Edit the relevant `src/themes/*.ts` files.
2. When adding a new colour key, add it to **all six** theme files — key parity across themes is a hard invariant.
3. Run `npm run build`.
4. Validate JSON and manifest:
   ```sh
   for f in themes/*.json; do python3 -m json.tool "$f" > /dev/null && echo "ok $f"; done
   npx @vscode/vsce ls
   ```
5. Press F5 and eyeball the change in the dev host.

## Build Package

```sh
npm run build
npx @vscode/vsce ls
npx @vscode/vsce package
```

To install it locally for testing outside the dev host:

```sh
code --install-extension microbit-themes-<version>.vsix
```

## Marketplace screenshots

The six per-theme screenshots and the composite preview live in `docs/screenshots/`.

1. Launch the Extension Development Host (**F5**) and pick a theme (`CMD+K CMD+T`).
2. Arrange the window how you want it to look.
3. Save all screenshots as `docs/screenshots/microbit-{family}-{mode}.png`
4. Generate the composite:
   ```sh
   npm run screenshots:compose
   ```
   This writes:
   - `docs/screenshots/preview.png` — full-resolution 3×2 grid (Pixel / Spark / Halo across, Light / Dark down), transparent background.
   - `docs/screenshots/preview-small.png` — 1500px-wide downscale, suitable for the README hero / marketplace image.

`docs/**` is excluded from the published `.vsix` via `.vscodeignore`, so these images live in the repo and are referenced from the marketplace README via raw GitHub URLs.

## Release flow

1. Bump `version` in `package.json` (semver).
2. Update `CHANGELOG.md` and ensure it has all changes documented.
3. Commit and push.
4. Create a GitHub release for tag `vX.Y.Z`.
5. The `publish.yml` workflow publishes the extension to the VS Code Marketplaceand and Open VSX Registry.

For a dry run without publishing: **Actions → Publish → Run workflow** with `dry_run: true`.
