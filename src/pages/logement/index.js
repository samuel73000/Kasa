import "../../styles/index.css"
import Slideshow from "../../components/Slideshow"


function logement(){
    const {data} = require('../../data/AppartementList');
    
    
    
    return(
<div>
        <Slideshow images={data[1].pictures} />

</div>
    )
}

export default logement