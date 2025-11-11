import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo dengan Gambar */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/OIP.jpg')} // Ganti dengan path logo Anda
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>MY APP</Text>
      </View>
      
      {/* Tulisan */}
      <Text style={styles.welcomeText}>Selamat Datang</Text>
      <Text style={styles.subText}>Aplikasi To-Do List</Text>
      
      {/* Loading Indicator */}
      <View style={styles.loadingContainer}>
        <View style={styles.loadingBar}>
          <View style={styles.loadingProgress} />
        </View>
        <Text style={styles.loadingText}>Memuat aplikasi...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00796b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: 'white',
    opacity: 0.8,
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
    width: '80%',
  },
  loadingBar: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
    marginBottom: 10,
    overflow: 'hidden',
  },
  loadingProgress: {
    height: '100%',
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 2,
  },
  loadingText: {
    color: 'white',
    fontSize: 14,
    opacity: 0.7,
  },
});

export default SplashScreen;