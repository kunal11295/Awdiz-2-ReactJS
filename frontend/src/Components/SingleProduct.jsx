import { useParams } from "react-router-dom";

function SingleProduct()
{
    const {id} = useParams();

    return(
        <div>
            <h1>SingleProduct- {id}</h1>
        </div>
    )
}

export default SingleProduct;
