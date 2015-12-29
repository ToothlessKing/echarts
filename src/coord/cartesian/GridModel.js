// Grid 是在有直角坐标系的时候必须要存在的
// 所以这里也要被 Cartesian2D 依赖
define(function(require) {

    'use strict';

    require('./AxisModel');
    var ComponentModel = require('../../model/Component');

    return ComponentModel.extend({

        type: 'grid',

        dependencies: ['xAxis', 'yAxis'],

        mergeDefaultAndTheme: function (option, ecModel) {
            // Not specify layout with right, width, bottom, height
            // FIXME 通用？
            if (option.right == null || option.width == null || option.left != null) {
                option.left = option.left != null ? option.left : '10%';
                option.right = option.right != null ? option.right : '10%';
            }
            if (option.bottom == null || option.height == null || option.top != null) {
                option.top = option.top != null ? option.top : 60;
                option.bottom = option.bottom != null ? option.bottom : 60;
            }
            ComponentModel.prototype.mergeDefaultAndTheme.call(
                this, option, ecModel
            );
        },

        /**
         * @type {module:echarts/coord/cartesian/Grid}
         */
        coordinateSystem: null,

        defaultOption: {
            show: false,
            zlevel: 0,
            z: 0,
            // left: '10%',
            // top: 60,
            // right: '10%',
            // bottom: 60,
            // If grid size contain label
            containLabel: false,
            // width: {totalWidth} - left - right,
            // height: {totalHeight} - top - bottom,
            backgroundColor: 'rgba(0,0,0,0)',
            borderWidth: 1,
            borderColor: '#ccc'
        }
    });
});