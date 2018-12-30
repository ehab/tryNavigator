export const loginUser = ({username, password}) => {
//export const loginUser = () => {
  console.log(`username: ${username} and password: ${password}`);
  return{
    type: 'login_attempt'
  }
}
