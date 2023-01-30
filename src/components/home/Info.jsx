export default function Info() {
  return (
    <section className='grid gap-4 lg:grid-cols-2 sm:grid-cols-1 justify-center'>
      <div>
        <h2>The Wrestling Streaming Service You've Been Waiting For</h2>
        <div className='text-xl'>
          <p>
            For years, fans have been wanting a streaming service that provides
            convenient access to live shows and archived content; this includes
            AEW's quarterly Pay-Per Views, weekly TV shows (Dynamite and
            Rampage), and weekly YouTube shows (Dark and Dark Elevation).
          </p>
          <p>
            The All Elite Network is the ultimate{' '}
            <em>
              <u>unofficial</u>
            </em>{' '}
            streaming service for fans of All Elite Wrestling to access the AEW
            library of amazing content.
          </p>
        </div>
      </div>
      <div>
        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1675106463/All_Elite_Network/adam-page-dynamite-october-6-1200x675_zltdbt.webp'
          alt='Wrestler "Hangman" Adam Page standing on a ladder, eyeing the crowd after winning a ladder match'
        />
      </div>
    </section>
  );
}
