import { Carousel as CarouselComponent } from "@fnando/react-native-carousel";
import React, { useRef } from "react";
import { StyleSheet, Text, View,Image } from "react-native";

const CustomCarousel = () => {
  const carousel: any = useRef();

  const handleGoToLastPage = () => {
    carousel.current.goToPage(3); 
  };

  return (
    <View style={styles.container}>
      <CarouselComponent ref={carousel}>
        <View style={{ ...styles.page }}>
          <Image
            source={require('../assets/image1.png')} 
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={{ ...styles.page }}>
          <Image
            source={require('../assets/image2.png')} 
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={{ ...styles.page}}>
          <Image
            source={require('../assets/image1.png')} 
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </CarouselComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:10,
    marginRight:1,
    padding: 0, 
    justifyContent: "center",
    alignSelf:"center",
  },
  page: {
    width: 360,  
    height: 200, 
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width: "100%",   
    height: "100%", 
    borderRadius: 20,
  },
  indicatorContainer: {
    marginBottom: 5, 
  }
});

export default CustomCarousel;
