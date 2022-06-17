import {StyleSheet} from 'react-native';
import {colors} from '../../constans';

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75,
    paddingHorizontal: 20,
    backgroundColor: colors.deepSkyBlue,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    zIndex: 1,
    elevation: 1,
  },
});
