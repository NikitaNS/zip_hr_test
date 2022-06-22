import {StyleSheet} from 'react-native';
import {colors} from '../../constans';
import styled from 'styled-components/native';

export const NewsScreenHeaderView = styled.View`
  background-color: ${colors.gainsboro};
  z-index: 101;
`;

export const NewsHeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  margin-left: 10px;
`;

export const styles = StyleSheet.create({

});
