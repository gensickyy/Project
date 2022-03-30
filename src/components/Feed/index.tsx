import React, {FC} from 'react';
import styles from '../../assets/styles';
import {Image, View} from 'react-native';
import {Feed as IFeed} from '../../static/models/Feed';

interface Props {
  feed: IFeed;
}

const Feed: FC<Props> = props => {
  const {feed} = props;
  return (
    <View>
      <Image style={styles.feedItem} source={{uri: feed.download_url}} />
    </View>
  );
};

export default Feed;
