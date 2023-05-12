import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import useChirpContext from "../hooks/useChirpContext";
import Button from "./Button";
import { serverTimestamp } from "firebase/firestore";

function ComposeChirpForm({
  closeModal,
  isRepliying = false,
  parentId = null,
  replyingTo = null,
  children,
}) {
  const { currentUserDetails } = useAuthContext();
  const { createLocalAndServerChirp } = useChirpContext();
  const [message, setMessage] = useState("");

  function handleTextAreaHeight(e) {
    (e.target.style.height = "inherit"),
      (e.target.style.height = `${e.target.scrollHeight}px`);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    const newChirp = {
      userId: currentUserDetails.uid,
      username: currentUserDetails.username,
      userPic: currentUserDetails.profileUrl,
      name: currentUserDetails.name,
      message: message,
      createdAt: serverTimestamp(),
      likes: [],
      replies: [],
      rechirps: [],
      images: [],
      videos: [],
      parentId: parentId,
      replyingTo: replyingTo,
    };
    createLocalAndServerChirp(newChirp);
    setMessage("");
    closeModal();
  }
  return (
    <div className="mx-4 mt-4">
      {isRepliying && children}
      <form className="flex gap-4" onSubmit={handleFormSubmit}>
        <div className="w-12 h-12 overflow-hidden rounded-full shrink-0">
          <img
            src={currentUserDetails.profileUrl}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full">
          <textarea
            className="w-full placeholder:text-xl placeholder:text-gray-500 focus:outline-none text-xl resize-none leading-6 caret-teal-500"
            rows="4"
            placeholder={isRepliying ? "Tweet your reply" : "What's happening?"}
            onKeyDown={handleTextAreaHeight}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required="true"
            autoFocus={true}
          ></textarea>
          <div className="flex">
            <div className="ml-auto">
              <Button primary={true} small={true}>
                Chirp
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ComposeChirpForm;
