import uvicorn

if __name__ == "__main__":
    uvicorn.config.LOGGING_CONFIG["formatters"]["default"]["datefmt"] = "%Y-%m-%d %H:%M:%S"
    uvicorn.run("app.main:app", host='0.0.0.0', port=8000, reload=False)