// generate a signup component
const SignModal = (function() {
  const template = `
      <div class="sign-modal form">
        <div class="sign-modal__content">
          <div class="sign-modal__close-button button">
            <span class="material-icons-outlined"> close </span>
          </div>
          <div class="sign-modal__title font-title font-title--medium">
            Sign In
          </div>
          <div class="sign-modal__content-container">
            <form class="sign-form">
              <div class="form-item">
                <div class="form-item-label font-title font-title--small">
                  Email
                </div>
                <input class="form-item-input font-title font-title--medium" type="text" />
              </div>
              <div class="form-item">
                <div class="form-item-label font-title font-title--small">
                  Password
                </div>
                <input class="form-item-input font-title font-title--medium" type="password" />
              </div>
              <div class="form-item">
                <div class="form-item-label font-title font-title--small">
                  <a href="#" class="form-item-label-link font-title font-title--small">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="form-item">
                <button class="form-item-button button">
                  Sign In
                </button>
              </div>
            </form>
            <div class="form-divider">
              <span class="divider-text font-title font-title--small">
                OR
              </span>
            </div>
            <div class="">
              <div class=" font-title font-title--medium">
                Sign Up
              </div>
              <div class=" font-title font-title--small">
                It's free and always will be.
              </div>
            </div>
            <form class="sign-form">
              <div class="form-item">
                <div class="form-item-label font-title font-title--small">
                  Email
                </div>
                <input class="form-item-input font-title font-title--medium" type="text" />
              </div>
              <div class="form-item">
                <div class="form-item-label font-title font-title--small">
                  Password
                </div>
                <input class="form-item-input font-title font-title--medium" type="password" />
              </div>
              <div class="form-item">
                <div class="form-item-label font-title font-title--small">
                  <a href="#" class="form-item-label-link font-title font-title--small">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="form-item">
                <button class="form-item-button button">
                  Sign Up
                </button> 
              </div>
            </form>
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

  return {
    toString() {
      return template;
    },
    addListeners() {
      listenClick();
    },
  }
})()

export default SignModal;