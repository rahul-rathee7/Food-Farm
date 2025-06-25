'use client';
import Main from './components/Main';
import Categories from './components/Categories';

export default function Home() {
  return (
    <div>
      <Main />
      <div className='flex gap-2 w-11/12 mx-auto'>
        <Categories />
      </div>
    </div>
  );
}
