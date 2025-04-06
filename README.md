# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Based on the following tutorial: https://www.youtube.com/watch?v=YQCDUJ6hhNY

## Setup


```
npm create vite@latest
```
 * choose the project_name
 * framework -> react
 * choose javascript flavor (typescript, etc)

```
cd project_name
npm install
```

First time also need the following dependencies:
```
npm install @fontsource/roboto @fontsource/outfit
```

## Dev Mode
```
npm run dev
```

## Deploy
```
npm run build
npm run deploy -- -m "Optional commit message"
```