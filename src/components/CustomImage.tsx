import React from 'react';
import FastImage, { FastImageProps } from '@d11/react-native-fast-image';

const placeholder = require('../assets/images/placeholder.jpg');

export default function CustomImage(props: FastImageProps) {
  return <FastImage {...props} fallback defaultSource={placeholder} />;
}