import React from 'react';
import HomePage from "./page/HomePage/HomePage";
import AllJob from './page/PageAllJob/AllJob';
import PageRecruiter from "./page/PageRecruiter/PageRecruiter";
import RecruiterInfo from './page/PageRecruiterInfo/RecruiterInfo';
import JobInfo from './page/PageJobInfo/JobInfo';
import PageLogin from "./page/PageLogin/index";
import PageRegister from './page/PageRegister';
import PageLoginRecruiter from "./PageRecruiter/PageLogin/index";
import PageRegisterREcruiter from "./PageRecruiter/PageRegister/index";
import ProfileUser from './page/PageProfileUser/index';
import ProfileRecruiter from "./page/PageProfileRecruiter/index";
import PageHomeRecruiter from "./PageRecruiter/HomePage/index";
import PostJob from "./PageRecruiter/PostJob/index";

const routes = [
    {
        path: '/',
        exact: true,
        main: HomePage
    },
    {
        path: '/tatcacongviec',
        exact: false,
        main: AllJob
    },
    {
        path: '/nhatuyendung',
        exact: false,
        main: PageRecruiter
    },
    {
        path: '/job/:id',
        exact: false,
        main: JobInfo
    },
    {
        path: '/recruiter/:id',
        exact: false,
        main: RecruiterInfo
    },
    {
        path: '/login',
        exact: false,
        main: PageLogin
    },
    {
        path: '/register',
        exact: false,
        main: PageRegister
    },
    {
        path: '/login-recruiter',
        exact: false,
        main: PageLoginRecruiter
    },
    {
        path: '/register-recruiter',
        exact: false,
        main: PageRegisterREcruiter
    },
    {
        path: '/profile-user',
        exact: false,
        main: ProfileUser
    },
    {
        path: '/profile-recruiter',
        exact: false,
        main: ProfileRecruiter
    },
    {
        path: '/trang-nha-tuyen-dung',
        exact: false,
        main:  PageHomeRecruiter
    },
    {
        path: '/dang-cong-viec',
        exact: false,
        main:  PostJob
    },
];

export default routes;
