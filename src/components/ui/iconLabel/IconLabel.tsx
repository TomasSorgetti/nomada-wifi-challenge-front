import Image, { StaticImageData } from "next/image";
import styles from "./IconLabel.module.css";

interface IconLabelProps {
  icon: string | StaticImageData;
  children: React.ReactNode;
}

export default function IconLabel({ icon, children }: IconLabelProps) {
  return (
    <div className={styles.container}>
      <Image src={icon} alt={typeof children === "string" ? children : ""} />
      <div className={styles.label}>{children}</div>
    </div>
  );
}
