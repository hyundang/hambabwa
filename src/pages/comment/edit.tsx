import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { restaurantApi } from "src/apis";
import { AddComment } from "src/components/templates";
import states from "src/modules/states";

const EditCommentPage = () => {
  const initComment = useRecoilValue(states.CommentState);
  const [score, setScore] = useState(initComment?.stars || 0);

  const router = useRouter();
  const handleClickAdd = async (comment: string) => {
    await restaurantApi.patchComment(initComment?.id || -1, {
      comment,
      stars: score,
    });
    router.back();
  };

  return (
    <AddComment
      score={score}
      initComment={initComment?.comment}
      onChangeScore={setScore}
      onClickAdd={handleClickAdd}
    />
  );
};

export default EditCommentPage;
