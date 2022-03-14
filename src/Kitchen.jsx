import Sink from "./Sink";
import Oven from "./Oven";

const Kitchen = (props) => {
  return ( 
    <div>
      <h4>Kitchen</h4>
      <Oven />
      <Sink />
    </div>
   );
}
 
export default Kitchen;