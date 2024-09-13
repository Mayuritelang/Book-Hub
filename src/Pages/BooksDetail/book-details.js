import React from 'react';
import {Navbar} from '../../Component/Layouts/Navbar/Navbar'
import { DetailsSection } from '../../Component/Layouts/detailsSection/DetailsSection';
import {Footer} from '../../Component/Layouts/Footer/Footer'

export const BooksDetail = () => {
  return (
    <section>
      <Navbar darkTheme={true}/>

      <DetailsSection/>
      <Footer/>
    </section>
  );
};
