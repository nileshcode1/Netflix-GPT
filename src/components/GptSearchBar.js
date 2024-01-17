import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

     const langKey = useSelector(store=> store.config.lang)
   return (
     <div className="pt-[10%] flex justify-center">
       <form className="w-1/2 bg-black grid grid-cols-12">
         {/* Input takes 3/4 of the width (9 out of 12 columns) */}
         <input
           type="text"
           className="p-4 m-4 col-span-9"
           placeholder={lang[langKey].gptSearchPlaceholder}
         />
         {/* Button takes 1/4 of the width (3 out of 12 columns) */}
         <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
           {lang[langKey].search}
         </button>
       </form>
     </div>
   );
};

export default GptSearchBar;
