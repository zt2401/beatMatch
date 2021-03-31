import * as React from "react";
import { View, Text, ImageBackground, StyleSheet} from "react-native";
import Swiper from "react-native-deck-swiper";
import exampleBeatData from "./beatdata.js";
import Card from "./Card.js";


export default function App() {
  const [index, setIndex] = React.useState(0)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ImageBackground source={require("./beatmatchCover.png")} style={styles.bg}>
        {/* <Button title="Likes"></Button> */}
            <Text style={{fontSize: 45, color: '#fff', alignItems: "center", marginTop: "10%", marginLeft: "24%"}}>
              Beat Match
            </Text>
        <Swiper backgroundColor='#ffffff00'
        cards={exampleBeatData}
        cardIndex={index}
        renderCard={ card => <Card card={card}/> }
        disableTopSwipe
        disableBottomSwipe
        overlayLabels={{
          left: {
            title: 'NAH',
            style: {
              label: {
                backgroundColor: "red",
                color: 'white',
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start'
              }
            }
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: "blue",
                color: 'white',
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }
            }
          }
        }}
        />
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
  swipe: {
    position: "relative",
    height: "50%",
    width: "100%",
    backgroundColor: "red",
    zIndex: 2,
    opacity: 0
  },
  bg: {
    zIndex: 1,
    position: "absolute",
    width: '100%',
    height: '100%'}
})
