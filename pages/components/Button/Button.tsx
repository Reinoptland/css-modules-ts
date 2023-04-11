import { inter } from "../fonts";
import styles from "./Button.module.css";

interface IButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<
  IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, variant = "primary", className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.btn} ${styles[variant]} ${inter.className} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
