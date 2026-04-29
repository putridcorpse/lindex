# LInDex

A minimal AI-powered Linux command reference tool.  
Type a term or question and get the exact terminal command you need — instantly.

## Features

- AI-powered search via Gemini API
- Minimalist black & white design
- Works with any Linux-related question in any language

## Usage

1. Type a term or question (ex: `install package`, `show open ports`)
2. Press **Search** or hit **Enter**
3. Get the command + a brief explanation

## Setup

1. Clone the repo
```bash
   git clone https://github.com/seuusuario/lindex.git
   cd lindex
```

2. Get a free Gemini API key at [aistudio.google.com](https://aistudio.google.com)

3. Open `script.js` and add your key:
```js
   const API_KEY = "your-api-key-here"
```

4. Open `index.html` with Live Server

## Tech Stack

- HTML, CSS, JavaScript
- Gemini 2.0 Flash API

## License

MIT
