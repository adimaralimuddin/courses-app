import { useRouter } from "next/router";
import React from "react";
import LessonLists from "../../lessons/lessonLists/LessonLists";
import useModules from "../moduleHooks/useModules";
import ModuleItem from "./ModuleItem";
import ModuleListDiv from "./ModuleListDiv";

export default function ModuleMain() {
  const {
    query: { courseId },
  } = useRouter();
  const { data } = useModules(String(courseId));
  return (
    <div className="min-h-[900px] px-2">
      <ModuleListDiv>
        {data ? (
          data?.map((module, ind) => (
            <ModuleItem module={module} key={module.id}>
              <LessonLists moduleId={module.id} />
            </ModuleItem>
          ))
        ) : (
          <div className="gap-4 flex flex-col">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                className="animate-pulse bg-white ring-2 ring-slate-300 h-[45px] rounded-xl"
                key={i}
              ></div>
            ))}
          </div>
        )}
      </ModuleListDiv>
    </div>
  );
}
