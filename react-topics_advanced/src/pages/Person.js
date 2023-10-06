import PropsTypes from 'prop-types';

export const Person = (props) =>{
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person {props.isMarried ? "is":"is not"} Married!</h1>
            {props.friends.map((friend)=>(
                <h1>{friend}</h1>
            ))}
        </div>
    )
}

//adding types of variables using prop-types.
Person.PropsTypes = {
    name:PropsTypes.string,
    email: PropsTypes.string,
    age: PropsTypes.number,
    isMarried: PropsTypes.bool,
    friends: PropsTypes.arrayOf(PropsTypes.string)
}