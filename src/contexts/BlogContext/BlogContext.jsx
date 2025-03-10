import React, { createContext, useContext, useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { fireDB } from "@/firebase/firebase-config";
import { init_wow } from "@/utlis/initWowjs";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(fireDB, "blogs"));
        const blogList = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            imageUrl: data.imageUrl,
            introduction: data.introduction,
            createdOn: data.createdOn,
          };
        });
        setBlogs(
          blogList.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn))
        );
        init_wow();
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogs() {
  return useContext(BlogContext);
}
