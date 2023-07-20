import css from './Profile.module.css';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileStatistics } from './ProfileStatistics/ProfileStatistics';

export const Profile = ({ user }) => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <div className={css.container}>
      <ProfileDescription
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <ProfileStatistics stats={stats} />
    </div>
  );
};
