import { useSelector } from "react-redux";
import "../../Style/HomePostComponent.css";
import FilterHomePostsComponent from "./FilterHomePostsComponent";
import SinglePostHomePageComponent from "./SinglePostHomePageComponent";
import { useEffect } from "react";

export default function HomePostComponent() {
  const allPosts = useSelector((state) => state.posts.data);
  let postreversed = [];

  useEffect(() => {
    postreversed = [...allPosts]
  }, [allPosts])

  useEffect(() => {
    postreversed = [...allPosts]
  }, [])

console.log(allPosts)
  return (
    <>
      <div className="home-post-component">
        <FilterHomePostsComponent />
        {/* <SinglePostHomePageComponent post={"ciao"}/> */}

        {allPosts &&
          postreversed.reverse().map((post) => <SinglePostHomePageComponent key={post._id} post={post}/>)}
      </div>
    </>
  );
}
