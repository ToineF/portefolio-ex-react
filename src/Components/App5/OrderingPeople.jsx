export default function OrderingPeople({name, order, people, setPeople}) {
    const changeOrder = (condition) => {
        let newPeople = [...people]
        newPeople.sort((a,b) => {
            if ( Math.abs(condition) === 2) {
                if(a.published < b.published) { return -1 * condition; }
                if(a.published > b.published) { return 1 * condition; }
            } else if (Math.abs(condition) === 3) {
                if(a.genre < b.genre) { return -1 * condition; }
                if(a.genre > b.genre) { return 1 * condition; }
            } else if (Math.abs(condition) === 4) {
                if(a.publisher < b.publisher) { return -1 * condition; }
                if(a.publisher > b.publisher) { return 1 * condition; }
            } else {
                if(a.title < b.title) { return -1 * condition; }
                if(a.title > b.title) { return 1 * condition; }
            }
            return 0;
          })
          setPeople(newPeople)
      }

    return(<button className="btn" onClick={() => changeOrder(order)}>
    {name}</button>)
}