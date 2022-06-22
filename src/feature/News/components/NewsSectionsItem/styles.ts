import {StyleSheet} from 'react-native';
import {colors} from '../../constans';

export const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    marginHorizontal: 10,

    width: 150,
    height: 40,
    borderColor: colors.gray,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: colors.white,
  },

  selectedNewTypeItem: {
    borderColor: colors.deepSkyBlue,
  },
  selectedNewTypeItemTitle: {
    color: colors.deepSkyBlue,
  },

  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
    width: 150,
    height: 40,
    borderColor: colors.gray,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: colors.white,
  },
});
