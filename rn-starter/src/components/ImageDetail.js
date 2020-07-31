import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log(`${title} pressed`)}
    >
      <Image
        title={title}
        source={imageSource}
      />
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.textStyle}>Image Score - {score}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 15,
  },
  card: {
    marginBottom: 10,
  },
});

export default ImageDetail;
