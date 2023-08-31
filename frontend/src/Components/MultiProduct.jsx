import { useNavigate } from "react-router-dom"

function MultipleProduct()
{
    const router = useNavigate();

    return(
        <div>
            <h1>MultipleProduct</h1>
            <button onClick={() => router('/Single-Product/:986704')}>Redirect</button>
        </div>
    )
}

export default MultipleProduct;