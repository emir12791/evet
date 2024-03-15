import React from "react";
import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import ContactPage from "../pages/contact-page";
import LoginPage from "../pages/login-page";
import DashboardPage from "../pages/dashboard/dashboard-page";
import AdminManagementPage from "../pages/dashboard/admin-management-page";
import PrivateRoute from "./private-route";
import { config } from "../helpers/config";
import Error404Page from "../pages/errors/error-404";
import Error401Page from "../pages/errors/error-401";
import LibraryPage from "../pages/library-page";
import ExpiredPage from "../pages/dashboard/expired-page";
import NotreturnedPage from "../pages/dashboard/not-returned-page";
import TotalLoansPage from "../pages/dashboard/total-loans-page";
import PublishersPage from "../pages/dashboard/publishers-page";
import CategoriesPage from "../pages/dashboard/categories-page";
import MememberPage from "../pages/dashboard/memember-page";
import AuthorPage from "../pages/dashboard/author-page";
import BookPage from "../pages/dashboard/book-page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        
      },
      {
        path: "contact",
        element: <ContactPage/>
      },
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "library",
        element: <LibraryPage/>
      },
      {
        path: "dashboard",
        children: [
          {
            index: true,  
            element: <PrivateRoute roles={config.pageRoles.dashboard}><DashboardPage/></PrivateRoute>
          },
          {
            path:"memembers", 
            element: <PrivateRoute roles={config.pageRoles.memember}><MememberPage/></PrivateRoute>
          },
          {
            path:"authors", 
            element: <PrivateRoute roles={config.pageRoles.author}><AuthorPage/></PrivateRoute>
          },
          {
            path:"books", 
            element: <PrivateRoute roles={config.pageRoles.book}><BookPage/></PrivateRoute>
          },
          {
            path:"publishers", 
            element: <PrivateRoute roles={config.pageRoles.publishers}><PublishersPage/></PrivateRoute>
          },
          {
            path:"categories", 
            element: <PrivateRoute roles={config.pageRoles.categories}><CategoriesPage/></PrivateRoute>
          },
          {
            path:"total-loans", 
            element: <PrivateRoute roles={config.pageRoles.totalLoans}><TotalLoansPage/></PrivateRoute>
          },
          {
            path:"not-returned", 
            element: <PrivateRoute roles={config.pageRoles.notReturned}><NotreturnedPage/></PrivateRoute>
          },
          {
            path:"expired", 
            element: <PrivateRoute roles={config.pageRoles.expired}><ExpiredPage/></PrivateRoute>
          },
          
        
        ]
      },
      {
        path: "unauthorized",
        element: <Error401Page/>
      },
      {
        path: '*',
        element: <Error404Page />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
