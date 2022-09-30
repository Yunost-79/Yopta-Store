const HEADER_MENU_ITEMS = [
  {
    label: "Home",
    link: "./index.html",
  },
  {
    label: "About",
    link: "./pageAbout.html",
  },
  {
    label: "Products",
    link: "./index.html#catalogList",
  },
  {
    label: "Basket",
    link: "#",
  },
  {
    label: "Sing in",
    link: "#",
    className: "log-in",
  },
];

const MODAL_STRUCTURE_SING_IN = {
  element: "div",
  className: ["modal-content"],
  children: [
    {
      element: "div",
      className: ["modal-body"],
      children: [
        {
          element: "div",
          className: ["modal-close"],
          id: "close-modal-sing-in",
          children: [
            {
              element: "span",
              className: ["close-line"],
            },
            {
              element: "span",
              className: ["close-line"],
            },
          ],
        },

        {
          element: "h3",
          className: ["modal-title"],
          text: "Sing in",
        },

        {
          element: "form",
          className: ["val-form"],
          action: "",
          children: [
            {
              element: "div",
              className: ["form-group"],
              children: [
                {
                  element: "input",
                  className: ["input", "form-input"],
                  type: "text",
                  name: "login",
                  placeholder: "Enter your YoptaLogin",
                },

                {
                  element: "input",
                  className: ["input", "form-input", "form-input-email"],
                  type: "email",
                  name: "email",
                  placeholder: "Enter your E-mail",
                  autocomplete: "username email",
                },

                {
                  element: "input",
                  className: ["input", "form-input", "form-input-password"],
                  type: "password",
                  name: "password",
                  placeholder: "Enter your YoptaPassword",
                  autocomplete: "current-password",
                },
              ],
            },
          ],
        },

        {
          element: "div",
          className: ["enter"],
          children: [
            {
              element: "button",
              className: ["enter-button"],
              type: "enter",
              text: "Sing in Yopta Store",
            },
          ],
        },

        {
          element: "a",
          className: ["sing-up-link"],
          href: "#modal-sing-up",
          text: "or Sing up",
        },
      ],
    },
  ],
};

const MODAL_STRUCTURE_SING_UP = {
  element: "div",
  className: ["modal-content"],
  children: [
    {
      element: "div",
      className: ["modal-body"],
      children: [
        {
          element: "div",
          className: ["modal-close"],
          id: "close-modal-sing-up",

          children: [
            {
              element: "span",
              className: ["close-line"],
            },
            {
              element: "span",
              className: ["close-line"],
            },
          ],
        },

        {
          element: "h3",
          className: ["modal-title"],
          text: "Sing up",
        },

        {
          element: "form",
          className: ["val-form"],
          action: "",
          children: [
            {
              element: "div",
              className: ["form-group"],
              children: [
                {
                  element: "input",
                  className: ["input", "form-input"],
                  type: "text",
                  name: "login",
                  placeholder: "Enter your YoptaLogin",
                },

                {
                  element: "input",
                  className: ["input", "form-input", "form-input-email"],
                  type: "email",
                  name: "email",
                  placeholder: "Enter your E-mail",
                  autocomplete: "username email",
                },

                {
                  element: "input",
                  className: ["input", "form-input", "form-input-password"],
                  id: "first-password-input",
                  type: "password",
                  name: "password",
                  placeholder: "Enter your YoptaPassword",
                  autocomplete: "current-password",
                },

                {
                  element: "input",
                  className: ["input", "form-input", "form-input-password"],
                  id: "second-password-input",
                  type: "password",
                  name: "password",
                  placeholder: "Enter your YoptaPassword again",
                  autocomplete: "current-password",
                },

                {
                  element: "div",
                  className: ["form-checkbox"],
                  children: [
                    {
                      element: "input",
                      className: ["checkbox_input",  "form-input-checkbox"],
                      id: "checkbox-sing-up",
                      type: "checkbox",
                      name: "checkbox",
                    },
                    {
                      element: "label",
                      className: ["checkbox_label"],
                      for: "checkbox-sing-up",
                      text: "Accept privarcy policy",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          element: "div",
          className: ["enter"],
          children: [
            {
              element: "button",
              className: ["enter-button"],
              type: "enter",
              text: "Sing up Yopta Store",
            },
          ],
        },

        {
          element: "a",
          className: ["sing-up-link"],
          href: "#modal-sing-in",
          text: "or Sing in if you have YoptaAccount",
        },
      ],
    },
  ],
};
