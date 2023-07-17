import css from './FriendListItem.module.css'

export const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <li key={friend.id} className={css.item}>      
     <span className={friend.isOnline ? css.online : css.offline}></span>
     <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
     <p className={css.name}>{friend.name}</p>
    </li>))
  
}