import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const NameDocumentTitle = () => {
  const { idUrl } = useParams();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.userData.data);
  const profile = useSelector((state) => state.allProfiles.data);
  const nameProfile = profile.filter((x) => x._id === idUrl);

  const [pageTitle, setPageTitle] = useState('');

  const handleClick = () => {
    setPageTitle("Nuovo Titolo");
    navigate('/profile/');
  };

  useEffect(() => {
    if (idUrl) {
      setPageTitle(nameProfile[0].name + " " + nameProfile[0].surname + " | LinkedIn");
    } else {
      setPageTitle(user.name + " " + user.surname + " | LinkedIn");
    }

    return () => {
      // La funzione di cleanup non fa nulla in questo caso
    };
  }, [idUrl, nameProfile, user.name, user.surname]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return null;
};

export default NameDocumentTitle;
