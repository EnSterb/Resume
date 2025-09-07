from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.templating import Jinja2Templates
from pathlib import Path

app = FastAPI(title="Portfolio Website")

# Get the directory paths
current_dir = Path(__file__).parent
parent_dir = current_dir.parent

# Setup templates
templates = Jinja2Templates(directory=str(parent_dir / "templates"))

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse(
        "index.html", 
        {"request": request}
    )

@app.get("/static/{file_path:path}")
async def get_static_file(file_path: str):
    static_file = parent_dir / "static" / file_path
    if static_file.exists():
        return FileResponse(static_file)
    return {"error": "File not found"}

# Export for Vercel
handler = app
