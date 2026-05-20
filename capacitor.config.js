/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: 'com.maikonraquel',
  appName: 'APK Builder5',
  webDir: 'dist',
  server: { androidScheme: 'https', cleartext: false },
  android: { buildOptions: { releaseType: 'APK' } },
  plugins: { SplashScreen: { launchShowDuration: 0 } },
};
module.exports = config;
