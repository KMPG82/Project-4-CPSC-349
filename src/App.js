import './assets/css/App.css';
import './assets/css/main.css';
import Auth from './components/Auth';
/* 
DONE:

home page is imported,
about us page is imported,
inventory page is imported,
sign up page is imported,
log in page is imported,
forgot password page is imported,
reset password page is imported,
navbar and footer implemented onto each page (except for forgot and reset password)

-------------------

TO DO:

add navigation between pages
add pocketbase
import navbar and footer to forgot and reset password (don't know if we need to or not)

*/
function App() {
  return (
    <>
        <Auth />
    </>

      );
}

export default App;
