import { useRouter } from "next/router";
import React from "react";
import ModuleItemComp from "../../../components/featureComps/moduleComps/moduleItemComps/ModuleItemComp";
import ModuleListDivComp from "../../../components/featureComps/moduleComps/moduleListsComps/ModuleListDivComp";
import LessonLists from "../../lessons/lessonLists/LessonLists";
import useModules from "../moduleHooks/useModules";

export default function ModuleMain() {
  const {
    query: { courseId },
  } = useRouter();
  const { data } = useModules(String(courseId));
  return (
    <div className="">
      <ModuleListDivComp>
        {data?.map((module, ind) => (
          <ModuleItemComp module={module} key={module.id}>
            <LessonLists moduleId={module.id} />
          </ModuleItemComp>
        ))}
      </ModuleListDivComp>
    </div>
  );
}
