type Tweet = {
  id: string;
  text: string;
  createdAt: Date;
  name: string;
  username: string;
  url?: string;
};

const tweets: Tweet[] = [
  {
    id: "1",
    text: "hello",
    createdAt: new Date(),
    name: "seoyul",
    username: "seoyul",
  },
];

export async function getAll(): Promise<Tweet[]> {
  return tweets;
}
