import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserData } from '../../Action/userActions';
import { getAllPostsData } from '../../Action/postsActions';
import { getAllProfilesData } from '../../Action/allProfilesActions';


export default function FakeComponent() {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserData());
        dispatch(getAllPostsData());
        dispatch(getAllProfilesData());
    },[])

  return (
    <>
    </>
  )
}
