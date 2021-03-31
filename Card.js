import * as React from "react";
import { View, Text, ImageBackground , StyleSheet} from "react-native";
import SoundPlayer from "react-native-sound-player";


const Card = ({ card }) => (
  <View style={styles.card}>
    <Text style={{color: "white", fontSize: 40}}>{card.name}</Text>

  </View>
)

const styles = StyleSheet.create({
  card: {
    zIndex: 3,
    position: "absolute",
    marginTop: 600,
    flex: 0.75,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.08,
    alignItems: "center",
    backgroundColor: "black",
    color: "black"
  }
})

export default Card;