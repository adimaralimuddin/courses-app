import { useRouter } from "next/router";
import React, { useState } from "react";
import Anim from "../../../components/elements/Anim";
import LessonListsEditable from "../../lessons/lessonLists/LessonListsEditable";
import ModuleAdder from "../moduleEditor/ModuleAdder";
import ModuleDeleter from "../moduleEditor/ModuleDeleter";
import ModuleUpdater from "../moduleEditor/ModuleUpdater";
import useModules from "../moduleHooks/useModules";
import ModuleType from "../ModuleTypes";
import ModuleItem from "./ModuleItem";
import ModuleListDiv from "./ModuleListDiv";

export default function ModuleMainEditor() {
  const { courseId } = useRouter().query;
  const { data } = useModules(String(courseId));

  return (
    <ModuleListDiv Adder={<ModuleAdder />}>
      {data?.map((module) => (
        <ModuleItemEditable module={module} key={module?.id} />
      ))}
    </ModuleListDiv>
  );
}

function ModuleItemEditable({ module }: { module: ModuleType }) {
  const [deleting, setDeleting] = useState(false);

  return (
    <Anim open={!deleting}>
      <ModuleItem
        module={module}
        Updater={<ModuleUpdater module={module} />}
        Deleter={<ModuleDeleter set={setDeleting} id={module.id} />}
      >
        <LessonListsEditable moduleId={module.id} />
      </ModuleItem>
    </Anim>
  );
}
