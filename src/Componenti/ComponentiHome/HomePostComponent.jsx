import { useSelector } from "react-redux";
import "../../Style/HomePostComponent.css";
import FilterHomePostsComponent from "./FilterHomePostsComponent";
import SinglePostHomePageComponent from "./SinglePostHomePageComponent";
import { useEffect, useState, useRef } from "react";
import FakeLoaderComponent from "./FakeLoaderComponent";

export default function HomePostComponent() {
  const allPosts = useSelector((state) => state.posts.data);
  const [postsStackNumber, setPostStackNumber] = useState(1);
  const [fakePostsLoader, setFakePostsLoader] = useState(false);
  const lastPostRef = useRef();

  const postsStackSize = 5;
  
  useEffect(() => {
    console.log(allPosts);
    console.log("nuovo effect");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("ultimo post");
          // L'ultimo elemento è entrato nella viewport

          setFakePostsLoader(true);
          const timer = setTimeout(() => {
            setFakePostsLoader(false);
            setPostStackNumber((prevNumber) => prevNumber + 1);
          }, 2000);
        }
      },
      { threshold: 0.5 } // L'observer viene notificato quando l'elemento è  entrato per metà; se metto 1 non funziona!
    );
    console.log(observer);
    if (lastPostRef.current) {
      console.log(lastPostRef.current);
      observer.observe(lastPostRef.current);
    }

    // Pulizia dell'observer
    return () => {
      if (lastPostRef.current) {
        console.log(lastPostRef.current);
        observer.unobserve(lastPostRef.current);
      }
    };
  }, [ postsStackNumber, allPosts]); // Osserva l'elemento dell'ultimo post

  return (
    <>
      <div className="home-post-component">
        <FilterHomePostsComponent />
        {allPosts &&
          allPosts
            .slice(0, postsStackSize * postsStackNumber)
            .map((post, index) => {
              if (
                index ===
                allPosts.slice(0, postsStackSize * postsStackNumber).length - 1
              ) {
                return (
                  <div key={post._id} ref={lastPostRef}>
                    <SinglePostHomePageComponent post={post} />
                  </div>
                );
              } else {
                return (
                  <SinglePostHomePageComponent key={post._id} post={post} />
                );
              }
            })}
        {fakePostsLoader && <FakeLoaderComponent loading={fakePostsLoader} />}
      </div>
    </>
  );
}
