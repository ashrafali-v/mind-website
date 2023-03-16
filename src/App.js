import "./App.css";
import React, { useState } from "react";
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
import { ReactComponent as FavIcon } from "./image/fav-icon.svg";
import { ReactComponent as Star } from "./image/star.svg";
import Search from "./components/search";
import Footer from "./components/footer";
function App() {
  //const [key, setKey] = useState("");
  const [matches, setMatches] = useState([]);
  const [keywords, setkeyWords] = useState([
    { id: "menu-home", value: "Home" },
    { id: "menu-community", value: "Community" },
    { id: "menu-blog", value: "Blog" },
    { id: "menu-events", value: "Events" },
    { id: "menu-login", value: "Log in" },

    { id: "mf-btn-netbbok", value: "Netbook community" },
    { id: "mf-tite", value: "Your Solutions For Community!" },
    {
      id: "mf-desc",
      value:
        "More than 2 billion people in over countries use socibook to stay in touch with friends & family.",
    },
    { id: "mf-btn-about", value: "About More" },
    { id: "mf-btn-invite", value: "Invite Friend" },

    { id: "sf-btn-netbbok", value: "Whats Netboks?" },
    { id: "sf-tite", value: "Why Join to Netbook Social Network?" },
    {
      id: "sf-desc",
      value:
        "Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.",
    },
    { id: "sf-li-groups", value: "Groups" },
    { id: "sf-li-Messages", value: "Messages" },
    { id: "sf-li-groups", value: "Share" },

    { id: "tf-init-title", value: "4.8 rating" },
    { id: "tf-tite", value: "+836k Members" },
    {
      id: "tf-desc",
      value:
        "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
    },
    { id: "tf-link", value: "Join Our Community" },

    { id: "tfs-init-title", value: "Awwwards" },
    { id: "tfs-tite", value: "Best of 2021 on Github" },
    {
      id: "tfs-desc",
      value:
        "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
    },
    { id: "tfs-link", value: "Go To Awards" },

    { id: "tft-init-title", value: "Our Achievement" },
    { id: "tft-tite", value: "We are Connecting You The Digital Life." },
    {
      id: "tft-desc",
      value:
        "The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.",
    },
    { id: "tft-btn", value: "Discover me" },
  ]);

  function handleSearch(e, key) {
    e.preventDefault();
    clearHighlight();
    var tempArr = [];
    console.log(key);
    if (!key) return false;
    keywords.forEach((o) => {
      //making the search case in sensitive
      if (o.value.toLowerCase().includes(key.toLowerCase())) {
        tempArr.push(o.id);
      }
    });
    setMatches(tempArr);
    tempArr.length > 0 && keywordHighlight(tempArr);
  }
  function keywordHighlight(result) {
    result.forEach((res) => {
      document.getElementById(res).style.background = "yellow";
    });
    document.getElementById(result[0]).scrollIntoView();
  }
  function clearHighlight() {
    matches.forEach((res) => {
      document.getElementById(res).style.background = "white";
    });
  }

  /*handling burger menu action*/
  function handleOpen() {
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");
    if (burger.length && menu.length) {
      menu[0].classList.toggle("hidden");
    }
  }
  function handleClose() {
    const menu = document.querySelectorAll(".navbar-menu");
    const close = document.querySelectorAll(".navbar-close");
    if (close.length) {
      menu[0].classList.toggle("hidden");
    }
  }
  /*handling burger menu action*/
  return (
    <div className="App w-full" id="main">
      <div className="flex flex-col w-full h-auto bg-gradient-to-r from-white to-blue-100 ">
        <div className="flex min-[860px]:hidden">
          <button
            className="navbar-burger items-center text-blue-600 p-3"
            onClick={handleOpen}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden w-full min-[860px]:flex flex-row h-16 top-5 px-10 2xl:px-5 py-10">
          <div className="flex flex-row lg:space-x-20 md:space-x-10 sm:space-x-5 basis-1/2">
            <div className="flex flex-row">
              <Logo />
            </div>
            <div className="flex-1 flex-row space-x-5">
              <a id="menu-home" href="">
                Home
              </a>
              <a id="menu-community" href="">
                Community
              </a>
              <a id="menu-blog" href="">
                Blog
              </a>
              <a id="menu-events" href="">
                Events
              </a>
            </div>
          </div>
          <div className="basis-1/2 flex-row-reverse text-center space-x-2 ">
            <Search handleSubmit={handleSearch} handleClear={clearHighlight} />
            <button
              id="menu-login"
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
                <FavIcon />
              </a>
              <button class="navbar-close" onClick={handleClose}>
                <svg
                  class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Community
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Event
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-auto">
              <div class="pt-6">
                <Search handleSubmit={handleSearch} handleClear={clearHighlight} />
                <button
                  className="login-button h-12 w-24 px-6 font-semibold text-sm rounded-2xl drop-shadow-lg bg-[#217BF4] text-white"
                  type="button"
                >
                  Log in
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div className="w-full h-0 opacity-10 border border-solid my-3 border-[#217BF4]"></div>
        <div className="flex flex-row max-lg:flex-col w-full lg:px-20 md:px-10 sm:px-5 min-[320px]:px-5 h-auto mx-auto md-xl:space-x-16">
          <div className="w-2/4 max-lg:w-full max-lg:py-10 lg:py-32 flex flex-col top-52">
            <button
              id="mf-btn-netbbok"
              className="h-9 w-44 font-normal text-sm rounded-md border bg-[#eaeff8] text-[#217BF4]"
              type="button"
            >
              Netbook community
            </button>
            <div
              id="mf-tite"
              className="font-sans normal font-bold text-5xl leading-10 text-[#0A093D] mt-5 text-start"
            >
              Your Solutions For Community!
            </div>
            <div
              id="mf-desc"
              className="font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start"
            >
              More than 2 billion people in over countries use socibook to stay
              in touch with friends & family.
            </div>
            <div className="space-x-[18px] flex flex-row max-sm:flex-col max-sm:space-y-3 mt-11 mr-auto">
              <button
                id="mf-btn-about"
                className="h-16 w-40 px-6 ml-auto font-normal text-sm rounded-xl border border-[#217BF4] bg-[#217BF4] text-white"
                type="button"
              >
                Aboout More
              </button>
              <button
                id="mf-btn-invite"
                className="h-16 w-40 px-6 ml-auto font-normal text-sm rounded-xl border border-[#217BF4] text-[#217BF4]"
                type="button"
              >
                Invite Friend
              </button>
            </div>
          </div>
          <div className="w-3/4 max-lg:w-full flex-col top-40 bg-[url('./image/vector-triangle.svg')] bg-no-repeat bg-center">
            <div className="flex flex-row">
              <Girl className="ml-auto mr-auto max-md:-ml-12 max-md:-mt-11" />
              <ChatYellow className="sm:mt-16 max-sm:mt-12 ml-auto mr-auto" />
              <BoyYellow className="md:mt-10 ml-auto mr-auto max-xl:mr-20 lg:mr-20 max-md:mr-0 max-[500px]:-mr-5 max-sm:-mt-3" />
            </div>
            <div className="flex flex-row ">
              <Boyblue className="ml-auto mr-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-gradient-to-r bg-white mb-28 max-xl:mt-0 xl:mt-28">
        <div
          id="id1"
          className="flex flex-row lg:space-x-16 max-xl:flex-col w-full px-32 h-auto mx-auto md-xl:space-x-16 max-xl:mb-20"
        >
          <div
            id="id2"
            className="w-2/4 max-xl:w-full py-32 flex flex-col top-52"
          >
            <p
              id="sf-btn-netbbok"
              className="text-[#217BF4] font-normal text-sm text-start"
            >
              Whats netbooks?
            </p>
            <div
              id="sf-tite"
              className="font-sans normal font-bold text-5xl leading-10 text-[#0A093D] mt-5 text-start"
            >
              Why Join to Notebook Social Network?
            </div>
            <div
              id="sf-desc"
              className="font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start"
            >
              Recent surveys have indicated that small businesses recognise the
              need they have to connect with consumer.
            </div>
            <div className="mt-11 mr-auto">
              <li id="sf-groups" className="flex items-center">
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
              <li id="sf-messages" className="flex items-center">
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
              <li id="sf-share" className="flex items-center">
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
          <div className="w-3/4 max-xl:w-full sm:space-x-5 flex flex-row max-sm:flex-col ml-auto mr-auto sm:ml-0 max-[400px]:-ml-20 max-[500px]:-ml-14 max-xl:-mx-auto max-sm:space-y-2">
            <Discussion className="xl:mr-10 mt-10 max-[500px]: w-64" />
            <div className="flex flex-col space-y-5 ">
              <Coding className="md:ml-auto mr-auto sm:ml-0 max-[500px]:w-64" />
              <Lan className="md:ml-auto mr-auto sm:ml-0 max-[500px]:w-64" />
            </div>
          </div>
        </div>
        <div class="w-full flex flex-row max-lg:flex-col max-lg:space-y-20 px-32 max-sm:px-5 lg:space-x-10">
          <div class="w-1/3 max-xl:w-full">
            <div class="w-full text-start bg-white border border-gray-200 rounded-lg shadow">
              <div class="p-5 space-y-5">
                <div className="flex flex-row">
                  <Star />
                  <a href="#" id="tf-init-title">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 ml-2">
                      4.8 Rating
                    </h5>
                  </a>
                </div>
                <div id="tf-title" className="flex flex-row space-x-1">
                  <People />
                  <div className="inline-flex items-center text-base font-semibold text-[#217BF4]">
                    +836K
                  </div>
                  <div className="inline-flex items-center text-base">
                    Members
                  </div>
                </div>
                <div id="tf-desc" className="flex">
                  More than 2 billion we people over countries use socibooks we
                  to stay in touch with friends.
                </div>
                <div class="flex items-center justify-between">
                  <a
                    id="tf-link"
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
                <div id="tfs-init-title" className="flex flex-row">
                  <Trophy />
                  <div className="inline-flex items-center text-base ml-2">
                    Awwwards
                  </div>
                </div>
                <div id="tfs-title" className="flex flex-row space-x-1">
                  <RedEllipse />
                  <div className="items-center text-base">
                    Best of <span className="inline-flex items-center text-base font-semibold text-[#217BF4]">2021</span> on Github
                  </div>
                </div>
                <div id="tfs-desc" className="flex">
                  More than 2 billion we people over countries use socibooks we
                  to stay in touch with friends.
                </div>
                <div id="tfs-link" class="flex items-center justify-between">
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
                  id="tft-init-title"
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#217BF4]"
                >
                  Our Achievement
                </a>
                <div
                  id="tft-title"
                  className="font-sans normal break-words font-bold text-4xl leading-10 text-[#0A093D] mt-5 text-start"
                >
                  We are Connecting You The Digital Life.
                </div>
                <div
                  id="tft-desc"
                  className="font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start"
                >
                  The scope the Social Media becomes crucial Is helps the
                  business to directly engage with their needs and wants
                </div>
                <div id="tft-btn" class="flex items-center justify-between">
                  <button class="inline-flex h-14 drop-shadow-md items-center px-3 py-2 text-sm rounded-xl font-medium text-center text-white bg-[#217BF4]">
                    Discover me
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
      <div className="flex flex-row max-lg:flex-col sm:h-auto max-[640px]:h-auto w-full h-96 bg-[#2B2B39] px-10 py-10">
        <div className="flex flex-row w-2/3 max-lg:w-full">
          <div
            id="mf-btn-netbbok"
            className="flex flex-col w-1/4 text-white space-y-5 text-start"
          >
            <h2 className="font-medium text-lg text-white">Home</h2>
            <a href="#" className="font-medium text-md text-[#E7E7E7]">
              Home
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Community
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Events
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Contact
            </a>
          </div>
          <div
            id="mf-btn-netbbok"
            className="flex flex-col w-1/4 text-white space-y-5 text-start"
          >
            <h2 className="font-medium text-lg text-white">Resources</h2>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Blog
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              News
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Guides
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Help Center
            </a>
          </div>
          <div
            id="mf-btn-netbbok"
            className="flex flex-col w-1/4 text-white space-y-5 text-start"
          >
            <h2 className="font-medium text-lg text-white">Community</h2>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              NewsFeed
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Profile
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Friends
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Forums
            </a>
          </div>
          <div
            id="mf-btn-netbbok"
            className="flex flex-col w-1/4 text-white space-y-5 text-start"
          >
            <h2 className="font-medium text-lg text-white">Main links</h2>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Members
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Activity
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Groups
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Private Group
            </a>
          </div>
        </div>
        <div className="flex flex-col w-1/3 mb-10 text-white space-y-5 sm:ml-5 max-lg:w-full">
          <div
            id="mf-btn-netbbok"
            className="font-sans normal font-semibold text-lg leading-7 text-white mt-5 text-start max-lg:text-center"
          >
            Subscribe Cirkle Newsletter
          </div>
          <div
            id="mf-btn-netbbok"
            className="font-sans normal font-normal text-lg leading-7 text-white mt-5 text-start max-lg:text-center"
          >
            Subscribe to be the first one to know about updates. Enter your
            email
          </div>
          <EmailForm className="max-lg:ml-auto mr-auto max-lg:ml-0" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;