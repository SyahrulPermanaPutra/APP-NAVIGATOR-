import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from "react-native";
import { styles } from "../themes/colors";

const TodoListScreen = ({ navigation, theme, todos, setTodos }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      
      <View style={[styles.headerContainer, { backgroundColor: theme.primary }]}>
        <Text style={styles.headerText}>Daftar Tugas</Text>
      </View>

      <View style={styles.todoHeader}>
        <Text style={styles.subHeader}>Total Tugas: {todos.length}</Text>
        <Text style={styles.subHeader}>
          Selesai: {todos.filter(todo => todo.done).length}
        </Text>
      </View>

      <FlatList
        style={{ flex: 1, paddingTop: 10 }}
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.flatlistitem,
              { 
                backgroundColor: item.done ? "#4CAF50" : theme.secondary,
                borderLeftWidth: 4,
                borderLeftColor: item.done ? "#388E3C" : theme.primary
              },
            ]}
            onPress={() => {
              setTodos((prev) =>
                prev.map((t) =>
                  t.id === item.id ? { ...t, done: !t.done } : t
                )
              );
              ToastAndroid.show(
                item.done
                  ? `${item.title} ditandai belum selesai`
                  : `${item.title} selesai ✅`,
                ToastAndroid.SHORT
              );
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              {item.done ? "✅ " : "⬜ "} {item.title}
            </Text>
            <Text style={{ color: "white", fontSize: 10, opacity: 0.8 }}>
              Klik untuk mengubah status
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.secondary }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Kembali ke Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoListScreen;