"use client";

import { useEffect, useState } from "react";
import HomeStatus from "../../components/HomeStatus";
import Post from "../../components/Post";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  const imageLink = [
    "https://media.tenor.com/acPYWhchmD8AAAAM/rocket-racoon-wink.gif",
    "https://media.tenor.com/6n-OHQbly0IAAAAM/groot-happy-dance.gif",
    "https://media.tenor.com/EOXLpK7DUO0AAAAM/love-i-love-you.gif",
    "https://media.tenor.com/gAtN_M3ER-4AAAAM/iron-man-dancing.gif",
    "https://media.tenor.com/wvxGK3B9I_YAAAAM/doctor-strange-in-the-multiverse-of-madness-fortnite.gif",
    "https://media.tenor.com/5ACWpHTcce0AAAAM/what-if-marvel-marvel.gif",
    "https://media.tenor.com/tLyYzFtebTUAAAAM/marvel-carol-danvers.gif",
    "https://media.tenor.com/xb1eCR4HZ_MAAAAM/ms-marvel-ms-marvel-sweep.gif",
    "https://media.tenor.com/WSckTY0TP9kAAAAM/abell46s-reface.gif",
  ];

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "UnicornPost"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="max-w-[90rem] mx-auto">
      <div className="p-2 grid grid-cols-1 xl:grid-cols-3">
        <div className="flex flex-col col-span-2 ">
          {/* Status */}
          <div className="flex gap-2 bg-green-100">
            {imageLink.map((image) => {
              return <HomeStatus img={image} key={image} className="" />;
            })}
          </div>

          {/* Posts */}
          <div>
            {posts.map((post) => {
              return (
                <div>
                  <Post
                    key={post.id}
                    uploaderImg={post.data().uploaderImg}
                    uploaderName={post.data().uploaderName}
                    POSTImage={post.data().POSTImage}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden xl:flex">Hello</div>
      </div>
    </div>
  );
};

export default Homepage;
