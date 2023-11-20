import { IUserContext, UserContext } from "contexts/user.context";
import { useContext, useEffect, useState } from "react";
import BaseButton from "./base-button.component";
import { SetFollow } from "services/follow.service";
import { useHistory } from "react-router-dom";

interface IFollowProps {
  isFollowing: boolean;
  slug: string;
  username: string;
  children: React.ReactNode;
  isPrimary: boolean;
  className?: string;
  isProfile: boolean;
  changeFollow: React.Dispatch<React.SetStateAction<boolean>>;
  changeFollowCount: React.Dispatch<React.SetStateAction<number>>;
}
const Follow = (props: IFollowProps) => {
  const { isFollowing, slug, username, children, isPrimary, className, isProfile, changeFollow, changeFollowCount } =
    props;
  const { currentUser } = useContext<IUserContext>(UserContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const isDisabled = currentUser != null && currentUser.username === username;
    setIsDisabled(isDisabled);
  }, [currentUser]);

  const handleFollow = async () => {
    if (!currentUser) {
      history.push("/login");
      return;
    }
    const response = await SetFollow(slug, isFollowing);

    if (!response.ok) {
      console.log("Something went wrong!");
      //handle error
    } else {
      const data = await response.json();
      if (isProfile) {
        changeFollow(data.profile.following);
        //change count of following
      } else {
        changeFollow(data.article.favorited);
        changeFollowCount(data.article.favoritesCount);
      }
    }
  };

  return (
    <BaseButton
      className={`${className} ${isFollowing ? "active" : ""}`}
      isPrimary={isPrimary}
      onClick={handleFollow}
      disabled={isDisabled}
    >
      {children}
    </BaseButton>
  );
};
export default Follow;
