# Main Frontend Project

This is the main frontend application, built with React and Vite, that imports and uses components from a microfrontend service. The microfrontend is configured using [module federation](https://webpack.js.org/concepts/module-federation/) through the `@originjs/vite-plugin-federation` plugin, allowing remote components to be loaded and rendered dynamically.

## Overview

The main frontend application is configured to connect with a microfrontend hosted on a different server. The configuration in `vite.config.js` specifies the remote address of the microfrontend, enabling components to be imported seamlessly.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   This will start the server and allow the main frontend application to access remote components from the microfrontend.

## Configuration

In the `vite.config.js` file, the `federation` plugin is configured to specify the remote microfrontend location. Make sure the `microfront` service is running on `http://localhost:3005`, or update the URL in `vite.config.js` to point to the correct location.

### `vite.config.js`

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'main-frontend',
      remotes: {
        microfront: 'http://localhost:3005/dist/assets/remoteEntry.js',
      },
      shared: ['react'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
```

Since TypeScript cannot automatically recognize the source of the imported microfrontend components, you need to explicitly declare the microfrontend as a module. To do this, we've created a `microfront-module.d.ts` file, which defines the existence of the components you're trying to import:


You can either declare each one of them like this:
```typescript
// microfront-module.d.ts
declare module 'microfront/List';
declare module 'microfront/Input';
declare module 'microfront/ProfileImage';
```

Or you can declare it all like this:

```typescript
// microfront-module.d.ts
declare module 'microfront/*';

```

This file informs TypeScript that these components are available for import, even though they are loaded dynamically from a remote source.

## Using Components from the Microfrontend

You can now import and use exposed components from the microfrontend. For example:

```typescript
import React, { useState } from 'react';
import List from 'microfront/List';
import Input from 'microfront/Input';

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <div>
      <h1>Main Frontend</h1>
      <Input setItems={setItems} />
      <List items={items} />
    </div>
  );
};

export default App;
```

In this example:

- `List` and `Input` components are dynamically loaded from the microfrontend, available at `http://localhost:3005`.
- These components can be used directly within the main frontend application as if they were local components.

## Running the Application

1. Ensure that the **microfrontend project** is running and accessible.
2. Start the main frontend project:

   ```bash
   npm run dev
   ```

3. Open the application in your browser (usually `http://localhost:5173`), and you should see the microfrontend components rendered within the main frontend application.