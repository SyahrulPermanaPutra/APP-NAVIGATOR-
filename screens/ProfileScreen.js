import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { styles } from "../themes/colors";

const ProfileScreen = ({ navigation, theme, username }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      
      <View style={[styles.headerContainer, { backgroundColor: theme.primary }]}>
        <Text style={styles.headerText}>Profil Saya</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={[styles.avatar, { backgroundColor: theme.secondary }]}>
          <Text style={styles.avatarText}>
            {username ? username.charAt(0).toUpperCase() : 'U'}
          </Text>
        </View>
        
        <Text style={styles.profileName}>
          {username || "User"}
        </Text>
        <Text style={styles.profileEmail}>
          {username ? `${username.toLowerCase()}@email.com` : "user@email.com"}
        </Text>
        
        <View style={styles.profileInfo}>
          <Text style={styles.infoLabel}>Member sejak</Text>
          <Text style={styles.infoValue}>Januari 2024</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.secondary }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Kembali ke Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;