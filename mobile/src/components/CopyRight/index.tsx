import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './style';

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>Feito com ♥ pela Rocketseat</Text>
    </View>
  );
}