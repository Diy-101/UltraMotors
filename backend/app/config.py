from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    """Contain enviromental variables with validation

    Args:
        BaseSettings (BaseSettings): Default superclass
    """
    USER: str
    PASSWORD: str
    HOST: str
    PORT:int
    NAME: str
    model_config = SettingsConfigDict(
        env_prefix='DB_',
        env_file="../.env",
        env_file_encoding="utf-8",
        extra='ignore'
    )