import Plans from '../components/home/Plans';
import Info from '../components/home/Info';
import ShowCards from '../components/home/ShowCards';
import HomeHeader from '../components/home/HomeHeader';

export default function HomeView() {
  return (
    <>
      <HomeHeader />
      <div className='container sm:w-3/4 md:w-2/3 lg:w-screen mx-auto'>
        <ShowCards />
        <Info />
        <Plans />
      </div>
    </>
  );
}
