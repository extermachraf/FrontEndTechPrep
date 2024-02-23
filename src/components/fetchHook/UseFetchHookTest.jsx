import UseFetch from "./UseFetch";

export default function UseFetchHookTest() {
  const { data, error, pending } = UseFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(data, error, pending);;
  return (
    <div>
      <h1>Use Fetch Custom Hook</h1>
      {pending ? <h3>Loading ...</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {
        data && data.products && data.products.length
        ? data.products.map((Item) => <p key={Item.id}>{Item.title}</p>)
        : null
      }
    </div>
  );
}
