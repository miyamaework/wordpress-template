# npm workspaceを使用したmonorepo構成

公式ドキュメント
https://docs.npmjs.com/cli/v7/using-npm/workspaces

```bash
npm init -w ./packages/wp-theme

npm i -S foo --workspace=packages/wp-theme
npm i -D foo --workspace=packages/wp-theme

npm uninstall foo --workspace=packages/wp-theme

npm run build --workspace=a
npm run build --workspace=a --workspace=b
npm run build --workspaces
```
