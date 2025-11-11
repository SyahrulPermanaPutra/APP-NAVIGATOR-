import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
  ToastAndroid,
} from "react-native";
import { styles } from "../themes/colors";

const SettingsScreen = ({ navigation, theme, currentThemeIndex, setCurrentThemeIndex, colorThemes }) => {
  const changeTheme = () => {
    const nextIndex = (currentThemeIndex + 1) % colorThemes.length;
    setCurrentThemeIndex(nextIndex);
    ToastAndroid.show(`Tema: ${colorThemes[nextIndex].name}`, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      
      <View style={[styles.headerContainer, { backgroundColor: theme.primary }]}>
        <Text style={styles.headerText}>Pengaturan</Text>
      </View>

      <View style={styles.settingsCard}>
        <Text style={styles.settingsTitle}>Tema Aplikasi</Text>
        <Text style={styles.settingsDescription}>
          Tema saat ini: {theme.name}
        </Text>
        
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.secondary, marginTop: 15 }]}
          onPress={changeTheme}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Ganti Tema Warna
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingsCard}>
        <Text style={styles.settingsTitle}>Tentang Aplikasi</Text>
        <Text style={styles.settingsDescription}>
          Aplikasi To-Do List dengan React Native
        </Text>
        <Text style={styles.settingsDescription}>
          Versi 1.0.0
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#666" }]}
        onPress={() => Linking.openURL("https://youtube.com/")}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Buka YouTube</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.secondary }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Kembali ke Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;