// Added By Bhushan on 19_12_2024
export interface Review {
  id: string;
  name: string;
  email: string;
  rating: number;
  review: string;
  date: Date;
}

export interface ReviewFormData {
  name: string;
  email: string;
  rating: number;
  review: string;
}
