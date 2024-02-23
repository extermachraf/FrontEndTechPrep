import UseFetch from "./UseFetch";

export default function UseFetchHookTest() {
  const { data, error, pending } = UseFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(data, error, pending);
  return (
    <div>
      {pending ? <h3>Loading ...</h3> : null}
      {
        data && data.products && data.products.length
        ? data.products.map((Item) => <p key={Item.id}>{Item.title}</p>)
        : null}
    </div>
  );
}
