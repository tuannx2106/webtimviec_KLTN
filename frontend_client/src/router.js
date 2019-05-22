import React from 'react';
import HomePage from "./page/HomePage/HomePage";
import AllJob from './page/PageAllJob/AllJob';
import PageRecruiter from "./page/PageRecruiter/PageRecruiter";
import RecruiterInfo from './page/PageRecruiterInfo/RecruiterInfo';
import JobInfo from './page/PageJobInfo/JobInfo';
import PageLogin from "./page/PageLogin/index";
import PageRegister from './page/PageRegister';
import ProfileUser from './page/PageProfileUser/index';
import ProfileRecruiter from "./page/PageProfileRecruiter/index";


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/tatcacongviec',
        exact: false,
        main: () => <AllJob />
    },
    {
        path: '/nhatuyendung',
        exact: false,
        main: () => <PageRecruiter />
    },
    {
        path: '/info-job',
        exact: false,
        main: () => <JobInfo />
    },
    {
        path: '/info',
        exact: false,
        main: () => <RecruiterInfo />
    },
    {
        path: '/login',
        exact: false,
        main: () => <PageLogin />
    },
    {
        path: '/register',
        exact: false,
        main: () => <PageRegister />
    },
    {
        path: '/profile-user',
        exact: false,
        main: () => <ProfileUser />
    },
    {
        path: '/profile-recruiter',
        exact: false,
        main: () => <ProfileRecruiter />
    },
];

export default routes;