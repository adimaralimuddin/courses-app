import React, { ChangeEvent } from "react";
import Anim from "../../../components/elements/Anim";
import BtnPrime from "../../../components/elements/BtnPrime";
import Input from "../../../components/elements/Input";
import ModalDiv from "../../../components/elements/ModalDiv";
import Select from "../../../components/elements/Select";
import useCourseQuery from "../courseHooks/useCoursesQuery";
import { CourseState } from "../courseStates/CourseState";

const languages: string[] = ["english", "hindi", "russian"];

interface Props {
  onApply: () => any;
}

export default function CourseSidebar({ onApply }: Props) {
  const { set, open, price, duration, language, level, reset } =
    useCourseQuery();

  return (
    <>
      <Anim
        className="overflow-hidden sticky top-0"
        state={[" anim-mount ", " anim-unmount"]}
        open={open}
      >
        <div className={" sticky top-0 p-1 pl-3  transition-all "}>
          <ModalDiv className="p-6 bg-white">
            <Select
              outline={0}
              name="category"
              text="category"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                let val = e.target.value;
                set({
                  category: val,
                });
              }}
            >
              <option value="">any</option>
              <option value="react">react</option>
              <option value="javascript">javascript</option>
              <option value="java">java</option>
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="nodejs">nodejs</option>
              <option value="angular">angular</option>
              <option value="vue">vue</option>
              <option value="paid">paid</option>
            </Select>
            <Input
              name="price"
              value={price}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                set({ price: parseInt(e.target.value) })
              }
              text="min price"
              type="number"
              max={500}
            />
            <Input
              name="duration"
              text="max duration"
              value={duration}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                set({ duration: parseInt(e.target.value) })
              }
              type="number"
              max={360}
            />
            <Select
              outline={0}
              name="free"
              text="course type"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                let val = e.target.value;
                set({
                  free: val == "paid" ? false : val == "free" ? true : null,
                });
              }}
            >
              <option value="all">all</option>
              <option value="paid">paid</option>
              <option value="free">free</option>
            </Select>
            <Select
              name="language"
              text="language"
              value={language}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                set({ language: e.target.value })
              }
            >
              <option value="">any</option>
              {languages?.map((lang) => (
                <option value={lang} key={lang}>
                  {lang}
                </option>
              ))}
            </Select>
            <Select
              name="level"
              text="level"
              value={level}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                console.log("h", parseInt(e.target.value));
                set({ level: parseInt(e.target.value) });
              }}
            >
              <option value={0}>all</option>
              <option value={1}>beginner</option>
              <option value={2}>intermediate</option>
              <option value={3}>advanced</option>
              <option value={4}>expert</option>
            </Select>
            <div className="flex flex-col gap-2 pt-6">
              <BtnPrime onClick={onApply}>Apply Filter</BtnPrime>
              <button className="ring-1d" onClick={reset}>
                <small>reset filters</small>
              </button>
            </div>
          </ModalDiv>
        </div>
      </Anim>
    </>
  );
}
