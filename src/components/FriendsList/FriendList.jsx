import css from './FriendList.module.css'
import friends from 'data/friends.json'
import { FriendListItem } from './FriendListItem/FriendListItem'

export const FriendList = ({ }) => {
    return <ul className={css.list}>
 <FriendListItem friends={friends}/>
</ul>
}