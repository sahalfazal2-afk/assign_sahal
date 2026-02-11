import React from 'react';
import styles from './styles';
import { InfoItem } from '@static';
import { colors, images } from '@utils';
import { AppText, Loader } from '@shared';
import FastImage from 'react-native-fast-image';
import { goBack } from '@navigations/navigationRef';
import { getUserDetailApi } from '@services/users.api';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '@navigations/navigationScreenParams';
import { useAuth } from '@hooks/useAuth';

type Props = NativeStackScreenProps<MainStackParamList, 'DETAIL_SCREEN'>;

type DashboardItem = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: string;
  country: string;
  state: string;
  phone: string;
  photo: string;
  company: string;
};

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { logout } = useAuth();
  const { ArrowBack, Logout } = images;
  const { top } = useSafeAreaInsets();

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<DashboardItem | null>(null);

  const { userId } = route.params;
  const dummyLogo = 'https://json-server.dev/ai-profiles/45.png';

  React.useEffect(() => {
    if (!userId) return;

    const fetchUserDetail = async () => {
      try {
        setLoading(true);
        const res = await getUserDetailApi({ id: userId });
        setData(res.data);
      } catch (error) {
        console.log('User detail error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetail();
  }, [userId]);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Loader visible={loading} />

      {/* Header */}
      <View style={styles.header}>
        <ArrowBack height={28} width={28} onPress={goBack} />
        <AppText label="User Details" type="heading" color={colors.black} />
        <Logout height={25} width={25} onPress={logout} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Card */}
        <View style={styles.profileCard}>
          {loading ? (
            <View style={styles.profileImage}>
              <ActivityIndicator size="large" color={colors.backgroundWhite} />
            </View>
          ) : (
            <FastImage
              source={{ uri: data?.photo || dummyLogo }}
              style={styles.profileImage}
            />
          )}
          <AppText
            MT={12}
            label={data?.username}
            type="medium16"
            color={colors.black}
          />

          <AppText
            MT={4}
            label={data?.email}
            type="mini"
            color={colors.placeholder}
          />
        </View>

        {/* Info Section */}
        <View style={styles.infoCard}>
          <InfoItem label="Full Name" value={data?.name} />
          <InfoItem label="Phone" value={data?.phone} />
          <InfoItem label="Address" value={data?.address} />
          <InfoItem label="Country" value={data?.country} />
          <InfoItem label="State" value={data?.state} />
          <InfoItem label="Company" value={data?.company} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
