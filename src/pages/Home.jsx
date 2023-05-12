import Header from "../components/Header";
import TabBtn from "../components/TabBtn";
import SingleChirp from "../components/SingleChirp";
import { useState } from "react";
import useChirpContext from "../hooks/useChirpContext";
import Logo from "../components/Logo";

export default function Home() {
  const [activeTab, setActiveTab] = useState("For You");
  const { rootChirps, isLoading } = useChirpContext();
  function handleActiveTab(e) {
    setActiveTab(e.target.textContent);
  }

  return (
    <>
      <Header>
        <h1 className="hidden text-xl font-bold p-4 sm:block">Home</h1>
        <div className="sm:hidden flex justify-center items-center p-2">
          <Logo />
        </div>
        <div className="flex">
          <TabBtn
            text="For You"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
          <TabBtn
            text="Following"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
        </div>
      </Header>
      <div className="">
        {isLoading
          ? "Loading..."
          : rootChirps != null &&
            rootChirps.length > 0 &&
            rootChirps.map((chirp) => (
              <SingleChirp chirp={chirp} key={chirp.chirpId} />
            ))}
      </div>
    </>
  );
}
