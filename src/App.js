import './App.css';
import { ReactComponent as Boyblue } from './image/boy-blue.svg';
import { ReactComponent as BoyYellow } from './image/boy-yellow.svg';
import { ReactComponent as Girl } from './image/girl.svg';
import { ReactComponent as Logo } from './image/logo.svg';
function App() {
  return (
    <div className="App w-full rela'">
      <div className="hero flex flex-col w-full bg-gradient-to-r from-white to-blue-200 h-auto">
        <div className="w-full flex flex-row h-16 top-5">
          <div className='flex flex-row space-x-24 py-5'>
            <Logo />
            <div className='flex-1 flex-row space-x-5'>
              <a href="">Home</a>
              <a href="">Community</a>
              <a href="">Blog</a>
              <a href="">Events</a>
            </div>
          </div>
          <div className='flex-1 flex-row shrink-0 text-center'>
            <button class="h-16 w-40 px-6 font-semibold text-sm rounded-md border bg-[#217BF4] text-white" type="button">
              Aboout More
            </button>
            <button class="h-16 w-40 px-6 font-semibold text-sm rounded-md border bg-[#217BF4] text-white" type="button">
              Aboout More
            </button>
          </div>


        </div>
        <div className="flex flex-row w-full px-32 h-auto mx-auto">
          <div className="w-2/4 flex flex-col top-52">
            <div>
              <button class="h-9 w-44 px-6 font-semibold text-sm rounded-md border opacity-10 bg-[#217BF4]  text-[#217BF4]" type="button">
                Netbook community
              </button>
            </div>
            <div className='font-sans normal font-bold text-5xl leading-10 text-[#0A093D]'>Your Solutions For Community!</div>
            <div className='font-sans normal font-normal text-lg leading-7 text-[#656464]'>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</div>
            <div className='space-x-[18px]'>
              <button class="h-16 w-40 px-6 font-semibold text-sm rounded-md border bg-[#217BF4] text-white" type="button">
                Aboout More
              </button>
              <button class="h-16 w-40 px-6 font-semibold text-sm rounded-md border opacity-50 text-[#217BF4]" type="button">
                Invite Friend
              </button>
            </div>
          </div>
          <div className="w-3/4 flex-col top-40">
            <div className='flex flex-row'>
              <Girl />
              <BoyYellow />
            </div>
            <div className='flex flex-row'>
              <Boyblue />
            </div>
          </div>
        </div>
        <div className="w-full h-72"></div>
      </div>
      <h1 className="text-3xl font-bold underline bg-slate-300 w-auto">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
