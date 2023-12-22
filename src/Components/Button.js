import { Navigate } from "react-router-dom";

function Button(){
    return(
        <Button className="" onClick={() => Navigate('/about')}>About</Button>
    );

}

export default Button;