export type productType = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
};

export type cardType = {
  name: string;
  surname: string;
  birthday: string;
  country: string;
  character: string[];
  gender: string;
  photoImg: string;
};

export type cardTypeError = {
  name: boolean;
  surname: boolean;
  birthday: boolean;
  country: boolean;
  character: boolean;
  gender: boolean;
  photoImg: boolean;
};
