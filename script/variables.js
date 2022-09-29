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
    label: "Log in",
    link: "#",
    id: "log-in",
    dataModal: "sing-in",
  },
];

const MODAL_STRUCTURE_LOGIN = {
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
                  type: "text",
                  name: "email",
                  placeholder: "Enter your E-mail",
                },

                {
                  element: "input",
                  className: ["input", "form-input", "form-input-password"],
                  type: "password",
                  name: "password",
                  placeholder: "Enter your YoptaPassword",
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
          href: "#",
          text: "or Sing up",
        },
      ],
    },
  ],
};
