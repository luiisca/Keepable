import Form from "../components/lib.js";
import { getUser, createUser } from "../services.js";

const SignModal = (function() {
  const template = `
      <div class="sign-modal form-container">
        <div class="sign-modal__content">
          <button class="sign-modal__close-button button">
            <span class="material-icons-outlined"> close </span>
          </button>

          <div class="signin-container">
            <div class="sign-modal__title font-title font-title--medium">
              Sign In
            </div>

            ${Form('signin')}
          </div>

          <div class="form-divider">
            <span class="divider-text font-title font-title--small">
              OR
            </span>
          </div>

          <div class="signup-container">
            <div class="">
              <div class=" font-title font-title--medium">
                Sign Up
              </div>
              <div class=" font-title font-title--small">
                It's free and always will be.
              </div>
            </div>

            <div class="signup-container">
            ${Form('signup')}
            </div>
          </div>
        </div>
      </div>
    <div class="overlay overlay--visible"></div>
  `;

  const listenClick = function() {
    const signModal = document.querySelector('.sign-modal');
    const closeButton = document.querySelector(".sign-modal__close-button");
    const overlay = document.querySelector(".overlay");

    // Use one event listener for both close buttons
    overlay.addEventListener("click", function(e) {
      signModal.classList.remove("sign-modal--visible");
      overlay.classList.remove("overlay--visible");
    });

    closeButton.addEventListener("click", function() {
      signModal.classList.remove("sign-modal--visible");
      overlay.classList.remove("overlay--visible");
    })
  }

  const listenSubmit = function() {
    const signModal = document.querySelector('.sign-modal');

    signModal.addEventListener("submit", function(e) {
      e.preventDefault();
      const [ username, password ] = e.target.elements;
      
      // refactor repetitive code
      if (e.target.dataset.type === "signin") {
        const login = async () => {
          try {
            const userData = await getUser({ username: username.value, password: password.value })
            .then((response) => response.json());
            
            console.log(userData);

            if (Array.isArray(userData)) throw new Error(userData)
          } catch(error) {
            console.error(error)
          }
        };
        login();  
      }

      if (e.target.dataset.type === "signup") {
        const signup = async () => {
          try {
            const userData = await createUser({ username: username.value, password: password.value })
            .then((response) => response.json());
  
            console.log(userData);

            if (Array.isArray(userData)) throw new Error(userData)
          } catch(error) {
            console.error(error)
          }
        };
        signup();
      }

    })
  }

  return {
    toString() {
      return template;
    },
    addListeners() {
      listenClick();
      listenSubmit();
    },
  }
})()

export default SignModal;