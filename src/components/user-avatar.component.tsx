import image from "../assets/user.png";

interface IAvatarProps {
  src?: string | null;
  className?: string;
}
const UserAvatar = ({ src, className }: IAvatarProps) => {
  return <img src={src ? src : image} className={className ? className : ""} alt="User avatar" />;
};
export default UserAvatar;
