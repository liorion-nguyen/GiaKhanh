import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

export default function Input({ value, onChangeText, placeholder, secureTextEntry }: { value: string, onChangeText: (text: string) => void, placeholder: string, secureTextEntry: boolean }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{placeholder}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'grey',
    color: 'white'
  },
});