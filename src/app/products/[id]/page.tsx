export default async function ProductId({params} : {params: {
    id: string}}
) {
    const { id } = await params;

    return (
      <div>Product { id }</div>
    )
}