import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [local, setLocal] = useState(0);
  const [visitante, setVisitante] = useState(0);
      type Equipo = 'local' | 'visitante';
      const anotar = (equipo: Equipo, puntos: number) => {
          if (equipo === 'local') {
              setLocal(prev => prev + puntos);
          }
          if (equipo === 'visitante') {
              setVisitante(prev => prev + puntos);
          }
      };
  return (
    <View style={styles.screen}>
      <View style={styles.marcadores}>
        <View style={styles.container}>
          <Text style={styles.titleL}>Local</Text>
          <Text style={styles.puntos}>{local}</Text>
          <View style={styles.buttonContainer}>
              <Button title="+1" onPress={() => anotar("local", 1)} />
              <Button title="+2" onPress={() => anotar("local", 2)} />
              <Button title="+3" onPress={() => anotar("local", 3)} />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.titleV}>Visitante</Text>
          <Text style={styles.puntos}>{visitante}</Text>
          <View style={styles.buttonContainer}>
              <Button color='red' title="+1" onPress={() => anotar("visitante", 1)} />
              <Button color='red' title="+2" onPress={() => anotar("visitante", 2)} />
              <Button color='red' title="+3" onPress={() => anotar("visitante", 3)} />
          </View>
        </View>
      </View>
      <Button title="Nuevo Partido" onPress={() => {setLocal(0); setVisitante(0)}} />
    </View>
    

  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', },
  marcadores: {display: 'flex', gap: 200, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 50, },
  container: {display: 'flex' ,backgroundColor: '#9fecfa', alignItems: 'center', justifyContent: 'space-between',width: 300,height: 200, margin: 15, padding: 15, borderRadius: 10,},
  titleL: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: 'blue' },
  titleV: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: 'red' },
  puntos: { fontSize: 30, fontWeight: 'bold', marginBottom: 8 },
  buttonContainer: {display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 200 },
});
