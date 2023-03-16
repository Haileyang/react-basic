import './App.css';

function AppJSX() {
  const name = "Hailey"
  const list  = ['banana', 'blue berry', 'tomato', 'orange']
  return (
    <>
      <h1>{name}</h1>
      <h1>{`Hello! ${name}!`}</h1>
      <h2>List of favorit fruit</h2>
      <ul>

        {
          // skip "return"
          list.map((item) => (
            <li>{item}</li>
          ))
        }
        {
          // When we use {}, "return" is mandatory
          list.map((item) => {
            return <li>{item}</li>
          })
        }
        {
          // use original function
          list.map(function(item){
            return <li>{item}</li>
          })
        }
      </ul>
    </>
  );
}

export default AppJSX;
