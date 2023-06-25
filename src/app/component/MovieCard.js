import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const MovieCard = (curElem) => {
  const { id, title, synopsis, backgroundImage } = curElem?.jawSummary;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={backgroundImage?.url ? backgroundImage?.url : "/home.svg"}
            alt={title}
            width={260}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h2>
            {title?.substring(0, 18)
              ? title?.substring(0, 18)
              : "Title Not Found"}
          </h2>
          <p>{`${
            synopsis?.substring(0, 66)
              ? synopsis?.substring(0, 66)
              : "Description Not Found"
          } ...`}</p>

          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
