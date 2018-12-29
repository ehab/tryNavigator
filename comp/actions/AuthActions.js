//export const loginUser = ({email, password}) => {
export const loginUser = () => {

  //console.log('email: ${email} and password is: {password}');
  return{
    type: 'login_attempt'
  }
}
