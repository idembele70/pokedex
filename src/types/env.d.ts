declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASEURL: string;
      LOCAL: string | undefined;
    }
  }
}

export {} // This ensures the file is treated as a module.