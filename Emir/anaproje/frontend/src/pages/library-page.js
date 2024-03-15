import React from 'react'
import Spacer from "../components/common/spacer";
import Footer from '../components/common/footer';
import Library from '../components/library-page/library';
import Menubar from "../components/common/menubar"
import DashboardPage from './dashboard/dashboard-page';
import PageHeader from '../components/common/page-header';
const LibraryPage = () => {
    return (
        <>
     <PageHeader title="Library"/>

    <DashboardPage/>

        </>
      )
}

export default LibraryPage