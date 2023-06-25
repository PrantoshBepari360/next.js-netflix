import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const page = async ({ params }) => {
  const id = params?.id;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0]?.details;

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        Netflix \{" "}
        <span>
          {main_data?.type ? main_data?.type : "Movie Type Not Found"}
        </span>
      </h2>
      <div className={styles.card_section}>
        <div>
          <Image
            src={
              main_data?.backgroundImage?.url
                ? main_data?.backgroundImage?.url
                : "/home.svg"
            }
            alt={main_data?.title ? main_data?.title : "Alt Title Not Found"}
            width={260}
            height={200}
          />
        </div>
        <div>
          <h1>{main_data?.title ? main_data?.title : "Title Not Found"}</h1>
          <p>
            {main_data?.synopsis
              ? main_data?.synopsis
              : "Description Not Found"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
