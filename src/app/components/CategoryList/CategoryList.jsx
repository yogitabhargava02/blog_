import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// Mock data (replace with actual data source)
const mockData = [
  {
    _id: 1,
    slug: "style",
    img: "/style.png",
    title: "Style Category",
  },
  {
    _id: 2,
    slug: "food",
    img: "/food.png",
    title: "Food Category",
  },
  {
    _id: 3,
    slug: "travel",
    img: "/travel.png",
    title: "Travel Category",
  },
];

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {mockData.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
