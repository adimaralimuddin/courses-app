import { useMutation, useQueryClient } from "@tanstack/react-query";
import qnaApiAddQna from "../qnaApis/qnaApiAddQna";
import qnaApiDeleteQna from "../qnaApis/qnaApiDeleteQna";
import QnaType from "../qnaTypes/QnaType";

export default function useQnaMutate(
  lessonId: string | undefined,
  courseId?: string
) {
  const qClient = useQueryClient();

  const add = useMutation(qnaApiAddQna, {
    onSuccess: (addedQna) => {
      qClient.invalidateQueries(["qna-queries", courseId, lessonId]);

      // qClient.setQueriesData(
      //   ["qnas", lessonId],
      //   (prev: QnaType[] | undefined = []) => {
      //     return [...prev, addedQna];
      //   }
      // );
    },
  });

  const remove = useMutation(qnaApiDeleteQna, {
    onSuccess: (deletedQna) => {
      console.log("id", lessonId);
      console.log("deleted ", deletedQna);
      qClient.invalidateQueries(["qna-queries", courseId, lessonId]);
      // qClient.setQueriesData(
      //   ["qna-queries", courseId, lessonId],
      //   (prev: QnaType[] | undefined = []) => {
      //     console.log("prev", prev);
      //     return prev?.filter((q) => q.id !== deletedQna.id);
      //   }
      // );
    },
  });
  return { addQna: add.mutate, removeQna: remove.mutate };
}
