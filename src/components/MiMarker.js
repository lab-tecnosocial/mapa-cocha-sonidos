import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";


const icon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

export default function MiMarker({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <Marker position={item.coordArray} icon={icon}>
            <Popup>
                <img src={item.Foto_URL} width="300px" alt={item["Descripción"]} onClick={() => setOpen(true)} />
                <audio controls  >
                    <source src={item.Sonido_URL} />
                </audio>
                <p>Encargado: {item.Responsable}</p>
                <p>Descripción: {item["Descripción"]}</p>
                {/* <Lightbox
                    styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
                    open={open}
                    close={() => setOpen(false)}

                    slides={[
                        { src: item.imgColUrl, description: '' },
                        { src: item.imgBwUrl, description: '' },
                    ]}
                    plugins={[Captions]}
                    captions={{ descriptionTextAlign: 'center' }}
                /> */}

            </Popup>
        </Marker>
    )
}

