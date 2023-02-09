import Plans from '../components/home/Plans';
import Info from '../components/home/Info';
import LibraryCardList from '../components/home/LibraryCardList';
import HomeHeader from '../components/home/HomeHeader';
import AnimatedPage from '../components/animations/AnimatedPage';

export default function HomePage() {
  return (
    <AnimatedPage>
      <HomeHeader />
      <LibraryCardList />
      <Info />
      <Plans />
    </AnimatedPage>
  );
}
