import React, { ChangeEvent, useState } from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
import Card from "../../../elements/Card";
import Input from "../../../elements/Input";
import Modal from "../../../elements/Modal";
import Select from "../../../elements/Select";

interface Props {
  course?: CourseType | undefined;
  text?: string;
  // onDone: (callback: CourseType) => void;
  onDone: (courseData: CourseType, caller: () => any) => void;
}
export default function CourseEditorComp({ course, onDone, text }: Props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>(course?.title || "");
  const [description, setDescription] = useState<string>(
    course?.description || ""
  );
  const [imgUrl, setImgUrl] = useState<string>(course?.imageUrl || "");
  const [price, setPrice] = useState<number>(course?.price || 0);
  const [free, setFree] = useState<boolean>(course?.free || true);
  const [discount, setDiscount] = useState<number>(course?.discount || 0);
  const [discountType, setDiscountType] = useState<string>(
    course?.discountType || "%"
  );
  const [rating, setRating] = useState<number>(course?.ratings || 0);
  // const [duration, setDuration] = useState<number>(course?.duration || 0);
  const [language, setLanguage] = useState<string>(
    course?.language || "english"
  );
  const [level, setLevel] = useState<number>(course?.level || 5);

  const onAdd = () => {
    const data: CourseType = {
      creatorId: "auth0|63b5544bc7f88e767ac799d9",
      title,
      description,
      imageUrl: imgUrl,
      price,
      free,
      discount,
      discountType,
      ratings: rating,
      language,
      level,
    };
    console.log("data ", data);
    onDone(data, () => {
      setOpen(false);
    });
  };

  return (
    <div>
      <button
        className=" text-whit font-semibold text-lg p-3 pt-6 hover:underline "
        onClick={() => setOpen((p) => !p)}
      >
        {text ? text : " + Add Course"}
      </button>
      <Modal open={open} set={setOpen}>
        <div className="  w-full max-w-xl">
          <Card className="min-h-[200px] p-6 ">
            <h2 className="font-semibold">Adding New Course</h2>
            <Input
              text="Title"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
            <Input
              text="Image Url"
              value={imgUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setImgUrl(e.target.value)
              }
            />
            <Input
              text="description"
              value={description}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDescription(e.target.value)
              }
            />
            <div className="flex gap-2 flex-wrap">
              <Input
                text="price"
                type="number"
                value={price}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPrice(parseInt(e.target.value))
                }
              />
              <Select
                text="free"
                value={free}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const val = e.target.value;
                  setFree(val === "true" ? true : false);
                }}
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </Select>
              <Input
                text="discount"
                type="number"
                value={discount}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDiscount(parseInt(e.target.value))
                }
              />
              <Select
                text="discount type"
                name="discount"
                value={discountType}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDiscountType(e.target.value)
                }
              >
                <option value="%">%</option>
                <option value="fixed">fixed</option>
              </Select>
            </div>
            <div className="flex flex-wrap gap-2">
              <Input
                text="ratings"
                type="number"
                value={rating}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setRating(parseInt(e.target.value))
                }
              />

              <Select
                text="language"
                value={language}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLanguage(e.target.value)
                }
              >
                <option value="english">english</option>
                <option value="hindi">hindi</option>
                <option value="russian">russian</option>
              </Select>
              <Select
                text="level"
                value={level}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLevel(parseInt(e.target.value))
                }
              >
                <option value={0}>all</option>
                <option value={1}>begginer</option>
                <option value={2}>advanced</option>
              </Select>
            </div>

            <button onClick={onAdd}>Save</button>
          </Card>
        </div>
      </Modal>
    </div>
  );
}
