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
        <li key={index} className={styles.listsItem}>
          <Link href={"/"}>{point}</Link>
        </li>
      ))}
    </ul>
  );
};
