import { NextApiRequest, NextApiResponse } from "next";
import CourseDetailPage from "../../features/courses/courseDetail/CourseDetailPage";

export default CourseDetailPage;

export async function getServerSideProps(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { courseId } = req.query;
  return {
    props: { courseId },
  };
}
