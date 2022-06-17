import {StyleSheet} from 'react-native';
import {colors} from '../../constans';

export const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.gainsboro,
    zIndex: 100,
    elevation: 100,
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

  newsHeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
    marginLeft: 10,
  },

  selectedNewTypeItem: {
    borderColor: colors.deepSkyBlue,
  },
  selectedNewTypeItemTitle: {
    color: colors.deepSkyBlue,
  },
});
