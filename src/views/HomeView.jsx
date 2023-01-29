const HomeView = () => {
  return (
    <div className='container xs:w-screen sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3 mx-auto'>
      <section className='text-center'>
        <h1>All Elite Wrestling: Now Available on Demand</h1>
        <p>
          Get access to the extensive All Elite Wrestling digital library,
          including PPV's, Dynamite, Rampage, Dark (Elevation), and more
        </p>
      </section>

      {/* Include images of shows */}
      <section className='grid grid-cols-4 gap-4 md:grid-cols-1 lg:grid-cols-4 items-center justify-center text-center'>
        <div className='col-span-1'>Column 1</div>
        <div className='col-span-1'>Column 2</div>
        <div className='col-span-1'>Column 3</div>
        <div className='col-span-1'>Column 4</div>
      </section>

      {/* Info */}
      <section className='grid lg:grid-cols-2 sm:grid-cols-1 justify-center'>
        <div>
          <h2>The Wrestling Streaming Service You've Been Waiting For</h2>
          <p>
            For years, fans have been wanting a streaming service that provides
            convenient access to live shows and archived content; this includes
            AEW's quarterly Pay-Per Views, weekly TV shows (Dynamite and
            Rampage), and weekly YouTube shows (Dark and Dark Elevation).
          </p>
          <p>
            The All Elite Network is the ultimate <em>unofficial</em> streaming
            service for fans of All Elite Wrestling to access the AEW library of
            amazing content.
          </p>
        </div>
        <div>
          <img src='' alt='Hangman Adam Page' />
        </div>
      </section>
    </div>
  );
};

export default HomeView;
