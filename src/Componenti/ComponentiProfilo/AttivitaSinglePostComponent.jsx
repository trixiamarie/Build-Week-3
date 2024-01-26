import React from 'react'

export default function AttivitaSinglePostComponent({post}) {
  return (
    <div className="comment-body mb-3">
          <p className="autore-commento m-0">
            <b>{post.user.name + ' ' + post.user.surname} </b>
            <span>
              ha commentato un post <b>·</b> 1s
            </span>
          </p>
          <p className="testo-commento m-0">{post.text}</p>
        </div>
  )
}
