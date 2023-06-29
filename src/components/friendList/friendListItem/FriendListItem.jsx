export const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <li>
      <span
        className={`friend-online ${isOnline ? 'online' : 'offline'}`}
      ></span>

      <img className="friend-preview" src={avatar} alt="" width={48} />
      <p className="friend-name">{name}</p>
    </li>
  );
};
