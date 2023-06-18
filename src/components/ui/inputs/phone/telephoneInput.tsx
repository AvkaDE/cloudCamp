import styles from "./phoneinput.module.scss";
import MaskedInput from "react-text-mask";

type TProps = {
  value: string;
  disabled?: boolean;
};

const TelephoneInput = ({
  value,
  disabled = false,
}: TProps) => {
  return (
    <MaskedInput
      mask={[
        "+",
        "7",
        " ",
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
      ]}
      className={styles.input}
      guide={false}
      disabled={disabled}
      value={value}
    />
  );
};

export default TelephoneInput