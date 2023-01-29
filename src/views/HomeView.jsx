const HomeView = () => {
  return (
    <div className='container mx-auto'>
      <section className='text-center'>
        <h1>All Elite Wrestling: Now Available on Demand</h1>
        <p>
          Get access to the extensive All Elite Wrestling digital library,
          including PPV's, Dynamite, Rampage, Dark (Elevation), and more
        </p>
      </section>

      {/* Include images of shows */}
      <section className='grid grid-cols-4 gap-4 items-center justify-center'>
        <div className='col-span-1'>Column 1</div>
        <div className='col-span-1'>Column 2</div>
        <div className='col-span-1'>Column 3</div>
        <div className='col-span-1'>Column 4</div>
      </section>

      <section className='grid grid-cols-4 justify-center'>
        <div>
          <h2>The Wrestling Streaming Service You've Been Waiting For</h2>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
