import { useState } from "react";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaShare,
  FaTrash,
  FaHeart,
  FaRegBookmark,
  FaRegEdit,
} from "react-icons/fa";
import useAuthContext from "../hooks/useAuthContext";
import useChirpContext from "../hooks/useChirpContext";
import Modal from "./Modal";
import ComposeChirpForm from "./ComposeChirpForm";
import ReplyingChirp from "./ReplyingChirp";
import { Link } from "react-router-dom";
import IconBtn from "./IconBtn";
import { BsThreeDotsVertical } from "react-icons/bs";
import { formatFirebaseTime } from "../utils/TimeFormatter";

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
  const { chirpId, message, rechirps, likes, createdAt, replyingTo } = chirp;
  const isLiked = likes.indexOf(currentUserDetails.uid) !== -1;
  const isRechirped = rechirps.indexOf(currentUserDetails.uid) !== -1;
  const replies = getChirpReplies(chirpId);
  const [openMoreOptionsDialog, setOpenMoreOptionsDialog] = useState(false);
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
  function handleMoreOptionsDialog() {
    setOpenMoreOptionsDialog(!openMoreOptionsDialog);
  }
  function handleChirpEdit() {}
  function handleChirpBookmark() {}
  return (
    <>
      <article className="flex xl:gap-4 gap-2 p-2 items-start border-b border-slate-100 hover:bg-gray-100 relative">
        <div className="sm:w-12 sm:h-12 w-10 h-10 rounded-full shrink-0 overflow-hidden">
          <img src={profileUrl} className="w-full h-full object-cover" />
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <Link to={`/${username}`} className="flex items-center gap-2">
              <h3 className="font-bold">{name}</h3>
              <p className="text-slate-500">@{username}</p>
            </Link>
            <p className="text-slate-500">
              {" "}
              - {formatFirebaseTime(createdAt.seconds)}
            </p>
          </div>
          {replyingTo && (
            <p className="text-gray-500">
              Replying to
              <Link
                className="text-teal-500 ml-1 font-medium"
                to={`/${replyingTo}`}
              >
                @{replyingTo}
              </Link>
            </p>
          )}
          <Link to={`/${username}/status/${chirpId}`}>
            <p>{message}</p>
          </Link>
          <div className="flex items-center sm:gap-8 justify-between sm:mt-2">
            <IconBtn
              text={(replies != null && replies.length) || 0}
              icon={<FaRegComment />}
              onClick={handleChirpReply}
              title="Reply"
              action="reply"
            />
            <IconBtn
              text={rechirps.length}
              icon={<FaRetweet />}
              onClick={handleReChirp}
              title={
                currentUserDetails.uid === uid
                  ? "You can't rechirp your own chirp"
                  : "Rechirp"
              }
              action="rechirp"
              disabled={currentUserDetails.uid === uid}
              actionDone={isRechirped}
            />
            <IconBtn
              text={likes.length}
              icon={isLiked ? <FaHeart /> : <FaRegHeart />}
              onClick={handleChirpLike}
              title="Like"
              action="like"
              actionDone={isLiked}
            />

            <IconBtn icon={<FaShare />} title="Share" action="share" />
          </div>
        </div>
        <button
          className="absolute top-4 right-4 rounded-full flex items-center justify-center p-2 text-gray-500"
          title="More options"
          onClick={handleMoreOptionsDialog}
        >
          <BsThreeDotsVertical />
        </button>
        {openMoreOptionsDialog && (
          <div className="absolute top-8 right-9 shadow-2xl bg-white py-2 rounded-md max-w-[10rem] w-full z-10">
            <div className="hover:bg-gray-100 px-4 py-1">
              <button
                onClick={handleChirpEdit}
                className="flex gap-2 items-center"
              >
                <span>
                  <FaRegEdit />
                </span>
                Edit Chirp
              </button>
            </div>
            <div className="hover:bg-gray-100 px-4 py-1">
              <button
                onClick={handleChirpBookmark}
                className="flex gap-2 items-center"
              >
                <span>
                  <FaRegBookmark />
                </span>
                Bookmark
              </button>
            </div>
            {currentUserDetails.uid === uid && (
              <div className="hover:bg-gray-100 px-4 py-1">
                <button
                  onClick={handleChirpDelete}
                  className="flex gap-2 items-center"
                >
                  <span>
                    <FaTrash />
                  </span>
                  Delete
                </button>
              </div>
            )}
          </div>
        )}

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
      </article>
    </>
  );
}

export default SingleChirp;
