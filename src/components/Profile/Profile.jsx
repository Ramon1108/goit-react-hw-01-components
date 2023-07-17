import css  from './Profile.module.css'
import { ProfileDescription } from './ProfileDescription/ProfileDescription'
import {Statistics} from './ProfileStatistics/ProfileStatistics'
import user from 'data/user.json' 

export const Profile = ({}) => {
    return <div className={css.container}>        
        <ProfileDescription name={user} />

        <Statistics stats={user.stats} />
               
    </div>
}