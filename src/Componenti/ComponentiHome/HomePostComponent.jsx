import { useSelector } from "react-redux";
import "../../Style/HomePostComponent.css";
import FilterHomePostsComponent from "./FilterHomePostsComponent";
import SinglePostHomePageComponent from "./SinglePostHomePageComponent";

export default function HomePostComponent() {
  const allPosts = useSelector(state => state.posts.data);
 


console.log(allPosts)
  return (
    <>
      <div className="home-post-component">
        <FilterHomePostsComponent />
        {/* <SinglePostHomePageComponent post={"ciao"}/> */}

        {allPosts &&
          allPosts.map((post) => <SinglePostHomePageComponent key={post._id} post={post}/>)}
      </div>
    </>
  );
}
