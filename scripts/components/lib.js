const Form = (type) => `
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
        <button class="form-item-button button font-body font-body--large">
          ${type === 'signin' ? 'Sign in' : 'Sign up'}
        </button>
      </div>
    </form>
  `;


export default Form