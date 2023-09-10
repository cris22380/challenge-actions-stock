# Chalenge action stocks

## Descripción
Un proyecto que proporciona cotizaciones en tiempo real de acciones. 

## Características

- Visualización en tiempo real de las cotizaciones de acciones.
- Gráficos históricos de rendimiento de acciones.


## Tecnologías Utilizadas
- Typescript - React 18.2.0 
- Tailwind Css - Highcharts - highcharts-react-official
## Instalación
1. Clona el repositorio desde GitHub:

```
git clone https://github.com/cris22380/challenge-actions-stock.git
```
2. Cambia al directorio del proyecto:
```
cd challenge-actions-stock
```
3. Instala las dependencias del proyecto con npm:
```
npm install
```
4. Crea un archivo llamado .env.local en la raíz del proyecto.
Abre el archivo .env.example y copia las variables de entorno:

```
VITE_API_KEY=*** your api key ***
VITE_BASE_URL=https://api.twelvedata.com
```

5. Pega las variables de entorno en el archivo .env.local que creaste en el paso 4.

6. Reemplaza *** your api key *** por un API key válido de https://twelvedata.com/.

7. Una vez que hayas realizado estos pasos, habrás configurado las variables de entorno necesarias en tu proyecto y podrás utilizarlas para interactuar con la API de Twelve Data. Asegúrate de mantener el contenido del archivo .env.local confidencial y no lo compartas públicamente ni lo incluyas en tu repositorio Git, ya que contiene información sensible, como tu API key.

8. Puedes ejecutar el comando npm run dev para iniciar la aplicación en modo de desarrollo.
```
npm run dev
```

## Uso
Para modificar la cantidad de elementos por página en la aplicación, debes editar el valor de la constante ITEMS_PAGE_QUANTITY en el archivo utils/constants.ts. Aquí tienes los pasos:

```
export const ITEMS_PAGE_QUANTITY = 25;
```

Abre el archivo constants.ts ubicado en la carpeta utils del proyecto.
Busca la constante llamada ITEMS_PAGE_QUANTITY. Debería verse algo como esto:

```
export const ITEMS_PAGE_QUANTITY = 50;
```

Cambia el valor 50 al número deseado de elementos por página. Por ejemplo, si deseas mostrar 25 elementos por página, puedes cambiarlo así:

```
export const ITEMS_PAGE_QUANTITY = 25;
```

Guarda el archivo después de hacer el cambio.

Una vez que hayas realizado esta modificación, la paginación de la aplicación mostrará la cantidad de elementos por página según el nuevo valor que hayas configurado en ITEMS_PAGE_QUANTITY. Asegúrate de ajustar este valor según tus preferencias y necesidades específicas.

Para modificar o agregar intervalos de consulta, puedes hacerlo en la constante INTERVAL_OPTIONS_SELECTOR en el archivo utils/constants.ts. 
Podes consultar los valores soportados en https://twelvedata.com/docs#earliest-timestamp

Supports: 1min, 5min, 15min, 30min, 45min, 1h, 2h, 4h, 1day, 1week, 1month

Para modificar la unidad de tiempo debes cambiar

```
export const TIME_UNIT = 'min';
```

Abre el archivo constants.ts ubicado en la carpeta utils de tu proyecto.

Busca la constante llamada INTERVAL_OPTIONS_SELECTOR. Debería verse algo como esto:

```
export const INTERVAL_OPTIONS_SELECTOR = [
  { value: '1', label: '1 minutos' },
  { value: '5', label: '5 minutos' },
  // Otras opciones de intervalo aquí
];
```
Modifica o agrega las opciones de intervalo según tus necesidades. Por ejemplo, si deseas agregar una opción de intervalo de 15 minutos, puedes hacerlo de la siguiente manera:

typescript
Copy code
```
export const INTERVAL_OPTIONS_SELECTOR = [
  { value: '1', label: '1 minutos' },
  { value: '5', label: '5 minutos' },
  { value: '15', label: '15 minutos' }, // Nueva opción de intervalo
  // Otras opciones de intervalo aquí
];
```
Guarda el archivo después de hacer los cambios.

Una vez que hayas realizado estas modificaciones en INTERVAL_OPTIONS_SELECTOR, podrás utilizar las nuevas opciones de intervalo en tu aplicación. Estas opciones generalmente se utilizan en elementos de interfaz de usuario, como selectores o botones, para permitir a los usuarios elegir el intervalo de consulta que deseen. Asegúrate de ajustar estas opciones según tus requisitos específicos.