export default function OrderingButton({name, order, books, setBooks}) {
    const changeOrder = (condition) => {
        console.log(order, typeof order, condition, typeof condition)
        let newbooks = [...books]
        if (Math.abs(condition) === 2) {
          newbooks.sort((a,b) => {
            if(a.published < b.published) { return -1 * condition; }
            if(a.published > b.published) { return 1 * condition; }
            return 0;
        })} 
        else if (Math.abs(condition) === 3){
            newbooks.sort((a,b) => {
            if(a.genre < b.genre) { return -1 * condition; }
            if(a.genre > b.genre) { return 1 * condition; }
            return 0;
        })}
        else if (Math.abs(condition) === 4) {
            newbooks.sort((a,b) => {
            if(a.publisher < b.publisher) { return -1 * condition; }
            if(a.publisher > b.publisher) { return 1 * condition; }
            return 0;
        })} 
        else {
            newbooks.sort((a,b) => {
            if(a.title < b.title) { return -1 * condition; }
            if(a.title > b.title) { return 1 * condition; }
            return 0;
        })}
        setBooks(newbooks)
      }

    return(<button className="btn" onClick={() => changeOrder(order)}>
    {name}</button>)
}