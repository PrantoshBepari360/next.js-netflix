import React from "react";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.error_page}>
        <div>
          <h1>404</h1>
          <h2>Not Found</h2>
          <p>Could not find requested resorce</p>
          <Link href="/">
            <button>Go to home</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
