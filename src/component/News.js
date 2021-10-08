
const News= ()=>{
    let state={
        name:"Yosra",
        age: 36
    }
    return(
        <div>
            <p>Bonjour je m'appelle {state.name} et j'ai {state.age} ans</p>
        </div>
    );
}
export default News;