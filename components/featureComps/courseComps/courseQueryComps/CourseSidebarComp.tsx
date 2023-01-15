import React, { ChangeEvent, useState } from "react";
import { CourseStateType } from "../../../../features/courses/courseStates/CourseState";
import Anim from "../../../elements/Anim";
import Input from "../../../elements/Input";
import Select from "../../../elements/Select";
const languages: string[] = ["english", "hindi", "russian"];
interface Props {
  state: CourseStateType;
  onApply: () => any;
  open: boolean;
}

export default function CourseSidebarComp({ state, open, onApply }: Props) {
  return (
    <>
      <Anim
        className="overflow-hidden sticky top-0"
        state={["test-pop", "test-fade"]}
        open={open}
      >
        <div className={" bg-blue-500d p-6  transition-all "}>
          <Input
            name="price"
            value={state?.price}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              state?.set({ price: parseInt(e.target.value) })
            }
            text="min price"
            type="number"
            max={500}
          />
          <Input
            name="discount"
            value={state?.discount}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              state?.set({ discount: parseInt(e.target.value) })
            }
            text="min discount"
            type="number"
            max={100}
          />
          <Input
            name="ratings"
            text="max ratings"
            value={state?.ratings}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              state?.set({ ratings: parseInt(e.target.value) })
            }
            type="number"
            max={999999}
          />
          <Input
            name="duration"
            text="max duration"
            value={state?.duration}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              state?.set({ duration: parseInt(e.target.value) })
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
              state?.set({
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
            value={state?.language}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              state?.set({ language: e.target.value })
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
            value={state?.level}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              console.log("h", parseInt(e.target.value));
              state?.set({ level: parseInt(e.target.value) });
            }}
          >
            <option value={0}>all</option>
            <option value={1}>beginner</option>
            <option value={2}>intermediate</option>
            <option value={3}>advanced</option>
            <option value={4}>expert</option>
          </Select>
          <button
            onClick={onApply}
            className="bg-primary-main text-white rounded-full flex-1 px-3 p-1"
          >
            Apply Filter
          </button>
          <button>
            <small>reset filters</small>
          </button>
        </div>
      </Anim>
    </>
  );
}
