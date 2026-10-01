import { Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';

type BotonAccionProps = {
    titulo: string;
    color: string;
    onPress: () => void;
    disabled?: boolean;
}

const BotonAccion = ({ titulo, color, onPress, disabled }: BotonAccionProps) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={{ opacity: disabled ? 0.5 : 1 }}>
            <Text style={{color: "white",fontWeight:"bold",fontSize:15, backgroundColor: color, padding: 10, borderRadius: 3}}>{titulo}</Text>
        </TouchableOpacity>
    )
}


export default BotonAccion;