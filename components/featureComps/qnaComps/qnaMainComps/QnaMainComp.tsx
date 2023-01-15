import React from "react";
import useQnaQueries, {
  QnaState,
} from "../../../../features/qna/qnaHooks/useQnaQueries";
import LearnQueryComp from "../../learnComps/learnQueryComps/LearnQueryComp";
interface Props {
  children?: any;
  Adder?: any;
  className?: string;
  divClass?: string;
}
export default function QnaMainComp({
  children,
  Adder,
  className,
  divClass,
}: Props) {
  return (
    <div className={"p-3 px-4 bg-indigo-50d flex-1   " + className}>
      <div
        className={"flex-1 flex flex-col w-full max-w-3xl mx-auto  " + divClass}
      >
        <div className="py-2 flexd items-center djustify-between">
          {Adder && Adder}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
