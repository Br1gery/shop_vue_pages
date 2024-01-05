(function(){"use strict";var t={3497:function(t,e,a){var r=a(9242),o=a(3396);const s={class:"main__main"};function i(t,e,a,r,i,p){const n=(0,o.up)("shopHeader"),c=(0,o.up)("shopPage"),_=(0,o.up)("shopFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(n),(0,o._)("div",s,[(0,o.Wm)(c)]),(0,o.Wm)(_)],64)}var p=a(7139),n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsUlEQVR4nO3Zyw3CMBCE4S0CgmjTe/Cse+PAMVIUxENQDsiSe2DWmq+CjP5LbJuJCL2IOAHYAVwt+Yg3gC+A1TJy9wXAq4+otd5LKQfLRiNYqAQLlWChEixUgoVKsHD9AJJwlSDhM5Toaq239CM6ANsY8ux1LKuIOAJ4jDGf1trZsgqNIRUqQypUhlSoDCmVYaUyrFSGlcqwmqqMuy/9uDyepzfLbNzIrAAu//4WkVn9AMbwjVkB00fyAAAAAElFTkSuQmCC",c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtUlEQVR4nO3YywkCURBE0U5B8Idhzoeqzs2lC5FRUEHNRhkYQxCqxzoZFHfz+kWY2U8AOAA4Z+YmKgNwIvkm+Sg9huSC5DCNefV9v4uq6DGi6DKi6DKi6DKiXEaVy6hyGVUuo2pWZZqmWQK4TmMuUVXbtmsA92nIEBVl5orkbRwB4Nl13Taq8QgVLqHCJVS4hAqXUOESKtIPQBHpEiJyDiVG30+D8Uwdz9WoCsAewLH0CLM/8gH3i43djg+jOAAAAABJRU5ErkJggg==";const _={class:"main"},l={class:"selector__main"},u=(0,o.uE)('<option value="0">Всё</option><option value="1">Электроника</option><option value="2">Ювелирные изделия</option><option value="3">Мужская одежда</option><option value="4">Женская одежда</option>',5),d=[u],g={class:"cards__list"},m={class:"main__pagination"},h=(0,o._)("img",{src:n,alt:""},null,-1),A=[h],y={class:"pagination"},f={style:{"background-color":"rgb(142, 147, 196)"}},w=(0,o._)("img",{src:c,alt:""},null,-1),v=[w],C={class:"absoluten"},k={class:"shop_cart"},S={key:0,class:"shop_cart__main"},b={class:"overall"};function O(t,e,a,s,i,n){const c=(0,o.up)("productCard"),u=(0,o.up)("productPage"),h=(0,o.up)("productInCart");return(0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("div",null,[(0,o._)("div",l,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.selectored=t),onChange:e[1]||(e[1]=()=>{0==i.selectored?(i.page=0,i.url="https://fakestoreapi.com/products"):(i.page=0,i.url=`https://fakestoreapi.com/products/category/${i.categories[i.selectored]}`),n.getter()})},d,544),[[r.bM,i.selectored]])]),(0,o._)("div",g,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(10,(t=>(0,o.Wm)(c,{key:t,prop_name:i.name[t-1],prop_category:i.category[t-1],prop_desc:i.desc[t-1],prop_image:i.image[t-1],prop_price:i.price[t-1],prop_rate:i.rate[t-1],prop_rate_count:i.rate_count[t-1],onAboutOpen:e[2]||(e[2]=()=>{i.displayed=1}),onClick:()=>{i.name2=i.name[t-1],i.desc2=i.desc[t-1],i.price2=i.price[t-1],i.category2=i.category[t-1],i.image2=i.image[t-1],i.rate2=i.rate[t-1],i.rate_count2=i.rate_count[t-1]}},null,8,["prop_name","prop_category","prop_desc","prop_image","prop_price","prop_rate","prop_rate_count","onClick"]))),64))]),(0,o._)("div",m,[i.page==i.pages[0]?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"prev",onClick:e[3]||(e[3]=()=>{i.page--,n.getter()})},A)):(0,o.kq)("",!0),(0,o._)("div",y,[i.page-2>=0?((0,o.wg)(),(0,o.iD)("p",{key:0,onClick:e[4]||(e[4]=()=>{i.page-=2,n.getter()})},(0,p.zw)(i.page-1),1)):(0,o.kq)("",!0),i.page-1>=0?((0,o.wg)(),(0,o.iD)("p",{key:1,onClick:e[5]||(e[5]=()=>{i.page--,n.getter()})},(0,p.zw)(i.page),1)):(0,o.kq)("",!0),(0,o._)("p",f,(0,p.zw)(i.page+1),1),i.page+1<i.pages.length?((0,o.wg)(),(0,o.iD)("p",{key:2,onClick:e[6]||(e[6]=()=>{i.page++,n.getter()})},(0,p.zw)(i.page+2),1)):(0,o.kq)("",!0),i.page+2<i.pages.length?((0,o.wg)(),(0,o.iD)("p",{key:3,onClick:e[7]||(e[7]=()=>{i.page+=2,n.getter()})},(0,p.zw)(i.page+3),1)):(0,o.kq)("",!0)]),i.page!=i.pages.length-1?((0,o.wg)(),(0,o.iD)("div",{key:1,class:"next",onClick:e[8]||(e[8]=()=>{i.page++,n.getter()})},v)):(0,o.kq)("",!0)])]),(0,o._)("div",C,[1==i.displayed?((0,o.wg)(),(0,o.j4)(u,{key:0,class:"productPage",prop_name2:i.name2,prop_desc2:i.desc2,prop_price2:i.price2,prop_category2:i.category2,prop_image2:i.image2,prop_rate2:i.rate2,prop_rate_count2:i.rate_count2,prop_display2:i.displayed,onAdding:n.AddedToCart,onDisplaying:e[9]||(e[9]=()=>{i.displayed=0})},null,8,["prop_name2","prop_desc2","prop_price2","prop_category2","prop_image2","prop_rate2","prop_rate_count2","prop_display2","onAdding"])):(0,o.kq)("",!0)]),(0,o._)("div",k,[(0,o._)("button",{class:"cart_btn",onClick:e[10]||(e[10]=()=>{0==i.display_cart?i.display_cart++:i.display_cart--})},"Корзина"),1==i.display_cart?((0,o.wg)(),(0,o.iD)("div",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.cart_amounts_parsed.length,(t=>((0,o.wg)(),(0,o.j4)(h,{key:t,prop_amount3:i.cart_amounts_parsed[t-1],prop_image3:i.cart_images_parsed[t-1],prop_name3:i.cart_names_parsed[t-1],prop_price3:i.cart_prices_parsed[t-1],prop_index3:t-1,onDeleting:n.deletingProd,onMounted1:n.summ_itog,onUnmounted1:n.summ_itog_after_del},null,8,["prop_amount3","prop_image3","prop_name3","prop_price3","prop_index3","onDeleting","onMounted1","onUnmounted1"])))),128)),(0,o._)("div",b,[(0,o._)("p",null,"Итоговая цена: "+(0,p.zw)(i.sum)+" ₽",1)])])):(0,o.kq)("",!0)])])}a(560);const D={key:0,class:"card__main"},x=["src"],I={class:"card__main__content"},N={class:"icons"},z={class:"rating"},J=(0,o._)("div",{class:"rating__white"},null,-1);function q(t,e,a,r,s,i){return a.prop_name?((0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("img",{src:a.prop_image,alt:"",class:"img__main"},null,8,x),(0,o._)("div",I,[(0,o._)("h4",null,(0,p.zw)(a.prop_name),1),(0,o._)("p",null,"Цена: "+(0,p.zw)(Math.ceil(91*a.prop_price))+" ₽",1),(0,o._)("div",N,[(0,o._)("p",null,"Рейтинг: "+(0,p.zw)(a.prop_rate),1),(0,o._)("div",z,[(0,o._)("div",{class:"rating__yellow",style:(0,p.j5)({width:18*a.prop_rate+"px"})},null,4),J]),(0,o._)("button",{class:"about_btn",onClick:e[0]||(e[0]=(...t)=>i.AboutOpen&&i.AboutOpen(...t))},"Подробнее")])])])):(0,o.kq)("",!0)}var U={props:["prop_name","prop_desc","prop_price","prop_category","prop_image","prop_rate","prop_rate_count"],data(){return{}},mounted(){},methods:{AboutOpen(){this.$emit("aboutOpen")}}},j=a(89);const E=(0,j.Z)(U,[["render",q]]);var P=E;const M=(0,o._)("div",{class:"darkness"},null,-1),V={class:"window1"},Y={class:"main__page__prod"},H=["src"],T={class:"title__main"},K={class:"desc__main"},W={class:"icons__main"},Z={class:"stars"},B=(0,o._)("div",{class:"star__white"},null,-1),L={class:"buy__zone"},Q={class:"absoluiten_2"};function R(t,e,a,s,i,n){return(0,o.wg)(),(0,o.iD)(o.HY,null,[M,(0,o._)("div",V,[(0,o._)("div",Y,[(0,o._)("img",{src:a.prop_image2,alt:"",class:"main__image"},null,8,H),(0,o._)("div",T,[(0,o._)("h4",null,(0,p.zw)(a.prop_name2),1),(0,o._)("p",null,(0,p.zw)(a.prop_category2),1)]),(0,o._)("div",K,[(0,o._)("p",null,(0,p.zw)(a.prop_desc2),1)]),(0,o._)("div",W,[(0,o._)("div",Z,[(0,o._)("div",{class:"star__yellow",style:(0,p.j5)({width:18*a.prop_rate2+"px"})},null,4),B,(0,o._)("p",null,"рейтинг: "+(0,p.zw)(a.prop_rate2),1)]),(0,o._)("p",null,"Количество оценок: "+(0,p.zw)(a.prop_rate_count2),1)]),(0,o._)("div",L,[(0,o._)("p",null,"Цена: "+(0,p.zw)(Math.ceil(91*a.prop_price2)*i.amount)+" ₽",1),(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=t=>i.amount=t),class:"amount_prod",onChange:e[1]||(e[1]=()=>{0==i.amount&&(i.amount=1)})},null,544),[[r.nr,i.amount]]),(0,o._)("button",{class:"buy",onClick:e[2]||(e[2]=(...t)=>n.addToCart&&n.addToCart(...t))},"В корзину")])]),(0,o._)("div",Q,[(0,o._)("button",{onClick:e[3]||(e[3]=(...t)=>n.ClosePage&&n.ClosePage(...t))},"×")])])],64)}var G={props:["prop_name2","prop_desc2","prop_price2","prop_category2","prop_image2","prop_rate2","prop_rate_count2"],data(){return{amount:1}},methods:{ClosePage(){this.$emit("displaying")},addToCart(){this.$emit("adding",this.prop_image2,this.prop_name2,this.prop_price2,this.amount)}},mounted(){}};const X=(0,j.Z)(G,[["render",R]]);var F=X;const $={class:"main_cart"},tt=["src"],et={class:"main_right_cart"},at={class:"main_right_down_cart"},rt=(0,o._)("div",{class:"empty",style:{width:"100%","min-height":"40px","margin-top":"20px"}},null,-1);function ot(t,e,a,r,s,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",$,[(0,o._)("img",{src:a.prop_image3,alt:"",class:"main_image_cart"},null,8,tt),(0,o._)("div",et,[(0,o._)("h5",null,(0,p.zw)(a.prop_name3),1),(0,o._)("div",at,[(0,o._)("p",null,"Кол-во: "+(0,p.zw)(a.prop_amount3),1),(0,o._)("p",null,"Цена: "+(0,p.zw)(Math.ceil(91*a.prop_price3*a.prop_amount3))+" ₽",1)]),(0,o._)("button",{onClick:e[0]||(e[0]=(...t)=>i.deleteProd&&i.deleteProd(...t)),class:"delete___btn"},"Удалить")])]),rt],64)}var st={props:["prop_image3","prop_price3","prop_amount3","prop_name3","prop_index3"],mounted(){this.$emit("mounted1",this.prop_index3)},beforeUnmount(){this.$emit("unmounted1")},methods:{deleteProd(){this.$emit("deleting",this.prop_index3)}}};const it=(0,j.Z)(st,[["render",ot]]);var pt=it,nt={name:"prodPage",components:{productCard:P,productPage:F,productInCart:pt},data(){return{display_cart:0,i:0,index:0,index_carts:0,page:0,selectored:0,categories:["","electronics","jewelery","men's clothing","women's clothing"],name:[],desc:[],price:[],category:[],image:[],rate:[],rate_count:[],pages:[],amount_of_prod:0,amount_of_prod2:0,url:"https://fakestoreapi.com/products",name2:0,desc2:0,price2:0,category2:0,image2:0,rate2:0,rate_count2:0,pages2:0,displayed:0,cart_images:[],cart_names:[],cart_prices:[],cart_amounts:[],cart_images_parsed:[],cart_names_parsed:[],cart_prices_parsed:[],cart_amounts_parsed:[],deleted_price:0,deleted_amount:0,sum:0}},methods:{getter(){this.name=[],this.desc=[],this.price=[],this.category=[],this.image=[],this.rate=[],this.rate_count=[],this.pages=[],fetch(this.url).then((t=>t.json())).then((t=>{t.length%10==0?(this.amount_of_prod=10*this.page,this.amount_of_prod2=10*(this.page+1)):(t.length<=10?(this.amount_of_prod2=t.length,this.amount_of_prod=0):(this.amount_of_prod2=this.amount_of_prod+10,this.amount_of_prod=t.length%10),console.log(this.amount_of_prod),console.log(this.amount_of_prod2));for(let e=this.amount_of_prod;e<this.amount_of_prod2;e++)this.name.push(t[e].title),this.desc.push(t[e].description),this.price.push(t[e].price),this.category.push(t[e].category),this.image.push(t[e].image),this.rate.push(t[e].rating.rate),this.rate_count.push(t[e].rating.count);for(let e=1;e<=Math.ceil(t.length/10);e++)this.pages.push(e);console.log(this.category)}))},AddedToCart(t,e,a,r){this.cart_images.push(t),this.cart_names.push(e),this.cart_prices.push(a),this.cart_amounts.push(r);const o=JSON.stringify(this.cart_images),s=JSON.stringify(this.cart_names),i=JSON.stringify(this.cart_prices),p=JSON.stringify(this.cart_amounts);localStorage.setItem("cart_images",o),localStorage.setItem("cart_names",s),localStorage.setItem("cart_prices",i),localStorage.setItem("cart_amounts",p),this.cart_images_parsed=JSON.parse(localStorage.getItem("cart_images")),this.cart_names_parsed=JSON.parse(localStorage.getItem("cart_names")),this.cart_prices_parsed=JSON.parse(localStorage.getItem("cart_prices")),this.cart_amounts_parsed=JSON.parse(localStorage.getItem("cart_amounts")),this.displayed=0},deletingProd(t){this.deleted_price=this.cart_prices_parsed[t],this.deleted_amount=this.cart_amounts_parsed[t],this.cart_images_parsed.splice(t,1),this.cart_names_parsed.splice(t,1),this.cart_prices_parsed.splice(t,1),this.cart_amounts_parsed.splice(t,1),this.cart_images.splice(t,1),this.cart_names.splice(t,1),this.cart_prices.splice(t,1),this.cart_amounts.splice(t,1);const e=JSON.stringify(this.cart_images_parsed),a=JSON.stringify(this.cart_names_parsed),r=JSON.stringify(this.cart_prices_parsed),o=JSON.stringify(this.cart_amounts_parsed);localStorage.setItem("cart_images",e),localStorage.setItem("cart_names",a),localStorage.setItem("cart_prices",r),localStorage.setItem("cart_amounts",o)},summ_itog(t){this.sum+=Math.ceil(this.cart_prices_parsed[t]*this.cart_amounts_parsed[t]*91)},summ_itog_after_del(){this.sum-=Math.ceil(this.deleted_price*this.deleted_amount*91),this.deleted_price=0,this.deleted_amount=0}},created(){this.getter()},mounted(){this.cart_images_parsed=JSON.parse(localStorage.getItem("cart_images")),this.cart_names_parsed=JSON.parse(localStorage.getItem("cart_names")),this.cart_prices_parsed=JSON.parse(localStorage.getItem("cart_prices")),this.cart_amounts_parsed=JSON.parse(localStorage.getItem("cart_amounts"))},computed:{}};const ct=(0,j.Z)(nt,[["render",O]]);var _t=ct,lt=a.p+"img/Group 1.0847ae51.png";const ut=(0,o._)("div",{class:"header__cont"},[(0,o._)("img",{src:lt,alt:"",class:"logo",style:{width:"80px"}}),(0,o._)("h1",{style:{width:"100%","text-align":"center","margin-right":"80px",color:"white","margin-top":"45px !important"}},"МАГАЗИН")],-1),dt=[ut];function gt(t,e,a,r,s,i){return(0,o.wg)(),(0,o.iD)("header",null,dt)}var mt={};const ht=(0,j.Z)(mt,[["render",gt]]);var At=ht;const yt=(0,o._)("div",{class:"footer__cont"},[(0,o._)("img",{src:lt,alt:"",class:"logo",style:{width:"80px"}}),(0,o._)("h1",{style:{width:"100%","text-align":"center",color:"white","margin-top":"45px !important"}},"МАГАЗИН")],-1),ft=[yt];function wt(t,e,a,r,s,i){return(0,o.wg)(),(0,o.iD)("footer",null,ft)}var vt={};const Ct=(0,j.Z)(vt,[["render",wt]]);var kt=Ct,St={name:"App",components:{shopPage:_t,shopHeader:At,shopFooter:kt}};const bt=(0,j.Z)(St,[["render",i]]);var Ot=bt;(0,r.ri)(Ot).mount("#app")}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,s){if(!r){var i=1/0;for(_=0;_<t.length;_++){r=t[_][0],o=t[_][1],s=t[_][2];for(var p=!0,n=0;n<r.length;n++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[n])}))?r.splice(n--,1):(p=!1,s<i&&(i=s));if(p){t.splice(_--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var _=t.length;_>0&&t[_-1][2]>s;_--)t[_]=t[_-1];t[_]=[r,o,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,i=r[0],p=r[1],n=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in p)a.o(p,o)&&(a.m[o]=p[o]);if(n)var _=n(a)}for(e&&e(r);c<i.length;c++)s=i[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(_)},r=self["webpackChunkshop_vue_proj"]=self["webpackChunkshop_vue_proj"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(3497)}));r=a.O(r)})();
//# sourceMappingURL=app.05dd76c5.js.map