import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaShare,
  FaRegComment,
  FaRetweet,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ComposeChirpForm from "../components/ComposeChirpForm";
import Header from "../components/Header";
import IconBtn from "../components/IconBtn";
import Modal from "../components/Modal";
import ReplyingChirp from "../components/ReplyingChirp";
import SingleChirp from "../components/SingleChirp";
import { useAsync } from "../hooks/useAsync";
import useAuthContext from "../hooks/useAuthContext";
import useChirpContext from "../hooks/useChirpContext";
import { getChirpById } from "../services/chirps";

function ChirpThreadPage() {
  const { cid } = useParams();
  const { currentUserDetails } = useAuthContext();
  const [openChirpForm, setOpenChirpForm] = useState(false);
  const navigate = useNavigate();
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
  function navBack() {
    navigate(-1);
  }
  if (loading) return "Loading...";
  return (
    <>
      <Header>
        <div className="py-2 px-4 flex gap-2 items-center">
          <button
            onClick={navBack}
            className="rounded-full w-8 h-8 hover:bg-gray-200 flex items-center justify-center"
          >
            <FaArrowLeft />
          </button>
          <h1 className="font-bold text-xl">Chirp</h1>
        </div>
      </Header>
      <div className="px-4 py-2 border-b border-slate-100">
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
          {chirp.replyingTo && (
            <p className="text-gray-500">
              Replying to
              <span className="text-teal-500 ml-1 font-bold">
                @{chirp.replyingTo}
              </span>
            </p>
          )}
          <p>{chirp.message}</p>
        </div>
        <div className="flex gap-4 py-2 border-y border-slate-100">
          <p className="text-gray-500">
            <span className="text-black font-bold">
              {(replies != null && replies.length) || 0}
            </span>{" "}
            Replies
          </p>
          <p className="text-gray-500">
            <span className="text-black font-bold">
              {chirp.rechirps.length}
            </span>{" "}
            Rechirps
          </p>
          <p className="text-gray-500">
            <span className="text-black font-bold">{chirp.likes.length}</span>{" "}
            Likes
          </p>
        </div>
        <div className="flex items-center justify-around gap-8 mt-2">
          <IconBtn
            icon={<FaRegComment />}
            onClick={handleChirpReply}
            title="Reply"
            action="reply"
          />
          <IconBtn
            icon={<FaRetweet />}
            onClick={handleReChirp}
            title={
              currentUserDetails.uid === chirp.user.uid
                ? "You can't rechirp your own chirp"
                : "Rechirp"
            }
            action="rechirp"
            disabled={currentUserDetails.uid === chirp.user.uid}
            actionDone={chirp.rechirps.indexOf(currentUserDetails.uid) !== -1}
          />
          <IconBtn
            icon={
              chirp.likes.indexOf(currentUserDetails.uid) !== -1 ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )
            }
            onClick={handleChirpLike}
            title="Like"
            action="like"
            actionDone={chirp.likes.indexOf(currentUserDetails.uid) !== -1}
          />

          <IconBtn icon={<FaShare />} title="Share" action="share" />
        </div>
      </div>
      <div>
        {replies != null &&
          replies.length > 0 &&
          replies.map((reply) => (
            <SingleChirp key={chirp.chirpId} chirp={reply} />
          ))}
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

export default ChirpThreadPage;
