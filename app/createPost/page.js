"use client";

import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { db, storage } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState([]);

  const sendPost = async () => {
    const uploadPostRef = await addDoc(collection(db, "UnicornPost"), {
      uploaderImg: session.user.image,
      uploaderName: session.user.name,
      title,
      description,
      timestamp: serverTimestamp(),
    });
    console.log(`POST Image Image ${uploadPostRef.id}`);

    const PostImageRef = ref(storage, `UnicornPost/${uploadPostRef.id}/image`);
    await uploadBytes(PostImageRef, selectedFile).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(PostImageRef);

      await updateDoc(doc(db, "UnicornPost", uploadPostRef.id), {
        POSTImage: downloadURL,
      });
    });

    router.push("/home");
  };
  return (
    <>
      <div className="flex justify-center items-center xl:max-w-5xl mx-auto flex-col p-4">
        <TextArea
          rows={2}
          placeholder="Title"
          className="text-black font-medium placeholder:text-red-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <TextArea
          rows={4}
          placeholder="Description"
          //   maxLength={6}
          className="text-black font-medium placeholder:text-red-400"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* file selection */}
        <div className="py-4 flex flex-col gap-y-4 justify-start">
          <label className="text-red-400 font-bold" for="file_input">
            Select POST
          </label>

          <input
            className=""
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />

          <button
            className="bg-blue-400 px-4 py-2 rounded-md text-white font-bold"
            onClick={sendPost}
          >
            Send Post
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
