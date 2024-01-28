import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style/CardUtenteStyle.css'
import { HiUserAdd } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { userFriendsAction } from '../../Action/userFriendsActions';
import { BiLogoTelegram } from "react-icons/bi";


export default function CardUtenteComponent(props) {

  const dispatch = useDispatch();

  const listFriends = useSelector(state => state.userFriends)
  console.log(listFriends)
  const friends = listFriends.find(x => x._id === props.profile._id)
  console.log(friends)
  console.log(props.profile)
  return (
    <>
    <div key={props.index} className="CardUtente mt-2">
        <div className="d-flex">
          <Link to={`/profile/${props.profile._id}`} className="text-decoration-none text-dark d-flex">
            <img 
              src={props.profile.image}
              alt={props.profile.name}
              width={50}
              height={50}
              className="border border-3 border-white rounded-circle me-3"
            />
            <div className="flex-grow-1">
              <h5 className="fs-6 mb-1">{`${props.profile.name} ${props.profile.surname}`}</h5>
              <p className="mb-2 text-muted">{props.profile.title}</p>
              {friends ? <button className="btnCardUtente rounded-pill mb-2"><BiLogoTelegram />Messaggio</button> :  <button className="btnCardUtente rounded-pill mb-2" onClick={() => dispatch(userFriendsAction(props.profile))}><HiUserAdd/> Collegati</button>}
            </div>
          </Link>
        </div>
      </div>
      <hr style={{margin:"0px"}}/>
      </>
  )
}

//Per operatore ternario bottone Messaggio
// <button className="btnCardUtente rounded-pill mb-2"><BiLogoTelegram />Messaggio</button>