import { FriendListItem } from './friendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <section className="friends-section">
      <ul className="friend-list global-list">
        {friends.map(({ id, name, isOnline = false, avatar }) => (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
          />
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
