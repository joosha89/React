interface Data {
  //find(arg0: (item: any) => boolean): unknown;
  id: number;
  title: string;
  content: string;
  price: string;
  img: string;
  type: string;
  regDate: string;
  featured: number;
}

export type { Data };