import styles from "./Container.module.css";

export default function Container({ children, classes }) {
  return <div className={`${styles["container"]} ${classes}`}>{children}</div>;
}
