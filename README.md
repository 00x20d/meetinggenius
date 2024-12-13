# Meeting Genius Chrome Extension

A Chrome extension built with React, TypeScript, and Vite that serves as an AI-powered meeting assistant.

## Features

- Chrome extension popup interface
- React + TypeScript for type-safe development
- Vite for fast development and building
- TailwindCSS for styling

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Google Chrome browser

## Setup

1. Clone the repository:

```bash
git clone [your-repository-url]
cd meetinggenius
```

2. Install dependencies:

```bash
npm install
```

3. Build the extension:

```bash
npm run build
```

4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked"
   - Select the `dist` folder from your project directory

## Development

To start development with hot-reload:

```bash
npm run dev
```

The extension will be built to the `dist` folder. After making changes, you'll need to:

1. Rebuild the extension using `npm run build`
2. Refresh the extension in `chrome://extensions/`

## Project Structure

```
meetinggenius/
├── src/                # Main source files
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── popup/             # Extension popup
│   └── Popup.tsx      # Popup component
├── manifest.json      # Extension manifest
├── vite.config.ts     # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the extension
- `npm run preview` - Preview the build locally

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
