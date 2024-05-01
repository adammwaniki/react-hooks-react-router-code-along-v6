import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
// Now for the last piece of the puzzle - the useParams hook.
import { useParams } from "react-router-dom";

//function UserProfile() {
    // useParams allows us to access the data we've stored in our URL parameters and use it within our components.
    // Note that the key is the parameter we defined in our route, and the value is what appears in the URL.
    //const params = useParams();
    //console.log(params);

// We can now use the data contained in our params object to access the specific piece of data we want to display! 
// We can interpolate the id of the user into a fetch request URL and fetch that user's specific information from our backend:


function UserProfile() {
  const [user, setUser] = useState({});
  const params = useParams();
  const userId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/users/${userId}`)
    .then(r => r.json())
    .then(data => setUser(data))
    .catch(error => console.error(error));
  }, [userId]);

//Adding some conditional rendering to make sure our app doesn't error out while it's waiting for our user to be fetched:
  if(!user.name){
    return <h1>Loading...</h1>;
  };

  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* We can now update the JSX to display our specific users name */}
        <h1>{user.name}</h1>
      </main>
    </>
  );
};

export default UserProfile;