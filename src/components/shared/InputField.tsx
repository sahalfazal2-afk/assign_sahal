import React, {
  useRef,
  useState,
  ReactNode,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors, images } from '@utils';
import { moderateScale, scaleFont } from '@metrics';
import { TextInput as PaperInput } from 'react-native-paper';
import { fontFamilies } from '@utils/fonts';
import AppText from './AppText';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  secureTextEntry?: boolean;
  keyboardType?: React.ComponentProps<typeof PaperInput>['keyboardType'];
  style?: StyleProp<ViewStyle>;
  isPassword?: boolean;
  LeftIcon?: ReactNode;
  error?: string;
  onChange?: () => void;
  hideError?: boolean;
  leftIconStyle?: StyleProp<ViewStyle>;
}

export interface InputFieldRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  getValue: () => string;
}

const InputField = forwardRef<InputFieldRef, InputFieldProps>(
  (
    {
      placeholder,
      value,
      onChangeText,
      secureTextEntry,
      keyboardType = 'default',
      style,
      isPassword = false,
      LeftIcon,
      onBlur,
      error,
      onChange,
      hideError = false,
      leftIconStyle,
    },
    ref,
  ) => {
    const { EyeOpen, EyeClose } = images;
    const [hidePassword, setHidePassword] = useState(secureTextEntry);
    const inputRef = useRef<any>(null);

    // 👇 Expose custom methods to parent via ref
    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => inputRef.current?.clear(),
      getValue: () => value,
    }));

    return (
      <>
        <View style={[styles.inputBox, style]}>
          {LeftIcon && <View style={leftIconStyle}>{LeftIcon}</View>}

          <PaperInput
            dense={true}
            value={value}
            ref={inputRef}
            onBlur={onBlur}
            onChange={onChange}
            mode={'outlined'}
            style={styles.input}
            autoCapitalize={'none'}
            placeholder={placeholder}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            placeholderTextColor={colors.placeholder}
            secureTextEntry={isPassword ? hidePassword : false}
            selectionColor={colors.primaryBlue || '#007AFF'}
            cursorColor={colors.primaryBlue || '#007AFF'}
            outlineColor="transparent" // 👈 Hide outline
            activeOutlineColor="transparent" // 👈 Hide active outline
            theme={{
              colors: {
                text: colors.black,
                primary: 'transparent',
                background: colors.white,
                placeholder: colors.placeholder,
              },
            }}
          />

          {isPassword && (
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              {hidePassword ? (
                <EyeClose width={20} height={20} />
              ) : (
                <EyeOpen width={20} height={20} />
              )}
            </TouchableOpacity>
          )}
        </View>
        {!hideError && (
          <AppText
            label={error}
            type={'small'}
            color={colors.red}
            MB={moderateScale(2)}
            MH={moderateScale(10)}
          />
        )}
      </>
    );
  },
);

export default InputField;

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.white,
    paddingHorizontal: moderateScale(12),
  },
  input: {
    flex: 1,
    height: 45,
    verticalAlign: 'top',
    fontSize: scaleFont(13),
    backgroundColor: 'transparent',
    fontFamily: fontFamilies.medium,
  },
  toggle: { fontSize: 14, color: 'red', marginLeft: 8 },
});
