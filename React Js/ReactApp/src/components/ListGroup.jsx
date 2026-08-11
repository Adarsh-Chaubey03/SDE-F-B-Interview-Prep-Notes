function ListGroup() {

   const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];


    return (
        <>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item" onClick={(event)=> console.log(event)}>{item}</li>
                ))}
            </ul>
        
        
        </>
    )
    
 
    }

    export default ListGroup;