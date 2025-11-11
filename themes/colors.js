export const colorThemes = [
  { primary: "#00796b", secondary: "#03a9f4", name: "Teal Blue" },
  { primary: "#d32f2f", secondary: "#f44336", name: "Red Theme" },
  { primary: "#388e3c", secondary: "#4caf50", name: "Green Theme" },
  { primary: "#7b1fa2", secondary: "#9c27b0", name: "Purple Theme" },
  { primary: "#ff6f00", secondary: "#ff9800", name: "Orange Theme" }
];

export const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    paddingVertical: 20,
  },
  headerText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 25,
  },
  textinput: {
    borderWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 15,
    color: "black",
    height: 45,
    backgroundColor: "white",
  },
  switch: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  dummyImageContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 8,
  },
  button: {
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  flatlistitem: {
    marginBottom: 15,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    elevation: 2,
  },
  subHeader: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  todoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  profileCard: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  settingsCard: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  settingsDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
};

export const getImageContainerStyle = () => {
  return {
    width: 300,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  };
};