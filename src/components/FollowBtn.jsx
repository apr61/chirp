import useFollow from "../hooks/useFollow";
import Button from "./Button";

function FollowBtn({ classes, userId }) {
  const { isFollowing, toggleFollowBtn } = useFollow({ userId });
  function handleToggleFollowBtn() {
    toggleFollowBtn();
  }
  return (
    <Button
      onClick={handleToggleFollowBtn}
      small
      outline={isFollowing}
      black={!isFollowing}
      classes={classes}
    >
      {isFollowing ? "Following" : "Follow"}
    </Button>
  );
}

export default FollowBtn;
