import PropTypes from 'prop-types';

export const FriendList = ({ children }) => {
  return (
    <section className="friends-section">
      <ul className="friend-list global-list">{children}</ul>
    </section>
  );
};

FriendList.propTypes = {
  children: PropTypes.element.isRequired,
};
