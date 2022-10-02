import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ActivateUser from "../ActivateUser";
import Blog from "../Blog";
import PagesWrapper from "../PagesWrapper";
import PostContent from "../PostContent";
import Search from "../Search";
import SignIn from "../SignIn";
import SignUp from "../SignUp";






export enum PathNames{
    Home = '/',
    SignIn='/sign-in',
    SignUp='/sign-up',
    Search='/search',
    PostContent='/posts/:id',
    NewPost='/add',
    ActivateUser = '/activate/:uid/:token',

}


const Router = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.SignIn} element={<SignIn />} />
          <Route path={PathNames.SignUp} element={<SignUp />} />
          <Route path={PathNames.Search} element={<Search />} />
          <Route path={PathNames.NewPost} element={<PostContent />} />
          <Route path={PathNames.PostContent} element={<PostContent />} />
          <Route path={PathNames.ActivateUser} element={<ActivateUser />} />

        </Route>
        <Route path={'*'} element={<Navigate to={PathNames.SignIn}/>} />

      </Routes>
    </BrowserRouter>
  );
};
export default Router;
