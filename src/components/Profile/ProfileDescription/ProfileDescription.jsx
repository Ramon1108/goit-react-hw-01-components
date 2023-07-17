import css from './ProfileDescription.module.css'
// import PropTypes from 'prop-types';

export const ProfileDescription = ({ name }) => {
    return <div className={css.description}>
    <img
      src={name.avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.profilename}>{name.username}</p>
    <p className={css.tag}>@{name.tag}</p>
    <p className={css.location}>{name.location}</p>
  </div>

}

// ProfileDescription.PropTypes = {name: PropTypes.array.isRequired}