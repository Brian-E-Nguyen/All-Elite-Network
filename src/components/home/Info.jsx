export default function Info() {
  return (
    <section className='bg-neutral-900 py-4'>
      <div className='container sm:w-3/4 md:w-2/3 lg:w-screen mx-auto'>
        <div className='grid gap-4 lg:grid-cols-2 sm:grid-cols-1 justify-center items-center px-3 mb-32'>
          {/* Section 1 */}
          <div>
            <h2>The Wrestling Streaming Service You've Been Waiting For</h2>
            <div className='text-xl'>
              <p>
                For years, fans have been wanting a streaming service that
                provides convenient access to live shows and archived content;
                this includes AEW's quarterly Pay-Per Views, weekly TV shows
                (Dynamite and Rampage), and weekly YouTube shows (Dark and Dark
                Elevation).
              </p>
              <p>
                The All Elite Network is the ultimate{' '}
                <em>
                  <u>unofficial</u>
                </em>{' '}
                streaming service for fans of All Elite Wrestling to access the
                AEW library of amazing content.
              </p>
            </div>
          </div>
          <div>
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/v1675106463/All_Elite_Network/adam-page-dynamite-october-6-1200x675_zltdbt.webp'
              alt='Wrestler "Hangman" Adam Page standing on a ladder, eyeing the crowd after winning a ladder match'
              loading='lazy'
            />
          </div>

          {/* Section 2 */}
          <div>
            <h2>Enjoy on you TV</h2>
            <p className='text-2xl'>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div>
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/v1675279461/All_Elite_Network/Young-Bucks-AEW-Revolution_fnwa6o.webp'
              alt='Nick Jackson kicking Kenny Omega'
              loading='lazy'
            />
          </div>

          {/* Section 2 */}
          <div>
            <h2>Download VODs to watch offline</h2>
            <p className='text-2xl'>Available on the All-Elite Plan</p>
          </div>
          <div>
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/v1675279774/All_Elite_Network/Hikaru-Shida-hitting-a-knee-strike-on-Tay-Conti-Cropped_sxmun4.webp'
              alt='Hikaru Shida hitting a knee strike on Tay Melo'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
