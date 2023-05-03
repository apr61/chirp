import { useEffect, useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaShare,
  FaRegComment,
  FaRetweet,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import ComposeChirpForm from "../components/ComposeChirpForm";
import Header from "../components/Header";
import Modal from "../components/Modal";
import ReplyingChirp from "../components/ReplyingChirp";
import SingleChirp from "../components/SingleChirp";
import { useAsync } from "../hooks/useAsync";
import useAuthContext from "../hooks/useAuthContext";
import useChirpContext from "../hooks/useChirpContext";
import { getChirpById } from "../services/chirps";

function SingleChirpPage() {
  const { cid } = useParams();
  const { currentUserDetails } = useAuthContext();
  const [openChirpForm, setOpenChirpForm] = useState(false);
  const { loading, error, value: chirp } = useAsync(() => getChirpById(cid));
  const {
    chirpLikeLocalAndServer,
    chirpRechirpLoacalAndServer,
    getChirpReplies,
  } = useChirpContext();
  const replies = getChirpReplies(cid);

  function handleChirpLike() {
    chirpLikeLocalAndServer(
      chirp.chirpId,
      currentUserDetails.uid,
      chirp.likes.indexOf(currentUserDetails.uid) !== -1
    );
  }
  function handleReChirp() {
    chirpRechirpLoacalAndServer(
      chirp.chirpId,
      currentUserDetails.uid,
      chirp.rechirps.indexOf(currentUserDetails.uid) !== -1
    );
  }
  function handleChirpReply() {
    setOpenChirpForm(!openChirpForm);
  }
  if (loading) return "Loading...";
  return (
    <>
      <Header>
        <div className="py-2 px-4 flex flex-col">
          <h1 className="font-bold text-xl">Chirp</h1>
        </div>
      </Header>
      <div className="px-4 py-2 border-b border-gray-300">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden">
            <img
              src={chirp.user.profileUrl}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-start flex-col">
            <h3 className="font-bold">{chirp.user.name}</h3>
            <p className="text-slate-500">@{chirp.user.username}</p>
          </div>
        </div>
        <div className="py-2">
          <p>{chirp.message}</p>
        </div>
        <div className="flex gap-4 py-2 border-y border-gray-300">
          <p className="text-gray-500">
            <span className="text-black font-bold">
              {(replies != null && replies.length) || 0}
            </span>
            &nbsp;Replies
          </p>
          <p className="text-gray-500">
            <span className="text-black font-bold">
              {chirp.rechirps.length}
            </span>
            &nbsp;Rechirps
          </p>
          <p className="text-gray-500">
            <span className="text-black font-bold">{chirp.likes.length}</span>
            &nbsp;Likes
          </p>
        </div>
        <div className="flex items-center justify-around gap-8 mt-2">
          <button
            title="Reply"
            className="group flex items-center gap-2 hover:text-teal-500"
            onClick={handleChirpReply}
          >
            <span className="group-hover:bg-teal-200 rounded-full p-2">
              <FaRegComment />
            </span>
          </button>
          <button
            title={
              currentUserDetails.uid === chirp.user.uid
                ? "You can't rechirp your own chirp"
                : "Rechirp"
            }
            className={`group flex items-center gap-4 hover:text-green-500 disabled:cursor-not-allowed disabled:text-gray-300 ${
              chirp.rechirps.indexOf(currentUserDetails.uid) !== -1 &&
              "text-green-500"
            }`}
            onClick={handleReChirp}
            disabled={currentUserDetails.uid === chirp.user.uid}
          >
            <span className="group-hover:bg-green-200 rounded-full p-2">
              <FaRetweet />
            </span>
          </button>
          <button
            title="Like"
            className={`group flex items-center gap-4 hover:text-pink-500 ${
              chirp.likes.indexOf(currentUserDetails.uid) !== -1 &&
              "text-pink-500"
            }`}
            onClick={handleChirpLike}
          >
            <span className="group-hover:bg-pink-200 rounded-full p-2">
              {chirp.likes.indexOf(currentUserDetails.uid) !== -1 ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </span>
          </button>
          <button
            title="Share"
            className="group flex items-center gap-4 hover:text-teal-500"
          >
            <span className="group-hover:bg-teal-200 rounded-full p-2">
              <FaShare />
            </span>
          </button>
        </div>
      </div>
      <div>
        {replies != null &&
          replies.length > 0 &&
          replies.map((reply) => <SingleChirp chirp={reply} />)}
      </div>
      <Modal isOpen={openChirpForm} handleModalState={handleChirpReply}>
        <ComposeChirpForm
          closeModal={handleChirpReply}
          isRepliying={true}
          parentId={chirp.chirpId}
          replyingTo={chirp.user.username}
        >
          <ReplyingChirp chirp={chirp} />
        </ComposeChirpForm>
      </Modal>
    </>
  );
}

export default SingleChirpPage;
