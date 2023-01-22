import { NextApiRequest, NextApiResponse } from "next";
import MyCourseDetailPage from "../../../features/courses/courseDetail/courseDetailPage/MyCourseDetailPage";

export default MyCourseDetailPage;

export async function getServerSideProps(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { courseId } = req.query;
  return {
    props: { courseId },
  };
}
