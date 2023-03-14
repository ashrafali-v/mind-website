/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import React, { useState, useEffect } from "react";
import { ReactComponent as Boyblue } from "./image/boy-blue.svg";
import { ReactComponent as BoyYellow } from "./image/boy-yellow.svg";
import { ReactComponent as Girl } from "./image/girl.svg";
import { ReactComponent as Logo } from "./image/logo.svg";
import { ReactComponent as ChatYellow } from "./image/chat-yellow.svg";
import { ReactComponent as Coding } from "./image/coding.svg";
import { ReactComponent as Discussion } from "./image/discussion.svg";
import { ReactComponent as Lan } from "./image/lan-cable.svg";
import { ReactComponent as People } from "./image/people.svg";
import { ReactComponent as Trophy } from "./image/trophy.svg";
import { ReactComponent as RedEllipse } from "./image/red-ellipse.svg";
import { ReactComponent as EmailForm } from "./image/email-form.svg";
import { ReactComponent as LogoFooter } from "./image/logo-footer.svg";
import { debounce } from "lodash";
function App() {
  const handleChange = debounce((e) => {
    mark(e.target.value);
    e.preventDefault();
  }, 500);

  function mark(it) {
    clearIt();
    if (it.length > 2) {
      let c = new RegExp(it, "ig");

      document.getElementById("main").innerHTML = document
        .getElementById("main")
        .innerHTML.replace(c, "<mark>" + it + "</mark>");
    }
  }

  function clearIt() {
    let b = new RegExp("mark>", "ig")
    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML.replace(b, "wbr>")
  }
  const [click, setClick] = useState(false);
  useEffect(() => {
    // open
    handleMenu()
  }, [click])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleMenu() {
    setClick(!click)
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');
    console.log(burger.length);
    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener('click', function () {
          console.log('clicked');
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener('click', function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }
  }

  return (
    <div className="App w-full" id="main">
      <div className="flex flex-col w-full h-auto bg-gradient-to-r from-white to-blue-100 ">
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={handleMenu}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden w-full lg:flex flex-row h-16 top-5 px-10 py-10">
          <div className="flex flex-row lg:space-x-20 md:space-x-10 sm:space-x-5 basis-1/2">
            <div className="flex flex-row"><Logo /></div>
            <div className="flex-1 flex-row space-x-5">
              <a href="">Home</a>
              <a href="">Community</a>
              <a href="">Blog</a>
              <a href="">Events</a>
            </div>
          </div>
          <div className="basis-1/2 flex-row-reverse text-center space-x-2 ">
            {/* <input className="w-28 h-8 text-[#686868] font-normal text-sm" placeholder='search'></input> */}
            <input
              type="search"
              onChange={handleChange}
              onBlur={() => clearIt()}
              id="default-search"
              className="w-28 focus:outline-none h-6 pl-10 text-sm text-[#686868] border-b opacity-50 bg-[url('./image/magnifying-glass.svg')] bg-no-repeat bg-transparent"
              placeholder="Search"

            ></input>
            <button
              className="h-12 w-24 px-6 font-semibold text-sm rounded-2xl drop-shadow-lg bg-[#217BF4] text-white"
              type="button"
            >
              Log in
            </button>
          </div>
        </div>
        <div className="navbar-menu relative z-50 hidden">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
              <a class="mr-auto text-3xl font-bold leading-none" href="#">
                <svg class="h-12" alt="logo" viewBox="0 0 100 100">
                  <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
                </svg>
              </a>
              <button class="navbar-close">
                <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                </li>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
                </li>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
                </li>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
                </li>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div class="mt-auto">
              <div class="pt-6">
                <a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
                <a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="w-full h-0 opacity-10 border border-solid my-3 border-[#217BF4]"></div>
        <div className="flex flex-row max-lg:flex-col w-full lg:px-20 md:px-10 sm:px-5 min-[320px]:px-5 h-auto mx-auto md-xl:space-x-16">
          <div className="w-2/4 max-xl:w-full py-32 flex flex-col top-52">
            <button
              className="h-9 w-44 font-normal text-sm rounded-md border bg-[#eaeff8]  text-[#217BF4]"
              type="button"
            >
              Netbook community
            </button>
            <div className="font-sans normal font-bold text-5xl leading-10 text-[#0A093D] mt-5 text-start">
              Your Solutions For Community!
            </div>
            <div className="font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start">
              More than 2 billion people in over countries use socibook to stay
              in touch with friends & family.
            </div>
            <div className="max-2xl:space-x-[18px] lg:space-y-3 mt-11 mr-auto">
              <button
                className="h-16 w-40 px-6  ml-auto font-normal text-sm rounded-xl border border-[#217BF4] bg-[#217BF4] text-white"
                type="button"
              >
                Aboout More
              </button>
              <button
                className="h-16 w-40 px-6 ml-auto font-normal text-sm rounded-xl border border-[#217BF4] text-[#217BF4]"
                type="button"
              >
                Invite Friend
              </button>
            </div>
          </div>
          <div className="w-3/4 max-xl:w-full flex-col top-40 bg-[url('./image/vector-triangle.svg')] bg-no-repeat bg-center">
            {/* <VectorTriangle /> */}
            <div className="flex flex-row">
              <Girl className="ml-auto mr-auto" />
              <ChatYellow className="mt-16 max-xl:mt-10  ml-auto mr-auto" />
              <BoyYellow className="mt-10 sm:mt-2 ml-auto mr-auto max-xl:mr-10 sm:mr-0" />
            </div>
            <div className="flex flex-row ">
              <Boyblue className="ml-auto mr-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-gradient-to-r bg-white my-28">
        <div
          id="id1"
          className="flex flex-row space-x-16 max-xl:flex-col w-full px-32 h-auto mx-auto md-xl:space-x-16 max-xl:mb-20"
        >
          <div
            id="id2"
            className="w-2/4 max-xl:w-full py-32 flex flex-col top-52"
          >
            <p
              id="id3"
              className="text-[#217BF4] font-normal text-sm text-start"
            >
              Whats netbooks?
            </p>
            <div className="font-sans normal font-bold text-5xl leading-10 text-[#0A093D] mt-5 text-start">
              Why Join to Notebook Social Network?
            </div>
            <div className="font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start">
              Recent surveys have indicated that small businesses recognise the
              need they have to connect with consumer.
            </div>
            <div className="mt-11 mr-auto">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="#217BF4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Groups
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="#217BF4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Messages
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="#217BF4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Share
              </li>
            </div>
          </div>
          <div className="w-3/4 max-xl:w-full flex flex-row max-sm:flex-col ml-auto mr-auto sm:ml-0 max-xl:-mx-auto max-sm:space-y-5">
            <Discussion className="mr-10 mt-10" />
            <div className="flex flex-col space-y-5">
              <Coding className="ml-auto mr-auto sm:ml-0" />
              <Lan className="ml-auto mr-auto sm:ml-0" />
            </div>
          </div>
        </div>
        <div class="w-full flex flex-row max-lg:flex-col max-lg:space-y-20 px-32 lg:space-x-10">
          <div class="w-1/3 max-xl:w-full">
            <div class="w-full text-start bg-white border border-gray-200 rounded-lg shadow">
              <div class="p-5 space-y-5">
                <div className="flex flex-row">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 text-[#217BF4] border-solid border-[#217BF4]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900">
                      4.8 Rating
                    </h5>
                  </a>
                </div>
                <div className="flex flex-row space-x-1">
                  <People />
                  <div className="inline-flex items-center text-base font-semibold text-[#217BF4]">
                    +836K
                  </div>
                  <div className="inline-flex items-center text-base">
                    Members
                  </div>
                </div>
                <div className="flex">
                  More than 2 billion we people over countries use socibooks we
                  to stay in touch with friends.
                </div>
                <div class="flex items-center justify-between">
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#217BF4]"
                  >
                    Join Our Community
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/3 max-xl:w-full">
            <div class="w-full text-start bg-white border border-gray-200 rounded-lg shadow">
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
                  <div className="inline-flex items-center text-base font-semibold text-[#217BF4]">
                    2021
                  </div>
                  <div className="inline-flex items-center text-base">
                    on Github
                  </div>
                </div>
                <div className="flex">
                  More than 2 billion we people over countries use socibooks we
                  to stay in touch with friends.
                </div>
                <div class="flex items-center justify-between">
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#4A4A56]"
                  >
                    Go to Awards
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-2/3 max-xl:w-full">
            <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
              <div class="p-5 space-y-5 text-start">
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#217BF4]"
                >
                  Our Achievement
                </a>
                <div className="font-sans normal break-words font-bold text-4xl leading-10 text-[#0A093D] mt-5 text-start">
                  Your Solutions For Community!
                </div>
                <div className="font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start">
                  More than 2 billion people in over countries use socibook to
                  stay in touch with friends & family.
                </div>
                <div class="flex items-center justify-between">
                  <button class="inline-flex h-14 drop-shadow-md items-center px-3 py-2 text-sm rounded-xl font-medium text-center text-white bg-[#217BF4]">
                    Join Our Community
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col sm:h-auto w-full h-96 bg-[#2B2B39] px-10 py-10">
        <div className="flex flex-row w-2/3 sm:w-full">
          <div className="flex flex-col w-1/4 text-white space-y-5 ">
            <h2 className="font-medium text-lg">Home</h2>
            <a href="#" className="font-medium text-md">Home</a>
            <a href="#" className="font-small text-md">Community</a>
            <a href="#" className="font-small text-md">Events</a>
            <a href="#" className="font-small text-md">Contact</a>
          </div>
          <div className="flex flex-col w-1/4 text-white space-y-5">
            <h2>Resources</h2>
            <a href="#" className="font-small text-md">Blog</a>
            <a href="#" className="font-small text-md">News</a>
            <a href="#" className="font-small text-md">Guides</a>
            <a href="#" className="font-small text-md">Help Center</a>
          </div>
          <div className="flex flex-col w-1/4 text-white space-y-5">
            <h2>Community</h2>
            <a href="#" className="font-small text-md">NewsFeed</a>
            <a href="#" className="font-small text-md">Profile</a>
            <a href="#" className="font-small text-md">Friends</a>
            <a href="#" className="font-small text-md">Forums</a>
          </div>
          <div className="flex flex-col w-1/4 text-white space-y-5">
            <h2>Main links</h2>
            <a href="#" className="font-small text-md">Members</a>
            <a href="#" className="font-small text-md">Activity</a>
            <a href="#" className="font-small text-md">Groups</a>
            <a href="#" className="font-small text-md">Private Group</a>
          </div>
        </div>
        <div className="flex flex-col w-1/3 sm:w-full mb-10 text-white space-y-5 ml-5">
          <div className="font-sans normal font-semibold text-lg leading-7 text-white mt-5 text-start sm:text-center">
            Subscribe Cirkle Newsletter
          </div>
          <div className="font-sans normal font-normal text-lg leading-7 text-white mt-5 text-start sm:text-center">
            Subscribe to be the first one to know about updates. Enter your email
          </div>
          <EmailForm className="sm:ml-auto mr-auto" />
        </div>
      </div>
      <div className="hero flex flex-row w-full h-24 bg-[#20202D] px-10 py-10 justify-between">
        <div className="text-[#F6F6F6]">Besnik Creativity Agency.</div>
        <div>
          <LogoFooter className="align-middle" />
        </div>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
            <span className="sr-only">GitHub account</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
            <span className="sr-only">Dribbbel account</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;