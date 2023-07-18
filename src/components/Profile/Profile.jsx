import css  from './Profile.module.css'
import { ProfileDescription } from './ProfileDescription/ProfileDescription'
import {Statistics} from './ProfileStatistics/ProfileStatistics'


export const Profile = ({user}) => {
    return <div className={css.container}>        
        <ProfileDescription name={user} />

        <Statistics stats={user.stats} />
               
    </div>
}