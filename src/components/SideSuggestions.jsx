import useAuthContext from "../hooks/useAuthContext";
import SearchInput from "./SearchInput";

export default function SideSuggestions() {
  const { currentUserDetails } = useAuthContext();
  return (
    <div className="hidden lg:block lg:max-w-lg sticky top-0 h-screen p-4">
      <SearchInput />
      <section className="mt-4 bg-gray-500 p-4 flex flex-col gap-2 bg-opacity-5 rounded-lg w-full">
        <h3 className="font-medium text-lg">Who to follow</h3>
        <div className="flex gap-2 items-center">
          <img
            src={currentUserDetails.profileUrl}
            className="w-12 h-12 object-cover rounded-full"
            loading="lazy"
            alt={currentUserDetails.name}
          />
          <div className="flex flex-col items-start">
            <h3 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis w-26">
              {currentUserDetails.name}
            </h3>
            <p className="text-slate-700">@{currentUserDetails.username}</p>
          </div>
          <button className="px-4 py-2 border border-black rounded-full hover:bg-white outline-2 outline-gray-200">
            Follow
          </button>
        </div>
      </section>
    </div>
  );
}
