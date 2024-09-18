import CustomButton from "../button/Button";
import styles from "./SearchBar.module.css";

interface ISearchBarProps {
  name: string;
  value: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({
  name,
  value,
  handleSearchChange,
}: ISearchBarProps) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Buscar..."
        name={name}
        value={value}
        onChange={handleSearchChange}
        className={styles.input}
      />
      <CustomButton stroked={false} variant="small" disabled={false}>
        Enviar
      </CustomButton>
    </div>
  );
}
