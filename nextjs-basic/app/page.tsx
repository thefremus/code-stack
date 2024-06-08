import React from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { BasicProps } from '../models/BasicProps';

const homePageBasicProps: BasicProps = {
  headerTitle: 'Develop. Preview. Ship',
  menuItems: ['Home', 'Services', 'About', 'Contact us'],
  footerContent: {
    company: 'React App',
    year: 2024,
  },
};

function HomePage() {
  return (
    <>
    <Header headerTitle={homePageBasicProps.headerTitle} />
    <Sidebar menuItems={homePageBasicProps.menuItems} />
    <Footer footerContent={homePageBasicProps.footerContent} />
    </>
  )
}

export default HomePage;