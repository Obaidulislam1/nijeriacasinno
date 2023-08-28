import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/home/Home";
import Login from "../login/Login";
import SignUp from "../signup/SignUp";
import Inhouse from "../page/inhouse/Inhouse";
import Slot from "../page/slots/Slot";
import LiveCasino from "../page/liveCasino/LiveCasino";
import HelpCenter from "../page/helpCenter/HelpCenter";
import WithdrowAmount from "../component/WithdrowAmount";
import Minerfee from "../component/Minerfee";
import OnePlayzonePKC from "../component/OnePlayzonePKC";
import TermsOfService from "../component/TermsOfService";
import ResponsibleGaming from "../component/ResponsibleGaming";
import BounesTerms from "../component/BounesTerms";
import AmlPolicy from "../component/AmlPolicy";
import SelfExclution from "../component/SelfExclution";
import Favorite from "../page/favorite.jsx/Favorite";
import Recent from "../page/recent/Recent";
import Transection from "../component/Transection";
import Deposit from "../page/deposit/Deposit";
import Profile from "../page/profile/Profile";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
              path: '/',
              element: <Home></Home>
            },
            {
              path: '/inhouse',
              element: <Inhouse></Inhouse>
            },
            {
              path: '/slots',
              element: <Slot></Slot>
            },
            {
              path: '/liveCasino',
              element: <LiveCasino></LiveCasino>
            },
            {
              path: '/favorite',
              element: <Favorite></Favorite>
            },
            {
              path: '/recent',
              element: <Recent></Recent>
            },
            {
              path: '/transaction',
              element: <Transection></Transection>
            },
            {
              path: '/deposit',
              element: <Deposit></Deposit>
            },
            {
              path: '/profile',
              element: <Profile></Profile>
            },
            {
              path: '/helpCenter',
              element: <HelpCenter></HelpCenter>,
              children: [
                {
                   path: '/helpCenter',
                   element: <WithdrowAmount></WithdrowAmount> 
                },
                {
                   path: '/helpCenter/minerfee',
                   element: <Minerfee></Minerfee>
                },
                {
                   path: '/helpCenter/termsOfService',
                   element: <TermsOfService></TermsOfService>
                },
                {
                   path: '/helpCenter/kyc',
                   element: <OnePlayzonePKC></OnePlayzonePKC>
                },
                {
                   path: '/helpCenter/responsibleGaming',
                   element: <ResponsibleGaming></ResponsibleGaming>
                },
                {
                   path: '/helpCenter/bonusTerms',
                   element: <BounesTerms></BounesTerms>
                },
                {
                   path: '/helpCenter/amlpolicy',
                   element: <AmlPolicy></AmlPolicy>
                },
                {
                   path: '/helpCenter/amlpolicy',
                   element: <AmlPolicy></AmlPolicy>
                },
                {
                   path: '/helpCenter/selfExclution',
                   element: <SelfExclution></SelfExclution>
                },
              ],
            },
        ]
    },
    {
        path: '/login',
        element : <Login></Login>
    },
    {
        path: '/signup',
        element : <SignUp></SignUp>
    }
]);