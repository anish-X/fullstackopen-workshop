import SayHello from "./SayHello";

const App = () => {

  let persons = [
    {firstName: "Manoj", lastName:"Rai", id: 201},
    {firstName: "Munna", lastName:"Bhai", id: 212}
  ]

  return(
    <>
    <h1 className="name">Hello there!!!</h1>
    {persons.length > 0 ? (
      persons.filter(person => person.id > 201).map(person => <SayHello person={person} key={person.id} />)
    ) : (
      <p>There are no people here</p>
    )}
    </>
  )
}

export default App;