import Header from "../components/Header";
import TabBtn from "../components/TabBtn";
import SingleChirp from "../components/SingleChirp";
import { useState } from "react";
import useChirpContext from "../hooks/useChirpContext";

export default function Home() {
  const [activeTab, setActiveTab] = useState("For You");
  const { rootChirps, isLoading } = useChirpContext();
  function handleActiveTab(e) {
    setActiveTab(e.target.textContent);
  }

  return (
    <>
      <Header>
        <h1 className="text-xl font-bold p-4">Home</h1>
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
