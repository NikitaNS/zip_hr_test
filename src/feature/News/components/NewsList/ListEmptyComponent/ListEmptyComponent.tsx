import {Text} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';

const ListEmptyComponent: FC = () => {
  return <Text style={styles.title}>Try another filters</Text>;
};

export default ListEmptyComponent;
