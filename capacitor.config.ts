const config = {
  appId: 'com.fatest.app',
  appName: 'Fatest',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav"
    }
  },
  ios: {
    scrollEnabled: false
  }
};

export default config;
