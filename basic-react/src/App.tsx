import { useState } from 'react'
import './App.css'
import { Footer } from './Footer';
import { Header } from './Header'
import { Sidebar } from './Sidebar';

export interface AppProps {
  headerTitle?: string;
  menuItems?: string[];
  footerContent?: {
    company?: string;
    year?: number;
  };
}

function App() {
  const [appProps, setApprops] = useState<AppProps>({
    headerTitle: "Develop. Preview. Ship",
    menuItems: ["Home", "Services", "About", "Contact us"],
    footerContent: {
      company: "React App",
      year: 2024,
    }
  });
  const buttonClick = () => {
    const incrementedYear = appProps.footerContent?.year ? appProps.footerContent.year + 1 : 0;
    const currentApprops = {...appProps, footerContent: {...appProps.footerContent, year: incrementedYear}};
    setApprops(currentApprops);    
  }
  return (
    <>
    <Header headerTitle={appProps.headerTitle} />
    <Sidebar menuItems={appProps.menuItems} />
    <Footer footerContent={appProps.footerContent} />
    <button onClick={() => buttonClick()}>Increase the year</button>
    </>
  )
}

export default App
