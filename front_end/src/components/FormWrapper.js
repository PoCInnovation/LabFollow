import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import FAIcon from 'react-native-vector-icons/FontAwesome';

FAIcon.loadFont();
TextInput.defaultProps.selectionColor = 'white'

const FieldWrapper = ({ children, formikProps, formikKey }) => (
  <View>
    {children}
    <Text style={{ color: '#e64c4c', marginTop: 10 }}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
);

export const StyledInput = ({ label, formikProps, formikKey, icon, keyboardType, value, color, ...rest }) => {
  const styles = (color == "black" ? blackStyle : whiteStyle)
  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps}>
      <View style={styles.textfieldContainer}>
        <Icon style={styles.textfieldIcon} name={icon} size={20} color={color == "black" ? 'black' : "white"} />
        <TextInput
          value={value}
          placeholder={label}
          keyboardType={keyboardType ? keyboardType : "default"}
          placeholderTextColor="#ffffff77"
          autoCapitalize='none'
          style={styles.textfield}
          onChangeText={formikProps.handleChange(formikKey)}
          onBlur={formikProps.handleBlur(formikKey)}
          {...rest}
        />
      </View>
    </FieldWrapper>
  );
};

const whiteStyle = StyleSheet.create({
  textfieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 270,
    marginTop: 10,
    marginBottom: -10,
  },
  textfieldIcon: {
    padding: 10,
  },
  textfield: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: 'white',
  },
});

const blackStyle = StyleSheet.create({
  textfieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 270,
    marginTop: 10,
    marginBottom: -10,
  },
  textfieldIcon: {
    padding: 10,
  },
  textfield: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: 'black',
  },
});
