import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";


const icon = new Icon({
    iconUrl: 'https://labtecnosocial.org/wp-content/uploads/2023/09/marker-3.png',
    iconSize: [42, 42],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

export default function MiMarker({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <Marker position={item.coordArray} icon={icon}>
            <Popup>
                <article className="sound-popup">
                    <button className="popup-image-button" type="button" onClick={() => setOpen(true)} aria-label="Ampliar fotografia">
                        <img src={`${process.env.PUBLIC_URL}/${item.fotoUrl}`} alt={item.descripcion} />
                    </button>
                    <div className="popup-body">
                        <span className="popup-category">{item.categoriaCorregida}</span>
                        <h2>{item.descripcion}</h2>
                        <audio controls>
                            <source src={`${process.env.PUBLIC_URL}/${item.sonidoUrl}`} />
                        </audio>
                        <dl className="popup-meta">
                            <div>
                                <dt>Zona</dt>
                                <dd>{item.area}</dd>
                            </div>
                            <div>
                                <dt>Horario</dt>
                                <dd>{item.horario}</dd>
                            </div>
                        </dl>
                    </div>
                </article>
                <Lightbox
                    styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
                    open={open}
                    close={() => setOpen(false)}

                    slides={[
                        { src: `${process.env.PUBLIC_URL}/${item.fotoUrl}`, description: item.descripcion },
                    ]}
                    plugins={[Captions]}
                    captions={{ descriptionTextAlign: 'center' }}
                />

            </Popup>
        </Marker>
    )
}
