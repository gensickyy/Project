import React, {FC, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../../assets/styles';
import {Store} from '../../redux/reducers';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {getFeedsFetch} from '../../redux/actions/feedActions';
import useTheme from '../../hooks/useTheme';

import {Feed as IFeed} from '../../static/models/Feed';
import {THEMES} from '../../constants';
import Feed from '../../components/Feed';

interface Props {
  feeds: IFeed[];
  getFeeds: () => Promise<unknown>;
}

const Feeds: FC<Props> = props => {
  const {feeds, getFeeds} = props;
  const {theme} = useTheme();
  const mainStyle = theme === THEMES.LIGHT ? styles.main : styles.mainDark;
  useEffect(() => {
    getFeeds().then(() => {});
  }, [getFeeds]);

  return (
    <View style={[mainStyle, styles.feed]}>
      {feeds.length ? (
        <ScrollView
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}>
          <View>
            {feeds.map(feed => (
              <Feed key={feed.id} feed={feed} />
            ))}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.emptyScreen}>
          <Text style={styles.h2}>Empty</Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (store: Store) => ({
  feeds: store.feeds.feeds,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getFeeds: () => getFeedsFetch(dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
