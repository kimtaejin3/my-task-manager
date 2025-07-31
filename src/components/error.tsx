export default function Error({ errorMessage }: { errorMessage: string }) {
  return (
    <div>
      <h1>{errorMessage}</h1>
    </div>
  );
}
