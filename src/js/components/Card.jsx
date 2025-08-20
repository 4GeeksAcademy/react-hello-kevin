import imagen1 from "../../img/eldenRing.png"
import imagen2 from "../../img/subnautica2.png"
import imagen3 from "../../img/gtaVI.png"
import imagen4 from "../../img/cyberpunk.png"
import CardItem from "./CardItem";



const cardsData = [
  {
    imagen: imagen1,
    titulo: 'Elden Ring Nightrein',
    alt: 'Imagen 1',
    descripcion:
      'Embarcate en una aventura épica en el mundo de Elden Ring, donde la oscuridad y la luz se entrelazan en una narrativa cautivadora. Explora vastos paisajes, enfrenta enemigos temibles y descubre secretos ocultos en cada rincón.',
  },
  {
    imagen: imagen2,
    titulo: 'Subnautica',
    alt: 'Imagen 2',
    descripcion:
      'Sumérgete en las profundidades de un océano alienígena, explora ecosistemas submarinos llenos de vida y peligros desconocidos. Construye tu base, recolecta recursos y sobrevive mientras desentrañas los misterios que esconde este fascinante mundo acuático.',
  },

  {
    imagen: imagen3,
    titulo: 'GTV VI',
    alt: 'Imagen 3',
    descripcion:
      "Vive la emoción del crimen y la aventura en una ciudad vibrante y llena de oportunidades. Conduce vehículos de lujo, participa en misiones arriesgadas y toma decisiones que marcarán tu destino en el universo abierto más ambicioso de la saga Grand Theft Auto.",
  },

  {
    imagen: imagen4,
    titulo: 'Cyberpunk',
    alt: 'Imagen 4',
    descripcion:
      "Adéntrate en Night City, una metrópolis futurista donde la tecnología y el caos se entrelazan. Personaliza a tu personaje, mejora tus implantes cibernéticos y toma decisiones que influirán en el destino de la ciudad y sus habitantes en esta aventura de rol y acción.",
  },

];

export default function ({ data = cardsData }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        data.map((card, idx) => (
          <CardItem
            key={idx}
            imagen={card.imagen}
            titulo={card.titulo}
            alt={card.alt}
            descripcion={card.descripcion}
          />
        ))
      }
    </div>
  )
}
