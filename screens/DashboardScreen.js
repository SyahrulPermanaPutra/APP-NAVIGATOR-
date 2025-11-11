import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Switch,
  TextInput,
  Alert,
  ImageBackground,
} from "react-native";
import { styles, getImageContainerStyle } from "../themes/colors";

const DashboardScreen = ({ navigation, theme, username, setUsername, switchV, setSwitchV }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      
      {/* Header */}
      <View
        style={[
          styles.headerContainer,
          { backgroundColor: switchV ? theme.primary : theme.secondary },
        ]}
      >
        <Text style={styles.headerText}>Dashboard</Text>
      </View>

      {/* Input Username */}
      <TextInput
        style={[styles.textinput, { borderColor: theme.secondary }]}
        placeholder="Masukkan nama kamu"
        placeholderTextColor="#666"
        value={username}
        onChangeText={(val) => setUsername(val)}
      />

      <View style={styles.switch}>
        <Text style={{ color: "black", marginBottom: 5 }}>
          Ganti Warna Header
        </Text>
        <Switch 
          value={switchV} 
          onValueChange={(val) => setSwitchV(val)}
          trackColor={{ false: "#767577", true: theme.primary }}
          thumbColor={switchV ? theme.secondary : "#f4f3f4"}
        />
      </View>

      {/* Gambar dengan ImageBackground */}
      <TouchableOpacity
        style={styles.image}
        onPress={() => {
          Alert.alert("Informasi", "Apakah ingin melihat profil?", [
            {
              text: "Tidak",
              style: "cancel",
            },
            {
              text: "Ya",
              onPress: () => navigation.navigate('Profile'),
            },
          ]);
        }}
      >
        <View style={getImageContainerStyle()}>
          <ImageBackground
            source={require('../assets/images/OIP.jpg')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.dummyImageContent}>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
                Selamat datang {username || "User"}
              </Text>
              <Text style={{ color: "white", fontSize: 12, marginTop: 5 }}>
                {theme.name}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      {/* Tombol Navigasi */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.secondary }]}
        onPress={() => navigation.navigate('TodoList')}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Lihat To-Do List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Profil Saya</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#666" }]}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Pengaturan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;