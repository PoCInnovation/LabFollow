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

export const StyledInput = ({ label, formikProps, formikKey, icon, keyboardType, ...rest }) => {
  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps}>
      <View style={styles.textfieldContainer}>
        <Icon style={styles.textfieldIcon} name={icon} size={20} color="#fff" />
        <TextInput
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

const styles = StyleSheet.create({
  textfieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
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
    color: '#fff',
  },
});