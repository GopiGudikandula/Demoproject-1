import React from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Settings Screen</Text>
        <Text style={styles.welcomeText}>Hi! You have navigated to the Settings Page!</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => router.push('/')}>
            <Text style={styles.buttonText}>Go to Home</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => router.push('/profile')}>
            <Text style={styles.buttonText}>Go to Profile</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => router.push('/about')}>
            <Text style={styles.buttonText}>Go to About</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  welcomeText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 10,
  },
  button: {
    backgroundColor: 'rgba(0, 122, 255, 0.9)',
    paddingHorizontal: 100,
    paddingVertical: 10,
    borderRadius: 8,
    minWidth: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
