# Tic Tac Toe

A simple Tic Tac Toe game built with React and Vite.

## Features

- 3x3 interactive game board
- Alternating turns between two players
- Winner detection for rows, columns, and diagonals
- Automatic board reset after a win

## Tech Stack

- React
- Vite
- JavaScript
- ESLint

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the app in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build in the `dist/` folder.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint across the project.

## Project Structure

```text
tic_tac_toe/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## GitHub Notes

Before pushing this project, make sure `node_modules/` is not committed. It is now included in `.gitignore`, so GitHub should only track your source files and configuration.
