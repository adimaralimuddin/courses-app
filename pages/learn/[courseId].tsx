import { NextApiRequest } from "next";
import LearnPage from "../../features/learn/learnMain/LearnPage";

export default LearnPage;

export async function getServerSideProps(req: NextApiRequest) {
  const courseId = req.query?.courseId;

  return {
    props: { courseId },
  };
}
