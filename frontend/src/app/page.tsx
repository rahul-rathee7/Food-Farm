'use client';
import Main from './components/Main';
import Categories from './components/Categories';
import  Cards  from './components/Cards';
import Articles from './components/Articles';
import SubscribeSection from './components/SubscribeSection';
import AboutInformation from './components/AboutInformation';

export default function Home() {
  return (
    <div>
      <Main />
      <div className='flex gap-2 w-11/12 mx-auto'>
        <Categories />
        <Cards />
      </div>
      <Articles />
      <SubscribeSection />
      <AboutInformation />
    </div>
  );
}
