import Plans from '../components/home/Plans';
import Info from '../components/home/Info';
import LibraryCardList from '../components/home/LibraryCardList';
import HomeHeader from '../components/home/HomeHeader';

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <LibraryCardList />
      <Info />
      <Plans />
    </>
  );
}
