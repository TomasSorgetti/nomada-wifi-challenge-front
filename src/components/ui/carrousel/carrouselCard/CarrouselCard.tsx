import styles from "./CarrouselCard.module.css";
import Image from "next/image";
import BreweryImg from "@/assets/images/brewery.png";
import locationIcon from "@/assets/icons/location.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import { cutText } from "@/utils/textUtils";
import { formatPhone } from "@/utils/phoneUtils";
import { IBrewery } from "@/interfaces/breweries.interface";
import IconLabel from "../../iconLabel/IconLabel";
import CustomButton from "../../button/Button";
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
          <IconLabel icon={locationIcon}>{cutText(location, 20)}</IconLabel>
          <IconLabel icon={phoneIcon}>{formatPhone(brewery.phone)}</IconLabel>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <CustomButton
          href={`/breweries/${brewery.id}`}
          stroked={false}
          variant="small"
        >
          Ver más
        </CustomButton>
      </div>
    </div>
  );
}
