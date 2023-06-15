import "../styles/index.css"
function Banner(props){
   
    return(
    <div className={props.container}>
        <img src={props.image} className={props.imageClass} alt="bannier"/>
        <h1 className={props.classNameTitre}>Chez vous, partout et ailleurs</h1>
    </div>
    
    )
}

export default Banner
