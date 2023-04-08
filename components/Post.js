import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CancelIcon from "@mui/icons-material/Cancel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useState } from "react";

const Post = ({ uploaderImg, uploaderName, POSTImage }) => {
  const [comment, setComment] = useState("");

  const sendComment = async (e) => {
    e.preventDefault();
    console.log(comment);
  };

  return (
    <div className="pb-14">
      <div className="flex justify-between items-center p-6 bg-gray-200 rounded-sm mt-1">
        {/* Header */}
        {/* Prifile name and image */}

        <div className="flex items-center gap-3">
          <img
            src={uploaderImg}
            alt=""
            className="h-14 rounded-full p-[1px] bg-red-400 cursor-pointer hover:scale-110 transition-transform ease-out duration-200"
          />
          <p className="font-medium text-sm  ">{uploaderName}</p>
        </div>
        {/* Icon */}

        <div className="flex items-center gap-3">
          <MoreHorizIcon className="cursor-pointer text-gray-400" />
          <CancelIcon className="cursor-pointer text-gray-400" />
        </div>
      </div>

      {/* Images */}
      <div>
        <img
          src={POSTImage}
          alt=""
          className="lg:h-[40rem] h-[30rem] w-full shrink-0"
        />
      </div>

      {/* Like and comment functionality Here */}

      <div className="flex flex-col  p-4 shadow-md ">
        <div>
          <div className="flex justify-between">
            {/* Like comment and plane icon */}
            <div className="space-x-4 cursor-pointer">
              <FavoriteBorderIcon className="text-2xl" />
              <CommentIcon />
              <SendIcon />
            </div>

            {/* save icon */}
            <div>
              <BookmarkBorderIcon className="cursor-pointer" />
            </div>
          </div>

          <div className="pt-4">Likes 32467</div>

          {/* comment input */}
          <div className="pt-3">
            <div className="flex">
              <input
                type="text"
                placeholder="Comment Here... "
                className="w-full outline-none flex-1"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="pr-4 text-blue-600 font-medium"
                onClick={sendComment}
              >
                Send
              </button>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItot5CpyPX3PU9WlQ1es0fs0_D5z1dnNlqVOGl0-Ihg&s"
                alt=""
                className="h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* show comment */}

        <div>
          <h3>show all comment</h3>
        </div>
      </div>
    </div>
  );
};

export default Post;
