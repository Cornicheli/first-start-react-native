import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  Image,
  Button,
  Alert,
} from "react-native";

const conchudo = {
  uri: "https://images.wallpaperscraft.com/image/single/city_street_movement_136678_1920x1080.jpg",
};

export default function Profile() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={conchudo}
        resizeMode="cover"
        style={styles.photo}
      >
        <Text style={styles.textTitle}>Profile Edit</Text>
        <View>
          <View style={styles.containerImage}>
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/107517584?v=4",
              }}
              style={{
                height: 170,
                width: 170,
                borderColor: "black",
                borderWidth: 5,
                borderRadius: 100,
                alignContent: "center",
              }}
            />
          </View>
          <View style={styles.textProfile}>
            <Text style={styles.textNameProfile}>YOUR EDIT PROFILE : </Text>
            <Text style={styles.textNameProfile}>GABRIEL</Text>
          </View>
        </View>
        <View>
          <Text style={styles.nameProfile}>NAME</Text>
          <TextInput style={styles.textInput} placeholder="Name" />
          <Text style={styles.nameProfile}>LAST NAME</Text>
          <TextInput style={styles.textInput} placeholder="Last Name" />
          <Text style={styles.nameProfile}>PHOTO</Text>
          <TextInput style={styles.textInput} placeholder="Photo" />
          <Text style={styles.nameProfile}>AGE</Text>
          <TextInput style={styles.textInput} placeholder="Age" />
          <Text style={styles.nameProfile}>EMAIL</Text>
          <TextInput style={styles.textInput} placeholder="Email" />
          <Button
            styles={styles.textButton}
            color="#000"
            title="Submit Changes"
            onPress={() => Alert.alert("NAZHEEEEEEE !!!")}
          />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  photo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  containerImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    color: "red",
    fontSize: 20,
    height: 40,
    width: 175,
    backgroundColor: "white",
    padding: 5,
    margin: 15,
    borderRadius: 10,
  },
  nameProfile: {
    textAlign: "center",
    fontSize: 20,
  },
  textProfile: {
    display: "flex",
    flexDirection: "row",
  },
  textNameProfile: {
    fontSize: 30,
  },
  textTitle: {
    textAlign: "center",
    fontSize: 45,
  },
});
