import './App.css';
import { ReactComponent as Boyblue } from './image/boy-blue.svg';
import { ReactComponent as BoyYellow } from './image/boy-yellow.svg';
import { ReactComponent as Girl } from './image/girl.svg';
import { ReactComponent as Logo } from './image/logo.svg';
import { ReactComponent as ChatYellow } from './image/chat-yellow.svg';
import { ReactComponent as Coding } from './image/coding.svg';
import { ReactComponent as Discussion } from './image/discussion.svg';
import { ReactComponent as Lan } from './image/lan-cable.svg';
import { ReactComponent as People } from './image/people.svg';
import { ReactComponent as Trophy } from './image/trophy.svg';
import { ReactComponent as RedEllipse } from './image/red-ellipse.svg';
function App() {
  return (
    <div className="App w-full'">
      <div className="flex flex-col w-full h-auto bg-gradient-to-r from-white to-blue-100 ">
        <div className="w-full flex flex-row h-16 top-5 px-10 py-10">
          <div className='flex flex-row space-x-24'>
            <Logo />
            <div className='flex-1 flex-row space-x-5'>
              <a href="">Home</a>
              <a href="">Community</a>
              <a href="">Blog</a>
              <a href="">Events</a>
            </div>
          </div>
          <div className='flex-1 flex-row shrink-0 text-center space-x-2'>

            {/* <input className="w-28 h-8 text-[#686868] font-normal text-sm" placeholder='search'></input> */}
            <input type="search" id="default-search" className="w-28 h-4 p-4 pl-10 text-sm text-[#686868] border-b opacity-50 bg-[url('./image/magnifying-glass.svg')] bg-no-repeat bg-transparent" placeholder="Search Here..." required></input>
            <button className="h-12 w-24 px-6 font-semibold text-sm rounded-2xl drop-shadow-lg bg-[#217BF4] text-white" type="button">
              Log in
            </button>
          </div>
        </div>
        <div className='w-full h-0 opacity-10 border border-solid my-3 border-[#217BF4]'></div>
        <div className="flex flex-row max-xl:flex-col w-full px-32 h-auto mx-auto md-xl:space-x-16">
          <div className="w-2/4 max-xl:w-full py-32 flex flex-col top-52">
            <button className="h-9 w-44 font-normal text-sm rounded-md border bg-[#eaeff8]  text-[#217BF4]" type="button">
              Netbook community
            </button>
            <div className='font-sans normal font-bold text-5xl leading-10 text-[#0A093D] mt-5 text-start'>Your Solutions For Community!</div>
            <div className='font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start'>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</div>
            <div className='space-x-[18px] mt-11 mr-auto'>
              <button className="h-16 w-40 px-6  ml-auto font-semibold text-sm rounded-xl border border-[#217BF4] bg-[#217BF4] text-white" type="button">
                Aboout More
              </button>
              <button className="h-16 w-40 px-6 font-normal text-sm rounded-xl border border-[#217BF4] text-[#217BF4]" type="button">
                Invite Friend
              </button>
            </div>
          </div>
          <div className="w-3/4 max-xl:w-full flex-col top-40 bg-[url('./image/vector-triangle.svg')] bg-no-repeat bg-center">
            {/* <VectorTriangle /> */}
            <div className='flex flex-row'>
              <Girl className='ml-auto mr-auto' />
              <ChatYellow className='mt-16 max-xl:mt-10 ml-auto mr-auto' />
              <BoyYellow className='mt-10 ml-auto mr-auto max-xl:mr-10' />
            </div>
            <div className='flex flex-row '>
              <Boyblue className='ml-auto mr-auto' />
            </div>
          </div>
        </div>
      </div>
      <div className="hero flex flex-col w-full bg-gradient-to-r bg-white my-28">
        <div className="flex flex-row space-x-16 max-xl:flex-col w-full px-32 h-auto mx-auto md-xl:space-x-16">
          <div className="w-2/4 max-xl:w-full py-32 flex flex-col top-52">
            <p className="text-[#217BF4] font-normal text-sm text-start">Whats netbooks?</p>
            <div className='font-sans normal font-bold text-5xl leading-10 text-[#0A093D] mt-5 text-start'>Why Join to Notebook Social Network?</div>
            <div className='font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start'>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</div>
            <div className='mt-11 mr-auto'>
              <li className="flex items-center">
                <svg className="w-4 h-4 flex-shrink-0" fill="#217BF4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Groups
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 flex-shrink-0" fill="#217BF4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Messages
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 flex-shrink-0" fill="#217BF4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Share
              </li>
            </div>
          </div>
          <div className="w-3/4 max-xl:w-full flex flex-row ml-auto mr-auto">
            <Discussion className=' mr-10 mt-10' />
            <div className="flex flex-col space-y-5">
              <Coding className='ml-auto mr-auto' />
              <Lan className='ml-auto mr-auto' />
            </div>

          </div>
        </div>
        <div class="grid grid-rows-3 grid-flow-col gap-4 px-32">
          <div class="row-start-1 row-span-3 col-span-1">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5 space-y-5">
                <div className="flex flex-row">
                  <svg aria-hidden="true" class="w-10 h-10 text-[#217BF4] dark:text-gray-500 border-solid border-[#217BF4]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">4.8 Rating</h5>
                  </a>
                </div>
                <div className="flex flex-row space-x-1">
                  <People />
                  <div className="inline-flex items-center text-base font-semibold text-[#217BF4] dark:text-white">
                    +836K
                  </div>
                  <div className="inline-flex items-center text-base">
                    Members
                  </div>

                </div>
                <div className="flex">
                  More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                </div>
                <div class="flex items-center justify-between">
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#217BF4]">
                    Join Our Community
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row-start-1 row-span-3 col-span-1">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5 space-y-5">
                <div className="flex flex-row">
                  <Trophy />
                  <div className="inline-flex items-center text-base">
                    Awwwards
                  </div>
                </div>
                <div className="flex flex-row space-x-1">
                  <RedEllipse />
                  <div className="inline-flex items-center text-base">
                    Best of
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-[#217BF4] dark:text-white">
                    2021
                  </div>
                  <div className="inline-flex items-center text-base">
                    on Github
                  </div>

                </div>
                <div className="flex">
                  More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                </div>
                <div class="flex items-center justify-between">
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#4A4A56]">
                    Go to Awards
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row-start-1 row-span-3 col-span-2">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5 space-y-5 text-start">
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#217BF4]">
                  Our Achievement
                </a>
                <div className='font-sans normal font-bold text-4xl leading-10 text-[#0A093D] mt-5 text-start'>Your Solutions For Community!</div>
                <div className='font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start'>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</div>
                <div class="flex items-center justify-between">
                  <button class="inline-flex h-14 drop-shadow-md items-center px-3 py-2 text-sm rounded-xl font-medium text-center text-white bg-[#217BF4]">
                    Join Our Community
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero flex flex-col w-full h-96 bg-[#2B2B39]">

      </div>
    </div>
  );
}

export default App;
