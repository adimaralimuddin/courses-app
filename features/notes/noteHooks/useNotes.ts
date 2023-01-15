import { useQuery } from "@tanstack/react-query";
import noteApiGetNote from "../noteApis/noteApiGetNote";

export default function useNotes(lessonId: string | undefined) {
  const query = useQuery(["notes", lessonId], () => noteApiGetNote(lessonId));

  return {
    ...query,
  };
}
