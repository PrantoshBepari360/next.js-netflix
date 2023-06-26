import React from "react";
import ContactCard from "../component/ContactCard";
import styles from "./contact.module.css";
import ContactFrom from "../component/ContactFrom";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Page</h1>
        <ContactCard></ContactCard>
        <section className={styles.contact_section}>
          <h2>
            We&rsquo;d love to hear <span>from you</span>
          </h2>
          <ContactFrom />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.4650428502387!2d90.1504108753809!3d23.080066179133546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755699b96eeefab%3A0x87448fa52c571029!2z4Kan4Ka-4Kau4KeB4Ka44Ka-IOCmrOCnh-CmquCmvuCmsOCngCDgpqzgpr7gp5zgpr8!5e0!3m2!1sen!2sbd!4v1687694368995!5m2!1sen!2sbd"
        width={600}
        height={450}
        style={{ border: 0 }}
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
};

export default Contact;
