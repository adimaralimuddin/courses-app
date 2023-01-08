import { NextApiRequest, NextApiResponse } from "next";
import MyCourseDetailPage from "../../../features/myCourses/myCourseDetail/MyCourseDetailPage";
import CourseDetailPage from "../../my-course/[courseId]";
// import CourseDetailPage from "../../features/courses/courseDetail/CourseDetailPage";

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
