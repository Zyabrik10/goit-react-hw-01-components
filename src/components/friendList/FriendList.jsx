import { FriendListItem } from './friendListItem/FriendListItem';
import friends from '../../json/friends.json';

export const FriendList = () => {
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
