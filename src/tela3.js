import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Tela3() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloLocal}>LOCAL</Text>
      <Text style={styles.textoLocal}>Salão de Eventos Fatec</Text>
      <Text style={styles.textoEndereco}>Av. das Tecnologias, 1024 - Centro</Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>CONFIRMAR PRESENÇA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', width: '100%' },
  tituloLocal: { color: '#94a3b8', fontSize: 12, letterSpacing: 2, marginBottom: 5 },
  textoLocal: { color: '#ffffff', fontSize: 18, fontWeight: '600', marginBottom: 2 },
  textoEndereco: { color: '#cbd5e1', fontSize: 14, marginBottom: 25, textAlign: 'center' },
  botao: { backgroundColor: '#fbbf24', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 30, width: '100%', alignItems: 'center', elevation: 3 },
  textoBotao: { color: '#0f172a', fontWeight: 'bold', fontSize: 14, letterSpacing: 1 },
});