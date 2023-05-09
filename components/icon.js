import React from 'react';
import { Ionicons } from 'react-native-vector-icons';

export const HomeIcon = ({ focused, color, size }) => {
  return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
};

export const CmangaIcon = ({ focused, color, size }) => {
  return <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color} />;
};

export const NettruyenIcon = ({ focused, color, size }) => {
  return <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color} />;
};
