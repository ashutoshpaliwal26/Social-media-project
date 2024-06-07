import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "./notfound/notFound";

const Profile = () => {
  let { username } = useParams();

  const [loading, setLoading] = useState(true);
  const [resData, setResData] = useState({
    token: username,
  });
  const [status, setStatus] = useState(true);
  // https://e49d6eb1-77a3-4dea-8525-77b17ee5a4c9-00-2p11pdap7zn5y.worf.replit.dev:8080/profile
  const dataGetter = async () => {
    const responce = await axios.post(
      "https://e49d6eb1-77a3-4dea-8525-77b17ee5a4c9-00-2p11pdap7zn5y.worf.replit.dev:8080/profile",
      resData,
    );
    setStatus(responce.data.success);
    // console.log(responce.status);
    setResData(responce.data);
    setLoading(false);
  };
  useEffect(() => {
    dataGetter();
  }, []);

  console.log(status);

  return (
    <>
      <main>
        {!status ? (
          <>
            <NotFound />
          </>
        ) : loading ? (
          <>
            <div>
              <h1>Loading...</h1>
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full justify-between p-4">
              <div className="h-20 w-20 rounded-full bg-gray-800">
                <img
                  src={resData.profileUrl}
                  className="w-full h-full rounded-full bg-cover"
                />
              </div>
              <div className="flex h-20 flex-col items-center justify-center">
                <p className="text-2xl font-bold">{resData.post}</p>
                <p className="font-bold">post</p>
              </div>
              <div className="flex h-20 flex-col items-center justify-center">
                <p className="text-2xl font-bold">{resData.followers}</p>
                <p className="font-bold">follewer</p>
              </div>
              <div className="flex h-20 flex-col items-center justify-center">
                <p className="text-2xl font-bold">{resData.following}</p>
                <p className="font-bold">following</p>
              </div>
            </div>
            <p className="m-2 font-bold">{resData.name}</p>
            <p className="ml-2">{resData.bio}</p>
            <div className="mr-2 flex">
              <button className="m-1 font-bold w-full rounded-xl border bg-gray-300 p-1">
                Edit Profile
              </button>
              <button className="m-1 font-bold w-full rounded-xl border bg-gray-300 p-1">
                Share Profile
              </button>
              <button className="m-1 w-20 rounded-xl border bg-gray-300 p-1">
                <i class="fa-solid fa-user"></i>
              </button>
            </div>
            <div className="flex w-full pl-4 justify-around border-b-2">
              <div className="flex h-14 w-20 items-center justify-center active:border-b-2 border-gray-700">
                <i class="fa-solid fa-border-all"></i>
              </div>
              <div className="flex h-14 w-20 items-center justify-center active:border-b-2 border-gray-700">
                <i class="fa-solid fa-film"></i>
              </div>
              <div className="flex h-14 w-20 items-center justify-center active:border-b-2 border-gray-700">
                <i class="fa-solid fa-user-tag"></i>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Profile;