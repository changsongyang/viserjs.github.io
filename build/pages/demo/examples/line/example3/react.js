"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var viser_react_1 = require("viser-react");
var React = require("react");
var DataSet = require('@antv/data-set');
var sourceData = [
    { month: 'Jan', Tokyo: 7.0, London: 3.9 },
    { month: 'Feb', Tokyo: 6.9, London: 4.2 },
    { month: 'Mar', Tokyo: 9.5, London: 5.7 },
    { month: 'Apr', Tokyo: 14.5, London: 8.5 },
    { month: 'May', Tokyo: 18.4, London: 11.9 },
    { month: 'Jun', Tokyo: 21.5, London: 15.2 },
    { month: 'Jul', Tokyo: 25.2, London: 17.0 },
    { month: 'Aug', Tokyo: 26.5, London: 16.6 },
    { month: 'Sep', Tokyo: 23.3, London: 14.2 },
    { month: 'Oct', Tokyo: 18.3, London: 10.3 },
    { month: 'Nov', Tokyo: 13.9, London: 6.6 },
    { month: 'Dec', Tokyo: 9.6, London: 4.8 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['Tokyo', 'London'],
    key: 'city',
    value: 'temperature',
});
var data = dv.rows;
var scale = [{
        dataKey: 'month',
        min: 0,
        max: 1,
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Axis, null),
            React.createElement(viser_react_1.Legend, null),
            React.createElement(viser_react_1.SmoothLine, { position: "month*temperature", color: "city" }),
            React.createElement(viser_react_1.Point, { position: "month*temperature", color: "city", shape: "circle" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map