import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
export const useAuth=()=>{
    let dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors},
  } = useForm();

  const registerSubmit = async (data) => {
    console.log("Register Data:", data)
  }
  

  const loginSubmit = (data) => {
      dispatch(loginEmployee(data))
  };




  return {
    register,
    handleSubmit,
    formState: { errors},registerSubmit,loginSubmit
  }
}