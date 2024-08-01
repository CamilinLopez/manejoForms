import React from 'react';

export default function  Form() {

  const [user, setUser]=React.useState({
    username: "",
    terms: false,
    password: ""
  }); 

  const [errors, setErrors]=React.useState({});

  function submit(e){
    e.preventDefault();
    if( Object.keys(validate(user)).length===0){
      console.log(user);
      alert("no hay errores");
    }
  }


  function handleOnChange(e){

    setUser({...user,
                [e.target.name] : e.target.value
            })
  
     setErrors(validate(
      {...user,
        [e.target.name] : e.target.value
      }
     ));

  }

  return (
      <form onSubmit={submit}>
        <label>Username:</label>
        <input 
           type="text" 
           name="username"
           value={user.username}
           onChange={handleOnChange}
           className={errors.username && "danger"}
           />
        
          <p className="danger">{errors.username}</p>
        

        <label>Password:</label>
        <input 
            type="password" 
            name="password"
            value={user.password}
            onChange={handleOnChange}
            className={errors.password && "danger"}
            />

            
            <p className="danger">{errors.password}</p>
            

        {/* <input 
            type="checkbox" 
            name="terms" 
            value={user.terms} 
            onChange={handleOnChange}
            /> */}

            <input type='submit' value="Enviar"/>

      </form>
  )
}

export function validate(user) {
  let errors = {}; console.log("entro a validate");
  if (!user.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(user.username)) {
    errors.username = 'Username is invalid';
  }

  if (!user.password) {
    errors.password = 'Password is required'
  } else if (!/(?=.*[0-9])/.test(user.password)){
    errors.password = 'Password is invalid';
  }

  return errors;
};
