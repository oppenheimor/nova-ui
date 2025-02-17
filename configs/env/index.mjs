/**
 * 环境变量配置
 */

export const developmentConfig = {
  ENV: 'development',
  SERVER: {
    BASE_PATH: '',
    BASE_ASSET_PREFIX: '',
  },
};

export const testingConfig = {
  ENV: 'testing',
  SERVER: {
    BASE_PATH: '/nova-ui',
    BASE_ASSET_PREFIX: '//testm.10jqka.com.cn/cd/nova-ui',
  },
};

export const productionConfig = {
  ENV: 'production',
  SERVER: {
    BASE_PATH: '/nova-ui',
    BASE_ASSET_PREFIX: '//s.thsi.cn/cd/nova-ui',
  },
};

/**
 * 获取当前环境配置
 * @returns {EnvConfig}
 */
export const getEnvConfig = () => {
  const env = (process.env.BUILD_ENV);
  switch (env) {
    case 'development':
      return developmentConfig;
    case 'testing':
      return testingConfig;
    case 'production':
      return productionConfig;
    default:
      return developmentConfig;
  }
};
