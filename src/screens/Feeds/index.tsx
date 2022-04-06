import React, {FC, useEffect} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
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

  const renderItem = ({item}: {item: IFeed}) => (
    <Feed key={item.id} feed={item} />
  );

  return (
    <View style={[mainStyle, styles.feed]}>
      {feeds.length ? (
        <FlatList
        data={feeds}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> 
      
        
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
