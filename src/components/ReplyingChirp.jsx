function ReplyingChirp({ chirp }) {
  const { uid, name, username, profileUrl } = chirp.user;
  const { chirpId, message, postedAt, parentId, replyingTo } = chirp;
  return (
    <>
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden">
          <img src={profileUrl} className="w-full h-full object-cover" />
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <h3 className="font-bold">{name}</h3>
            <p className="text-slate-500">@{username}</p>
            <p className="text-slate-500"> - {}</p>
          </div>
          <p>{message}</p>
        </div>
      </div>
      <div className="my-2 ml-16">
        <p className="text-gray-500">
          Replying to
          <span className="text-teal-500 ml-1 font-bold">
            @{replyingTo ? replyingTo : username}
          </span>
        </p>
      </div>
    </>
  );
}

export default ReplyingChirp;
