import { NextApiRequest } from "next";
import LessonDetailPage from "../../features/lessons/lessonDetail/LessonDetailPage";

export default LessonDetailPage;

export const getServerSideProps = (req: NextApiRequest) => {
  const { lessonid } = req.query;
  return {
    props: { lessonid },
  };
};
