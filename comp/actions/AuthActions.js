export const loginUser = ({email, password}) => {
  console.log('email: ${email} and password is: {password}');
  return{
    type: 'login_attempt'
  }
}
