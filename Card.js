import * as React from "react";
import { View, Text, ImageBackground, StyleSheet, Button} from "react-native";
import {Audio} from "expo-av";


export default function Card({card}) {
const [sound, setSound] = React.useState();

console.log(card)
async function playSound({mp3}) {
  const {sound} = await Audio.Sound.createAsync(
    mp3()
  )
  setSound(sound);

  console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.card}>
      <Text style={{color: "white", fontSize: 40}}>{card.name}</Text>
      <Button title="Play Song" onPress={() => {playSound(card)}} />
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    zIndex: 3,
    position: "absolute",
    marginTop: 600,
    flex: 0.30,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.08,
    alignItems: "center",
    backgroundColor: "black",
    color: "black"
  }
})
