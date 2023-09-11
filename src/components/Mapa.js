import { MapContainer, TileLayer, AttributionControl, LayersControl, LayerGroup } from 'react-leaflet'
import data from '../data/mapa-sonidos-cb.json'
import MiMarker from './MiMarker'
import './Mapa.css';

export default function Mapa() {
    const categorias = [...new Set(data.map(item => item.categoriaCorregida))];


    return (

        <MapContainer center={[-17.394, -66.161]} zoom={13.5} attributionControl={false} className="map-container"
            maxZoom={18}
        >
            <TileLayer
                attribution='Desarrollado por el <a href="https://labtecnosocial.org/">Lab TecnoSocial</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            <AttributionControl position="bottomright" prefix={false} className="atribucion" />

            {/* make a custom selector for categorias in the bottomleft of the map to handleChange */}
            <LayersControl position="bottomleft" className="categorias" collapsed={false} >
                <LayersControl.BaseLayer checked name="Todos">
                    <LayerGroup>
                        {data.map((item, index) => (
                            <MiMarker key={index} item={item} />
                        ))}
                    </LayerGroup>
                </LayersControl.BaseLayer>

                {categorias.map((category, index) => (
                    <LayersControl.BaseLayer key={index} name={category}>
                        <LayerGroup>
                            {data.filter(item => item.categoriaCorregida === category).map((item, index) => (
                                <MiMarker key={index} item={item} />
                            ))}
                        </LayerGroup>
                    </LayersControl.BaseLayer>
                ))}
            </LayersControl>

        </MapContainer>
    )

}

