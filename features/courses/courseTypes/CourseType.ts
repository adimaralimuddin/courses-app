import ModuleType from "../../modules/ModuleTypes";
import UserType from "../../users/userTypes/UserType";

export interface CourseType {
  id?: string;
  title: string;
  imageUrl?: string;
  description?: string;
  price?: number;
  free?: boolean;
  discount?: number;
  discountType?: string;
  ratings?: number;
  language?: string[];
  duration?: number;
  level?: number;

  creatorId?: string;
  students?: UserType[];
  creator?: UserType;
  modules?: ModuleType[];

  createdAt?: Date;

  _count?: {
    students?: number | null;
    ratings?: number | null;
    modules?: number | null;
  };
}
