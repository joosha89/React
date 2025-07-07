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
  [prop: string]: any;
}

export type { Data };