import styles from "./card.module.css";
import { Arrow } from "../../assets/icons";

export default function Card({
  image,
  title,
  author,
  date,
}: {
  image: string;
  title: string;
  author: string;
  date?: string;
}) {
  return (
    <>
      <div className={`${styles.container}`}>
        <div>
          <img src={image} alt="" />

          <div>
            <div className={`${styles.textContainer} hidden`}>
              {date && <p>{date}</p>}
              <h2>{title}</h2>
              <p>{author}</p>
            </div>

            <div className={styles.horizontalSeparator}></div>

            <button className=" hidden">
              <span>Read Story</span>
              <div className={styles.arrowBtn}>
                <Arrow color="white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
