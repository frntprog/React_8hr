import Axios from "axios";
import { useQuery } from "react-query";

export const useGetCat = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading,
  } = useQuery(["cat"], async () => {
    return Axios.get("https://excuser-three.vercel.app/v1/excuse/").then(
      (res) => res.data[0]
    );
  });

  const refetchData = () => {
    alert("DATA REFETCHED");
    refetch();
  };

  return {
    data,
    refetchData,
    isCatLoading,
  };
};
