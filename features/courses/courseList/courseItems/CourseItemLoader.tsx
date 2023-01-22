import SkeletonItem from "../../../../components/elements/SkeletonItem";

export default function CourseItemLoader() {
  return (
    <div className=" bg-white bg-opacity-80  animate-pulse p-6d min-h-[290px] rounded-2xl ring-2 ring-slate-800 ring-opacity-10 flex flex-col gap-2 overflow-hidden">
      <div className="bg-[#e9d3d6]d bg-slate-500 bg-opacity-10 flex-1 max-h-[150px] "></div>
      <SkeletonItem />
    </div>
  );
}
