import { useParams } from "react-router-dom";

export const Pag_profile = () =>{

    const {name} = useParams();
    return(
        <div>
            <p>
                DEsde el perfile con {name}
            </p>
        </div>
    );
};