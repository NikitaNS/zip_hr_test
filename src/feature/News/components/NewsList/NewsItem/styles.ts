import {StyleSheet} from 'react-native';
import {colors} from "../../../constans";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 160,
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 0,
    elevation: 0,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 20,
  },
  newsItemInfoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: 120,
  },
  newsItemContentTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  newsItemContentAuthor: {
    fontSize: 12,
  },
  newsItemContentDate: {
    fontSize: 12,
    marginTop: 5,
  },
});
