# Personal Resume Website

A personal resume website built with FastAPI, featuring bilingual support (Russian/English) and responsive design.

## Features

- 🌐 Bilingual support (Russian/English)
- 📱 Responsive design
- 🎨 Modern UI with animations
- ⚡ Fast loading with FastAPI
- 📊 Interactive skills showcase
- 💼 Experience carousel

## Tech Stack

- **Backend**: FastAPI
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Custom CSS with gradients and animations
- **Icons**: Font Awesome
- **Deployment**: Vercel

## Local Development

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the development server:
```bash
python main.py
```

3. Open http://localhost:8000 in your browser

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy.

## Project Structure

```
├── main.py              # FastAPI application
├── static/              # Static files (CSS, JS, images)
│   ├── style.css
│   ├── script.js
│   └── me.jpg
├── templates/           # HTML templates
│   └── index.html
├── vercel.json         # Vercel configuration
├── requirements.txt    # Python dependencies
└── pyproject.toml     # Project configuration
```