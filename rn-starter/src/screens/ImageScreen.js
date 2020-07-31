import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  const images = [
    { title: 'Forest', image: require('../../assets/forest.jpg'), score: 9 },
    { title: 'Beach', image: require('../../assets/beach.jpg'), score: 7 },
    { title: 'Mountain', image: require('../../assets/mountain.jpg'), score: 10 },
    ];

  return (
    <View>
      <Text style={styles.headerStyle}>Image Screen</Text>
      <FlatList
        keyExtractor={card => card.title}
        data={images}
        renderItem={({item}) => <ImageDetail title={item.title} imageSource={item.image} score={item.score} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  textStyle: {
    marginVertical: 50,
    marginLeft: 15,
  },
});

export default ImageScreen;
