import Plans from '../components/home/Plans';
import Info from '../components/home/Info';
import ShowCards from '../components/home/ShowCards';
import HomeHeader from '../components/home/HomeHeader';

export default function HomeView() {
  return (
    <div className='container sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto'>
      <HomeHeader />
      <ShowCards />
      <Info />
      <Plans />
    </div>
  );
}
