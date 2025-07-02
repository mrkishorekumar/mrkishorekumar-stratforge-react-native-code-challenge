import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, PermissionsAndroid, Platform, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { pick, types as DocumentPickerTypes } from '@react-native-documents/picker';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../store/user';
import { RootState } from '../store';
import CustomImage from '../components/CustomImage';

async function requestStoragePermission() {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage to select a profile photo.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      Alert.alert('Permission Error', 'Failed to request permission.');
      return false;
    }
  }
  return true;
}

export default function MyProfile() {
  const user = useSelector((state: RootState) => state.user);
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [photo, setPhoto] = useState<string | null>(user.imageUrl || null);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(user.name || '');
    setPhoto(user.imageUrl || null);
    setEmail(user.email || '');
  }, [user.name, user.imageUrl, user.email]);

  const pickImage = async () => {
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Storage permission is required to select a photo.');
      return;
    }
    try {
      const result = await pick({
        type: [DocumentPickerTypes.images],
        copyTo: 'cachesDirectory',
      });
      if (result && result[0] && result[0].uri) {
        setPhoto(result[0].uri);
      }
    } catch {
      console.error('Error picking image');
    }
  };

  const handleSubmit = () => {
    dispatch(setUserData({ name, imageUrl: photo || '', email }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.photoContainer}>
        {photo ? (
          <CustomImage source={{ uri: photo }} style={styles.photo} />
        ) : (
          <View style={styles.placeholder}><Text>Pick Photo</Text></View>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        returnKeyType="next"
        textContentType="name"
        autoComplete="name"
        keyboardType="default"
        maxLength={50}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="email"
        textContentType="emailAddress"
        returnKeyType="done"
      />
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  photoContainer: {
    marginBottom: 24,
    borderRadius: 60,
    overflow: 'hidden',
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  placeholder: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderRadius: 60,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 24,
    fontSize: 16,
  },
});