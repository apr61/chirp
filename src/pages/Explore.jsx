import Header from "../components/Header";
import TabBtn from "../components/TabBtn";
import { useState } from "react";
import useChirpContext from "../hooks/useChirpContext";
import SingleChirp from "../components/SingleChirp";

export default function Explore() {
  const [activeTab, setActiveTab] = useState("For You");
  const { rootChirps, isLoading } = useChirpContext();
  function handleActiveTab(e) {
    setActiveTab(e.target.textContent);
  }
  return (
    <>
      <Header>
        <h1 className="text-xl font-bold p-4">Explore</h1>
        <div className="flex">
          <TabBtn
            text="For You"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
          <TabBtn
            text="Trending"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
          <TabBtn
            text="News"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
          <TabBtn
            text="Sports"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
          <TabBtn
            text="Entertainment"
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
        </div>
      </Header>
      <div className="">
        {isLoading
          ? "Loading..."
          : activeTab === "For You" &&
            rootChirps?.length > 0 &&
            rootChirps.map((chirp) => (
              <SingleChirp chirp={chirp} key={chirp.chirpId} />
            ))}
      </div>
    </>
  );
}
