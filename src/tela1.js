import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tela1() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>Você está convidado para a</Text>
      <Text style={styles.titulo}>FORMATURA</Text>
      <Text style={styles.curso}>Desenvolvimento de Software Multiplataforma</Text>
      
      <View style={styles.divisor} />
      
      <Text style={styles.dataTitulo}>DATA DO EVENTO</Text>
      <Text style={styles.data}>20/12/2026</Text>
      <Text style={styles.hora}>às 19:00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: 30, width: '100%' },
  subtitulo: { color: '#fbbf24', fontSize: 16, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10, textAlign: 'center' },
  titulo: { color: '#ffffff', fontSize: 42, fontWeight: 'bold', letterSpacing: 5, marginBottom: 5, textAlign: 'center' },
  curso: { color: '#cbd5e1', fontSize: 14, textAlign: 'center', marginBottom: 20 },
  divisor: { width: 50, height: 2, backgroundColor: '#fbbf24', marginBottom: 20 },
  dataTitulo: { color: '#94a3b8', fontSize: 12, letterSpacing: 2, marginBottom: 5 },
  data: { color: '#ffffff', fontSize: 28, fontWeight: '600' },
  hora: { color: '#fbbf24', fontSize: 18, fontWeight: '500', marginTop: 5 },
});