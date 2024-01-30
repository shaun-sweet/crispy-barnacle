const getEnvVariables = () => {
  return {
    MODE: import.meta.env.MODE,
    IS_DEV: import.meta.env.DEV,
    IS_PROD: import.meta.env.PROD,
  };
};

export const ENV_VARS = getEnvVariables();
