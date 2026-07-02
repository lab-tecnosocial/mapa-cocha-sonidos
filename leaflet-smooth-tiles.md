# Suavizar carga de tiles en Leaflet

En Leaflet es normal ver cuadrados o parpadeos cuando el mapa carga tiles raster durante zoom o paneo. Cada tile es una imagen independiente, y si el proveedor tarda un poco en responder, el usuario puede notar la grilla.

Google Maps suele sentirse mas fluido porque usa infraestructura propia, cache agresiva, renderizado optimizado y, en muchos casos, mapas vectoriales. En Leaflet con tiles raster no se elimina al 100%, pero se puede reducir bastante.

## Ajuste recomendado en React Leaflet

En el `MapContainer`, suaviza el comportamiento del zoom:

```jsx
<MapContainer
  center={[-17.394, -66.161]}
  zoom={13.5}
  maxZoom={18}
  zoomSnap={0.25}
  zoomDelta={0.75}
  wheelPxPerZoomLevel={60}
>
  <TileLayer
    attribution='Desarrollado por el <a href="https://labtecnosocial.org/">Lab TecnoSocial</a>'
    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    className="base-map-tiles"
    keepBuffer={5}
    updateWhenZooming={false}
    updateInterval={260}
    crossOrigin
  />
</MapContainer>
```

## Que hace cada opcion

`keepBuffer={5}`  
Mantiene mas tiles alrededor del viewport. Esto reduce huecos cuando el usuario panea o hace zoom cerca del area visible.

`updateWhenZooming={false}`  
Evita pedir tiles nuevos en cada paso intermedio del zoom. Leaflet espera a que termine el gesto de zoom para actualizar, lo que suele verse mas estable.

`updateInterval={260}`  
Limita la frecuencia con la que Leaflet actualiza tiles durante interacciones. Ayuda a evitar recargas demasiado nerviosas.

`zoomSnap={0.25}` y `zoomDelta={0.75}`  
Hacen que el zoom sea mas progresivo que los saltos enteros por defecto, pero sin sentirse demasiado lento.

`wheelPxPerZoomLevel={60}`  
Reduce un poco la sensibilidad del scroll wheel/trackpad, manteniendo un zoom agil.

`className="base-map-tiles"`  
Permite aplicar estilos CSS especificos a la capa de tiles.

## CSS recomendado

```css
.map-container {
  height: 100%;
  width: 100%;
  background: #eee8d9;
}

.leaflet-container {
  background: #eee8d9;
}

.leaflet-tile-pane {
  will-change: transform;
}

.leaflet-tile {
  will-change: opacity, transform;
}

.leaflet-fade-anim .leaflet-tile {
  transition: opacity 320ms ease-out;
}

.base-map-tiles {
  background: #eee8d9;
}
```

## Notas practicas

- Usa un color de fondo parecido al mapa base. Si el tile tarda, el hueco se nota menos.
- `keepBuffer` mejora la sensacion, pero consume mas memoria y puede pedir mas tiles.
- `updateWhenZooming={false}` suele verse mas limpio en mapas raster, aunque el mapa puede actualizarse apenas despues de terminar el zoom.
- Si el proveedor de tiles es lento, estos ajustes ayudan pero no solucionan la latencia de red.
- Para una experiencia realmente parecida a Google Maps, considera vector tiles con MapLibre GL o Mapbox GL.

## Variante para Leaflet sin React

```js
const map = L.map('map', {
  center: [-17.394, -66.161],
  zoom: 13.5,
  maxZoom: 18,
  zoomSnap: 0.25,
  zoomDelta: 0.75,
  wheelPxPerZoomLevel: 60,
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: 'Desarrollado por el <a href="https://labtecnosocial.org/">Lab TecnoSocial</a>',
  className: 'base-map-tiles',
  keepBuffer: 5,
  updateWhenZooming: false,
  updateInterval: 260,
  crossOrigin: true,
}).addTo(map);
```
