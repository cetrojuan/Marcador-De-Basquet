import { View, Text, StyleSheet, Button } from 'react-native';

type Props = {
  nombre: string;
  puntos: number;
  color: string;
  onAnotar: (puntos: number) => void;
};

const PanelEquipo = ({ nombre, puntos, color, onAnotar }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={[styles.puntos, { color: color }]}> {puntos} </Text>
      <View style={styles.botones}>
        <Button title="+1" color={color} onPress={() => onAnotar(1)} />
        <Button title="+2" color={color} onPress={() => onAnotar(2)} />
        <Button title="+3" color={color} onPress={() => onAnotar(3)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'space-between', width: 300, height: 200, margin: 15, padding: 15, borderRadius: 10, backgroundColor: '#9fecfa', },
  nombre: { fontSize: 20, fontWeight: 'bold', },
  puntos: { fontSize: 30, fontWeight: 'bold', },
  botones: { flexDirection: 'row', gap: 10, justifyContent: 'space-between', width: 200, },
});

export default PanelEquipo;
