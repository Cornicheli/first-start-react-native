import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

const image = {
  uri: "https://www.xtrafondos.com/wallpapers/hermoso-atardecer-en-la-playa-8459.jpg",
};

export default function Home() {
  return (
    <View style={styles.contedor}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Home</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    color: "black",
  },
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
