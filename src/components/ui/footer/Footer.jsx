export default function Footer() {
  return (
    <footer className='bg-black py-11 text-neutral-500'>
      <div className='container w-3/4 mx-auto'>
        <div className='flex justify-center'>
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/v1675282964/All_Elite_Network/aew-logo_fpfxqw.png'
            alt='AEW Logo'
            className='w-60'
          />
        </div>
        <div className='text-center'>
          <p>
            All Elite Network is a fan made site and is in no way affiliated or
            sponsored by All Elite Wrestling. All media is property of All Elite
            Wrestling or their respective owners
          </p>
          <p>
            See an issue?{' '}
            <a href='' className='text-elite-gold-dark font-thin'>
              Let me know or submit a pull request!
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
