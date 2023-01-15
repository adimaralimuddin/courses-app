import { NextApiRequest } from "next";
import CourseDetailPage from "../../../features/courses/courseDetail/CourseDetailPage";

export default CourseDetailPage;

export const getServerSideProps = (req: NextApiRequest) => {
  const { courseId } = req.query;
  return {
    props: { courseId },
  };
};
