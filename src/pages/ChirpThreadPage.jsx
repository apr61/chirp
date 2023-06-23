import {
  FaHeart,
  FaRegHeart,
  FaShare,
  FaRegComment,
  FaRetweet,
  FaArrowLeft,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ComposeChirpForm from "../components/ComposeChirpForm";
import Header from "../components/Header";
import IconBtn from "../components/IconBtn";
import Modal from "../components/Modal";
import ReplyingChirp from "../components/ReplyingChirp";
import SingleChirp from "../components/SingleChirp";
import useChirpContext from "../hooks/useChirpContext";
import useAuthContext from "../hooks/useAuthContext";
import { formatFirebaseTime } from "../utils/TimeFormatter";

export default function ChirpThreadPage() {
  const [openChirpForm, setOpenChirpForm] = useState(false);
  const navigate = useNavigate();
  const { cid } = useParams();
  const { currentUserDetails } = useAuthContext();
  const {
    getChirpById,
    chirpRechirpLoacalAndServer,
    chirpLikeLocalAndServer,
    isLoading,
    getChirpReplies,
  } = useChirpContext();

  const chirp = getChirpById(cid);
  const replies = getChirpReplies(cid);

  if (chirp == null) {
    return;
  }
  function navBack() {
    navigate(-1);
  }
  function handleChirpLike() {
    chirpLikeLocalAndServer(chirp.chirpId, currentUserDetails.uid, getIsLiked);
  }
  function handleReChirp() {
    chirpRechirpLoacalAndServer(
      chirp.chirpId,
      currentUserDetails.uid,
      getIsRechirped
    );
  }
  function handleChirpReply() {
    setOpenChirpForm(!openChirpForm);
  }
  const getIsLiked = chirp.likes.indexOf(currentUserDetails.uid) !== -1;

  const getIsRechirped = chirp.rechirps.indexOf(currentUserDetails.uid) !== -1;

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
      {isLoading ? (
        "Loading..."
      ) : (
        <section>
          <div className="px-4 py-2 border-b border-slate-100">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden">
                <img
                  src={chirp.userPic}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start flex-col">
                <h3 className="font-bold">{chirp.name}</h3>
                <p className="text-slate-500">@{chirp.username}</p>
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
              <p className="text-gray-500">
                {formatFirebaseTime(chirp.createdAt.seconds)}
              </p>
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
                <span className="text-black font-bold">
                  {chirp.likes.length}
                </span>{" "}
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
                  currentUserDetails.uid === chirp.userId
                    ? "You can't rechirp your own chirp"
                    : "Rechirp"
                }
                action="rechirp"
                disabled={currentUserDetails.uid === chirp.userId}
                actionDone={getIsRechirped}
              />
              <IconBtn
                icon={getIsLiked ? <FaHeart /> : <FaRegHeart />}
                onClick={handleChirpLike}
                title="Like"
                action="like"
                actionDone={chirp.likes.indexOf(currentUserDetails.uid) !== -1}
              />

              <IconBtn icon={<FaShare />} title="Share" action="share" />
            </div>
          </div>
          <section>
            {replies != null &&
              replies.length > 0 &&
              replies.map((reply) => (
                <SingleChirp key={chirp.chirpId} chirp={reply} />
              ))}
          </section>
          <Modal isOpen={openChirpForm} handleModalState={handleChirpReply}>
            <ComposeChirpForm
              closeModal={handleChirpReply}
              isRepliying={true}
              parentId={chirp.chirpId}
              replyingTo={chirp.username}
            >
              <ReplyingChirp chirp={chirp} />
            </ComposeChirpForm>
          </Modal>
        </section>
      )}
    </>
  );
}
