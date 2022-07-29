import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { restaurantApi } from "src/apis";
import { AddComment } from "src/components/templates";
import states from "src/modules/states";

const AddCommentPage = () => {
  const [score, setScore] = useRecoilState(states.CommentScoreState);
  const handleChangeScore = (value: number) => setScore(value);

  const router = useRouter();
  const handleClickAdd = async (comment: string) => {
    await restaurantApi.postComment({
      restaurantId: Number(router.query.id),
      comment,
      stars: score,
    });
    router.back();
  };

  return (
    <AddComment
      score={score}
      onChangeScore={handleChangeScore}
      onClickAdd={handleClickAdd}
    />
  );
};

export default AddCommentPage;
