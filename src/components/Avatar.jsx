import styles from "./Avatar.module.css";

export function Avatar({ src, hasBorder = false, ...props }) {
  return (
    <img
      src={src}
      className={`${hasBorder ? styles.avatarWithBorder : styles.avatar}`}
    />
  );
}
