import React from "react";
import styles from "@/app/contact/contact.module.css";
import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.grid_card}>
        <i>
          <MdEmail />
        </i>
        <h2>Email</h2>
        <p>Sunday to Thusday Expected</p>
        <p className={styles.last_para}>response time: 72 houres</p>
        <Link href="/">
          Send Email <span> -&gt;</span>
        </Link>
      </div>
      <div className={styles.grid_card}>
        <i>
          <MdVoiceChat />
        </i>
        <h2>Live Chat</h2>
        <p>Weekdays: 9 Am - 6 Pm ET</p>
        <p className={styles.last_para}>Weekdays: 9 Am - 6 Pm ET</p>
        <Link href="/">
          Chat Now <span>-&gt;</span>
        </Link>
      </div>
      <div className={styles.grid_card}>
        <i>
          <MdForum />
        </i>
        <h2>Community Frorum</h2>
        <p>Sunday to Thusday Expected</p>
        <p className={styles.last_para}>response time: 72 houres</p>
        <Link href="/">
          Ask The Community <span>-&gt;</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
