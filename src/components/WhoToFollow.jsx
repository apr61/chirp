import { useEffect, useState } from "react";
import { getUsersList } from "../services/profile";
import useAuthContext from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import FollowBtn from "./FollowBtn";

function WhoToFollow() {
  const [users, setUsers] = useState([]);
  const { currentUserDetails } = useAuthContext();
  const getFollowSuggestions = async () => {
    try {
      const data = await getUsersList();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFollowSuggestions();
  }, []);
  return (
    <section className="mt-4 bg-gray-500 p-4 flex flex-col gap-2 bg-opacity-5 rounded-lg">
      <h3 className="font-medium text-lg">Who to follow</h3>
      {users.map((user) => {
        if (user.userId !== currentUserDetails.uid)
          return (
            <article key={user.userId} className="flex gap-2 items-center">
              <Link to={`/profile/${user.username}`}>
                <img
                  src={user.profileUrl}
                  className="w-12 h-12 object-cover rounded-full"
                  loading="lazy"
                  alt={user.name}
                />
              </Link>
              <Link to={`/profile/${user.username}`}>
                <div className="flex flex-col items-start">
                  <h3 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis w-26">
                    {user.name}
                  </h3>
                  <p className="text-slate-700">@{user.username}</p>
                </div>
              </Link>
              <FollowBtn userId={user.userId} classes={"ml-auto"} />
            </article>
          );
      })}
    </section>
  );
}

export default WhoToFollow;
