import {
  View,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { Formik } from 'formik';
import { InputField } from '@shared';
import AppText from '@shared/AppText';
import { colors, images } from '@utils';
import { useAuth } from '@hooks/useAuth';
import React, { FC, useState } from 'react';
import { IOS, moderateScale } from '@metrics';
import FastImage from 'react-native-fast-image';
import { validationSchemaLogin } from '@yupSchemas';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '@navigations/navigationScreenParams';

type Props = NativeStackScreenProps<MainStackParamList, 'LOGIN'>;

const LoginScreen: FC<Props> = () => {
  const { login, loading } = useAuth();
  const { Background, Email, Password } = images;
  const [error, setError] = useState('');

  return (
    <FastImage
      source={Background}
      resizeMode={'cover'}
      style={styles.headerImage}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={IOS ? 'padding' : 'height'}
        keyboardVerticalOffset={IOS ? -120 : -80}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.mainView}>
          <AppText
            type={'title'}
            textAlign={'center'}
            color={colors.white}
            label={'Welcome back !'}
          />
          <AppText
            type={'default'}
            textAlign={'center'}
            MB={moderateScale(40)}
            color={colors.placeholder}
            label={'Sign in to your account'}
          />
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchemaLogin}
            onSubmit={values => {
              console.log('values', values);

              login(values.email, values.password)
                .then(() => {
                  console.log('Login Successful');
                })
                .catch(() => {
                  setError('Invalid email or password');
                });
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                {/* Email Input */}
                <InputField
                  value={values.email}
                  error={errors.email}
                  placeholder="Email Address"
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  onChange={() => setError('')}
                  onChangeText={handleChange('email')}
                  LeftIcon={<Email width={30} height={15} />}
                />
                {/* Password Input */}
                <InputField
                  isPassword
                  secureTextEntry
                  placeholder="Password"
                  value={values.password}
                  onChange={() => setError('')}
                  onBlur={handleBlur('password')}
                  error={errors.password ?? error}
                  onChangeText={handleChange('password')}
                  LeftIcon={<Password width={30} height={18} />}
                />

                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.loginBtn}
                >
                  {loading ? (
                    <ActivityIndicator size="small" color={colors.white} />
                  ) : (
                    <AppText label="Login" color={colors.white} />
                  )}
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </FastImage>
  );
};

export default LoginScreen;
