"use client"
import React, { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

// Mock data (replace with actual data source)
const mockData = [
  { _id: 1, title: "Sample Post 1", imageUrl: "/style.png" },
  { _id: 2, title: "Sample Post 2", imageUrl: "/style.png" },
  { _id: 3, title: "Sample Post 3", imageUrl: "/style.png" },
  // Add more mock data as needed
];

const CardList = ({ page, cat }) => {
  // State to hold posts and count (simulating fetched data)
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  // Simulate data fetching effect (replace with actual fetch logic later)
  useEffect(() => {
    const fetchPosts = async () => {
      // Simulate fetching data with delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Set mock data to state (replace with actual fetch logic)
      setPosts(mockData);
      setCount(mockData.length); // Simulate total count
    };

    fetchPosts();
  }, [page, cat]);

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
