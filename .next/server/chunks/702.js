"use strict";
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 7702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LE": () => (/* reexport */ components_FooterBanner),
  "yo": () => (/* reexport */ components_HeroBanner),
  "Ar": () => (/* reexport */ components_Layout),
  "xs": () => (/* reexport */ components_Product)
});

// UNUSED EXPORTS: Cart, Footer, Navbar

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/Cart.jsx


const Cart = () => {
  return /*#__PURE__*/React.createElement("div", null, "This is Cart");
};

/* harmony default export */ const components_Cart = ((/* unused pure expression or super */ null && (Cart)));
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./components/Footer.jsx



const Footer = () => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/external_react_default().createElement("p", null, "\xA9 2023 MyWeb-E-Commerce All Right Reserverd"), /*#__PURE__*/external_react_default().createElement("p", {
    className: "icons"
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiFillFacebook, null), /*#__PURE__*/external_react_default().createElement(ai_.AiFillInstagram, null)));
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(6318);
;// CONCATENATED MODULE: ./components/FooterBanner.tsx




const FooterBanner = ({
  footerBanner
}) => {
  const {
    discount,
    largeText1,
    largeText2,
    saleTime,
    midText,
    smallText,
    desc,
    product,
    buttonText,
    image
  } = footerBanner;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-banner-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/external_react_default().createElement("p", null, discount), /*#__PURE__*/external_react_default().createElement("h3", null, largeText1), /*#__PURE__*/external_react_default().createElement("h3", null, largeText2), /*#__PURE__*/external_react_default().createElement("p", null, saleTime)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "right"
  }, /*#__PURE__*/external_react_default().createElement("p", null, smallText), /*#__PURE__*/external_react_default().createElement("h3", null, midText), /*#__PURE__*/external_react_default().createElement("p", null, desc), /*#__PURE__*/external_react_default().createElement((link_default()), {
    href: `/procut/${product}`
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, buttonText))), /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(image).url(),
    className: "footer-banner-image"
  })));
};

/* harmony default export */ const components_FooterBanner = (FooterBanner);
;// CONCATENATED MODULE: ./components/HeroBanner.jsx




const HeroBanner = ({
  heroBanner
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "hero-banner-container"
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("p", {
    className: "beats-solo"
  }, heroBanner.smallText), /*#__PURE__*/external_react_default().createElement("h3", null, heroBanner.midText), /*#__PURE__*/external_react_default().createElement("h1", null, heroBanner.largeText1), /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(heroBanner.image),
    alt: "headphones",
    className: "hero-banner-image"
  }), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement((link_default()), {
    href: `/product/${heroBanner.product}`
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, heroBanner.buttonText), /*#__PURE__*/external_react_default().createElement("div", {
    className: "desc"
  }, /*#__PURE__*/external_react_default().createElement("h5", null, "Description"), /*#__PURE__*/external_react_default().createElement("p", null, heroBanner.desc))))));
};

/* harmony default export */ const components_HeroBanner = (HeroBanner);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Navbar.jsx




const Navbar = () => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/external_react_default().createElement("p", {
    className: "logo"
  }, /*#__PURE__*/external_react_default().createElement((link_default()), {
    href: "/"
  }, "MyWeb E-Commerce")), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "cart-icon",
    onClick: console.log("Hello")
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineShopping, null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "cart-item-qty"
  }, "0")));
};

/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Layout.jsx





const Layout = ({
  children
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "layout"
  }, /*#__PURE__*/external_react_default().createElement((head_default()), null, /*#__PURE__*/external_react_default().createElement("title", null, "Hello-Ani E-Commerce")), /*#__PURE__*/external_react_default().createElement("header", null, /*#__PURE__*/external_react_default().createElement(components_Navbar, null)), /*#__PURE__*/external_react_default().createElement("main", {
    className: "main-container"
  }, children), /*#__PURE__*/external_react_default().createElement("footer", null, /*#__PURE__*/external_react_default().createElement(components_Footer, null)));
};

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./components/Product.tsx




// const Product = ({ product: { image, name, slug, price } }) => {
const Product = ({
  product
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement((link_default()), {
    href: `/product/${product.slug.current}`
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "product-card"
  }, product.image && /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(product.image[0]).url(),
    width: 250,
    height: 250,
    className: "product-image"
  }), /*#__PURE__*/external_react_default().createElement("p", {
    className: "product-name"
  }, product.name), /*#__PURE__*/external_react_default().createElement("p", {
    className: "product-price"
  }, "$", product.price))));
};

/* harmony default export */ const components_Product = (Product);
;// CONCATENATED MODULE: ./components/index.js








/***/ }),

/***/ 6318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: '190vo6ys',
  dataset: 'production',
  apiVersion: '2022-03-10',
  userCdn: true,
  token: "skdxTK5kqwM5AIInDKjaCGgif8235gwlwnU0ZVGVZZBjLzvVnvVCT7pTWhBNcslZRsHIKx5fsF57sbfakdTHEuka1OK557LbJ9GBnmFuz2yuT6FnIlwFduweskxCBIUpB0Hz4vuU8UivzZc9Af85fldsIDWhDNCN6v568kwk78sj7lY3X6eX"
});
const image_builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = source => {
  return image_builder.image(source);
};

/***/ })

};
;