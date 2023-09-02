import { useParams } from "react-router-dom";
import AuthProtected from "./AuthProtected";

function SingleProduct()
{
    const {id} = useParams();

    return(
        <div>

            <AuthProtected>
            <h1>SingleProduct- {id}</h1>
            </AuthProtected>
           
        </div>
    )
}

export default SingleProduct;
