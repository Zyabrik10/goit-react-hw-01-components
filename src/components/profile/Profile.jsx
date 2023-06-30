import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { views, followers, likes },
}) => {
  return (
    <section className="profile-section">
      <div className="profile">
        <div className="description">
          <div className="avatar-block">
            <img
              className="avatar"
              src={avatar}
              alt="User avatar"
              width={100}
            />
          </div>
          <p className="name global-p">{username}</p>
          <p className="tag global-p">{tag}</p>
          <p className="location global-p">{location}</p>
        </div>

        <ul className="stats global-list">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
