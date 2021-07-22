function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"test":"_styles-module__test__3ybTi","background":"_styles-module__background__38Bir","modalWrapper":"_styles-module__modalWrapper__BNWWd","madalWrapper":"_styles-module__madalWrapper__LiItN","modalContent":"_styles-module__modalContent__3bARu","closeModalButton":"_styles-module__closeModalButton__1hzrp"};

var Modal = function Modal(_ref) {
  var showModal = _ref.showModal,
      setShowModal = _ref.setShowModal,
      children = _ref.children;
  var modalRef = React.useRef();

  var closeModal = function closeModal(e) {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  var keyPress = React.useCallback(function (e) {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false);
      console.log('I pressed');
    }
  }, [setShowModal, showModal]);
  React.useEffect(function () {
    document.addEventListener('keydown', keyPress);
    return function () {
      return document.removeEventListener('keydown', keyPress);
    };
  }, [keyPress]);
  return /*#__PURE__*/React__default.createElement("div", null, showModal ? /*#__PURE__*/React__default.createElement("div", {
    className: styles.background,
    ref: modalRef,
    onClick: closeModal
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.modalWrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.modalContent
  }, children), /*#__PURE__*/React__default.createElement("div", {
    className: styles.closeModalButton,
    "aria-label": "Close modal",
    onClick: function onClick() {
      return setShowModal(function (prev) {
        return !prev;
      });
    }
  }, /*#__PURE__*/React__default.createElement("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 128 128",
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React__default.createElement("g", {
    transform: "translate(0.000000,128.000000) scale(0.100000,-0.100000)",
    fill: "#FF0000",
    stroke: "none"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M168 1096 c-43 -40 -78 -79 -78 -87 0 -8 79 -93 175 -189 l176 -176\n-176 -163 c-188 -175 -212 -201 -198 -225 14 -25 137 -133 160 -140 24 -8 21\n-10 251 197 84 76 157 137 162 135 4 -2 86 -72 181 -157 211 -187 210 -186\n241 -171 34 18 117 100 135 134 l15 29 -119 111 c-65 61 -152 143 -193 183\nl-75 72 173 174 c94 95 172 178 172 183 0 19 -157 166 -173 162 -9 -1 -95 -79\n-192 -171 l-175 -169 -177 171 c-97 94 -184 171 -193 171 -8 0 -50 -33 -92\n-74z"
  })))))) : null);
};

exports.Modal = Modal;
//# sourceMappingURL=index.js.map
