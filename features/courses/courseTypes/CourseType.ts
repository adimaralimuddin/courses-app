export interface CourseType {
  id?: string;
  title: string;
  imageUrl?: string;
  description?: string;
  price?: number;
  free?: Boolean;
  discount?: Number;
  discountType?: string;
  ratings?: Number;
  language?: string;
  duration?: Number;
  level?: Number;

  //   creator User @relation(fields: [creatorId],references: [id])
  creatorId: string;

  //   students User[] @relation("subscription")

  //   modules Module[]
}
