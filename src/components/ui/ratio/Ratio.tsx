import styles from "./Ratio.module.css";

interface IRatioProps {
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

const Ratio = ({ name, value, handleChange, children }: IRatioProps) => {
  return (
    <label className={styles.container} htmlFor={name}>
      <input
        type="radio"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        checked={value === name}
      />
      {children}
    </label>
  );
};

export default Ratio;
