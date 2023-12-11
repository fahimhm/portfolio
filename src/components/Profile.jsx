import { headContent } from '../constants';
import { Navbar } from '../components';

const Profile = () => {
  const mainProfile = headContent.find((item) => item.id === 'mainHead');

  if (!mainProfile) {
    return null;
  }

  return (
    <div>
      <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
        <a href="/">{mainProfile.content.find((item) => item.id === 'name')?.content}</a>
      </h1>
      <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
        {mainProfile.content.find((item) => item.id === 'title')?.content}
      </h2>
      <p className='mt-4 max-w-xs leading-normal'>
      {mainProfile.content.find((item) => item.id === 'titleDesc')?.content}
      </p>
      <Navbar />
    </div>
  )
}

export default Profile