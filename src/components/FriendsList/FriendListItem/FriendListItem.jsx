import PropTypes from 'prop-types'
import css from './FriendListItem.module.css'

export const FriendListItem = ({ friends }) => {
  return friends.map(({ id, isOnline, avatar, name }) => (
    <li key={id} className={css.item}>      
     <span className={isOnline ? css.online : css.offline}></span>
     <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
     <p className={css.name}>{name}</p>
    </li>))
  
}

FriendListItem.propTypes = { events: PropTypes.arrayOf(
  PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
)}