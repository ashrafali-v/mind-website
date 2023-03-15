import React,{useState} from 'react';

const Search=(props)=>
{
  const [key, setKey] = useState("");
  return (
      <>
      <input
      onChange={(event) => setKey(event.target.value)}
      id="default-search"
      value={key}
      className="search-input w-28 focus:outline-none h-6 pl-10 text-sm text-[#686868] border-b opacity-50 bg-[url('./image/magnifying-glass.svg')] bg-no-repeat bg-transparent"
      placeholder="Search"
      ></input>
      <button type="button" onClick={(e) => {setKey('');props.handleClear(e)}} class="ml-auto -mx-1.5 -my-1.5 " data-dismiss-target="#toast-default" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg aria-hidden="true" class="w-5 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <button type="submit" onClick={(e) => props.handleSubmit(e, key)} className="inline-flex items-center py-2.5 pl-3 ml-2 text-sm font-medium text-white bg-[#217BF4] rounded-xl border border-rounde hover:bg-blue-800 focus:ring-4 focus:outline-none">
        <svg aria-hidden="true" class="w-4 h-4 mr-2 -ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
     
    </>

  );
}
 
export default Search;