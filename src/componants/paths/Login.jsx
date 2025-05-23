import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const navigate = useNavigate();

    const {signInUser, signInWithGoogle} =useContext(AuthContext);


     const  handleGoogleSignIn = ()=>{
      signInWithGoogle()
      .then((res)=>{
        console.log(res.user);
        navigate('/');
      })
      .catch((err)=> console.log(err.code) );
     }

    const handleLogin = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password =e.target.pass.value;
        console.log(email, password);
          
        signInUser(email,password)
        .then(res =>{
            console.log(res.user);
            e.target.reset();
            navigate('/')
        })
        .catch((error) =>{
            console.log(error.code);
        })

    }



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form  onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="mx-auto py-4">New to the website? please <Link to="/register" className="text-blue-600 font-bold">SignUp</Link> </p>
       
          <p className="mx-auto py-2" onClick={handleGoogleSignIn} >SignIn with <span className="text-blue-600 font-bold shadow-lg py-1 px-2 rounded-xl" >Google</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
