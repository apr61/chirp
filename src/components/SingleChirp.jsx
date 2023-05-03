import { useState } from "react";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaShare,
  FaTrash,
  FaHeart,
} from "react-icons/fa";
import useAuthContext from "../hooks/useAuthContext";
import useChirpContext from "../hooks/useChirpContext";
import Modal from "./Modal";
import ComposeChirpForm from "./ComposeChirpForm";
import ReplyingChirp from "./ReplyingChirp";
import { Link } from "react-router-dom";

function SingleChirp({ chirp }) {
  const [openChirpForm, setOpenChirpForm] = useState(false);
  const { currentUserDetails } = useAuthContext();
  const {
    deleteLocalAndServerChirp,
    chirpLikeLocalAndServer,
    chirpRechirpLoacalAndServer,
    getChirpReplies,
  } = useChirpContext();
  const { uid, name, username, profileUrl } = chirp.user;
  const { chirpId, message, rechirps, likes, postedAt, replyingTo } = chirp;
  const isLiked = likes.indexOf(currentUserDetails.uid) !== -1;
  const isRechirped = rechirps.indexOf(currentUserDetails.uid) !== -1;
  const replies = getChirpReplies(chirpId);
  function handleChirpDelete() {
    deleteLocalAndServerChirp(chirpId);
  }
  function handleChirpLike() {
    chirpLikeLocalAndServer(chirpId, currentUserDetails.uid, isLiked);
  }
  function handleReChirp() {
    chirpRechirpLoacalAndServer(chirpId, currentUserDetails.uid, isRechirped);
  }
  function handleChirpReply() {
    setOpenChirpForm(!openChirpForm);
  }
  return (
    <>
      <article className="flex gap-4 p-2 items-start border-b border-gray-300 hover:bg-gray-100">
        <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden">
          <img src={profileUrl} className="w-full h-full object-cover" />
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <h3 className="font-bold">{name}</h3>
            <p className="text-slate-500">@{username}</p>
            <p className="text-slate-500"> - {}</p>
          </div>
          {replyingTo && (
            <p className="text-gray-500">
              Replying to
              <span className="text-teal-500 ml-1 font-bold">
                @{replyingTo}
              </span>
            </p>
          )}
          <Link to={`/${username}/status/${chirpId}`}>
            <p>{message}</p>
          </Link>
          <div className="flex items-center gap-8 mt-2">
            <button
              title="Reply"
              className="group flex items-center gap-2 hover:text-teal-500"
              onClick={handleChirpReply}
            >
              <span className="group-hover:bg-teal-200 rounded-full p-2">
                <FaRegComment />
              </span>
              {(replies != null && replies.length) || 0}
            </button>
            <button
              title={
                currentUserDetails.uid === uid
                  ? "You can't rechirp your own chirp"
                  : "Rechirp"
              }
              className={`group flex items-center gap-4 hover:text-green-500 disabled:cursor-not-allowed disabled:text-gray-300 ${
                isRechirped && "text-green-500"
              }`}
              onClick={handleReChirp}
              disabled={currentUserDetails.uid === uid}
            >
              <span className="group-hover:bg-green-200 rounded-full p-2">
                <FaRetweet />
              </span>
              {rechirps.length}
            </button>
            <button
              title="Like"
              className={`group flex items-center gap-4 hover:text-pink-500 ${
                isLiked && "text-pink-500"
              }`}
              onClick={handleChirpLike}
            >
              <span className="group-hover:bg-pink-200 rounded-full p-2">
                {isLiked ? <FaHeart /> : <FaRegHeart />}
              </span>
              {likes.length}
            </button>
            <button
              title="Share"
              className="group flex items-center gap-4 hover:text-teal-500"
            >
              <span className="group-hover:bg-teal-200 rounded-full p-2">
                <FaShare />
              </span>
            </button>
            {currentUserDetails.uid === uid && (
              <button
                title="Delete"
                className="group flex items-center gap-4 hover:text-red-500"
                onClick={handleChirpDelete}
              >
                <span className="group-hover:bg-red-200 rounded-full p-2">
                  <FaTrash />
                </span>
                Delete
              </button>
            )}
          </div>
        </div>
        {
          <Modal isOpen={openChirpForm} handleModalState={handleChirpReply}>
            <ComposeChirpForm
              closeModal={handleChirpReply}
              isRepliying={true}
              parentId={chirpId}
              replyingTo={username}
            >
              <ReplyingChirp chirp={chirp} />
            </ComposeChirpForm>
          </Modal>
        }
      </article>
    </>
  );
}

export default SingleChirp;
