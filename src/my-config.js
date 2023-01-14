export const appConfig = {
  debug: true,
  devUrl: 'http://localhost:3000',
  devServerUrl: 'http://localhost:3005',
  prodUrl: 'https://www.petpet.com',
}

export const MY_HOST = appConfig.devServerUrl

export const imgNodeUrl = appConfig.devServerUrl

export const imgServerUrl = appConfig.debug
  ? appConfig.devServerUrl
  : appConfig.prodUrl
