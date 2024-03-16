export interface SlideItemProps {
  imageUrl: string;
  id: number;
  title: string;
  description: string;
  isActive: boolean;
}

export interface SlideProps {
  slides: SlideItemProps[];
}