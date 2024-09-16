import { IBrewery } from "@/lib/features/Breweries/BreweriesSlice";
import styles from "./CarrouselCard.module.css";
import Button from "../../button/Button";
import Image from "next/image";
import BreweryImg from "@/assets/images/brewery.png";
import locationIcon from "@/assets/icons/location.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import { cutText } from "@/utils/textUtils";
import { formatPhone } from "@/utils/phoneUtils";
export interface ICarrouselCardProps {
  brewery: IBrewery;
}


export default function CarrouselCard({ brewery }: ICarrouselCardProps) {
  const location =
    brewery.address_1 + ", " + brewery.city + ", " + brewery.state;

  return (
    <div className={styles.card}>
      <h2>{brewery.name}</h2>
      <div className={styles.cardContent}>
        <Image
          src={BreweryImg}
          alt="Portada de la cerveceria"
          className={styles.cardImg}
        />
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <Image src={locationIcon} alt="Icono de locación" />
            {cutText(location, 20)}
          </div>
          <div className={styles.info}>
            <Image src={phoneIcon} alt="Icono de teléfono" />
            {formatPhone(brewery.phone)}
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button stroked={false} variant="small">
          Ver más
        </Button>
      </div>
    </div>
  );
}
