(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-notice-bar/u-notice-bar"],{"183b":function(e,t,n){"use strict";n.r(t);var u=n("c8c6"),o=n.n(u);for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);t["default"]=o.a},"62bb":function(e,t,n){"use strict";n.r(t);var u=n("6e77"),o=n("183b");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("f67c");var r,a=n("f0c5"),l=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,"14142de8",null,!1,u["a"],r);t["default"]=l.exports},"6e77":function(e,t,n){"use strict";var u={uRowNotice:function(){return n.e("uview-ui/components/u-row-notice/u-row-notice").then(n.bind(null,"965a"))},uColumnNotice:function(){return n.e("uview-ui/components/u-column-notice/u-column-notice").then(n.bind(null,"63ac"))}},o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}))},c8c6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"u-notice-bar",props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},volumeSize:{type:[Number,String],default:34},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},mode:{type:String,default:"horizontal"},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:28},duration:{type:[Number,String],default:2e3},speed:{type:[Number,String],default:160},isCircular:{type:Boolean,default:!0},playState:{type:String,default:"play"},disableTouch:{type:Boolean,default:!0},borderRadius:{type:[Number,String],default:0},padding:{type:[Number,String],default:"18rpx 24rpx"},noListHidden:{type:Boolean,default:!0}},computed:{isShow:function(){return 0!=this.show&&(1!=this.noListHidden||0!=this.list.length)}},methods:{click:function(e){this.$emit("click",e)},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")},end:function(){this.$emit("end")}}};t.default=u},ebf0:function(e,t,n){},f67c:function(e,t,n){"use strict";var u=n("ebf0"),o=n.n(u);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-notice-bar/u-notice-bar-create-component',
    {
        'uview-ui/components/u-notice-bar/u-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("62bb"))
        })
    },
    [['uview-ui/components/u-notice-bar/u-notice-bar-create-component']]
]);
