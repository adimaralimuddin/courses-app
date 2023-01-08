import { useRouter } from "next/router";
import React from "react";
import ModuleItemComp from "../../../components/featureComps/moduleComps/moduleItemComps/ModuleItemComp";
import ModuleListDivComp from "../../../components/featureComps/moduleComps/moduleListsComps/ModuleListDivComp";
import LessonListsEditable from "../../lessons/lessonLists/LessonListsEditable";
import ModuleAdder from "../moduleEditor/ModuleAdder";
import ModuleDeleter from "../moduleEditor/ModuleDeleter";
import ModuleUpdater from "../moduleEditor/ModuleUpdater";
import useModules from "../moduleHooks/useModules";

export default function ModuleMainEditor() {
  const {
    query: { courseId },
  } = useRouter();
  const { data } = useModules(String(courseId));
  return (
    <div className="">
      <ModuleListDivComp Adder={<ModuleAdder />}>
        {data?.map((module, ind) => (
          <ModuleItemComp
            module={module}
            Updater={<ModuleUpdater />}
            Deleter={<ModuleDeleter />}
            key={module.id}
          >
            <LessonListsEditable moduleId={module.id} />
          </ModuleItemComp>
        ))}
      </ModuleListDivComp>
    </div>
  );
}
