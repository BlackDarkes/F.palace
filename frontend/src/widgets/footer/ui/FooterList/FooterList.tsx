import Link from "next/link";
import styles from "./FooterList.module.scss";

interface IFooterListProps {
  title: string;
  points: string[];
  isSocial?: boolean;
}

export const FooterList = ({
  title,
  points,
  isSocial = false,
}: IFooterListProps) => {
  return (
    <ul className={styles.lists}>
      <li>
        <h3 className={styles.listsTitle}>{title}</h3>
      </li>
      {points.map((point, index) => (
        <li key={index}>
          <Link href={"/"} className={`${styles.listsItem} ${isSocial ? styles.listsSocial : ""}`}>{point}</Link>
        </li>
      ))}
    </ul>
  );
};
