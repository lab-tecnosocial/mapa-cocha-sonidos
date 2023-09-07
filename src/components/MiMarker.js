import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";


const icon = new Icon({
    iconUrl: 'https://labtecnosocial.org/wp-content/uploads/2023/09/sound-icon.png',
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

export default function MiMarker({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <Marker position={item.coordArray} icon={icon}>
            <Popup>
                <img src={item.fotoUrl} width="300px" alt={item.descripcion} onClick={() => setOpen(true)} />
                <audio controls  >
                    <source src={item.sonidoUrl} />
                </audio>
                <p>Descripción: {item.descripcion}</p>
                <p>Zona: {item.area}</p>
                <p>Horario: {item.horario}</p>
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

