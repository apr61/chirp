import SearchInput from "./SearchInput";
import WhoToFollow from "./WhoToFollow";

export default function SideSuggestions() {
  return (
    <div className="hidden lg:block lg:w-[25rem] sticky top-0 h-screen px-6 py-1">
      <SearchInput />
      <WhoToFollow />
    </div>
  );
}
