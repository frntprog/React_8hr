import { useGetCat } from "../hooks/useGetCat";

const Cat = () => {
  const { data, isCatLoading, refetchData } = useGetCat();

  if (isCatLoading) <h1>Loading...</h1>;

  return (
    <div>
      <button onClick={refetchData}>refetch</button>
      <h1>{data?.excuse}</h1>
    </div>
  );
};

export default Cat;
