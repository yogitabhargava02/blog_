import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" width={300} height={200} className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          {/* <span className={styles.date}> */}
            {/* {item.createdAt ? item.createdAt.substring(0, 10) : ""} -{" "} */}
          {/* </span> */}
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div className={styles.desc}>
          {/* Displaying HTML content safely */}
          {/* {item.desc && (
            <div dangerouslySetInnerHTML={{ __html: item.desc.substring(0, 60) }} />
          )} */}
        </div>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
