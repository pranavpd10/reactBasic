import BComp from "./BComp";
import { useCounterContextUser } from "./ContextLogic";

let Acomp = () => {

    return (
        <>
            <h1> Hello from Comp A </h1>
            <BComp/>
        </>
    )
}
export default Acomp;