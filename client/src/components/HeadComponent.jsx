import { Profile, Footer } from '.';

const HeadComponent = () =>  (
  <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
    <Profile />
    <Footer />
  </header>
)

export default HeadComponent