import { View, Text, StyleSheet, Button } from 'react-native';
import BotonAccion from './BotonAccion';

type PanelEquipoProps = {
  nombre: string;
  puntos: number;
  color: string;
  ganando: boolean;
  onAnotar: (puntos: number) => void;
};

const PanelEquipo = ({ nombre, puntos, color, ganando, onAnotar }: PanelEquipoProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.nombre, ganando && {fontWeight: 'bold',borderColor: color,},]}>{nombre}</Text>
      <Text style={[styles.puntos, { color: color }]}> {puntos} </Text>
      <View style={styles.botones}>
        <BotonAccion titulo="+1" color={color} onPress={() => onAnotar(1)} />
        <BotonAccion titulo="+2" color={color} onPress={() => onAnotar(2)} />
        <BotonAccion titulo="+3" color={color} onPress={() => onAnotar(3)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'space-between', width: 300, height: 200, margin: 15, padding: 15, borderRadius: 10, backgroundColor: '#9fecfa', },
  nombre: { fontSize: 20 ,},
  puntos: { fontSize: 30 ,},
  botones: { flexDirection: 'row', gap: 10, justifyContent: 'space-between', width: 200, },
});

export default PanelEquipo;
