const HEADER_MENU_ITEMS = [
  {
    label: 'Home',
    link: './index.html',
  },
  {
    label: 'About',
    link: './pageAbout.html',
  },
  {
    label: 'Products',
    link: './index.html#catalogList',
  },
  {
    label: 'Basket',
    link: '#',
  },
  {
    label: 'Sign in',
    onclick: "handleOpenModal('modal-sign-in')",
  },
];

const MODAL_STRUCTURE_SIGN_IN = {
  element: 'div',
  className: ['modal-content'],
  children: [
    {
      element: 'div',
      className: ['modal-body'],
      children: [
        {
          element: 'div',
          className: ['modal-close'],
          id: 'close-modal-sign-in',
          onclick: "handleCloseModal('modal-sign-in')",
          children: [
            {
              element: 'span',
              className: ['close-line'],
            },
            {
              element: 'span',
              className: ['close-line'],
            },
          ],
        },

        {
          element: 'h3',
          className: ['modal-title'],
          text: 'Sign in',
        },

        {
          element: 'form',
          className: ['val-form'],
          id: 'sign-in-form',
          action: '',
          children: [
            {
              element: 'div',
              className: ['form-group'],
              children: [
                {
                  element: 'div',
                  className: ['input-item'],
                  children: [
                    {
                      element: 'input',
                      className: ['input', 'form-input'],
                      type: 'text',
                      name: 'login',
                      placeholder: 'Enter your YoptaLogin',
                    },
                  ],
                },
                {
                  element: 'div',
                  className: ['input-item'],
                  children: [
                    {
                      element: 'input',
                      className: ['input', 'form-input', 'form-input-email-sing-in'],
                      type: 'email',
                      name: 'email',
                      placeholder: 'Enter your E-mail',
                      autocomplete: 'username email',
                    },
                  ],
                },
                {
                  element: 'div',
                  className: ['input-item'],
                  children: [
                    {
                      element: 'input',
                      className: ['input', 'form-input', 'form-input-password'],
                      type: 'password',
                      name: 'password',
                      placeholder: 'Enter your YoptaPassword',
                      autocomplete: 'current-password',
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          element: 'div',
          className: ['enter'],
          children: [
            {
              element: 'button',
              className: ['enter-button'],
              id: 'sign-in-button',
              type: 'enter',
              text: 'Sign in Yopta Store',
            },
          ],
        },

        {
          element: 'div',
          className: ['sign-link'],
          onclick: "handleOpenModal('modal-sign-up'); handleCloseModal('modal-sign-in')",
          text: 'or Sign up',
        },
      ],
    },
  ],
};

const MODAL_STRUCTURE_SIGN_UP = {
  element: 'div',
  className: ['modal-content'],
  children: [
    {
      element: 'div',
      className: ['modal-body'],
      children: [
        {
          element: 'div',
          className: ['modal-close'],
          onclick: "handleCloseModal('modal-sign-up')",
          id: 'close-modal-sign-up',

          children: [
            {
              element: 'span',
              className: ['close-line'],
            },
            {
              element: 'span',
              className: ['close-line'],
            },
          ],
        },

        {
          element: 'h3',
          className: ['modal-title'],
          text: 'Sign up',
        },

        {
          element: 'form',
          className: ['val-form'],
          action: '',
          id: 'sign-up-form',
          children: [
            {
              element: 'div',
              className: ['form-group'],
              children: [
                {
                  element: 'div',
                  className: ['input-item'],
                  children: [
                    {
                      element: 'input',
                      className: ['input', 'form-input'],
                      type: 'text',
                      name: 'login',
                      placeholder: 'Enter your YoptaLogin',
                    },
                  ],
                },
                {
                  element: 'div',
                  className: ['input-item'],
                  children: [
                    {
                      element: 'input',
                      className: ['input', 'form-input', 'form-input-email-sign-up'],
                      type: 'email',
                      name: 'email',
                      placeholder: 'Enter your E-mail',
                      autocomplete: 'username email',
                    },
                  ],
                },
                {
                  element: 'div',
                  className: ['input-item'],
                  children: [
                    {
                      element: 'input',
                      className: ['input', 'form-input', 'form-input-password-check'],
                      id: 'first-password-input',
                      type: 'password',
                      name: 'password',
                      placeholder: 'Enter your YoptaPassword',
                      autocomplete: 'current-password',
                    },
                  ],
                },
                {
                  element: 'div',
                  className: ['input-item'],
                  children: [
                    {
                      element: 'input',
                      className: ['input', 'form-input', 'form-input-password-check'],
                      id: 'second-password-input',
                      type: 'password',
                      name: 'password',
                      placeholder: 'Enter your YoptaPassword again',
                      autocomplete: 'current-password',
                    },
                  ],
                },

                {
                  element: 'div',
                  className: ['form-checkbox'],
                  children: [
                    {
                      element: 'input',
                      className: ['checkbox_input', 'form-input-checkbox'],
                      id: 'checkbox-sign-up',
                      type: 'checkbox',
                      name: 'checkbox',
                    },
                    {
                      element: 'label',
                      className: ['checkbox_label'],
                      for: 'checkbox-sign-up',
                      text: 'Accept privarcy policy',
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          element: 'div',
          className: ['enter'],
          children: [
            {
              element: 'button',
              className: ['enter-button'],
              id: 'sign-up-button',
              type: 'enter',
              text: 'Sign up Yopta Store',
            },
          ],
        },

        {
          element: 'a',
          className: ['sign-link'],
          onclick: "handleOpenModal('modal-sign-in'); handleCloseModal('modal-sign-up')",
          text: 'or sign in if you have YoptaAccount',
        },
      ],
    },
  ],
};
