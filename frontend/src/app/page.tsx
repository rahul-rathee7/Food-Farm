'use client';
import Main from './components/Main';
import Categories from './components/Categories';
import  Cards  from './components/Cards';

export default function Home() {
  return (
    <div>
      <Main />
      <div className='flex gap-2 w-11/12 mx-auto'>
        <Categories />
        <Cards />
      </div>
    </div>
  );
}
