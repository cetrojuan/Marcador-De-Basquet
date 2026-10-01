import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import PanelEquipo from './components/PanelEquipo';
import BotonAccion from './components/BotonAccion';

export default function App() {
  type Jugada = { equipo: Equipo; puntos: number }
  const [jugadas, setJugadas] = useState<Jugada[]>([]);
  const [local, setLocal] = useState(0);
  const [visitante, setVisitante] = useState(0);
  const ganandoLocal = local > visitante;
  const ganandoVisitante = visitante > local;
  const partidoVacio = local === 0 && visitante === 0;
  let leyenda = '';
  if (local > visitante) {
    leyenda = `Gana Local por ${Math.abs(local - visitante)}`;
  } else if (visitante > local) {
    leyenda = `Gana Visitante por ${Math.abs(local - visitante)}`;
  } else {
    leyenda = 'Empate';
  }
  type Equipo = 'local' | 'visitante';
  const anotar = (equipo: Equipo, puntos: number) => {
      if (equipo === 'local') {
          setLocal(prev => prev + puntos);
          jugadas.push({ equipo: 'local', puntos });
      }
      if (equipo === 'visitante') {
          setVisitante(prev => prev + puntos);
          jugadas.push({ equipo: 'visitante', puntos });
      }
  };
  const deshacer = () => {
    const ultimaJugada = jugadas.pop();
        if (ultimaJugada) {
          if (ultimaJugada.equipo === 'local') {
            setLocal(prev => prev - ultimaJugada.puntos);
          }
          if (ultimaJugada.equipo === 'visitante') {
            setVisitante(prev => prev - ultimaJugada.puntos);
          }
        }
  }
  return (
   <View style={styles.screen}>
    <View style={styles.marcadores}>
      <PanelEquipo nombre="Local" puntos={local} color="#2563eb" onAnotar={(p) => anotar('local', p)} ganando={ganandoLocal}/>
      <PanelEquipo nombre="Visitante" puntos={visitante} color="#dc2626" onAnotar={(p) => anotar('visitante', p)} ganando={ganandoVisitante}/>
    </View>
    <Text style={[styles.marcador, ganandoLocal && {fontWeight: 'bold',color: "#2563eb",} , ganandoVisitante && {fontWeight: 'bold',color: "#dc2626",}]}>{leyenda}</Text>
    <BotonAccion titulo="Nuevo Partido" color="#313131" disabled={partidoVacio} onPress={() => { setLocal(0); setVisitante(0); setJugadas([]) }}/>
    <BotonAccion titulo="Deshacer" color="#313131" disabled={jugadas.length === 0} onPress={() => { deshacer() }}/>
    <FlatList
        data={[...jugadas].reverse().slice(0, 5)}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Text>{item.equipo === 'local' ? 'Local' : 'Visitante'} +{item.puntos}</Text>
        )}
        contentContainerStyle={styles.lista}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1,flexDirection: 'column',backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', },
  marcadores: {display: 'flex', gap: 200, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 50, },
  container: {display: 'flex' ,backgroundColor: '#9fecfa', alignItems: 'center', justifyContent: 'space-between',width: 300,height: 200, margin: 15, padding: 15, borderRadius: 10,},
  titleL: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: 'blue' },
  titleV: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: 'red' },
  puntos: { fontSize: 30, fontWeight: 'bold', marginBottom: 8 },
  buttonContainer: {display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 200 },
  marcador: {fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom:20, color: '#000', },
  lista: {marginTop: 20, gap: 5,  },
});
