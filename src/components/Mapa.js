import { MapContainer, TileLayer, AttributionControl } from 'react-leaflet'
import data from '../data/mapa-sonidos-cb.json'
import MiMarker from './MiMarker'

export default function Mapa() {

    return (
        <MapContainer center={[-17.394, -66.161]} zoom={13.5} attributionControl={false} className="map-container"
            maxZoom={16}
        >
            <TileLayer
                attribution='Desarrollado por el <a href="https://labtecnosocial.org/">Lab TecnoSocial</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            {data.map((item, index) => (
                <MiMarker key={index} item={item} />
            ))}

            <AttributionControl position="bottomleft" prefix={false} className="atribucion" />

        </MapContainer>
    )
}

