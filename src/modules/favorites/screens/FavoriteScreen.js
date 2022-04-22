import React from 'react';
import { format } from 'date-fns';

import SongCards from '../../song/components/SongCards';

const Favorites = () => {
     //Array of songs
     const songs=[{
      id: "123",
      title:"Complicated",
      singer:"Avril Lavigne",
      lyrics:"Uh huh, life's like this Uh huh, uh huh, that's the way it is 'Cause life's like this Uh huh, uh huh, that's the way it is Chill out, what ya yellin' for? Lay back, it's all been done before And if, you could only let it ",
      date: format(new Date(), "PPP"),
      image:"https://garajedelrock.com/wp-content/uploads/2021/11/Avril-Lavigne-supera-un-ex-amor-en-su-nueva-cancion-Bite-Me.jpg",
      favorite:true
  
  },{
      id: "123",
      title:"Complicated",
      singer:"Avril Lavigne",
      lyrics:"Uh huh, life's like this Uh huh, uh huh, that's the way it is 'Cause life's like this Uh huh, uh huh, that's the way it is Chill out, what ya yellin' for? Lay back, it's all been done before And if, you could only let it ",
      date: format(new Date(), "PPP"),
      image:"http://estaticos.efe.com/efecom/recursos2/imagen.aspx?-P-2fL4Jfo8HOMhyOieT7NQNkzYF2uztSU3bQ4TncnkXVSTX-P-2bAoG0sxzXPZPAk5l-P-2fU5UQJPQrBQBxw2EkQLWRbkZgQ-P-3d-P-3d",
      favorite:false
  
  },{
      id: "123",
      title:"Complicated",
      singer:"Avril Lavigne",
      lyrics:"Uh huh, life's like this Uh huh, uh huh, that's the way it is 'Cause life's like this Uh huh, uh huh, that's the way it is Chill out, what ya yellin' for? Lay back, it's all been done before And if, you could only let it ",
      date: format(new Date(), "PPP"),
      image:"https://i.pinimg.com/originals/78/ab/6c/78ab6c5566baa9303822df0f44492a45.jpg",
      favorite:true
  
  },{
      id: "123",
      title:"Complicated",
      singer:"Avril Lavigne",
      lyrics:"Uh huh, life's like this Uh huh, uh huh, that's the way it is 'Cause life's like this Uh huh, uh huh, that's the way it is Chill out, what ya yellin' for? Lay back, it's all been done before And if, you could only let it ",
      date: format(new Date(), "PPP"),
      image:"https://garajedelrock.com/wp-content/uploads/2021/11/Avril-Lavigne-supera-un-ex-amor-en-su-nueva-cancion-Bite-Me.jpg",
      favorite:true
  
  },{
      id: "123",
      title:"Complicated",
      singer:"Avril Lavigne",
      lyrics:"Uh huh, life's like this Uh huh, uh huh, that's the way it is 'Cause life's like this Uh huh, uh huh, that's the way it is Chill out, what ya yellin' for? Lay back, it's all been done before And if, you could only let it ",
      date: format(new Date(), "PPP"),
      image:"https://garajedelrock.com/wp-content/uploads/2021/11/Avril-Lavigne-supera-un-ex-amor-en-su-nueva-cancion-Bite-Me.jpg",
      favorite:true
  
  },{
      id: "123",
      title:"Complicated",
      singer:"Avril Lavigne",
      lyrics:"Uh huh, life's like this Uh huh, uh huh, that's the way it is 'Cause life's like this Uh huh, uh huh, that's the way it is Chill out, what ya yellin' for? Lay back, it's all been done before And if, you could only let it ",
      date: format(new Date(), "PPP"),
      image:"https://garajedelrock.com/wp-content/uploads/2021/11/Avril-Lavigne-supera-un-ex-amor-en-su-nueva-cancion-Bite-Me.jpg",
      favorite:true
  
  },{
      id: "123",
      title:"Complicated",
      singer:"Avril Lavigne",
      lyrics:"Uh huh, life's like this Uh huh, uh huh, that's the way it is 'Cause life's like this Uh huh, uh huh, that's the way it is Chill out, what ya yellin' for? Lay back, it's all been done before And if, you could only let it ",
      date: format(new Date(), "PPP"),
      image:"https://garajedelrock.com/wp-content/uploads/2021/11/Avril-Lavigne-supera-un-ex-amor-en-su-nueva-cancion-Bite-Me.jpg",
      favorite:true
  
  }];

  return (
    <div className='song__entry-container'>
    <SongCards songs={songs}/>

    </div>
  )
}

export default Favorites