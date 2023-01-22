import React, { ChangeEvent, useState } from "react";
import BtnPrime from "../../../components/elements/BtnPrime";
import Input from "../../../components/elements/Input";
import LoadingMessage from "../../../components/elements/LoadingMessage";
import Select from "../../../components/elements/Select";
import { CourseType } from "../courseTypes/CourseType";

interface Props {
  course?: CourseType | undefined;
  onDone: (courseData: CourseType) => void;
  isLoading: boolean;
  text?: string;
}

export default function CourseEditor({
  course,
  onDone,
  isLoading,
  text = "Add",
}: Props) {
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
  const [language, setLanguage] = useState<string[]>(
    course?.language || ["english"]
  );
  const [level, setLevel] = useState<number>(course?.level || 5);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    const data: CourseType = {
      title,
      description,
      imageUrl: imgUrl,
      price,
      free,
      discount,
      discountType,
      language,
      level,
    };
    onDone(data);
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[200px] p-6 relative ">
      <h2 className="font-semibold">
        {text?.includes("update")
          ? "Update Selected Course"
          : "Adding New Course"}
      </h2>
      <Input
        autoFocus
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
        <Select
          text="language"
          value={language}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLanguage((p) => [...p, e.target.value])
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
      <BtnPrime type="submit" className="mr-auto mt-4">
        {text} Course
      </BtnPrime>
      {isLoading && <LoadingMessage text="Saving Course Data . . ." />}
    </form>
  );
}
