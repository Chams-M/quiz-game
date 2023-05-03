import React from 'react'
import user from '../../../../assets/images/profile_img.png'
import gold from '../../../../assets/images/gold_medal.png'
import blue from '../../../../assets/images/blue_medal.png'
import medal from '../../../../assets/images/medal.png'
import './Profile.css'
import UserStats from '../UserStats/UserStats'

const Profile = () => {
  return (
    
    <div className='container'>
        <div className='profile'>
            <img src={user} className="user-image"/>
            <div className='user-infos'>
                <div>
                <span>Chams Moumni</span>
                </div>
                <div>
                <span>Bonus booster 24lv</span>
                </div>
                <div className="percentage-line">
                  <div> </div>

                  </div>
                
                <UserStats/>

             
            </div>
            
        </div>

    <div className='body'>
      <div className='card'>
        <span>Achievements</span>
        <span></span>
        <div className="percentage-line2">
                  <div> </div>
                  </div>
        <div className=' achievements '>
       <div className='grid'>
       <div className='icon-item'> <img src={gold} className="icon-img"/> 
      <span>Winner</span> 
       </div> 
        <div className='icon-item'>
          <img src={blue} className="icon-img"/>
          <span>ComeBack</span> 
           </div>
        <div className='icon-item'>
          <img src={medal} className="icon-img"/> 
          <span>Lucky</span>
       </div>
       </div>
       line
       view all
        </div>
        </div>
        <div className='card'>
        <span>Featured Category</span>
        <span>View All</span>
        <div className='category grid'>
        <img src={gold} className="icon-img"/>
        <img src={blue} className="icon-img"/>
        <img src={medal} className="icon-img"/>
       
        </div>
        </div>
    </div>
    </div>
  )
}

export default Profile
