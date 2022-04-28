import React from 'react';
import { Link} from 'react-router-dom';

const SingerButton = ({singerName}) => {

  return (
    <div className="p-2">
        <Link to={`singer/${singerName}`} className='sidebar__list'  >{singerName}</Link> 
      
    </div>
  )
}

export default SingerButton