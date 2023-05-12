import useAuthContext from "../hooks/useAuthContext";
import SearchInput from "./SearchInput";
import Button from "./Button";

export default function SideSuggestions() {
  const { currentUserDetails } = useAuthContext();
  return (
    <div className="hidden lg:block lg:w-[25rem] sticky top-0 h-screen px-6 py-1">
      <SearchInput />
      <section className="mt-4 bg-gray-500 p-4 flex flex-col gap-2 bg-opacity-5 rounded-lg">
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
          <Button small black classes="ml-auto">
            Follow
          </Button>
        </div>
      </section>
    </div>
  );
}
