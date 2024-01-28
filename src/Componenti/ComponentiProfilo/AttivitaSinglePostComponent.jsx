import React from 'react'

export default function AttivitaSinglePostComponent({post}) {

  const calculateTimeElapsed = (post) => {
    const createdDate = new Date(post.createdAt);
    const currentDate = new Date();
  
    const timeDifference = Math.abs(currentDate - createdDate) / 1000; 
  
    if (timeDifference < 60) {
        return "ora";
    } else if (timeDifference < 3600) {
        const minutes = Math.floor(timeDifference / 60);
        return `${minutes} ${minutes === 1 ? 'minuto' : 'minuti'} fa`;
    } else if (timeDifference < 86400) {
        const hours = Math.floor(timeDifference / 3600);
        return `${hours} ${hours === 1 ? 'ora' : 'ore'} fa`;
    } else {
        
        const day = createdDate.getDate();
        const month = createdDate.getMonth() + 1; 
        const year = createdDate.getFullYear();
        return `${day}/${month}/${year}`;
    }
};


  return (
    <div className="comment-body mb-3">
          <p className="autore-commento m-0">
            <b>{post.user.name + ' ' + post.user.surname} </b>
            <span>
              ha commentato un post <b>·</b> {calculateTimeElapsed(post)}
            </span>
          </p>
          <p className="testo-commento m-0">{post.text}</p>
        </div>
  )
}
