import PropTypes from 'prop-types';

export const FriendListItem = ({ name, isOnline = false, avatar }) => {
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

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
