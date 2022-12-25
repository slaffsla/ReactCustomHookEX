import { useQuery } from "@tanstack/react-query";
//import { Axios } from "axios";
export const useTrivia = () => {
  const {
    data,
    refetch,
    isLoading: isTriviaoading,
    error,
  } = useQuery(["cat"], async () => {
    return fetch("https://opentdb.com/api.php?amount=10").then((res) =>
      res.json()
    );
  });
  const refetchData = () => {
    alert("Data Refetched");
    refetch();
  };
  if (error) {
    console.log(error);
  }
  console.log(data);
  return { data, refetchData, isTriviaoading };
};
