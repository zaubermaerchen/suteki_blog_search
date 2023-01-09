/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_BASE_PATH?: string;
  readonly VITE_API_SERVER_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
