# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## 🛠️ Project Structure & Component Generation

This project uses `generate-react-cli` to maintain a consistent component structure. 

### Component Setup:
- **Location:** All components are generated in `src/Components/`.
- **Style:** Each component includes a scoped `CSS Module` for specific styling.
- **Vite-Friendly:** Configured to work seamlessly with React and Vite.

### Generated Components:
The following base components have been initialized:
- **Core Layout:** `Navbar`, `Footer`, `Layout`, `Notfound`.
- **Pages:** `Home`, `Products`, `Categories`, `Brands`, `Cart`.
- **Auth:** `Login`, `Register`.

### Usage:
To generate a new component, run:
`npx generate-react-cli component ComponentName`