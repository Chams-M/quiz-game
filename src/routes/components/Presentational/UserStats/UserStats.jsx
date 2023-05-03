
import { userStatics} from '../../../../Data/Data';
import './UserStats.css';


const userStats = () => {
  return (
    <div className="userBar">
  
    
   {userStatics.map((item,index)=>{
      return (
        <div className='barItem'>
          <div className='icon-cont'><item.icon className='icon'/></div>
          <div className='barInfo'>
          <span>{item.data}</span>
          <span>{item.heading}</span>
          </div>
          
        </div>
      );
    })}
   </div>
    
  
  )
}

export default userStats
