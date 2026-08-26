import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tela2() {
  const dataEvento = new Date('2026-12-20T19:00:00').getTime();
  const [tempoRestante, setTempoRestante] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date().getTime();
      const diferenca = dataEvento - agora;

      if (diferenca > 0) {
        setTempoRestante({
          dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
          horas: Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((diferenca % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(intervalo);
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatarNumero = (num) => (num < 10 ? `0${num}` : num);

  return (
    <View style={styles.container}>
      <Text style={styles.tituloContagem}>CONTAGEM REGRESSIVA</Text>
      <View style={styles.linhaContadores}>
        <View style={styles.boxTempo}>
          <Text style={styles.numero}>{formatarNumero(tempoRestante.dias)}</Text>
          <Text style={styles.legenda}>Dias</Text>
        </View>
        <View style={styles.boxTempo}>
          <Text style={styles.numero}>{formatarNumero(tempoRestante.horas)}</Text>
          <Text style={styles.legenda}>Horas</Text>
        </View>
        <View style={styles.boxTempo}>
          <Text style={styles.numero}>{formatarNumero(tempoRestante.minutos)}</Text>
          <Text style={styles.legenda}>Min</Text>
        </View>
        <View style={styles.boxTempo}>
          <Text style={styles.numero}>{formatarNumero(tempoRestante.segundos)}</Text>
          <Text style={styles.legenda}>Seg</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#1e293b', padding: 25, borderRadius: 16, width: '100%', alignItems: 'center', marginBottom: 30, borderWidth: 1, borderColor: '#334155' },
  tituloContagem: { color: '#fbbf24', fontSize: 14, letterSpacing: 2, marginBottom: 20, fontWeight: 'bold' },
  linhaContadores: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  boxTempo: { alignItems: 'center', flex: 1 },
  numero: { color: '#ffffff', fontSize: 26, fontWeight: 'bold', marginBottom: 4 },
  legenda: { color: '#94a3b8', fontSize: 12, textTransform: 'uppercase' },
});