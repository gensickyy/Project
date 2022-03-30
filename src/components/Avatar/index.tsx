import React, {FC} from 'react';
import styles from '../../assets/styles';
import {Image, ImageStyle, View} from 'react-native';

interface Props {
  uri?: string;
  style?: ImageStyle;
  onClick?: () => void;
}

const Avatar: FC<Props> = props => {
  const {style, uri} = props;
  return (
    <View style={[styles.avatarContainer, style]}>
      <Image style={[styles.avatar, style]} source={{uri}} />
    </View>
  );
};

export default Avatar;
