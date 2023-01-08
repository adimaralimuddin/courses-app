import { useMutation } from "@tanstack/react-query";
import lessonApiAddLesson from "../lessonApi/lessonApiAddLesson";
import lessonApiDeleteLesson from "../lessonApi/lessonApiDeleteLesson";
import lessonApiUpdateLesson from "../lessonApi/lessonApiUpdateLesson";

export default function useLessonMutate() {
  const add = useMutation(lessonApiAddLesson, {
    onSuccess: (addedLesson) => {
      console.log("added", addedLesson);
    },
  });

  const update = useMutation(lessonApiUpdateLesson, {
    onSuccess: (data) => {
      console.log("updated ", data);
    },
  });

  const remove = useMutation(lessonApiDeleteLesson, {
    onSuccess: (data) => {
      console.log("lessn deleted", data);
    },
  });
  return {
    addLesson: add.mutate,
    updateLesson: update.mutate,
    removeLesson: remove.mutate,
  };
}
