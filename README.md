# Marcador-De-Basquet

1. Acá el estado debe vivir en el padre porque estamos usando el mismo componente para los dos equipos. Es mejor tener los puntajes en el padre para poder manejarlos por separado y pasárselos a cada PanelEquipo mediante props

2. Porque onAnotar necesita recibir un número, que serían los puntos a sumar. Por eso a cada botón le pasamos una función como onPress={() => onAnotar(2)}, indicando cuántos puntos debe sumar
