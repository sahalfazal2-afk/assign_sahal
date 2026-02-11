import { View, FlatList } from 'react-native';
import styles from './styles';
import React, { FC, useState } from 'react';
import { colors, images, routes } from '@utils';
import { navigate } from '@navigations/navigationRef';
import { TextInput } from 'react-native-paper';
import { DashboardCardItem } from '@components/listiing';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '@navigations/navigationScreenParams';
import { getUsersListingApi } from '@services/users.api';
import { EmptyScreen } from '@static';
import { Loader } from '@shared';

type Props = NativeStackScreenProps<MainStackParamList, 'DASHBOARD'>;

type DashboardItem = {
  id: string;
  name: string;
  address: string;
  country: string;
  photo: string;
};

const DashboardScreen: FC<Props> = () => {
  const { top } = useSafeAreaInsets();
  const { Search } = images;
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<DashboardItem[]>([]);
  const [search, setSearch] = React.useState<string>('');
  const [originalData, setOriginalData] = useState<DashboardItem[]>([]);

  React.useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const res = await getUsersListingApi();

      setOriginalData(res.data);
      setData(res.data);
    } catch (error) {
      console.log('Dashboard API error:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = React.useCallback(async () => {
    try {
      setRefreshing(true);
      const res = await getUsersListingApi();

      setOriginalData(res.data);
      setData(res.data);
    } catch (e) {
      console.log('Refresh error:', e);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const handleSearch = (text: string) => {
    setSearch(text);

    if (!text.trim()) {
      setData(originalData);
      return;
    }

    const filtered = originalData.filter(
      item =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.address.toLowerCase().includes(text.toLowerCase()) ||
        item.country.toLowerCase().includes(text.toLowerCase()),
    );

    setData(filtered);
  };

  const renderItem = ({ item }: { item: DashboardItem }) => (
    <View key={item.id?.toString()} style={styles.categoryListingContainer}>
      <DashboardCardItem
        onPress={() => {
          navigate(routes.DETAIL_SCREEN, {
            userId: item.id,
          });
        }}
        title={item?.name}
        detail={item?.address + ', ' + item?.country}
        image={{ uri: item?.photo }}
      />
    </View>
  );

  return (
    <View style={[{ paddingTop: top }, styles.container]}>
      <Loader visible={loading} />
      <View style={styles.searchInputContainer}>
        <TextInput
          value={search}
          style={styles.input}
          theme={{ roundness: 0 }}
          onChangeText={handleSearch}
          underlineColor={'transparent'}
          placeholder={'Search users...'}
          cursorColor={colors.primaryBlue}
          selectionColor={colors.primaryBlue}
          activeUnderlineColor={'transparent'}
          placeholderTextColor={colors.placeholder}
        />
        <Search />
      </View>

      <FlatList
        data={data}
        onRefresh={onRefresh}
        renderItem={renderItem}
        refreshing={refreshing}
        keyExtractor={(item, index) => (item.id + index)?.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        ListEmptyComponent={
          !loading && data.length === 0 ? <EmptyScreen /> : null
        }
      />
    </View>
  );
};

export default DashboardScreen;
