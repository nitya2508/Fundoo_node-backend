import User from '../models/user.model';
import bcrypt from 'bcrypt';

//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};


//register new user
export const regUser = async(body)=>{
  const checkDup = await User.findOne({email: body.email});
  if (checkDup == null){
    const salt = await bcrypt.genSalt(10)
    body.password = bcrypt.hashSync(body.password, salt )
  const regData = await User.create(body);//query to create new user
  return regData;
  }else{
    throw new Error("User already registered")
  }

}



//login registered user
export const loginUser = async (body) => {
  const emailMatch = await User.findOne({email: body.email});
  if( emailMatch == null){
    throw new Error("User not found, Please register.");
  }else{
    const validPass = await bcrypt.compare(body.password, emailMatch.password);
    if(validPass){
      return emailMatch
    }else{
      throw new Error("Invalid password")
    }
  }
}

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
