import { useTrivia } from "./useTrivia";
const Trivia = () => {
  const { data, isTriviaLoading, refetchData } = useTrivia();
  if (isTriviaLoading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <button onClick={refetchData}> refetch</button>
      <h1>{data?.results[0].question}</h1>
    </div>
  );
};
export default Trivia;
