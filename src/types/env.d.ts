declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASEURL: string;
      CI: string | undefined;
    }
  }
}

export {} // This ensures the file is treated as a module.