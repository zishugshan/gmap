const Products = ({prod}) => {
  return (
    <div>
      {prod.map((p)=>{
        <>
        <h3>{p.name}</h3>
        <h6>{p.catagory}</h6>
        <span>${p.price}</span>
        </>
    })}
    </div>
  );
}

export default Products;