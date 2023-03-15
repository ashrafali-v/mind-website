import React from 'react';
import { ReactComponent as LogoFooter } from "../image/logo-footer.svg";
import { ReactComponent as Twitter } from "../image/twitter.svg";
import { ReactComponent as Instagram } from "../image/instagram.svg";
import { ReactComponent as Facebook } from "../image/facebook.svg";
import { ReactComponent as Linkedin } from "../image/linkedin.svg";

const Footer=()=>
{
  return (
    <div className="flex flex-row max-sm:flex-col max-sm:h-auto max-sm:space-y-5 w-full h-24 bg-[#20202D] px-10 py-10 justify-between">
        <div id="mf-btn-netbbok" className="text-[#F6F6F6]">
          Besnik Creativity Agency.
        </div>
        <div>
          <LogoFooter className="align-middle max-sm:mx-auto" />
        </div>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 max-sm:mx-auto">
          <a href="#" className="text-white hover:text-gray-400">
            <Twitter/>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-white hover:text-gray-900">
            <Instagram/>
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="#" className="text-white hover:text-gray-900">
            <Facebook/>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-white hover:text-gray-900">
            <Linkedin/>
            <span className="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
  );
}
export default Footer;