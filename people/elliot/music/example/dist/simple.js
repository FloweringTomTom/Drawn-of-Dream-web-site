webpackJsonp([0],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _waveplayer = __webpack_require__(0);\n\nvar _waveplayer2 = _interopRequireDefault(_waveplayer);\n\nvar _lib = __webpack_require__(1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * The WavePlayer instance.\n *\n * @var {WavePlayer}\n */\nvar wavePlayer = void 0;\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    // Create a new waveplayer.js instance\n    wavePlayer = new _waveplayer2.default({\n        container: '#waveform',\n        barWidth: 4,\n        barGap: 1,\n        height: 128\n    });\n\n    var button = document.getElementById('playback-button');\n\n    // Load a track and activate the playback button when finished\n    wavePlayer.load('../audio/extase_1.mp3').then(function () {\n        return button.disabled = false;\n    });\n\n    button.onclick = function () {\n        (0, _lib.toggleClass)(button.firstElementChild.firstElementChild, 'fa-pause', 'fa-play');\n\n        if (wavePlayer.isPlaying()) {\n            wavePlayer.pause();\n        } else {\n            wavePlayer.play();\n        }\n    };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2ltcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXYXZlUGxheWVyIGZyb20gJy4uLy4uL2Rpc3Qvd2F2ZXBsYXllcic7XG5pbXBvcnQgeyB0b2dnbGVDbGFzcyB9IGZyb20gJy4vbGliJztcblxuLyoqXG4gKiBUaGUgV2F2ZVBsYXllciBpbnN0YW5jZS5cbiAqXG4gKiBAdmFyIHtXYXZlUGxheWVyfVxuICovXG5sZXQgd2F2ZVBsYXllcjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyBDcmVhdGUgYSBuZXcgd2F2ZXBsYXllci5qcyBpbnN0YW5jZVxuICAgIHdhdmVQbGF5ZXIgPSBuZXcgV2F2ZVBsYXllcih7XG4gICAgICAgIGNvbnRhaW5lcjogJyN3YXZlZm9ybScsXG4gICAgICAgIGJhcldpZHRoOiA0LFxuICAgICAgICBiYXJHYXA6IDEsXG4gICAgICAgIGhlaWdodDogMTI4XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWJhY2stYnV0dG9uJyk7XG5cbiAgICAvLyBMb2FkIGEgdHJhY2sgYW5kIGFjdGl2YXRlIHRoZSBwbGF5YmFjayBidXR0b24gd2hlbiBmaW5pc2hlZFxuICAgIHdhdmVQbGF5ZXIubG9hZCgnLi4vYXVkaW8vZXh0YXNlXzEubXAzJykudGhlbigoKSA9PiBidXR0b24uZGlzYWJsZWQgPSBmYWxzZSk7XG5cbiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoYnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLCAnZmEtcGF1c2UnLCAnZmEtcGxheScpO1xuXG4gICAgICAgIGlmICh3YXZlUGxheWVyLmlzUGxheWluZygpKSB7XG4gICAgICAgICAgICB3YXZlUGxheWVyLnBhdXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YXZlUGxheWVyLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH07XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2ltcGxlLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })

},[3]);