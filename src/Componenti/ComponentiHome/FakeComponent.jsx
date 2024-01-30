import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserData } from "../../Action/userActions";
import { getAllPostsData } from "../../Action/postsActions";
import { getAllProfilesData } from "../../Action/allProfilesActions";
import { getSearchJob } from "../../Action/searchActions";

export default function FakeComponent() {
  const stato = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProfilesData());
    dispatch(getSearchJob());


    dispatch(getUserData());
  }, []);



  return <></>;
}
