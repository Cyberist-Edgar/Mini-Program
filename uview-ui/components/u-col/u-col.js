(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-col/u-col"],{"0070":function(t,n,e){"use strict";var u,i=function(){var t=this,n=t.$createElement,e=(t._self._c,Number(t.gutter));t.$mp.data=Object.assign({},{$root:{m0:e}})},f=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return f})),e.d(n,"a",(function(){return u}))},"25a1":function(t,n,e){"use strict";e.r(n);var u=e("6b0f"),i=e.n(u);for(var f in u)"default"!==f&&function(t){e.d(n,t,(function(){return u[t]}))}(f);n["default"]=i.a},"644b":function(t,n,e){"use strict";var u=e("f7fc"),i=e.n(u);i.a},"6b0f":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"u-col",props:{span:{type:[Number,String],default:12},offset:{type:[Number,String],default:0},justify:{type:String,default:"start"},align:{type:String,default:"center"},textAlign:{type:String,default:"left"}},inject:["gutter"],computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(){this.$emit("click")}}};n.default=u},"8fa9":function(t,n,e){"use strict";e.r(n);var u=e("0070"),i=e("25a1");for(var f in i)"default"!==f&&function(t){e.d(n,t,(function(){return i[t]}))}(f);e("644b");var r,a=e("f0c5"),s=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=s.exports},f7fc:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-col/u-col-create-component',
    {
        'uview-ui/components/u-col/u-col-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8fa9"))
        })
    },
    [['uview-ui/components/u-col/u-col-create-component']]
]);
