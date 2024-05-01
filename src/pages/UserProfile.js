import NavBar from "../components/NavBar";
// Now for the last piece of the puzzle - the useParams hook.
import { useParams } from "react-router-dom";

function UserProfile() {
    // useParams allows us to access the data we've stored in our URL parameters and use it within our components.
    // Note that the key is the parameter we defined in our route, and the value is what appears in the URL.
    const params = useParams();
    console.log(params);
  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>User Profile</h1>
      </main>
    </>
  );
};

export default UserProfile;