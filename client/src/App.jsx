import { HeadComponent, MainComponent } from './components';

const App = () => (
  <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
    <div className="group/spotlight relative">
      <div className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'></div>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <a href="" className='absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0'>Skip to content</a>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <HeadComponent />
          <MainComponent />
        </div>
      </div>
    </div>
  </div>
)

export default App