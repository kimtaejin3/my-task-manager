//TODO: prefetching 해서 사용성 올리기
const COVER_NAMES = [
  "random-cover-01.jpeg",
  "random-cover-02.jpeg",
  "random-cover-03.jpeg",
  "random-cover-04.jpeg",
  "random-cover-05.jpeg",
  "random-cover-06.jpeg",
  "random-cover-07.jpeg",
  "random-cover-08.jpeg",
  "random-cover-09.jpeg",
  "random-cover-10.jpeg",
];

const URL =
  "https://eprqyqdkocmyibziirfw.supabase.co/storage/v1/object/public/random-covers";

const getRandomCover = () => {
  const randomIndex = Math.floor(Math.random() * (COVER_NAMES.length - 1));
  return `${URL}/${COVER_NAMES[randomIndex]}`;
};

export default getRandomCover;
