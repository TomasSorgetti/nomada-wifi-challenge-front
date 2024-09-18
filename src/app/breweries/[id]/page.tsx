import styles from "./page.module.css";
import SecondaryNavbar from "@/components/layout/secondaryNavbar/SecondaryNavbar";
import { getBreweryById } from "@/services/api";
import { formatPhone } from "@/utils/phoneUtils";
import locationIcon from "@/assets/icons/location.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import IconLabel from "@/components/ui/iconLabel/IconLabel";
import CustomButton from "@/components/ui/button/Button";
import Comments from "@/components/layout/comments/Comments";
import DetailSwiper from "@/components/ui/detailSwiper/DetailSwiper";

export default async function Page({ params }: { params: { id: string } }) {
  const brewerie = await getBreweryById(params.id);
  const { name, phone, address_1, city, state } = brewerie;

  const completeLocation = address_1 + ", " + city + ", " + state;
  const formatedPhone = formatPhone(phone);

  if (!brewerie) {
    return (
      <>
        <SecondaryNavbar />
        <main className={styles.main}>
          <h1>No hay resultados</h1>
        </main>
      </>
    );
  }
  return (
    <>
      <SecondaryNavbar />
      <main className={styles.main}>
        <div className={styles.infoContainer}>
          <h1>{name}</h1>
          <IconLabel icon={locationIcon}>{completeLocation}</IconLabel>
          <IconLabel icon={phoneIcon}>{formatedPhone}</IconLabel>
        </div>
        <DetailSwiper />
        <h2>Opiniones</h2>
        <Comments />
        <div className={styles.buttonsContainer}>
          <CustomButton variant="large">Reservar mesa</CustomButton>
          <CustomButton stroked={true} variant="large">
            Opciones de transporte
          </CustomButton>
        </div>
      </main>
    </>
  );
}
