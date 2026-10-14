(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function lr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Np(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mo={duration:.5,overwrite:!1,delay:0},zh,vn,Ft,Mi=1e8,Rt=1/Mi,vu=Math.PI*2,h_=vu/4,f_=0,Fp=Math.sqrt,d_=Math.cos,p_=Math.sin,pn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Mr=function(e){return typeof e=="number"},Hh=function(e){return typeof e>"u"},ji=function(e){return typeof e=="object"},Wn=function(e){return e!==!1},Gh=function(){return typeof window<"u"},Vo=function(e){return Vt(e)||pn(e)},Op=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,m_=/random\([^)]+\)/g,__=/,\s*/g,Uf=/(?:-?\.?\d|\.)+/gi,Bp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ca=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kp=/[+-]=-?[.\d]+/,g_=/[^,'"\[\]\s]+/gi,v_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,zi,xu,Vh,li={},Yl={},zp,Hp=function(e){return(Yl=ba(e,li))&&Zn},Wh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},So=function(e,t){return!t&&console.warn(e)},Gp=function(e,t){return e&&(li[e]=t)&&Yl&&(Yl[e]=t)||li},yo=function(){return 0},x_={suppressEvents:!0,isStart:!0,kill:!1},Dl={suppressEvents:!0,kill:!1},M_={suppressEvents:!0},Xh={},Gr=[],Mu={},Vp,ti={},bc={},Nf=30,Ll=[],Yh="",qh=function(e){var t=e[0],n,r;if(ji(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ll.length;r--&&!Ll[r].targetTest(t););n=Ll[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new hm(e[r],n)))||e.splice(r,1);return e},ms=function(e){return e._gsap||qh(Si(e))[0]._gsap},Wp=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():Hh(n)&&e.getAttribute&&e.getAttribute(t)||n},Xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},da=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},S_=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ql=function(){var e=Gr.length,t=Gr.slice(0),n,r;for(Mu={},Gr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},$h=function(e){return!!(e._initted||e._startAt||e.add)},Xp=function(e,t,n,r){Gr.length&&!vn&&ql(),e.render(t,n,!!(vn&&t<0&&$h(e))),Gr.length&&!vn&&ql()},Yp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(g_).length<2?t:pn(e)?e.trim():e},qp=function(e){return e},ci=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},y_=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ba=function(e,t){for(var n in t)e[n]=t[n];return e},Ff=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ji(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},$l=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ro=function(e){var t=e.parent||kt,n=e.keyframes?y_(Cn(e.keyframes)):ci;if(Wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},E_=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},$p=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},hc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},qr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_s=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},b_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Su=function(e,t,n,r){return e._startAt&&(vn?e._startAt.revert(Dl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},T_=function i(e){return!e||e._ts&&i(e.parent)},Of=function(e){return e._repeat?Ta(e._tTime,e=e.duration()+e._rDelay)*e:0},Ta=function(e,t){var n=Math.floor(e=Bt(e/t));return e&&n===e?n-1:n},Kl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fc=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},dc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fc(e),n._dirty||_s(n,e)),e},Kp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Kl(e.rawTime(),t),(!t._dur||ko(0,t.totalDuration(),n)-t._tTime>Rt)&&t.render(n,!0)),_s(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Rt}},Vi=function(e,t,n,r){return t.parent&&qr(t),t._start=Bt((Mr(n)?n:n||e!==kt?pi(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$p(e,t,"_first","_last",e._sort?"_start":0),yu(t)||(e._recent=t),r||Kp(e,t),e._ts<0&&dc(e,e._tTime),e},Zp=function(e,t){return(li.ScrollTrigger||Wh("scrollTrigger",t))&&li.ScrollTrigger.create(t,e)},Jp=function(e,t,n,r,s){if(Zh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Vp!==ii.frame)return Gr.push(e),e._lazy=[s,r],1},w_=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},yu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},A_=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&w_(e)&&!(!e._initted&&yu(e))||(e._ts<0||e._dp._ts<0)&&!yu(e))?0:1,o=e._rDelay,l=0,c,f,d;if(o&&e._repeat&&(l=ko(0,e._tDur,t),f=Ta(l,o),e._yoyo&&f&1&&(a=1-a),f!==Ta(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||vn||r||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&Jp(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?Rt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Su(e,t,n,!0),e._onUpdate&&!n&&si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&qr(e,1),!n&&!vn&&(si(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},R_=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},wa=function(e,t,n,r){var s=e._repeat,a=Bt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Bt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&dc(e,e._tTime=e._tDur*o),e.parent&&fc(e),n||_s(e.parent,e),e},Bf=function(e){return e instanceof Vn?_s(e):wa(e,e._dur)},C_={_start:0,endTime:yo,totalDuration:yo},pi=function i(e,t,n){var r=e.labels,s=e._recent||C_,a=e.duration()>=Mi?s.endTime(!1):e._dur,o,l,c;return pn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Cn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},so=function(e,t,n){var r=Mr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;a.immediateRender=Wn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new en(t[0],a,t[s+1])},Qr=function(e,t){return e||e===0?t(e):t},ko=function(e,t,n){return n<e?e:n>t?t:n},wn=function(e,t){return!pn(e)||!(t=v_.exec(e))?"":t[1]},P_=function(e,t,n){return Qr(n,function(r){return ko(e,t,r)})},Eu=[].slice,Qp=function(e,t){return e&&ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ji(e[0]))&&!e.nodeType&&e!==zi},D_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return pn(r)&&!t||Qp(r,1)?(s=n).push.apply(s,Si(r)):n.push(r)})||n},Si=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):pn(e)&&!n&&(xu||!Aa())?Eu.call((t||Vh).querySelectorAll(e),0):Cn(e)?D_(e,n):Qp(e)?Eu.call(e,0):e?[e]:[]},bu=function(e){return e=Si(e)[0]||So("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Si(t,n.querySelectorAll?n:n===e?So("Invalid scope")||Vh.createElement("div"):e)}},jp=function(e){return e.sort(function(){return .5-Math.random()})},em=function(e){if(Vt(e))return e;var t=ji(e)?e:{each:e},n=gs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,f=r,d=r;return pn(r)?f=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(f=r[0],d=r[1]),function(u,h,p){var m=(p||t).length,_=a[m],g,x,E,v,M,T,b,S,A;if(!_){if(A=t.grid==="auto"?0:(t.grid||[1,Mi])[1],!A){for(b=-Mi;b<(b=p[A++].getBoundingClientRect().left)&&A<m;);A<m&&A--}for(_=a[m]=[],g=l?Math.min(A,m)*f-.5:r%A,x=A===Mi?0:l?m*d/A-.5:r/A|0,b=0,S=Mi,T=0;T<m;T++)E=T%A-g,v=x-(T/A|0),_[T]=M=c?Math.abs(c==="y"?v:E):Fp(E*E+v*v),M>b&&(b=M),M<S&&(S=M);r==="random"&&jp(_),_.max=b-S,_.min=S,_.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(A>m?m-1:c?c==="y"?m/A:A:Math.max(A,m/A))||0)*(r==="edges"?-1:1),_.b=m<0?s-m:s,_.u=wn(t.amount||t.each)||0,n=n&&m<0?W_(n):n}return m=(_[u]-_.min)/_.max||0,Bt(_.b+(n?n(m):m)*_.v)+_.u}},Tu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Bt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Mr(n)?0:wn(n))}},tm=function(e,t){var n=Cn(e),r,s;return!n&&ji(e)&&(r=n=e.radius||Mi,e.values?(e=Si(e.values),(s=!Mr(e[0]))&&(r*=r)):e=Tu(e.increment)),Qr(t,n?Vt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Mi,f=0,d=e.length,u,h;d--;)s?(u=e[d].x-o,h=e[d].y-l,u=u*u+h*h):u=Math.abs(e[d]-o),u<c&&(c=u,f=d);return f=!r||c<=r?e[f]:a,s||f===a||Mr(a)?f:f+wn(a)}:Tu(e))},nm=function(e,t,n,r){return Qr(Cn(e)?!t:n===!0?!!(n=0):!r,function(){return Cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},L_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},I_=function(e,t){return function(n){return e(parseFloat(n))+(t||wn(n))}},U_=function(e,t,n){return rm(e,t,0,1,n)},im=function(e,t,n){return Qr(n,function(r){return e[~~t(r)]})},N_=function i(e,t,n){var r=t-e;return Cn(e)?im(e,i(0,e.length),t):Qr(n,function(s){return(r+(s-e)%r)%r+e})},F_=function i(e,t,n){var r=t-e,s=r*2;return Cn(e)?im(e,i(0,e.length-1),t):Qr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Eo=function(e){return e.replace(m_,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(__);return nm(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},rm=function(e,t,n,r,s){var a=t-e,o=r-n;return Qr(s,function(l){return n+((l-e)/a*o||0)})},O_=function i(e,t,n,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=pn(e),o={},l,c,f,d,u;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Cn(e)&&!Cn(t)){for(f=[],d=e.length,u=d-2,c=1;c<d;c++)f.push(i(e[c-1],e[c]));d--,s=function(p){p*=d;var m=Math.min(u,~~p);return f[m](p-m)},n=t}else r||(e=ba(Cn(e)?[]:{},e));if(!f){for(l in t)Kh.call(o,e,l,"get",t[l]);s=function(p){return jh(p,o)||(a?e.p:e)}}}return Qr(n,s)},kf=function(e,t,n){var r=e.labels,s=Mi,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},si=function(e,t,n){var r=e.vars,s=r[t],a=Ft,o=e._ctx,l,c,f;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Gr.length&&ql(),o&&(Ft=o),f=l?s.apply(c,l):s.call(c),Ft=a,f},$a=function(e){return qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vn),e.progress()<1&&si(e,"onInterrupt"),e},ua,sm=[],am=function(e){if(e)if(e=!e.name&&e.default||e,Gh()||e.headless){var t=e.name,n=Vt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:yo,render:jh,add:Kh,kill:eg,modifier:j_,rawVars:0},a={targetTest:0,get:0,getSetter:Qh,aliases:{},register:0};if(Aa(),e!==r){if(ti[t])return;ci(r,ci($l(e,s),a)),ba(r.prototype,ba(s,$l(e,a))),ti[r.prop=t]=r,e.targetTest&&(Ll.push(r),Xh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gp(t,r),e.register&&e.register(Zn,r,Yn)}else sm.push(e)},At=255,Ka={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Tc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},om=function(e,t,n){var r=e?Mr(e)?[e>>16,e>>8&At,e&At]:0:Ka.black,s,a,o,l,c,f,d,u,h,p;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ka[e])r=Ka[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&At,r&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(r=p=e.match(Uf),!t)l=+r[0]%360/360,c=+r[1]/100,f=+r[2]/100,a=f<=.5?f*(c+1):f+c-f*c,s=f*2-a,r.length>3&&(r[3]*=1),r[0]=Tc(l+1/3,s,a),r[1]=Tc(l,s,a),r[2]=Tc(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Bp),n&&r.length<4&&(r[3]=1),r}else r=e.match(Uf)||Ka.transparent;r=r.map(Number)}return t&&!p&&(s=r[0]/At,a=r[1]/At,o=r[2]/At,d=Math.max(s,a,o),u=Math.min(s,a,o),f=(d+u)/2,d===u?l=c=0:(h=d-u,c=f>.5?h/(2-d-u):h/(d+u),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(f*100+.5)),n&&r.length<4&&(r[3]=1),r},lm=function(e){var t=[],n=[],r=-1;return e.split(Vr).forEach(function(s){var a=s.match(ca)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},zf=function(e,t,n){var r="",s=(e+r).match(Vr),a=t?"hsla(":"rgba(",o=0,l,c,f,d;if(!s)return e;if(s=s.map(function(u){return(u=om(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(f=lm(e),l=n.c,l.join(r)!==f.c.join(r)))for(c=e.replace(Vr,"1").split(ca),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(f.length?f:s.length?s:n).shift());if(!c)for(c=e.split(Vr),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},Vr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ka)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),B_=/hsl[a]?\(/,cm=function(e){var t=e.join(" "),n;if(Vr.lastIndex=0,Vr.test(t))return n=B_.test(t),e[1]=zf(e[1],n),e[0]=zf(e[0],n,lm(e[1])),!0},bo,ii=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,f,d,u,h,p=function m(_){var g=i()-r,x=_===!0,E,v,M,T;if((g>e||g<0)&&(n+=g-t),r+=g,M=r-n,E=M-a,(E>0||x)&&(T=++d.frame,u=M-d.time*1e3,d.time=M=M/1e3,a+=E+(E>=s?4:s-E),v=1),x||(l=c(m)),v)for(h=0;h<o.length;h++)o[h](M,u,T,_)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(_){return u/(1e3/(_||60))},wake:function(){zp&&(!xu&&Gh()&&(zi=xu=window,Vh=zi.document||{},li.gsap=Zn,(zi.gsapVersions||(zi.gsapVersions=[])).push(Zn.version),Hp(Yl||zi.GreenSockGlobals||!zi.gsap&&zi||{}),sm.forEach(am)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=f||function(_){return setTimeout(_,a-d.time*1e3+1|0)},bo=1,p(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(l),bo=0,c=yo},lagSmoothing:function(_,g){e=_||1/0,t=Math.min(g||33,e)},fps:function(_){s=1e3/(_||240),a=d.time*1e3+s},add:function(_,g,x){var E=g?function(v,M,T,b){_(v,M,T,b),d.remove(E)}:_;return d.remove(_),o[x?"unshift":"push"](E),Aa(),E},remove:function(_,g){~(g=o.indexOf(_))&&o.splice(g,1)&&h>=g&&h--},_listeners:o},d})(),Aa=function(){return!bo&&ii.wake()},ut={},k_=/^[\d.\-M][\d.\-,\s]/,z_=/["']/g,H_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(z_,"").trim():+c,r=l.substr(o+1).trim();return t},G_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},V_=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[H_(t[1])]:G_(e).split(",").map(Yp)):ut._CE&&k_.test(e)?ut._CE("",e):n},W_=function(e){return function(t){return 1-e(1-t)}},gs=function(e,t){return e&&(Vt(e)?e:ut[e]||V_(e))||t},Ds=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Xn(e,function(o){ut[o]=li[o]=s,ut[a=o.toLowerCase()]=n;for(var l in s)ut[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[o+"."+l]=s[l]}),s},um=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/vu*(Math.asin(1/r)||0),o=function(f){return f===1?1:r*Math.pow(2,-10*f)*p_((f-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:um(o);return s=vu/s,l.config=function(c,f){return i(e,c,f)},l},Ac=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:um(n);return r.config=function(s){return i(e,s)},r};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ds(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Ds("Elastic",wc("in"),wc("out"),wc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Ds("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ds("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Ds("Circ",function(i){return-(Fp(1-i*i)-1)});Ds("Sine",function(i){return i===1?1:-d_(i*h_)+1});Ds("Back",Ac("in"),Ac("out"),Ac());ut.SteppedEase=ut.steps=li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-Rt;return function(o){return((r*ko(0,a,o)|0)+s)*n}}};Mo.ease=ut["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Yh+=i+","+i+"Params,"});var hm=function(e,t){this.id=f_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Wp,this.set=t?t.getSetter:Qh},To=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,wa(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),bo||ii.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,wa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Aa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dc(this,n),!s._dp||s.parent||Kp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Rt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Of(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Of(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ta(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Kl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Rt?0:this._rts,this.totalTime(ko(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),fc(this),b_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Aa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Bt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Vi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=M_);var r=vn;return vn=n,$h(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Bf(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(pi(this,n),Wn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Wn(r)),this._dur||(this._zTime=-Rt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Rt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=Vt(n)?n:qp,l=function(){var f=r.then;r.then=null,s&&s(),Vt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=f),a(o),r.then=f};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){$a(this)},i})();ci(To.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var Vn=(function(i){Np(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Wn(n.sortChildren),kt&&Vi(n.parent||kt,lr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Zp(lr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return so(0,arguments,this),this},t.from=function(r,s,a){return so(1,arguments,this),this},t.fromTo=function(r,s,a,o){return so(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,ro(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(r,s,pi(this,a),1),this},t.call=function(r,s,a){return Vi(this,en.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,f){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=f,a.parent=this,new en(r,a,pi(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,f){return a.runBackwards=1,ro(a).immediateRender=Wn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,f)},t.staggerFromTo=function(r,s,a,o,l,c,f,d){return o.startAt=a,ro(o).immediateRender=Wn(o.immediateRender),this.staggerTo(r,s,o,l,c,f,d)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,f=r<=0?0:Bt(r),d=this._zTime<0!=r<0&&(this._initted||!c),u,h,p,m,_,g,x,E,v,M,T,b;if(this!==kt&&f>l&&r>=0&&(f=l),f!==this._tTime||a||d){if(o!==this._time&&c&&(f+=this._time-o,r+=this._time-o),u=f,v=this._start,E=this._ts,g=!E,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,a);if(u=Bt(f%_),f===l?(m=this._repeat,u=c):(M=Bt(f/_),m=~~M,m&&m===M&&(u=c,m--),u>c&&(u=c)),M=Ta(this._tTime,_),!o&&this._tTime&&M!==m&&this._tTime-M*_-this._dur<=0&&(M=m),T&&m&1&&(u=c-u,b=1),m!==M&&!this._lock){var S=T&&M&1,A=S===(T&&m&1);if(m<M&&(S=!S),o=S?0:f%c?c:f,this._lock=1,this.render(o||(b?0:Bt(m*_)),s,!c)._lock=0,this._tTime=f,!s&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,M=m),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,A&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=R_(this,Bt(o),Bt(u)),x&&(f-=u-(u=x._start))),this._tTime=f,this._time=u,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&f&&c&&!s&&!M&&(si(this,"onStart"),this._tTime!==f))return this;if(u>=o&&r>=0)for(h=this._first;h;){if(p=h._next,(h._act||u>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(u-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(u-h._start)*h._ts,s,a),u!==this._time||!this._ts&&!g){x=0,p&&(f+=this._zTime=-Rt);break}}h=p}else{h=this._last;for(var R=r<0?r:u;h;){if(p=h._prev,(h._act||R<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,s,a||vn&&$h(h)),u!==this._time||!this._ts&&!g){x=0,p&&(f+=this._zTime=R?-Rt:Rt);break}}h=p}}if(x&&!s&&(this.pause(),x.render(u>=o?0:-Rt)._zTime=u>=o?1:-1,this._ts))return this._start=v,fc(this),this.render(r,s,a);this._onUpdate&&!s&&si(this,"onUpdate",!0),(f===l&&this._tTime>=this.totalDuration()||!f&&o)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(f===l&&this._ts>0||!f&&this._ts<0)&&qr(this,1),!s&&!(r<0&&!o)&&(f||o||!l)&&(si(this,f===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Mr(s)||(s=pi(this,s,r)),!(r instanceof To)){if(Cn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(pn(r))return this.addLabel(r,s);if(Vt(r))r=en.delayedCall(0,r);else return this}return this!==r?Vi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Mi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof en?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return pn(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&hc(this,r),r===this._recent&&(this._recent=this._last),_s(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(ii.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=pi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=en.delayedCall(0,s||yo,a);return o.data="isPause",this._hasPause=1,Vi(this,o,pi(this,r))},t.removePause=function(r){var s=this._first;for(r=pi(this,r);s;)s._start===r&&s.data==="isPause"&&qr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Or!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Si(r),l=this._first,c=Mr(s),f;l;)l instanceof en?S_(l._targets,o)&&(c?(!Or||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(f=l.getTweensOf(o,s)).length&&a.push.apply(a,f),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=pi(a,r),l=s,c=l.startAt,f=l.onStart,d=l.onStartParams,u=l.immediateRender,h,p=en.to(a,ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Rt,onStart:function(){if(a.pause(),!h){var _=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==_&&wa(p,_,0,1).render(p._time,!0,!0),h=1}f&&f.apply(p,d||[])}},s));return u?p.render(0):p},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,ci({startAt:{time:pi(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),kf(this,pi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),kf(this,pi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Bt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return _s(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),_s(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Mi,c,f,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),f=o._start,f>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vi(a,o,f-o._delay,1)._lock=0):l=f,f<0&&o._ts&&(s-=f,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Bt(f/a._ts),a._time-=f,a._tTime-=f),a.shiftChildren(-f,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;wa(a,a===kt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(kt._ts&&(Xp(kt,Kl(r,kt)),Vp=ii.frame),ii.frame>=Nf){Nf+=oi.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&oi.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},e})(To);ci(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var X_=function(e,t,n,r,s,a,o){var l=new Yn(this._pt,e,t,0,1,gm,null,s),c=0,f=0,d,u,h,p,m,_,g,x;for(l.b=n,l.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=Eo(r)),a&&(x=[n,r],a(x,e,t),n=x[0],r=x[1]),u=n.match(Ec)||[];d=Ec.exec(r);)p=d[0],m=r.substring(c,d.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),p!==u[f++]&&(_=parseFloat(u[f-1])||0,l._pt={_next:l._pt,p:m||f===1?m:",",s:_,c:p.charAt(1)==="="?da(_,p)-_:parseFloat(p)-_,m:h&&h<4?Math.round:0},c=Ec.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(kp.test(r)||g)&&(l.e=0),this._pt=l,l},Kh=function(e,t,n,r,s,a,o,l,c,f){Vt(r)&&(r=r(s||0,e,a));var d=e[t],u=n!=="get"?n:Vt(d)?c?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Vt(d)?c?Z_:mm:Jh,p;if(pn(r)&&(~r.indexOf("random(")&&(r=Eo(r)),r.charAt(1)==="="&&(p=da(u,r)+(wn(u)||0),(p||p===0)&&(r=p))),!f||u!==r||wu)return!isNaN(u*r)&&r!==""?(p=new Yn(this._pt,e,t,+u||0,r-(u||0),typeof d=="boolean"?Q_:_m,0,h),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!d&&!(t in e)&&Wh(t,r),X_.call(this,e,t,u,r,h,l||oi.stringFilter,c))},Y_=function(e,t,n,r,s){if(Vt(e)&&(e=ao(e,s,t,n,r)),!ji(e)||e.style&&e.nodeType||Cn(e)||Op(e))return pn(e)?ao(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=ao(e[o],s,t,n,r);return a},fm=function(e,t,n,r,s,a){var o,l,c,f;if(ti[e]&&(o=new ti[e]).init(s,o.rawVars?t[e]:Y_(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Yn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ua))for(c=n._ptLookup[n._targets.indexOf(s)],f=o._props.length;f--;)c[o._props[f]]=l;return o},Or,wu,Zh=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,f=r.runBackwards,d=r.yoyoEase,u=r.keyframes,h=r.autoRevert,p=e._dur,m=e._startAt,_=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:_,E=e._overwrite==="auto"&&!zh,v=e.timeline,M=r.easeReverse||d,T,b,S,A,R,I,D,O,L,F,Y,k,J;if(v&&(!u||!s)&&(s="none"),e._ease=gs(s,Mo.ease),e._rEase=M&&(gs(M)||e._ease),e._from=!v&&!!r.runBackwards,e._from&&(e.ratio=1),!v||u&&!r.stagger){if(O=_[0]?ms(_[0]).harness:0,k=O&&r[O.prop],T=$l(r,Xh),m&&(m._zTime<0&&m.progress(1),t<0&&f&&o&&!h?m.render(-1,!0):m.revert(f&&p?Dl:x_),m._lazy=0),a){if(qr(e._startAt=en.set(_,ci({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!m&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return si(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn||!o&&!h)&&e._startAt.revert(Dl),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!m){if(t&&(o=!1),S=ci({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Wn(l),immediateRender:o,stagger:0,parent:g},T),k&&(S[O.prop]=k),qr(e._startAt=en.set(_,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn?e._startAt.revert(Dl):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Wn(l)||l&&!p,b=0;b<_.length;b++){if(R=_[b],D=R._gsap||qh(_)[b]._gsap,e._ptLookup[b]=F={},Mu[D.id]&&Gr.length&&ql(),Y=x===_?b:x.indexOf(R),O&&(L=new O).init(R,k||T,e,Y,x)!==!1&&(e._pt=A=new Yn(e._pt,R,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(H){F[H]=A}),L.priority&&(I=1)),!O||k)for(S in T)ti[S]&&(L=fm(S,T,e,Y,R,x))?L.priority&&(I=1):F[S]=A=Kh.call(e,R,S,"get",T[S],Y,x,0,r.stringFilter);e._op&&e._op[b]&&e.kill(R,e._op[b]),E&&e._pt&&(Or=e,kt.killTweensOf(R,F,e.globalTime(t)),J=!e.parent,Or=0),e._pt&&l&&(Mu[D.id]=1)}I&&vm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,u&&t<=0&&v.render(Mi,!0,!0)},q_=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],f,d,u,h;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(f=u[h][t],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==t&&f.fp!==t;)f=f._next;if(!f)return wu=1,e.vars[t]="+=0",Zh(e,o),wu=0,l?So(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(f)}for(h=c.length;h--;)d=c[h],f=d._pt||d,f.s=(r||r===0)&&!s?r:f.s+(r||0)+a*f.c,f.c=n-f.s,d.e&&(d.e=Yt(n)+wn(d.e)),d.b&&(d.b=f.s+wn(d.b))},$_=function(e,t){var n=e[0]?ms(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=ba({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},K_=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Cn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ao=function(e,t,n,r,s){return Vt(e)?e.call(t,n,r,s):pn(e)&&~e.indexOf("random(")?Eo(e):e},dm=Yh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",pm={};Xn(dm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return pm[i]=1});var en=(function(i){Np(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:ro(r))||this;var l=o.vars,c=l.duration,f=l.delay,d=l.immediateRender,u=l.stagger,h=l.overwrite,p=l.keyframes,m=l.defaults,_=l.scrollTrigger,g=r.parent||kt,x=(Cn(n)||Op(n)?Mr(n[0]):"length"in r)?[n]:Si(n),E,v,M,T,b,S,A,R;if(o._targets=x.length?qh(x):So("GSAP target "+n+" not found. https://gsap.com",!oi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,p||u||Vo(c)||Vo(f)){r=o.vars;var I=r.easeReverse||r.yoyoEase;if(E=o.timeline=new Vn({data:"nested",defaults:m||{},targets:g&&g.data==="nested"?g.vars.targets:x}),E.kill(),E.parent=E._dp=lr(o),E._start=0,u||Vo(c)||Vo(f)){if(T=x.length,A=u&&em(u),ji(u))for(b in u)~dm.indexOf(b)&&(R||(R={}),R[b]=u[b]);for(v=0;v<T;v++)M=$l(r,pm),M.stagger=0,I&&(M.easeReverse=I),R&&ba(M,R),S=x[v],M.duration=+ao(c,lr(o),v,S,x),M.delay=(+ao(f,lr(o),v,S,x)||0)-o._delay,!u&&T===1&&M.delay&&(o._delay=f=M.delay,o._start+=f,M.delay=0),E.to(S,M,A?A(v,S,x):0),E._ease=ut.none;E.duration()?c=f=0:o.timeline=0}else if(p){ro(ci(E.vars.defaults,{ease:"none"})),E._ease=gs(p.ease||r.ease||"none");var D=0,O,L,F;if(Cn(p))p.forEach(function(Y){return E.to(x,Y,">")}),E.duration();else{M={};for(b in p)b==="ease"||b==="easeEach"||K_(b,p[b],M,p.easeEach);for(b in M)for(O=M[b].sort(function(Y,k){return Y.t-k.t}),D=0,v=0;v<O.length;v++)L=O[v],F={ease:L.e,duration:(L.t-(v?O[v-1].t:0))/100*c},F[b]=L.v,E.to(x,F,D),D+=F.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return h===!0&&!zh&&(Or=lr(o),kt.killTweensOf(x),Or=0),Vi(g,lr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!p&&o._start===Bt(g._time)&&Wn(d)&&T_(lr(o))&&g.data!=="nested")&&(o._tTime=-Rt,o.render(Math.max(0,-f)||0)),_&&Zp(lr(o),_),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,f=r<0,d=r>l-Rt&&!f?l:r<Rt?0:r,u,h,p,m,_,g,x,E;if(!c)A_(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f||this._lazy){if(u=d,E=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&f)return this.totalTime(m*100+r,s,a);if(u=Bt(d%m),d===l?(p=this._repeat,u=c):(_=Bt(d/m),p=~~_,p&&p===_?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),_=Ta(this._tTime,m),u===o&&!a&&this._initted&&p===_)return this._tTime=d,this;p!==_&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==m&&this._initted&&(this._lock=a=1,this.render(Bt(m*p),!0).invalidate()._lock=0)}if(!this._initted){if(Jp(this,f?r:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==_))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var v=u<o;if(v!==this._inv){var M=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(v?-1:1)/M:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(u/c);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!_&&(si(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;E&&E.render(r<0?r:E._dur*E._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(f&&Su(this,r,s,a),si(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!s&&this.parent&&si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(f&&!this._onUpdate&&Su(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&qr(this,1),!s&&!(f&&!o)&&(d||o||g)&&(si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){bo||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||Zh(this,c),f=this._ease(c/this._dur),q_(this,r,s,a,o,f,c,l)?this.resetTo(r,s,a,o,1):(dc(this,0),this.parent||$p(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Or&&Or.vars.overwrite!==!0)._first||$a(this),this.parent&&a!==this.timeline.totalDuration()&&wa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Si(r):o,c=this._ptLookup,f=this._pt,d,u,h,p,m,_,g;if((!s||s==="all")&&E_(o,l))return s==="all"&&(this._pt=0),$a(this);for(d=this._op=this._op||[],s!=="all"&&(pn(s)&&(m={},Xn(s,function(x){return m[x]=1}),s=m),s=$_(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){u=c[g],s==="all"?(d[g]=s,p=u,h={}):(h=d[g]=d[g]||{},p=s);for(m in p)_=u&&u[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&hc(this,_,"_pt"),delete u[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&f&&$a(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return so(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return so(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return kt.killTweensOf(r,s,a)},e})(To);ci(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(i){en[i]=function(){var e=new Vn,t=Eu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Jh=function(e,t,n){return e[t]=n},mm=function(e,t,n){return e[t](n)},Z_=function(e,t,n,r){return e[t](r.fp,n)},J_=function(e,t,n){return e.setAttribute(t,n)},Qh=function(e,t){return Vt(e[t])?mm:Hh(e[t])&&e.setAttribute?J_:Jh},_m=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Q_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},gm=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},jh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},j_=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},eg=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?hc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},tg=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},vm=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Yn=(function(){function i(t,n,r,s,a,o,l,c,f){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||_m,this.d=l||this,this.set=c||Jh,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=tg,this.m=n,this.mt=s,this.tween=r},i})();Xn(Yh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Xh[i]=1});li.TweenMax=li.TweenLite=en;li.TimelineLite=li.TimelineMax=Vn;kt=new Vn({sortChildren:!1,defaults:Mo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});oi.stringFilter=cm;var vs=[],Il={},ng=[],Hf=0,ig=0,Rc=function(e){return(Il[e]||ng).map(function(t){return t()})},Au=function(){var e=Date.now(),t=[];e-Hf>2&&(Rc("matchMediaInit"),vs.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=zi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Rc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Hf=e,Rc("matchMedia"))},xm=(function(){function i(t,n){this.selector=n&&bu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ig++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Vt(n)&&(s=r,r=n,n=Vt);var a=this,o=function(){var c=Ft,f=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=bu(s)),Ft=a,d=r.apply(a,arguments),Vt(d)&&a._r.push(d),Ft=c,a.selector=f,a.isReverted=!1,d};return a.last=o,n===Vt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Ft;Ft=null,n(this),Ft=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof en&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(f){return o.splice(o.indexOf(f),1)}));for(o.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,d){return d.g-f.g||-1/0}).forEach(function(f){return f.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof en)&&c.revert&&c.revert(n);s._r.forEach(function(f){return f(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=vs.length;a--;)vs[a].id===this.id&&vs.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),rg=(function(){function i(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ji(n)||(n={matches:n});var a=new xm(0,s||this.scope),o=a.conditions={},l,c,f;Ft&&!a.selector&&(a.selector=Ft.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?f=1:(l=zi.matchMedia(n[c]),l&&(vs.indexOf(a)<0&&vs.push(a),(o[c]=l.matches)&&(f=1),l.addListener?l.addListener(Au):l.addEventListener("change",Au)));return f&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Zl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return am(r)})},timeline:function(e){return new Vn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,r){pn(e)&&(e=Si(e)[0]);var s=ms(e||{}).get,a=n?qp:Yp;return n==="native"&&(n=""),e&&(t?a((ti[t]&&ti[t].get||s)(e,t,n,r)):function(o,l,c){return a((ti[o]&&ti[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Si(e),e.length>1){var r=e.map(function(f){return Zn.quickSetter(f,t,n)}),s=r.length;return function(f){for(var d=s;d--;)r[d](f)}}e=e[0]||{};var a=ti[t],o=ms(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(f){var d=new a;ua._pt=0,d.init(e,n?f+n:f,ua,0,[e]),d.render(1,d),ua._pt&&jh(1,ua)}:o.set(e,l);return a?c:function(f){return c(e,l,n?f+n:f,o,1)}},quickTo:function(e,t,n){var r,s=Zn.to(e,ci((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,f){return s.resetTo(t,l,c,f)};return a.tween=s,a},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gs(e.ease,Mo.ease)),Ff(Mo,e||{})},config:function(e){return Ff(oi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ti[o]&&!li[o]&&So(t+" effect requires "+o+" plugin.")}),bc[t]=function(o,l,c){return n(Si(o),ci(l||{},s),c)},a&&(Vn.prototype[t]=function(o,l,c){return this.add(bc[t](o,ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=gs(t)},parseEase:function(e,t){return arguments.length?gs(e,t):ut},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vn(e),r,s;for(n.smoothChildTiming=Wn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof en&&r.vars.onComplete===r._targets[0]))&&Vi(n,r,r._start-r._delay),r=s;return Vi(kt,n,0),n},context:function(e,t){return e?new xm(e,t):Ft},matchMedia:function(e){return new rg(e)},matchMediaRefresh:function(){return vs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Au()},addEventListener:function(e,t){var n=Il[e]||(Il[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Il[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:N_,wrapYoyo:F_,distribute:em,random:nm,snap:tm,normalize:U_,getUnit:wn,clamp:P_,splitColor:om,toArray:Si,selector:bu,mapRange:rm,pipe:L_,unitize:I_,interpolate:O_,shuffle:jp},install:Hp,effects:bc,ticker:ii,updateRoot:Vn.updateRoot,plugins:ti,globalTimeline:kt,core:{PropTween:Yn,globals:Gp,Tween:en,Timeline:Vn,Animation:To,getCache:ms,_removeLinkedListItem:hc,reverting:function(){return vn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return zh=e}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Zl[i]=en[i]});ii.add(Vn.updateRoot);ua=Zl.to({},{duration:0});var sg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ag=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=sg(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Cc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(pn(s)&&(l={},Xn(s,function(f){return l[f]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ag(o,s)}}}},Zn=Zl.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)vn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cc("roundProps",Tu),Cc("modifiers"),Cc("snap",tm))||Zl;en.version=Vn.version=Zn.version="3.15.0";zp=1;Gh()&&Aa();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;var Gf,Br,pa,ef,hs,Vf,tf,og=function(){return typeof window<"u"},Sr={},os=180/Math.PI,ma=Math.PI/180,Bs=Math.atan2,Wf=1e8,nf=/([A-Z])/g,lg=/(left|right|width|margin|padding|x)/i,cg=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ru=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ug=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fg=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Mm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Sm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},pg=function(e,t,n){return e.style[t]=n},mg=function(e,t,n){return e.style.setProperty(t,n)},_g=function(e,t,n){return e._gsap[t]=n},gg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},vg=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},xg=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},zt="transform",qn=zt+"Origin",Mg=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Sr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=cr(r,o)}):this.tfm[e]=a.x?a[e]:cr(r,e),e===qn&&(this.tfm.zOrigin=a.zOrigin);else return Xi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(zt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(qn,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},ym=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Sg=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(nf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=tf(),(!s||!s.isStart)&&!n[zt]&&(ym(n),r.zOrigin&&n[qn]&&(n[qn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Em=function(e,t){var n={target:e,props:[],revert:Sg,save:Mg};return e._gsap||Zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},bm,Cu=function(e,t){var n=Br.createElementNS?Br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Br.createElement(e);return n&&n.style?n:Br.createElement(e)},ai=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(nf,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ra(t)||t,1)||""},Xf="O,Moz,ms,Ms,Webkit".split(","),Ra=function(e,t,n){var r=t||hs,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Xf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Xf[a]:"")+e},Pu=function(){og()&&window.document&&(Gf=window,Br=Gf.document,pa=Br.documentElement,hs=Cu("div")||{style:{}},Cu("div"),zt=Ra(zt),qn=zt+"Origin",hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bm=!!Ra("perspective"),tf=Zn.core.reverting,ef=1)},Yf=function(e){var t=e.ownerSVGElement,n=Cu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),pa.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),pa.removeChild(n),s},qf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Tm=function(e){var t,n;try{t=e.getBBox()}catch{t=Yf(e),n=1}return t&&(t.width||t.height)||n||(t=Yf(e)),t&&!t.width&&!t.x&&!t.y?{x:+qf(e,["x","cx","x1"])||0,y:+qf(e,["y","cy","y1"])||0,width:0,height:0}:t},wm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Tm(e))},$r=function(e,t){if(t){var n=e.style,r;t in Sr&&t!==qn&&(t=zt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(nf,"-$1").toLowerCase())):n.removeAttribute(t)}},kr=function(e,t,n,r,s,a){var o=new Yn(e._pt,t,n,0,1,a?Sm:Mm);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},$f={deg:1,rad:1,turn:1},yg={grid:1,flex:1},Kr=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=hs.style,l=lg.test(t),c=e.tagName.toLowerCase()==="svg",f=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=r==="px",h=r==="%",p,m,_,g;if(r===a||!s||$f[r]||$f[a])return s;if(a!=="px"&&!u&&(s=i(e,t,n,"px")),g=e.getCTM&&wm(e),(h||a==="%")&&(Sr[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[f],Yt(h?s/p*d:s/100*p);if(o[l?"width":"height"]=d+(u?a:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Br||!m.appendChild)&&(m=Br.body),_=m._gsap,_&&h&&_.width&&l&&_.time===ii.time&&!_.uncache)return Yt(s/_.width*d);if(h&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+r,p=e[f],x?e.style[t]=x:$r(e,t)}else(h||a==="%")&&!yg[ai(m,"display")]&&(o.position=ai(e,"position")),m===e&&(o.position="static"),m.appendChild(hs),p=hs[f],m.removeChild(hs),o.position="absolute";return l&&h&&(_=ms(m),_.time=ii.time,_.width=m[f]),Yt(u?p*s/d:p&&s?d/p*s:0)},cr=function(e,t,n,r){var s;return ef||Pu(),t in Xi&&t!=="transform"&&(t=Xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Sr[t]&&t!=="transform"?(s=Ao(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ql(ai(e,qn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Jl[t]&&Jl[t](e,t,n)||ai(e,t)||Wp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Kr(e,t,s,n)+n:s},Eg=function(e,t,n,r){if(!n||n==="none"){var s=Ra(t,e,1),a=s&&ai(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ai(e,"borderTopColor"))}var o=new Yn(this._pt,e.style,t,0,1,gm),l=0,c=0,f,d,u,h,p,m,_,g,x,E,v,M;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ai(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=ai(e,t)||r,m?e.style[t]=m:$r(e,t)),f=[n,r],cm(f),n=f[0],r=f[1],u=n.match(ca)||[],M=r.match(ca)||[],M.length){for(;d=ca.exec(r);)_=d[0],x=r.substring(l,d.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),_!==(m=u[c++]||"")&&(h=parseFloat(m)||0,v=m.substr((h+"").length),_.charAt(1)==="="&&(_=da(h,_)+v),g=parseFloat(_),E=_.substr((g+"").length),l=ca.lastIndex-E.length,E||(E=E||oi.units[t]||v,l===r.length&&(r+=E,o.e+=E)),v!==E&&(h=Kr(e,t,m,E)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:h,c:g-h,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?Sm:Mm;return kp.test(r)&&(o.e=0),this._pt=o,o},Kf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bg=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Kf[n]||n,t[1]=Kf[r]||r,t.join(" ")},Tg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Sr[o]&&(l=1,o=o==="transformOrigin"?qn:zt),$r(n,o);l&&($r(n,zt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ao(n,1),a.uncache=1,ym(r)))}},Jl={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Yn(e._pt,t,n,0,0,Tg);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},wo=[1,0,0,1,0,0],Am={},Rm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zf=function(e){var t=ai(e,zt);return Rm(t)?wo:t.substr(7).match(Bp).map(Yt)},rf=function(e,t){var n=e._gsap||ms(e),r=e.style,s=Zf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?wo:s):(s===wo&&!e.offsetParent&&e!==pa&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,pa.appendChild(e)),s=Zf(e),l?r.display=l:$r(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):pa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Du=function(e,t,n,r,s,a){var o=e._gsap,l=s||rf(e,!0),c=o.xOrigin||0,f=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,h=l[0],p=l[1],m=l[2],_=l[3],g=l[4],x=l[5],E=t.split(" "),v=parseFloat(E[0])||0,M=parseFloat(E[1])||0,T,b,S,A;n?l!==wo&&(b=h*_-p*m)&&(S=v*(_/b)+M*(-m/b)+(m*x-_*g)/b,A=v*(-p/b)+M*(h/b)-(h*x-p*g)/b,v=S,M=A):(T=Tm(e),v=T.x+(~E[0].indexOf("%")?v/100*T.width:v),M=T.y+(~(E[1]||E[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&o.smooth?(g=v-c,x=M-f,o.xOffset=d+(g*h+x*m)-g,o.yOffset=u+(g*p+x*_)-x):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[qn]="0px 0px",a&&(kr(a,o,"xOrigin",c,v),kr(a,o,"yOrigin",f,M),kr(a,o,"xOffset",d,o.xOffset),kr(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},Ao=function(e,t){var n=e._gsap||new hm(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ai(e,qn)||"0",f,d,u,h,p,m,_,g,x,E,v,M,T,b,S,A,R,I,D,O,L,F,Y,k,J,H,C,j,Se,ye,He,ze;return f=d=u=m=_=g=x=E=v=0,h=p=1,n.svg=!!(e.getCTM&&wm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),b=rf(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Du(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,b)),M=n.xOrigin||0,T=n.yOrigin||0,b!==wo&&(I=b[0],D=b[1],O=b[2],L=b[3],f=F=b[4],d=Y=b[5],b.length===6?(h=Math.sqrt(I*I+D*D),p=Math.sqrt(L*L+O*O),m=I||D?Bs(D,I)*os:0,x=O||L?Bs(O,L)*os+m:0,x&&(p*=Math.abs(Math.cos(x*ma))),n.svg&&(f-=M-(M*I+T*O),d-=T-(M*D+T*L))):(ze=b[6],ye=b[7],C=b[8],j=b[9],Se=b[10],He=b[11],f=b[12],d=b[13],u=b[14],S=Bs(ze,Se),_=S*os,S&&(A=Math.cos(-S),R=Math.sin(-S),k=F*A+C*R,J=Y*A+j*R,H=ze*A+Se*R,C=F*-R+C*A,j=Y*-R+j*A,Se=ze*-R+Se*A,He=ye*-R+He*A,F=k,Y=J,ze=H),S=Bs(-O,Se),g=S*os,S&&(A=Math.cos(-S),R=Math.sin(-S),k=I*A-C*R,J=D*A-j*R,H=O*A-Se*R,He=L*R+He*A,I=k,D=J,O=H),S=Bs(D,I),m=S*os,S&&(A=Math.cos(S),R=Math.sin(S),k=I*A+D*R,J=F*A+Y*R,D=D*A-I*R,Y=Y*A-F*R,I=k,F=J),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,g=180-g),h=Yt(Math.sqrt(I*I+D*D+O*O)),p=Yt(Math.sqrt(Y*Y+ze*ze)),S=Bs(F,Y),x=Math.abs(S)>2e-4?S*os:0,v=He?1/(He<0?-He:He):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Rm(ai(e,zt)),k&&e.setAttribute("transform",k))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Yt(h),n.scaleY=Yt(p),n.rotation=Yt(m)+o,n.rotationX=Yt(_)+o,n.rotationY=Yt(g)+o,n.skewX=x+o,n.skewY=E+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[qn]=Ql(c)),n.xOffset=n.yOffset=0,n.force3D=oi.force3D,n.renderTransform=n.svg?Ag:bm?Cm:wg,n.uncache=0,n},Ql=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pc=function(e,t,n){var r=wn(t);return Yt(parseFloat(t)+parseFloat(Kr(e,"x",n+"px",r)))+r},wg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Cm(e,t)},jr="0deg",Fa="0px",es=") ",Cm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,f=n.rotationY,d=n.rotationX,u=n.skewX,h=n.skewY,p=n.scaleX,m=n.scaleY,_=n.transformPerspective,g=n.force3D,x=n.target,E=n.zOrigin,v="",M=g==="auto"&&e&&e!==1||g===!0;if(E&&(d!==jr||f!==jr)){var T=parseFloat(f)*ma,b=Math.sin(T),S=Math.cos(T),A;T=parseFloat(d)*ma,A=Math.cos(T),a=Pc(x,a,b*A*-E),o=Pc(x,o,-Math.sin(T)*-E),l=Pc(x,l,S*A*-E+E)}_!==Fa&&(v+="perspective("+_+es),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(M||a!==Fa||o!==Fa||l!==Fa)&&(v+=l!==Fa||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+es),c!==jr&&(v+="rotate("+c+es),f!==jr&&(v+="rotateY("+f+es),d!==jr&&(v+="rotateX("+d+es),(u!==jr||h!==jr)&&(v+="skew("+u+", "+h+es),(p!==1||m!==1)&&(v+="scale("+p+", "+m+es),x.style[zt]=v||"translate(0, 0)"},Ag=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,f=n.skewY,d=n.scaleX,u=n.scaleY,h=n.target,p=n.xOrigin,m=n.yOrigin,_=n.xOffset,g=n.yOffset,x=n.forceCSS,E=parseFloat(a),v=parseFloat(o),M,T,b,S,A;l=parseFloat(l),c=parseFloat(c),f=parseFloat(f),f&&(f=parseFloat(f),c+=f,l+=f),l||c?(l*=ma,c*=ma,M=Math.cos(l)*d,T=Math.sin(l)*d,b=Math.sin(l-c)*-u,S=Math.cos(l-c)*u,c&&(f*=ma,A=Math.tan(c-f),A=Math.sqrt(1+A*A),b*=A,S*=A,f&&(A=Math.tan(f),A=Math.sqrt(1+A*A),M*=A,T*=A)),M=Yt(M),T=Yt(T),b=Yt(b),S=Yt(S)):(M=d,S=u,T=b=0),(E&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(E=Kr(h,"x",a,"px"),v=Kr(h,"y",o,"px")),(p||m||_||g)&&(E=Yt(E+p-(p*M+m*b)+_),v=Yt(v+m-(p*T+m*S)+g)),(r||s)&&(A=h.getBBox(),E=Yt(E+r/100*A.width),v=Yt(v+s/100*A.height)),A="matrix("+M+","+T+","+b+","+S+","+E+","+v+")",h.setAttribute("transform",A),x&&(h.style[zt]=A)},Rg=function(e,t,n,r,s){var a=360,o=pn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?os:1),c=l-r,f=r+c+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Wf)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Wf)%a-~~(c/a)*a)),e._pt=u=new Yn(e._pt,t,n,r,c,ug),u.e=f,u.u="deg",e._props.push(n),u},Jf=function(e,t){for(var n in t)e[n]=t[n];return e},Cg=function(e,t,n){var r=Jf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,f,d,u,h,p;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[zt]=t,o=Ao(n,1),$r(n,zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[zt],a[zt]=t,o=Ao(n,1),a[zt]=c);for(l in Sr)c=r[l],f=o[l],c!==f&&s.indexOf(l)<0&&(h=wn(c),p=wn(f),d=h!==p?Kr(n,l,c,p):parseFloat(c),u=parseFloat(f),e._pt=new Yn(e._pt,o,l,d,u-d,Ru),e._pt.u=p||0,e._props.push(l));Jf(o,r)};Xn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});Jl[e>1?"border"+i:i]=function(o,l,c,f,d){var u,h;if(arguments.length<4)return u=a.map(function(p){return cr(o,p,c)}),h=u.join(" "),h.split(u[0]).length===5?u[0]:h;u=(f+"").split(" "),h={},a.forEach(function(p,m){return h[p]=u[m]=u[m]||u[(m-1)/2|0]}),o.init(l,h,d)}});var Pm={name:"css",register:Pu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,f,d,u,h,p,m,_,g,x,E,v,M,T,b,S,A;ef||Pu(),this.styles=this.styles||Em(e),S=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(f=t[m],!(ti[m]&&fm(m,t,n,r,e,s)))){if(h=typeof f,p=Jl[m],h==="function"&&(f=f.call(n,r,e,s),h=typeof f),h==="string"&&~f.indexOf("random(")&&(f=Eo(f)),p)p(this,e,m,f,n)&&(b=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),f+="",Vr.lastIndex=0,Vr.test(c)||(_=wn(c),g=wn(f),g?_!==g&&(c=Kr(e,m,c,g)+g):_&&(f+=_)),this.add(o,"setProperty",c,f,r,s,0,0,m),a.push(m),S.push(m,0,o[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,r,e,s):l[m],pn(c)&&~c.indexOf("random(")&&(c=Eo(c)),wn(c+"")||c==="auto"||(c+=oi.units[m]||wn(cr(e,m))||""),(c+"").charAt(1)==="="&&(c=cr(e,m))):c=cr(e,m),u=parseFloat(c),x=h==="string"&&f.charAt(1)==="="&&f.substr(0,2),x&&(f=f.substr(2)),d=parseFloat(f),m in Xi&&(m==="autoAlpha"&&(u===1&&cr(e,"visibility")==="hidden"&&d&&(u=0),S.push("visibility",0,o.visibility),kr(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=Xi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),E=m in Sr,E){if(this.styles.save(m),A=f,h==="string"&&f.substring(0,6)==="var(--"){if(f=ai(e,f.substring(4,f.indexOf(")"))),f.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=f,f=ai(e,"perspective"),R?e.style.perspective=R:$r(e,"perspective")}d=parseFloat(f)}if(v||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ao(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new Yn(this._pt,o,zt,0,1,M.renderTransform,M,0,-1),v.dep=1),m==="scale")this._pt=new Yn(this._pt,M,"scaleY",M.scaleY,(x?da(M.scaleY,x+d):d)-M.scaleY||0,Ru),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){S.push(qn,0,o[qn]),f=bg(f),M.svg?Du(e,f,0,T,0,this):(g=parseFloat(f.split(" ")[2])||0,g!==M.zOrigin&&kr(this,M,"zOrigin",M.zOrigin,g),kr(this,o,m,Ql(c),Ql(f)));continue}else if(m==="svgOrigin"){Du(e,f,1,T,0,this);continue}else if(m in Am){Rg(this,M,m,u,x?da(u,x+f):f);continue}else if(m==="smoothOrigin"){kr(this,M,"smooth",M.smooth,f);continue}else if(m==="force3D"){M[m]=f;continue}else if(m==="transform"){Cg(this,f,e);continue}}else m in o||(m=Ra(m)||m);if(E||(d||d===0)&&(u||u===0)&&!cg.test(f)&&m in o)_=(c+"").substr((u+"").length),d||(d=0),g=wn(f)||(m in oi.units?oi.units[m]:_),_!==g&&(u=Kr(e,m,c,g)),this._pt=new Yn(this._pt,E?M:o,m,u,(x?da(u,x+d):d)-u,!E&&(g==="px"||m==="zIndex")&&t.autoRound!==!1?dg:Ru),this._pt.u=g||0,E&&A!==f?(this._pt.b=c,this._pt.e=A,this._pt.r=fg):_!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=hg);else if(m in o)Eg.call(this,e,m,c,x?x+f:f);else if(m in e)this.add(e,m,c||e[m],x?x+f:f,r,s);else if(m!=="parseTransform"){Wh(m,f);continue}E||(m in o?S.push(m,0,o[m]):typeof e[m]=="function"?S.push(m,2,e[m]()):S.push(m,1,c||e[m])),a.push(m)}}b&&vm(this)},render:function(e,t){if(t.tween._time||!tf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:cr,aliases:Xi,getSetter:function(e,t,n){var r=Xi[t];return r&&r.indexOf(",")<0&&(t=r),t in Sr&&t!==qn&&(e._gsap.x||cr(e,"x"))?n&&Vf===n?t==="scale"?gg:_g:(Vf=n||{})&&(t==="scale"?vg:xg):e.style&&!Hh(e.style[t])?pg:~t.indexOf("-")?mg:Qh(e,t)},core:{_removeProperty:$r,_getMatrix:rf}};Zn.utils.checkPrefix=Ra;Zn.core.getStyleSaver=Em;(function(i,e,t,n){var r=Xn(i+","+e+","+t,function(s){Sr[s]=1});Xn(e,function(s){oi.units[s]="deg",Am[s]=1}),Xi[r[13]]=i+","+e,Xn(n,function(s){var a=s.split(":");Xi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){oi.units[i]="px"});Zn.registerPlugin(Pm);var et=Zn.registerPlugin(Pm)||Zn;et.core.Tween;function Pg(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Dg(i,e,t){return e&&Pg(i.prototype,e),i}var _n,Ul,ri,zr,Hr,_a,Dm,ls,ga,Lm,fr,Ri,Im,Um=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},Nm=1,ha=[],st=[],Zi=[],oo=Date.now,Lu=function(e,t){return t},Lg=function(){var e=ga.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,st),r.push.apply(r,Zi),st=n,Zi=r,Lu=function(a,o){return t[a](o)}},Wr=function(e,t){return~Zi.indexOf(e)&&Zi[Zi.indexOf(e)+1][t]},lo=function(e){return!!~Lm.indexOf(e)},Un=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},In=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Wo="scrollLeft",Xo="scrollTop",Iu=function(){return fr&&fr.isPressed||st.cache++},jl=function(e,t){var n=function r(s){if(s||s===0){Nm&&(ri.history.scrollRestoration="manual");var a=fr&&fr.isPressed;s=r.v=Math.round(s)||(fr&&fr.iOS?1:0),e(s),r.cacheID=st.cache,a&&Lu("ss",s)}else(t||st.cache!==r.cacheID||Lu("ref"))&&(r.cacheID=st.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},zn={s:Wo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:jl(function(i){return arguments.length?ri.scrollTo(i,an.sc()):ri.pageXOffset||zr[Wo]||Hr[Wo]||_a[Wo]||0})},an={s:Xo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:zn,sc:jl(function(i){return arguments.length?ri.scrollTo(zn.sc(),i):ri.pageYOffset||zr[Xo]||Hr[Xo]||_a[Xo]||0})},Gn=function(e,t){return(t&&t._ctx&&t._ctx.selector||_n.utils.toArray)(e)[0]||(typeof e=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ig=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Zr=function(e,t){var n=t.s,r=t.sc;lo(e)&&(e=zr.scrollingElement||Hr);var s=st.indexOf(e),a=r===an.sc?1:2;!~s&&(s=st.push(e)-1),st[s+a]||Un(e,"scroll",Iu);var o=st[s+a],l=o||(st[s+a]=jl(Wr(e,n),!0)||(lo(e)?r:jl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=_n.getProperty(e,"scrollBehavior")==="smooth"),l},Uu=function(e,t,n){var r=e,s=e,a=oo(),o=a,l=t||50,c=Math.max(500,l*3),f=function(p,m){var _=oo();m||_-a>l?(s=r,r=p,o=a,a=_):n?r+=p:r=s+(p-s)/(_-o)*(a-o)},d=function(){s=r=n?0:r,o=a=0},u=function(p){var m=o,_=s,g=oo();return(p||p===0)&&p!==r&&f(p),a===o||g-o>c?0:(r+(n?_:-_))/((n?g:a)-m)*1e3};return{update:f,reset:d,getVelocity:u}},Oa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Qf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Fm=function(){ga=_n.core.globals().ScrollTrigger,ga&&ga.core&&Lg()},Om=function(e){return _n=e||Um(),!Ul&&_n&&typeof document<"u"&&document.body&&(ri=window,zr=document,Hr=zr.documentElement,_a=zr.body,Lm=[ri,zr,Hr,_a],_n.utils.clamp,Im=_n.core.context||function(){},ls="onpointerenter"in _a?"pointer":"mouse",Dm=qt.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ri=qt.eventTypes=("ontouchstart"in Hr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Hr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Nm=0},500),Ul=1),ga||Fm(),Ul};zn.op=an;st.cache=0;var qt=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Ul||Om(_n)||console.warn("Please gsap.registerPlugin(Observer)"),ga||Fm();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,f=n.preventDefault,d=n.onStop,u=n.onStopDelay,h=n.ignore,p=n.wheelSpeed,m=n.event,_=n.onDragStart,g=n.onDragEnd,x=n.onDrag,E=n.onPress,v=n.onRelease,M=n.onRight,T=n.onLeft,b=n.onUp,S=n.onDown,A=n.onChangeX,R=n.onChangeY,I=n.onChange,D=n.onToggleX,O=n.onToggleY,L=n.onHover,F=n.onHoverEnd,Y=n.onMove,k=n.ignoreCheck,J=n.isNormalizer,H=n.onGestureStart,C=n.onGestureEnd,j=n.onWheel,Se=n.onEnable,ye=n.onDisable,He=n.onClick,ze=n.scrollSpeed,Ve=n.capture,K=n.allowClicks,ee=n.lockAxis,ge=n.onLockAxis;this.target=o=Gn(o)||Hr,this.vars=n,h&&(h=_n.utils.toArray(h)),r=r||1e-9,s=s||0,p=p||1,ze=ze||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ri.getComputedStyle(_a).lineHeight)||22);var Be,me,Fe,ke,De,Xe,Je,G=this,nt=0,yt=0,Ot=n.passive||!f&&n.passive!==!1,qe=Zr(o,zn),_t=Zr(o,an),B=qe(),Nt=_t(),We=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ri[0]==="pointerdown",P=lo(o),y=o.ownerDocument||zr,z=[0,0,0],W=[0,0,0],Z=0,ce=function(){return Z=oo()},ae=function(re,Ue){return(G.event=re)&&h&&Ig(re.target,h)||Ue&&We&&re.pointerType!=="touch"||k&&k(re,Ue)},Q=function(){G._vx.reset(),G._vy.reset(),me.pause(),d&&d(G)},ne=function(){var re=G.deltaX=Qf(z),Ue=G.deltaY=Qf(W),se=Math.abs(re)>=r,Ne=Math.abs(Ue)>=r;I&&(se||Ne)&&I(G,re,Ue,z,W),se&&(M&&G.deltaX>0&&M(G),T&&G.deltaX<0&&T(G),A&&A(G),D&&G.deltaX<0!=nt<0&&D(G),nt=G.deltaX,z[0]=z[1]=z[2]=0),Ne&&(S&&G.deltaY>0&&S(G),b&&G.deltaY<0&&b(G),R&&R(G),O&&G.deltaY<0!=yt<0&&O(G),yt=G.deltaY,W[0]=W[1]=W[2]=0),(ke||Fe)&&(Y&&Y(G),Fe&&(_&&Fe===1&&_(G),x&&x(G),Fe=0),ke=!1),Xe&&!(Xe=!1)&&ge&&ge(G),De&&(j(G),De=!1),Be=0},fe=function(re,Ue,se){z[se]+=re,W[se]+=Ue,G._vx.update(re),G._vy.update(Ue),c?Be||(Be=requestAnimationFrame(ne)):ne()},we=function(re,Ue){ee&&!Je&&(G.axis=Je=Math.abs(re)>Math.abs(Ue)?"x":"y",Xe=!0),Je!=="y"&&(z[2]+=re,G._vx.update(re,!0)),Je!=="x"&&(W[2]+=Ue,G._vy.update(Ue,!0)),c?Be||(Be=requestAnimationFrame(ne)):ne()},de=function(re){if(!ae(re,1)){re=Oa(re,f);var Ue=re.clientX,se=re.clientY,Ne=Ue-G.x,Ae=se-G.y,$e=G.isDragging;G.x=Ue,G.y=se,($e||(Ne||Ae)&&(Math.abs(G.startX-Ue)>=s||Math.abs(G.startY-se)>=s))&&(Fe||(Fe=$e?2:1),$e||(G.isDragging=!0),we(Ne,Ae))}},he=G.onPress=function(oe){ae(oe,1)||oe&&oe.button||(G.axis=Je=null,me.pause(),G.isPressed=!0,oe=Oa(oe),nt=yt=0,G.startX=G.x=oe.clientX,G.startY=G.y=oe.clientY,G._vx.reset(),G._vy.reset(),Un(J?o:y,Ri[1],de,Ot,!0),G.deltaX=G.deltaY=0,E&&E(G))},le=G.onRelease=function(oe){if(!ae(oe,1)){In(J?o:y,Ri[1],de,!0);var re=!isNaN(G.y-G.startY),Ue=G.isDragging,se=Ue&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ne=Oa(oe);!se&&re&&(G._vx.reset(),G._vy.reset(),f&&K&&_n.delayedCall(.08,function(){if(oo()-Z>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(y.createEvent){var Ae=y.createEvent("MouseEvents");Ae.initMouseEvent("click",!0,!0,ri,1,Ne.screenX,Ne.screenY,Ne.clientX,Ne.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(Ae)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,d&&Ue&&!J&&me.restart(!0),Fe&&ne(),g&&Ue&&g(G),v&&v(G,se)}},Le=function(re){return re.touches&&re.touches.length>1&&(G.isGesturing=!0)&&H(re,G.isDragging)},Oe=function(){return(G.isGesturing=!1)||C(G)},U=function(re){if(!ae(re)){var Ue=qe(),se=_t();fe((Ue-B)*ze,(se-Nt)*ze,1),B=Ue,Nt=se,d&&me.restart(!0)}},ue=function(re){if(!ae(re)){re=Oa(re,f),j&&(De=!0);var Ue=(re.deltaMode===1?l:re.deltaMode===2?ri.innerHeight:1)*p;fe(re.deltaX*Ue,re.deltaY*Ue,0),d&&!J&&me.restart(!0)}},te=function(re){if(!ae(re)){var Ue=re.clientX,se=re.clientY,Ne=Ue-G.x,Ae=se-G.y;G.x=Ue,G.y=se,ke=!0,d&&me.restart(!0),(Ne||Ae)&&we(Ne,Ae)}},pe=function(re){G.event=re,L(G)},ve=function(re){G.event=re,F(G)},ie=function(re){return ae(re)||Oa(re,f)&&He(G)};me=G._dc=_n.delayedCall(u||.25,Q).pause(),G.deltaX=G.deltaY=0,G._vx=Uu(0,50,!0),G._vy=Uu(0,50,!0),G.scrollX=qe,G.scrollY=_t,G.isDragging=G.isGesturing=G.isPressed=!1,Im(this),G.enable=function(oe){return G.isEnabled||(Un(P?y:o,"scroll",Iu),a.indexOf("scroll")>=0&&Un(P?y:o,"scroll",U,Ot,Ve),a.indexOf("wheel")>=0&&Un(o,"wheel",ue,Ot,Ve),(a.indexOf("touch")>=0&&Dm||a.indexOf("pointer")>=0)&&(Un(o,Ri[0],he,Ot,Ve),Un(y,Ri[2],le),Un(y,Ri[3],le),K&&Un(o,"click",ce,!0,!0),He&&Un(o,"click",ie),H&&Un(y,"gesturestart",Le),C&&Un(y,"gestureend",Oe),L&&Un(o,ls+"enter",pe),F&&Un(o,ls+"leave",ve),Y&&Un(o,ls+"move",te)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=ke=Fe=!1,G._vx.reset(),G._vy.reset(),B=qe(),Nt=_t(),oe&&oe.type&&he(oe),Se&&Se(G)),G},G.disable=function(){G.isEnabled&&(ha.filter(function(oe){return oe!==G&&lo(oe.target)}).length||In(P?y:o,"scroll",Iu),G.isPressed&&(G._vx.reset(),G._vy.reset(),In(J?o:y,Ri[1],de,!0)),In(P?y:o,"scroll",U,Ve),In(o,"wheel",ue,Ve),In(o,Ri[0],he,Ve),In(y,Ri[2],le),In(y,Ri[3],le),In(o,"click",ce,!0),In(o,"click",ie),In(y,"gesturestart",Le),In(y,"gestureend",Oe),In(o,ls+"enter",pe),In(o,ls+"leave",ve),In(o,ls+"move",te),G.isEnabled=G.isPressed=G.isDragging=!1,ye&&ye(G))},G.kill=G.revert=function(){G.disable();var oe=ha.indexOf(G);oe>=0&&ha.splice(oe,1),fr===G&&(fr=0)},ha.push(G),J&&lo(o)&&(fr=G),G.enable(m)},Dg(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();qt.version="3.15.0";qt.create=function(i){return new qt(i)};qt.register=Om;qt.getAll=function(){return ha.slice()};qt.getById=function(i){return ha.filter(function(e){return e.vars.id===i})[0]};Um()&&_n.registerPlugin(qt);var Te,ia,rt,xt,ni,vt,sf,ec,Ro,co,Za,Yo,bn,pc,Nu,Bn,jf,ed,ra,Bm,Dc,km,On,Fu,zm,Hm,Ir,Ou,af,va,of,uo,Bu,Lc,qo=1,Tn=Date.now,Ic=Tn(),yi=0,Ja=0,td=function(e,t,n){var r=ei(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},nd=function(e,t){return t&&(!ei(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ug=function i(){return Ja&&requestAnimationFrame(i)},id=function(){return pc=1},rd=function(){return pc=0},Hi=function(e){return e},Qa=function(e){return Math.round(e*1e5)/1e5||0},Gm=function(){return typeof window<"u"},Vm=function(){return Te||Gm()&&(Te=window.gsap)&&Te.registerPlugin&&Te},Es=function(e){return!!~sf.indexOf(e)},Wm=function(e){return(e==="Height"?of:rt["inner"+e])||ni["client"+e]||vt["client"+e]},Xm=function(e){return Wr(e,"getBoundingClientRect")||(Es(e)?function(){return kl.width=rt.innerWidth,kl.height=of,kl}:function(){return ur(e)})},Ng=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=Wr(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?Wm(s):e["client"+s])||0}},Fg=function(e,t){return!t||~Zi.indexOf(e)?Xm(e):function(){return kl}},Yi=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=Wr(e,n))?a()-Xm(e)()[s]:Es(e)?(ni[n]||vt[n])-Wm(r):e[n]-e["offset"+r])},$o=function(e,t){for(var n=0;n<ra.length;n+=3)(!t||~t.indexOf(ra[n+1]))&&e(ra[n],ra[n+1],ra[n+2])},ei=function(e){return typeof e=="string"},An=function(e){return typeof e=="function"},ja=function(e){return typeof e=="number"},cs=function(e){return typeof e=="object"},Ba=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ks=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},zs=Math.abs,Ym="left",qm="top",lf="right",cf="bottom",xs="width",Ms="height",ho="Right",fo="Left",po="Top",mo="Bottom",jt="padding",_i="margin",Ca="Width",uf="Height",nn="px",gi=function(e){return rt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Og=function(e){var t=gi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},sd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ur=function(e,t){var n=t&&gi(e)[Nu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},tc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},$m=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},Bg=function(e){return function(t){return Te.utils.snap($m(e),t)}},hf=function(e){var t=Te.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},kg=function(e){return function(t,n){return hf($m(e))(t,n.direction)}},Ko=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},dn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},fn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Zo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},ad={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Jo={toggleActions:"play",anticipatePin:0},nc={top:0,left:0,center:.5,bottom:1,right:1},Nl=function(e,t){if(ei(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in nc?nc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Qo=function(e,t,n,r,s,a,o,l){var c=s.startColor,f=s.endColor,d=s.fontSize,u=s.indent,h=s.fontWeight,p=xt.createElement("div"),m=Es(n)||Wr(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,g=m?vt:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,E=x?c:f,v="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((_||l)&&m?"fixed;":"absolute;"),(_||l||!m)&&(v+=(r===an?lf:cf)+":"+(a+parseFloat(u))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=v,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+r.op.d2],Fl(p,0,r,x),p},Fl=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+Ca]=1,s["border"+o+Ca]=0,s[n.p]=t+"px",Te.set(e,s)},tt=[],ku={},Co,od=function(){return Tn()-yi>34&&(Co||(Co=requestAnimationFrame(mr)))},Hs=function(){(!On||!On.isPressed||On.startX>vt.clientWidth)&&(st.cache++,On?Co||(Co=requestAnimationFrame(mr)):mr(),yi||Ts("scrollStart"),yi=Tn())},Uc=function(){Hm=rt.innerWidth,zm=rt.innerHeight},eo=function(e){st.cache++,(e===!0||!bn&&!km&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!Fu||Hm!==rt.innerWidth||Math.abs(rt.innerHeight-zm)>rt.innerHeight*.25))&&ec.restart(!0)},bs={},zg=[],Km=function i(){return fn(Ze,"scrollEnd",i)||fs(!0)},Ts=function(e){return bs[e]&&bs[e].map(function(t){return t()})||zg},jn=[],Zm=function(e){for(var t=0;t<jn.length;t+=5)(!e||jn[t+4]&&jn[t+4].query===e)&&(jn[t].style.cssText=jn[t+1],jn[t].getBBox&&jn[t].setAttribute("transform",jn[t+2]||""),jn[t+3].uncache=1)},Jm=function(){return st.forEach(function(e){return An(e)&&++e.cacheID&&(e.rec=e())})},ff=function(e,t){var n;for(Bn=0;Bn<tt.length;Bn++)n=tt[Bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));uo=!0,t&&Zm(t),t||Ts("revert")},Qm=function(e,t){st.cache++,(t||!kn)&&st.forEach(function(n){return An(n)&&n.cacheID++&&(n.rec=0)}),ei(e)&&(rt.history.scrollRestoration=af=e)},kn,Ss=0,ld,Hg=function(){if(ld!==Ss){var e=ld=Ss;requestAnimationFrame(function(){return e===Ss&&fs(!0)})}},jm=function(){vt.appendChild(va),of=!On&&va.offsetHeight||rt.innerHeight,vt.removeChild(va)},cd=function(e){return Ro(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},fs=function(e,t){if(ni=xt.documentElement,vt=xt.body,sf=[rt,xt,ni,vt],yi&&!e&&!uo){dn(Ze,"scrollEnd",Km);return}jm(),kn=Ze.isRefreshing=!0,uo||Jm();var n=Ts("refreshInit");Bm&&Ze.sort(),t||ff(),st.forEach(function(r){An(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),tt.slice(0).forEach(function(r){return r.refresh()}),uo=!1,tt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Bu=1,cd(!0),tt.forEach(function(r){var s=Yi(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),cd(!1),Bu=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),st.forEach(function(r){An(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Qm(af,1),ec.pause(),Ss++,kn=2,mr(2),tt.forEach(function(r){return An(r.vars.onRefresh)&&r.vars.onRefresh(r)}),kn=Ze.isRefreshing=!1,Ts("refresh")},zu=0,Ol=1,_o,mr=function(e){if(e===2||!kn&&!uo){Ze.isUpdating=!0,_o&&_o.update(0);var t=tt.length,n=Tn(),r=n-Ic>=50,s=t&&tt[0].scroll();if(Ol=zu>s?-1:1,kn||(zu=s),r&&(yi&&!pc&&n-yi>200&&(yi=0,Ts("scrollEnd")),Za=Ic,Ic=n),Ol<0){for(Bn=t;Bn-- >0;)tt[Bn]&&tt[Bn].update(0,r);Ol=1}else for(Bn=0;Bn<t;Bn++)tt[Bn]&&tt[Bn].update(0,r);Ze.isUpdating=!1}Co=0},Hu=[Ym,qm,cf,lf,_i+mo,_i+ho,_i+po,_i+fo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Bl=Hu.concat([xs,Ms,"boxSizing","max"+Ca,"max"+uf,"position",_i,jt,jt+po,jt+ho,jt+mo,jt+fo]),Gg=function(e,t,n){xa(n);var r=e._gsap;if(r.spacerIsNative)xa(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Nc=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Hu.length,a=t.style,o=e.style,l;s--;)l=Hu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[cf]=o[lf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[xs]=tc(e,zn)+nn,a[Ms]=tc(e,an)+nn,a[jt]=o[_i]=o[qm]=o[Ym]="0",xa(r),o[xs]=o["max"+Ca]=n[xs],o[Ms]=o["max"+uf]=n[Ms],o[jt]=n[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Vg=/([A-Z])/g,xa=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Vg,"-$1").toLowerCase())}},jo=function(e){for(var t=Bl.length,n=e.style,r=[],s=0;s<t;s++)r.push(Bl[s],n[Bl[s]]);return r.t=e,r},Wg=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},kl={left:0,top:0},ud=function(e,t,n,r,s,a,o,l,c,f,d,u,h,p){An(e)&&(e=e(l)),ei(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?Nl("0"+e.substr(3),n):0));var m=h?h.time():0,_,g,x;if(h&&h.seek(0),isNaN(e)||(e=+e),ja(e))h&&(e=Te.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,u,e)),o&&Fl(o,n,r,!0);else{An(t)&&(t=t(l));var E=(e||"0").split(" "),v,M,T,b;x=Gn(t,l)||vt,v=ur(x)||{},(!v||!v.left&&!v.top)&&gi(x).display==="none"&&(b=x.style.display,x.style.display="block",v=ur(x),b?x.style.display=b:x.style.removeProperty("display")),M=Nl(E[0],v[r.d]),T=Nl(E[1]||"0",n),e=v[r.p]-c[r.p]-f+M+s-T,o&&Fl(o,T,r,n-T<20||o._isStart&&T>20),n-=n-T}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var S=e+n,A=a._isStart;_="scroll"+r.d2,Fl(a,S,r,A&&S>20||!A&&(d?Math.max(vt[_],ni[_]):a.parentNode[_])<=S+1),d&&(c=ur(o),d&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+nn))}return h&&x&&(_=ur(x),h.seek(u),g=ur(x),h._caScrollDist=_[r.p]-g[r.p],e=e/h._caScrollDist*u),h&&h.seek(m),h?e:Math.round(e)},Xg=/(webkit|moz|length|cssText|inset)/i,hd=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===vt){e._stOrig=s.cssText,o=gi(e);for(a in o)!+a&&!Xg.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},e0=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},el=function(e,t,n){var r={};r[t.p]="+="+n,Te.set(e,r)},fd=function(e,t){var n=Zr(e,t),r="_scroll"+t.p2,s=function a(o,l,c,f,d){var u=a.tween,h=l.onComplete,p={};c=c||n();var m=e0(n,c,function(){u.kill(),a.tween=0});return d=f&&d||0,f=f||o-c,u&&u.kill(),l[r]=o,l.inherit=!1,l.modifiers=p,p[r]=function(){return m(c+f*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){st.cache++,a.tween&&mr()},l.onComplete=function(){a.tween=0,h&&h.call(u)},u=a.tween=Te.to(e,l),u};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",n.wheelHandler),Ze.isTouch&&dn(e,"touchmove",n.wheelHandler),s},Ze=(function(){function i(t,n){ia||i.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ou(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ja){this.update=this.refresh=this.kill=Hi;return}n=sd(ei(n)||ja(n)||n.nodeType?{trigger:n}:n,Jo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,f=s.onRefresh,d=s.scrub,u=s.trigger,h=s.pin,p=s.pinSpacing,m=s.invalidateOnRefresh,_=s.anticipatePin,g=s.onScrubComplete,x=s.onSnapComplete,E=s.once,v=s.snap,M=s.pinReparent,T=s.pinSpacer,b=s.containerAnimation,S=s.fastScrollEnd,A=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?zn:an,I=!d&&d!==0,D=Gn(n.scroller||rt),O=Te.core.getCache(D),L=Es(D),F=("pinType"in n?n.pinType:Wr(D,"pinType")||L&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=I&&n.toggleActions.split(" "),J="markers"in n?n.markers:Jo.markers,H=L?0:parseFloat(gi(D)["border"+R.p2+Ca])||0,C=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(C)},Se=Ng(D,L,R),ye=Fg(D,L),He=0,ze=0,Ve=0,K=Zr(D,R),ee,ge,Be,me,Fe,ke,De,Xe,Je,G,nt,yt,Ot,qe,_t,B,Nt,We,P,y,z,W,Z,ce,ae,Q,ne,fe,we,de,he,le,Le,Oe,U,ue,te,pe,ve;if(C._startClamp=C._endClamp=!1,C._dir=R,_*=45,C.scroller=D,C.scroll=b?b.time.bind(b):K,me=K(),C.vars=n,r=r||n.animation,"refreshPriority"in n&&(Bm=1,n.refreshPriority===-9999&&(_o=C)),O.tweenScroll=O.tweenScroll||{top:fd(D,an),left:fd(D,zn)},C.tweenTo=ee=O.tweenScroll[R.p],C.scrubDuration=function(se){Le=ja(se)&&se,Le?le?le.duration(se):le=Te.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Le,paused:!0,onComplete:function(){return g&&g(C)}}):(le&&le.progress(1).kill(),le=0)},r&&(r.vars.lazy=!1,r._initted&&!C.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),C.animation=r.pause(),r.scrollTrigger=C,C.scrubDuration(d),de=0,l||(l=r.vars.id)),v&&((!cs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in vt.style&&Te.set(L?[vt,ni]:D,{scrollBehavior:"auto"}),st.forEach(function(se){return An(se)&&se.target===(L?xt.scrollingElement||ni:D)&&(se.smooth=!1)}),Be=An(v.snapTo)?v.snapTo:v.snapTo==="labels"?Bg(r):v.snapTo==="labelsDirectional"?kg(r):v.directional!==!1?function(se,Ne){return hf(v.snapTo)(se,Tn()-ze<500?0:Ne.direction)}:Te.utils.snap(v.snapTo),Oe=v.duration||{min:.1,max:2},Oe=cs(Oe)?co(Oe.min,Oe.max):co(Oe,Oe),U=Te.delayedCall(v.delay||Le/2||.1,function(){var se=K(),Ne=Tn()-ze<500,Ae=ee.tween;if((Ne||Math.abs(C.getVelocity())<10)&&!Ae&&!pc&&He!==se){var $e=(se-ke)/qe,Kt=r&&!I?r.totalProgress():$e,it=Ne?0:(Kt-he)/(Tn()-Za)*1e3||0,Lt=Te.utils.clamp(-$e,1-$e,zs(it/2)*it/.185),cn=$e+(v.inertia===!1?0:Lt),It,Tt,lt=v,Pn=lt.onStart,Pt=lt.onInterrupt,Mn=lt.onComplete;if(It=Be(cn,C),ja(It)||(It=cn),Tt=Math.max(0,Math.round(ke+It*qe)),se<=De&&se>=ke&&Tt!==se){if(Ae&&!Ae._initted&&Ae.data<=zs(Tt-se))return;v.inertia===!1&&(Lt=It-$e),ee(Tt,{duration:Oe(zs(Math.max(zs(cn-Kt),zs(It-Kt))*.185/it/.05||0)),ease:v.ease||"power3",data:zs(Tt-se),onInterrupt:function(){return U.restart(!0)&&Pt&&ks(C,Pt)},onComplete:function(){C.update(),He=K(),r&&!I&&(le?le.resetTo("totalProgress",It,r._tTime/r._tDur):r.progress(It)),de=he=r&&!I?r.totalProgress():C.progress,x&&x(C),Mn&&ks(C,Mn)}},se,Lt*qe,Tt-se-Lt*qe),Pn&&ks(C,Pn,ee.tween)}}else C.isActive&&He!==se&&U.restart(!0)}).pause()),l&&(ku[l]=C),u=C.trigger=Gn(u||h!==!0&&h),ve=u&&u._gsap&&u._gsap.stRevert,ve&&(ve=ve(C)),h=h===!0?u:Gn(h),ei(o)&&(o={targets:u,className:o}),h&&(p===!1||p===_i||(p=!p&&h.parentNode&&h.parentNode.style&&gi(h.parentNode).display==="flex"?!1:jt),C.pin=h,ge=Te.core.getCache(h),ge.spacer?_t=ge.pinState:(T&&(T=Gn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),ge.spacerIsNative=!!T,T&&(ge.spacerState=jo(T))),ge.spacer=We=T||xt.createElement("div"),We.classList.add("pin-spacer"),l&&We.classList.add("pin-spacer-"+l),ge.pinState=_t=jo(h)),n.force3D!==!1&&Te.set(h,{force3D:!0}),C.spacer=We=ge.spacer,we=gi(h),ce=we[p+R.os2],y=Te.getProperty(h),z=Te.quickSetter(h,R.a,nn),Nc(h,We,we),Nt=jo(h)),J){yt=cs(J)?sd(J,ad):ad,G=Qo("scroller-start",l,D,R,yt,0),nt=Qo("scroller-end",l,D,R,yt,0,G),P=G["offset"+R.op.d2];var ie=Gn(Wr(D,"content")||D);Xe=this.markerStart=Qo("start",l,ie,R,yt,P,0,b),Je=this.markerEnd=Qo("end",l,ie,R,yt,P,0,b),b&&(pe=Te.quickSetter([Xe,Je],R.a,nn)),!F&&!(Zi.length&&Wr(D,"fixedMarkers")===!0)&&(Og(L?vt:D),Te.set([G,nt],{force3D:!0}),Q=Te.quickSetter(G,R.a,nn),fe=Te.quickSetter(nt,R.a,nn))}if(b){var oe=b.vars.onUpdate,re=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){C.update(0,0,1),oe&&oe.apply(b,re||[])})}if(C.previous=function(){return tt[tt.indexOf(C)-1]},C.next=function(){return tt[tt.indexOf(C)+1]},C.revert=function(se,Ne){if(!Ne)return C.kill(!0);var Ae=se!==!1||!C.enabled,$e=bn;Ae!==C.isReverted&&(Ae&&(ue=Math.max(K(),C.scroll.rec||0),Ve=C.progress,te=r&&r.progress()),Xe&&[Xe,Je,G,nt].forEach(function(Kt){return Kt.style.display=Ae?"none":"block"}),Ae&&(bn=C,C.update(Ae)),h&&(!M||!C.isActive)&&(Ae?Gg(h,We,_t):Nc(h,We,gi(h),ae)),Ae||C.update(Ae),bn=$e,C.isReverted=Ae)},C.refresh=function(se,Ne,Ae,$e){if(!((bn||!C.enabled)&&!Ne)){if(h&&se&&yi){dn(i,"scrollEnd",Km);return}!kn&&j&&j(C),bn=C,ee.tween&&!Ae&&(ee.tween.kill(),ee.tween=0),le&&le.pause(),m&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(_e){return _e.vars.immediateRender&&_e.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Kt=Se(),it=ye(),Lt=b?b.duration():Yi(D,R),cn=qe<=.01||!qe,It=0,Tt=$e||0,lt=cs(Ae)?Ae.end:n.end,Pn=n.endTrigger||u,Pt=cs(Ae)?Ae.start:n.start||(n.start===0||!u?0:h?"0 0":"0 100%"),Mn=C.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,C),Dn=u&&Math.max(0,tt.indexOf(C))||0,Zt=Dn,Ht,tn,Fi,Us,un,Wt,hi,Ns,w,N,q,V,X;for(J&&cs(Ae)&&(V=Te.getProperty(G,R.p),X=Te.getProperty(nt,R.p));Zt-- >0;)Wt=tt[Zt],Wt.end||Wt.refresh(0,1)||(bn=C),hi=Wt.pin,hi&&(hi===u||hi===h||hi===Mn)&&!Wt.isReverted&&(N||(N=[]),N.unshift(Wt),Wt.revert(!0,!0)),Wt!==tt[Zt]&&(Dn--,Zt--);for(An(Pt)&&(Pt=Pt(C)),Pt=td(Pt,"start",C),ke=ud(Pt,u,Kt,R,K(),Xe,G,C,it,H,F,Lt,b,C._startClamp&&"_startClamp")||(h?-.001:0),An(lt)&&(lt=lt(C)),ei(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(ei(Pt)?Pt.split(" ")[0]:"")+lt:(It=Nl(lt.substr(2),Kt),lt=ei(Pt)?Pt:(b?Te.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,ke):ke)+It,Pn=u)),lt=td(lt,"end",C),De=Math.max(ke,ud(lt||(Pn?"100% 0":Lt),Pn,Kt,R,K()+It,Je,nt,C,it,H,F,Lt,b,C._endClamp&&"_endClamp"))||-.001,It=0,Zt=Dn;Zt--;)Wt=tt[Zt]||{},hi=Wt.pin,hi&&Wt.start-Wt._pinPush<=ke&&!b&&Wt.end>0&&(Ht=Wt.end-(C._startClamp?Math.max(0,Wt.start):Wt.start),(hi===u&&Wt.start-Wt._pinPush<ke||hi===Mn)&&isNaN(Pt)&&(It+=Ht*(1-Wt.progress)),hi===h&&(Tt+=Ht));if(ke+=It,De+=It,C._startClamp&&(C._startClamp+=It),C._endClamp&&!kn&&(C._endClamp=De||-.001,De=Math.min(De,Yi(D,R))),qe=De-ke||(ke-=.01)&&.001,cn&&(Ve=Te.utils.clamp(0,1,Te.utils.normalize(ke,De,ue))),C._pinPush=Tt,Xe&&It&&(Ht={},Ht[R.a]="+="+It,Mn&&(Ht[R.p]="-="+K()),Te.set([Xe,Je],Ht)),h&&!(Bu&&C.end>=Yi(D,R)))Ht=gi(h),Us=R===an,Fi=K(),W=parseFloat(y(R.a))+Tt,!Lt&&De>1&&(q=(L?xt.scrollingElement||ni:D).style,q={style:q,value:q["overflow"+R.a.toUpperCase()]},L&&gi(vt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(q.style["overflow"+R.a.toUpperCase()]="scroll")),Nc(h,We,Ht),Nt=jo(h),tn=ur(h,!0),Ns=F&&Zr(D,Us?zn:an)(),p?(ae=[p+R.os2,qe+Tt+nn],ae.t=We,Zt=p===jt?tc(h,R)+qe+Tt:0,Zt&&(ae.push(R.d,Zt+nn),We.style.flexBasis!=="auto"&&(We.style.flexBasis=Zt+nn)),xa(ae),Mn&&tt.forEach(function(_e){_e.pin===Mn&&_e.vars.pinSpacing!==!1&&(_e._subPinOffset=!0)}),F&&K(ue)):(Zt=tc(h,R),Zt&&We.style.flexBasis!=="auto"&&(We.style.flexBasis=Zt+nn)),F&&(un={top:tn.top+(Us?Fi-ke:Ns)+nn,left:tn.left+(Us?Ns:Fi-ke)+nn,boxSizing:"border-box",position:"fixed"},un[xs]=un["max"+Ca]=Math.ceil(tn.width)+nn,un[Ms]=un["max"+uf]=Math.ceil(tn.height)+nn,un[_i]=un[_i+po]=un[_i+ho]=un[_i+mo]=un[_i+fo]="0",un[jt]=Ht[jt],un[jt+po]=Ht[jt+po],un[jt+ho]=Ht[jt+ho],un[jt+mo]=Ht[jt+mo],un[jt+fo]=Ht[jt+fo],B=Wg(_t,un,M),kn&&K(0)),r?(w=r._initted,Dc(1),r.render(r.duration(),!0,!0),Z=y(R.a)-W+qe+Tt,ne=Math.abs(qe-Z)>1,F&&ne&&B.splice(B.length-2,2),r.render(0,!0,!0),w||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Dc(0)):Z=qe,q&&(q.value?q.style["overflow"+R.a.toUpperCase()]=q.value:q.style.removeProperty("overflow-"+R.a));else if(u&&K()&&!b)for(tn=u.parentNode;tn&&tn!==vt;)tn._pinOffset&&(ke-=tn._pinOffset,De-=tn._pinOffset),tn=tn.parentNode;N&&N.forEach(function(_e){return _e.revert(!1,!0)}),C.start=ke,C.end=De,me=Fe=kn?ue:K(),!b&&!kn&&(me<ue&&K(ue),C.scroll.rec=0),C.revert(!1,!0),ze=Tn(),U&&(He=-1,U.restart(!0)),bn=0,r&&I&&(r._initted||te)&&r.progress()!==te&&r.progress(te||0,!0).render(r.time(),!0,!0),(cn||Ve!==C.progress||b||m||r&&!r._initted)&&(r&&!I&&(r._initted||Ve||r.vars.immediateRender!==!1)&&r.totalProgress(b&&ke<-.001&&!Ve?Te.utils.normalize(ke,De,0):Ve,!0),C.progress=cn||(me-ke)/qe===Ve?0:Ve),h&&p&&(We._pinOffset=Math.round(C.progress*Z)),le&&le.invalidate(),isNaN(V)||(V-=Te.getProperty(G,R.p),X-=Te.getProperty(nt,R.p),el(G,R,V),el(Xe,R,V-($e||0)),el(nt,R,X),el(Je,R,X-($e||0))),cn&&!kn&&C.update(),f&&!kn&&!Ot&&(Ot=!0,f(C),Ot=!1)}},C.getVelocity=function(){return(K()-Fe)/(Tn()-Za)*1e3||0},C.endAnimation=function(){Ba(C.callbackAnimation),r&&(le?le.progress(1):r.paused()?I||Ba(r,C.direction<0,1):Ba(r,r.reversed()))},C.labelToScroll=function(se){return r&&r.labels&&(ke||C.refresh()||ke)+r.labels[se]/r.duration()*qe||0},C.getTrailing=function(se){var Ne=tt.indexOf(C),Ae=C.direction>0?tt.slice(0,Ne).reverse():tt.slice(Ne+1);return(ei(se)?Ae.filter(function($e){return $e.vars.preventOverlaps===se}):Ae).filter(function($e){return C.direction>0?$e.end<=ke:$e.start>=De})},C.update=function(se,Ne,Ae){if(!(b&&!Ae&&!se)){var $e=kn===!0?ue:C.scroll(),Kt=se?0:($e-ke)/qe,it=Kt<0?0:Kt>1?1:Kt||0,Lt=C.progress,cn,It,Tt,lt,Pn,Pt,Mn,Dn;if(Ne&&(Fe=me,me=b?K():$e,v&&(he=de,de=r&&!I?r.totalProgress():it)),_&&h&&!bn&&!qo&&yi&&(!it&&ke<$e+($e-Fe)/(Tn()-Za)*_?it=1e-4:it===1&&De>$e+($e-Fe)/(Tn()-Za)*_&&(it=.9999)),it!==Lt&&C.enabled){if(cn=C.isActive=!!it&&it<1,It=!!Lt&&Lt<1,Pt=cn!==It,Pn=Pt||!!it!=!!Lt,C.direction=it>Lt?1:-1,C.progress=it,Pn&&!bn&&(Tt=it&&!Lt?0:it===1?1:Lt===1?2:3,I&&(lt=!Pt&&k[Tt+1]!=="none"&&k[Tt+1]||k[Tt],Dn=r&&(lt==="complete"||lt==="reset"||lt in r))),A&&(Pt||Dn)&&(Dn||d||!r)&&(An(A)?A(C):C.getTrailing(A).forEach(function(Fi){return Fi.endAnimation()})),I||(le&&!bn&&!qo?(le._dp._time-le._start!==le._time&&le.render(le._dp._time-le._start),le.resetTo?le.resetTo("totalProgress",it,r._tTime/r._tDur):(le.vars.totalProgress=it,le.invalidate().restart())):r&&r.totalProgress(it,!!(bn&&(ze||se)))),h){if(se&&p&&(We.style[p+R.os2]=ce),!F)z(Qa(W+Z*it));else if(Pn){if(Mn=!se&&it>Lt&&De+1>$e&&$e+1>=Yi(D,R),M)if(!se&&(cn||Mn)){var Zt=ur(h,!0),Ht=$e-ke;hd(h,vt,Zt.top+(R===an?Ht:0)+nn,Zt.left+(R===an?0:Ht)+nn)}else hd(h,We);xa(cn||Mn?B:Nt),ne&&it<1&&cn||z(W+(it===1&&!Mn?Z:0))}}v&&!ee.tween&&!bn&&!qo&&U.restart(!0),o&&(Pt||E&&it&&(it<1||!Lc))&&Ro(o.targets).forEach(function(Fi){return Fi.classList[cn||E?"add":"remove"](o.className)}),a&&!I&&!se&&a(C),Pn&&!bn?(I&&(Dn&&(lt==="complete"?r.pause().totalProgress(1):lt==="reset"?r.restart(!0).pause():lt==="restart"?r.restart(!0):r[lt]()),a&&a(C)),(Pt||!Lc)&&(c&&Pt&&ks(C,c),Y[Tt]&&ks(C,Y[Tt]),E&&(it===1?C.kill(!1,1):Y[Tt]=0),Pt||(Tt=it===1?1:3,Y[Tt]&&ks(C,Y[Tt]))),S&&!cn&&Math.abs(C.getVelocity())>(ja(S)?S:2500)&&(Ba(C.callbackAnimation),le?le.progress(1):Ba(r,lt==="reverse"?1:!it,1))):I&&a&&!bn&&a(C)}if(fe){var tn=b?$e/b.duration()*(b._caScrollDist||0):$e;Q(tn+(G._isFlipped?1:0)),fe(tn)}pe&&pe(-$e/b.duration()*(b._caScrollDist||0))}},C.enable=function(se,Ne){C.enabled||(C.enabled=!0,dn(D,"resize",eo),L||dn(D,"scroll",Hs),j&&dn(i,"refreshInit",j),se!==!1&&(C.progress=Ve=0,me=Fe=He=K()),Ne!==!1&&C.refresh())},C.getTween=function(se){return se&&ee?ee.tween:le},C.setPositions=function(se,Ne,Ae,$e){if(b){var Kt=b.scrollTrigger,it=b.duration(),Lt=Kt.end-Kt.start;se=Kt.start+Lt*se/it,Ne=Kt.start+Lt*Ne/it}C.refresh(!1,!1,{start:nd(se,Ae&&!!C._startClamp),end:nd(Ne,Ae&&!!C._endClamp)},$e),C.update()},C.adjustPinSpacing=function(se){if(ae&&se){var Ne=ae.indexOf(R.d)+1;ae[Ne]=parseFloat(ae[Ne])+se+nn,ae[1]=parseFloat(ae[1])+se+nn,xa(ae)}},C.disable=function(se,Ne){if(se!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Ne||le&&le.pause(),ue=0,ge&&(ge.uncache=1),j&&fn(i,"refreshInit",j),U&&(U.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!L)){for(var Ae=tt.length;Ae--;)if(tt[Ae].scroller===D&&tt[Ae]!==C)return;fn(D,"resize",eo),L||fn(D,"scroll",Hs)}},C.kill=function(se,Ne){C.disable(se,Ne),le&&!Ne&&le.kill(),l&&delete ku[l];var Ae=tt.indexOf(C);Ae>=0&&tt.splice(Ae,1),Ae===Bn&&Ol>0&&Bn--,Ae=0,tt.forEach(function($e){return $e.scroller===C.scroller&&(Ae=1)}),Ae||kn||(C.scroll.rec=0),r&&(r.scrollTrigger=null,se&&r.revert({kill:!1}),Ne||r.kill()),Xe&&[Xe,Je,G,nt].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),_o===C&&(_o=0),h&&(ge&&(ge.uncache=1),Ae=0,tt.forEach(function($e){return $e.pin===h&&Ae++}),Ae||(ge.spacer=0)),n.onKill&&n.onKill(C)},tt.push(C),C.enable(!1,!1),ve&&ve(C),r&&r.add&&!qe){var Ue=C.update;C.update=function(){C.update=Ue,st.cache++,ke||De||C.refresh()},Te.delayedCall(.01,C.update),qe=.01,ke=De=0}else C.refresh();h&&Hg()},i.register=function(n){return ia||(Te=n||Vm(),Gm()&&window.document&&i.enable(),ia=Ja),ia},i.defaults=function(n){if(n)for(var r in n)Jo[r]=n[r];return Jo},i.disable=function(n,r){Ja=0,tt.forEach(function(a){return a[r?"kill":"disable"](n)}),fn(rt,"wheel",Hs),fn(xt,"scroll",Hs),clearInterval(Yo),fn(xt,"touchcancel",Hi),fn(vt,"touchstart",Hi),Ko(fn,xt,"pointerdown,touchstart,mousedown",id),Ko(fn,xt,"pointerup,touchend,mouseup",rd),ec.kill(),$o(fn);for(var s=0;s<st.length;s+=3)Zo(fn,st[s],st[s+1]),Zo(fn,st[s],st[s+2])},i.enable=function(){if(rt=window,xt=document,ni=xt.documentElement,vt=xt.body,Te){if(Ro=Te.utils.toArray,co=Te.utils.clamp,Ou=Te.core.context||Hi,Dc=Te.core.suppressOverwrites||Hi,af=rt.history.scrollRestoration||"auto",zu=rt.pageYOffset||0,Te.core.globals("ScrollTrigger",i),vt){Ja=1,va=document.createElement("div"),va.style.height="100vh",va.style.position="absolute",jm(),Ug(),qt.register(Te),i.isTouch=qt.isTouch,Ir=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Fu=qt.isTouch===1,dn(rt,"wheel",Hs),sf=[rt,xt,ni,vt],Te.matchMedia?(i.matchMedia=function(f){var d=Te.matchMedia(),u;for(u in f)d.add(u,f[u]);return d},Te.addEventListener("matchMediaInit",function(){Jm(),ff()}),Te.addEventListener("matchMediaRevert",function(){return Zm()}),Te.addEventListener("matchMedia",function(){fs(0,1),Ts("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return Uc(),Uc})):console.warn("Requires GSAP 3.11.0 or later"),Uc(),dn(xt,"scroll",Hs);var n=vt.hasAttribute("style"),r=vt.style,s=r.borderTopStyle,a=Te.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=ur(vt),an.m=Math.round(o.top+an.sc())||0,zn.m=Math.round(o.left+zn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),Yo=setInterval(od,250),Te.delayedCall(.5,function(){return qo=0}),dn(xt,"touchcancel",Hi),dn(vt,"touchstart",Hi),Ko(dn,xt,"pointerdown,touchstart,mousedown",id),Ko(dn,xt,"pointerup,touchend,mouseup",rd),Nu=Te.utils.checkPrefix("transform"),Bl.push(Nu),ia=Tn(),ec=Te.delayedCall(.2,fs).pause(),ra=[xt,"visibilitychange",function(){var f=rt.innerWidth,d=rt.innerHeight;xt.hidden?(jf=f,ed=d):(jf!==f||ed!==d)&&eo()},xt,"DOMContentLoaded",fs,rt,"load",fs,rt,"resize",eo],$o(dn),tt.forEach(function(f){return f.enable(0,1)}),l=0;l<st.length;l+=3)Zo(fn,st[l],st[l+1]),Zo(fn,st[l],st[l+2])}else if(xt){var c=function f(){i.enable(),xt.removeEventListener("DOMContentLoaded",f)};xt.addEventListener("DOMContentLoaded",c)}}},i.config=function(n){"limitCallbacks"in n&&(Lc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Yo)||(Yo=r)&&setInterval(od,r),"ignoreMobileResize"in n&&(Fu=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($o(fn)||$o(dn,n.autoRefreshEvents||"none"),km=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Gn(n),a=st.indexOf(s),o=Es(s);~a&&st.splice(a,o?6:2),r&&(o?Zi.unshift(rt,r,vt,r,ni,r):Zi.unshift(s,r))},i.clearMatchMedia=function(n){tt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(ei(n)?Gn(n):n).getBoundingClientRect(),o=a[s?xs:Ms]*r||0;return s?a.right-o>0&&a.left+o<rt.innerWidth:a.bottom-o>0&&a.top+o<rt.innerHeight},i.positionInViewport=function(n,r,s){ei(n)&&(n=Gn(n));var a=n.getBoundingClientRect(),o=a[s?xs:Ms],l=r==null?o/2:r in nc?nc[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/rt.innerWidth:(a.top+l)/rt.innerHeight},i.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=bs.killAll||[];bs={},r.forEach(function(s){return s()})}},i})();Ze.version="3.15.0";Ze.saveStyles=function(i){return i?Ro(i).forEach(function(e){if(e&&e.style){var t=jn.indexOf(e);t>=0&&jn.splice(t,5),jn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),Ou())}}):jn};Ze.revert=function(i,e){return ff(!i,e)};Ze.create=function(i,e){return new Ze(i,e)};Ze.refresh=function(i){return i?eo(!0):(ia||Ze.register())&&fs(!0)};Ze.update=function(i){return++st.cache&&mr(i===!0?2:0)};Ze.clearScrollMemory=Qm;Ze.maxScroll=function(i,e){return Yi(i,e?zn:an)};Ze.getScrollFunc=function(i,e){return Zr(Gn(i),e?zn:an)};Ze.getById=function(i){return ku[i]};Ze.getAll=function(){return tt.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!yi};Ze.snapDirectional=hf;Ze.addEventListener=function(i,e){var t=bs[i]||(bs[i]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(i,e){var t=bs[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ze.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,f){var d=[],u=[],h=Te.delayedCall(r,function(){f(d,u),d=[],u=[]}).pause();return function(p){d.length||h.restart(!0),d.push(p.trigger),u.push(p),s<=d.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&An(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return An(s)&&(s=s(),dn(Ze,"refresh",function(){return s=e.batchMax()})),Ro(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ze.create(c))}),t};var dd=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Fc=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===ni&&i(vt,t)},tl={auto:1,scroll:1},Yg=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Te.core.getCache(s),o=Tn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(tl[(l=gi(s)).overflowY]||tl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Es(s)&&(tl[(l=gi(s)).overflowY]||tl[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},t0=function(e,t,n,r){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Yg,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&dn(xt,qt.eventTypes[0],md,!1,!0)},onDisable:function(){return fn(xt,qt.eventTypes[0],md,!0)}})},qg=/(input|label|select|textarea)/i,pd,md=function(e){var t=qg.test(e.target.tagName);(t||pd)&&(e._gsapAllow=!0,pd=t)},$g=function(e){cs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Gn(e.target)||ni,f=Te.core.globals().ScrollSmoother,d=f&&f.get(),u=Ir&&(e.content&&Gn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Zr(c,an),p=Zr(c,zn),m=1,_=(qt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,g=0,x=An(r)?function(){return r(o)}:function(){return r||2.8},E,v,M=t0(c,e.type,!0,s),T=function(){return v=!1},b=Hi,S=Hi,A=function(){l=Yi(c,an),S=co(Ir?1:0,l),n&&(b=co(0,Yi(c,zn))),E=Ss},R=function(){u._gsap.y=Qa(parseFloat(u._gsap.y)+h.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},I=function(){if(v){requestAnimationFrame(T);var J=Qa(o.deltaY/2),H=S(h.v-J);if(u&&H!==h.v+h.offset){h.offset=H-h.v;var C=Qa((parseFloat(u&&u._gsap.y)||0)-h.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",u._gsap.y=C+"px",h.cacheID=st.cache,mr()}return!0}h.offset&&R(),v=!0},D,O,L,F,Y=function(){A(),D.isActive()&&D.vars.scrollY>l&&(h()>l?D.progress(1)&&h(l):D.resetTo("scrollY",l))};return u&&Te.set(u,{y:"+=0"}),e.ignoreCheck=function(k){return Ir&&k.type==="touchmove"&&I()||m>1.05&&k.type!=="touchstart"||o.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){v=!1;var k=m;m=Qa((rt.visualViewport&&rt.visualViewport.scale||1)/_),D.pause(),k!==m&&Fc(c,m>1.01?!0:n?!1:"x"),O=p(),L=h(),A(),E=Ss},e.onRelease=e.onGestureStart=function(k,J){if(h.offset&&R(),!J)F.restart(!0);else{st.cache++;var H=x(),C,j;n&&(C=p(),j=C+H*.05*-k.velocityX/.227,H*=dd(p,C,j,Yi(c,zn)),D.vars.scrollX=b(j)),C=h(),j=C+H*.05*-k.velocityY/.227,H*=dd(h,C,j,Yi(c,an)),D.vars.scrollY=S(j),D.invalidate().duration(H).play(.01),(Ir&&D.vars.scrollY>=l||C>=l-1)&&Te.to({},{onUpdate:Y,duration:H})}a&&a(k)},e.onWheel=function(){D._ts&&D.pause(),Tn()-g>1e3&&(E=0,g=Tn())},e.onChange=function(k,J,H,C,j){if(Ss!==E&&A(),J&&n&&p(b(C[2]===J?O+(k.startX-k.x):p()+J-C[1])),H){h.offset&&R();var Se=j[2]===H,ye=Se?L+k.startY-k.y:h()+H-j[1],He=S(ye);Se&&ye!==He&&(L+=He-ye),h(He)}(H||J)&&mr()},e.onEnable=function(){Fc(c,n?!1:"x"),Ze.addEventListener("refresh",Y),dn(rt,"resize",Y),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),M.enable()},e.onDisable=function(){Fc(c,!0),fn(rt,"resize",Y),Ze.removeEventListener("refresh",Y),M.kill()},e.lockAxis=e.lockAxis!==!1,o=new qt(e),o.iOS=Ir,Ir&&!h()&&h(1),Ir&&Te.ticker.add(Hi),F=o._dc,D=Te.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:e0(h,h(),function(){return D.pause()})},onUpdate:mr,onComplete:F.vars.onComplete}),o};Ze.sort=function(i){if(An(i))return tt.sort(i);var e=rt.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),tt.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(i){return new qt(i)};Ze.normalizeScroll=function(i){if(typeof i>"u")return On;if(i===!0&&On)return On.enable();if(i===!1){On&&On.kill(),On=i;return}var e=i instanceof qt?i:$g(i);return On&&On.target===e.target&&On.kill(),Es(e.target)&&(On=e),e};Ze.core={_getVelocityProp:Uu,_inputObserver:t0,_scrollers:st,_proxies:Zi,bridge:{ss:function(){yi||Ts("scrollStart"),yi=Tn()},ref:function(){return bn}}};Vm()&&Te.registerPlugin(Ze);var _d="1.3.26";function n0(i,e,t){return Math.max(i,Math.min(e,t))}function Kg(i,e,t){return(1-t)*i+t*e}function Zg(i,e,t,n){return Kg(i,e,1-Math.exp(-t*n))}function Jg(i,e){return(i%e+e)%e}var Qg=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const t=n0(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Zg(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:a}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function jg(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var ev=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=i,this.content=e,t&&(this.debouncedResize=jg(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},i0=class{events={};emit(i,...e){const t=this.events[i]||[];for(let n=0,r=t.length;n<r;n++)t[n]?.(...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{this.events[i]=this.events[i]?.filter(t=>e!==t)}}off(i,e){this.events[i]=this.events[i]?.filter(t=>e!==t)}destroy(){this.events={}}};const tv=100/6,Ar={passive:!1};function gd(i,e){return i===1?tv:i===2?e:1}var nv=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new i0;constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ar),this.element.addEventListener("touchstart",this.onTouchStart,Ar),this.element.addEventListener("touchmove",this.onTouchMove,Ar),this.element.addEventListener("touchend",this.onTouchEnd,Ar)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ar),this.element.removeEventListener("touchstart",this.onTouchStart,Ar),this.element.removeEventListener("touchmove",this.onTouchMove,Ar),this.element.removeEventListener("touchend",this.onTouchEnd,Ar)}onTouchStart=i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const r=gd(n,this.window.width),s=gd(n,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const vd=i=>Math.min(1,1.001-2**(-10*i));var iv=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Qg;emitter=new i0;dimensions;virtualScroll;constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:f=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:p=1,autoResize:m=!0,prevent:_,virtualScroll:g,overscroll:x=!0,autoRaf:E=!1,anchors:v=!1,autoToggle:M=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:S=b,stopInertiaOnNavigate:A=!1,respectReducedMotion:R=!0}={}){window.lenisVersion=_d,window.lenis||(window.lenis={}),window.lenis.version=_d,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof o=="number"&&typeof l!="function"?l=vd:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:f,gestureOrientation:u,orientation:d,touchMultiplier:h,wheelMultiplier:p,autoResize:m,prevent:_,virtualScroll:g,overscroll:x,autoRaf:E,anchors:v,autoToggle:M,allowNestedScroll:T,naiveDimensions:S,stopInertiaOnNavigate:A,respectReducedMotion:R},this.dimensions=new ev(i,e,{autoResize:m}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new nv(t,{touchMultiplier:h,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=i=>{i.propertyName?.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=i=>{i.button===1&&this.reset()};isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],s=n[n.length-1],a=40,o=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,f=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||f==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||f==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||r&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const u=r&&this.options.syncTouch,h=r&&n.type==="touchend";h&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:f=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!f)return;let u=i,h=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(p=u),p){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?v.left:v.top}const m=p.getBoundingClientRect(),_=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(_.scrollMarginLeft):Number.parseFloat(_.scrollMarginTop),x=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);u=(this.isHorizontal?m.left:m.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(E)?0:E)}}if(typeof u=="number"){if(u+=h,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=n0(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=u),typeof a=="number"&&typeof o!="function"?o=vd:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,u,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),r&&(this.targetScroll=p),m||this.emit(),m&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let s,a,o,l,c,f,d,u,h,p;if(n-(r.time??0)>2e3){r.time=Date.now();const T=window.getComputedStyle(i);if(r.computedStyle=T,s=["auto","overlay","scroll"].includes(T.overflowX),a=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),f=["auto"].includes(T.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;d=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,p=i.clientHeight,o=d>h,l=u>p,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=u,r.clientWidth=h,r.clientHeight=p,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=f}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,d=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,p=r.clientHeight,c=r.hasOverscrollBehaviorX,f=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const m=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let _,g,x,E,v,M;if(m==="horizontal")_=Math.round(i.scrollLeft),g=d-h,x=e,E=s,v=o,M=c;else if(m==="vertical")_=Math.round(i.scrollTop),g=u-p,x=t,E=a,v=l,M=f;else return!1;return!M&&(_>=g||_<=0)?!0:(x>0?_<g:_>0)&&E&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Jg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};function rv(i){let e=null,t=null,n=null,r=new Uint8Array(0),s=0,a=0,o=0,l=!1,c=.5;const f={v:0};function d(){if(e)return e;e=new AudioContext;const h=e.createMediaElementSource(i);return n=e.createAnalyser(),n.fftSize=512,n.smoothingTimeConstant=.55,t=e.createGain(),t.gain.value=0,h.connect(n).connect(t).connect(e.destination),r=new Uint8Array(n.frequencyBinCount),e}const u=(h,p,m)=>et.to(f,{v:h,duration:p,ease:"sine.inOut",overwrite:!0,onUpdate:()=>{t&&(t.gain.value=f.v)},onComplete:m});return{async start(){if(l)return!0;const h=d();try{await h.resume()}catch{return!1}if(h.state!=="running")return!1;try{await i.play()}catch{return!1}return l=!0,u(c,2.5),!0},stop(){l&&(l=!1,u(0,.8,()=>i.pause()))},setMood(h){c=h,l&&u(h,1.6)},frame(){if(!l||!n){s*=.9,a*=.85;return}n.getByteFrequencyData(r);let h=0;const p=2,m=Math.min(96,r.length);for(let g=p;g<m;g++)h+=r[g];const _=Math.min(1,h/((m-p)*150));a=Math.max(a*.86,Math.max(0,_-o)*5),o=_,s+=(_-s)*.25},get level(){return s},get onset(){return Math.min(1,a)},get playing(){return l}}}const df="186",sv=0,xd=1,av=2,zl=1,ov=2,to=3,ws=0,$n=1,hr=2,_r=0,go=1,Gu=2,Md=3,Sd=4,lv=5,sa=100,cv=101,uv=102,hv=103,fv=104,dv=200,pv=201,mv=202,_v=203,r0=204,s0=205,gv=206,vv=207,xv=208,Mv=209,Sv=210,yv=211,Ev=212,bv=213,Tv=214,Vu=0,Wu=1,Xu=2,Po=3,Yu=4,qu=5,$u=6,Ku=7,a0=0,wv=1,Av=2,Ji=0,o0=1,l0=2,c0=3,u0=4,h0=5,f0=6,d0=7,p0=300,As=301,Pa=302,Oc=303,Bc=304,mc=306,Zu=1e3,dr=1001,Ju=1002,gn=1003,Rv=1004,nl=1005,Rn=1006,kc=1007,ds=1008,xi=1009,m0=1010,_0=1011,Do=1012,pf=1013,er=1014,qi=1015,tr=1016,mf=1017,_f=1018,Lo=1020,g0=35902,v0=35899,x0=1021,M0=1022,Pi=1023,yr=1026,ps=1027,S0=1028,gf=1029,Rs=1030,vf=1031,xf=1033,Hl=33776,Gl=33777,Vl=33778,Wl=33779,Qu=35840,ju=35841,eh=35842,th=35843,nh=36196,ih=37492,rh=37496,sh=37488,ah=37489,ic=37490,oh=37491,lh=37808,ch=37809,uh=37810,hh=37811,fh=37812,dh=37813,ph=37814,mh=37815,_h=37816,gh=37817,vh=37818,xh=37819,Mh=37820,Sh=37821,yh=36492,Eh=36494,bh=36495,Th=36283,wh=36284,rc=36285,Ah=36286,Cv=3200,yd=0,Pv=1,Nr="",mi="srgb",sc="srgb-linear",ac="linear",Mt="srgb",zc=7680,Dv=519,Lv=512,Iv=513,Uv=514,Mf=515,Nv=516,Fv=517,Sf=518,Ov=519,Bv=35044,Ed="300 es",$i=2e3,oc=2001;function kv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zv(){const i=lc("canvas");return i.style.display="block",i}const bd={};function Td(...i){const e="THREE."+i.shift();console.log(e,...i)}function y0(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=y0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=y0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ma(...i){const e=i.join(" ");e in bd||(bd[e]=!0,Ye(...i))}function Hv(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Gv={[Vu]:Wu,[Xu]:$u,[Yu]:Ku,[Po]:qu,[Wu]:Vu,[$u]:Xu,[Ku]:Yu,[qu]:Po};class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wd=1234567;const vo=Math.PI/180,Io=180/Math.PI;function La(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function yf(i,e){return(i%e+e)%e}function Vv(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Wv(i,e,t){return i!==e?(t-i)/(e-i):0}function xo(i,e,t){return(1-t)*i+t*e}function Xv(i,e,t,n){return xo(i,e,1-Math.exp(-t*n))}function Yv(i,e=1){return e-Math.abs(yf(i,e*2)-e)}function qv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $v(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Kv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zv(i,e){return i+Math.random()*(e-i)}function Jv(i){return i*(.5-Math.random())}function Qv(i){i!==void 0&&(wd=i);let e=wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jv(i){return i*vo}function ex(i){return i*Io}function tx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function nx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ix(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rx(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),f=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),h=s((n-e)/2),p=a((n-e)/2);switch(r){case"XYX":i.set(o*f,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*f,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*f,o*c);break;case"XZX":i.set(o*f,l*p,l*h,o*c);break;case"YXY":i.set(l*h,o*f,l*p,o*c);break;case"ZYZ":i.set(l*p,l*h,o*f,o*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function aa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const sx={DEG2RAD:vo,RAD2DEG:Io,generateUUID:La,clamp:ot,euclideanModulo:yf,mapLinear:Vv,inverseLerp:Wv,lerp:xo,damp:Xv,pingpong:Yv,smoothstep:qv,smootherstep:$v,randInt:Kv,randFloat:Zv,randFloatSpread:Jv,seededRandom:Qv,degToRad:jv,radToDeg:ex,isPowerOfTwo:tx,ceilPowerOfTwo:nx,floorPowerOfTwo:ix,setQuaternionFromProperEuler:rx,normalize:Nn,denormalize:aa},Rf=class Rf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rf.prototype.isVector2=!0;let ht=Rf;class Ia{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],f=n[r+2],d=n[r+3],u=s[a+0],h=s[a+1],p=s[a+2],m=s[a+3];if(d!==m||l!==u||c!==h||f!==p){let _=l*u+c*h+f*p+d*m;_<0&&(u=-u,h=-h,p=-p,m=-m,_=-_);let g=1-o;if(_<.9995){const x=Math.acos(_),E=Math.sin(x);g=Math.sin(g*x)/E,o=Math.sin(o*x)/E,l=l*g+u*o,c=c*g+h*o,f=f*g+p*o,d=d*g+m*o}else{l=l*g+u*o,c=c*g+h*o,f=f*g+p*o,d=d*g+m*o;const x=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=x,c*=x,f*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],f=n[r+3],d=s[a],u=s[a+1],h=s[a+2],p=s[a+3];return e[t]=o*p+f*d+l*h-c*u,e[t+1]=l*p+f*u+c*d-o*h,e[t+2]=c*p+f*h+o*u-l*d,e[t+3]=f*p-o*d-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(r/2),d=o(s/2),u=l(n/2),h=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=u*f*d+c*h*p,this._y=c*h*d-u*f*p,this._z=c*f*p+u*h*d,this._w=c*f*d-u*h*p;break;case"YXZ":this._x=u*f*d+c*h*p,this._y=c*h*d-u*f*p,this._z=c*f*p-u*h*d,this._w=c*f*d+u*h*p;break;case"ZXY":this._x=u*f*d-c*h*p,this._y=c*h*d+u*f*p,this._z=c*f*p+u*h*d,this._w=c*f*d-u*h*p;break;case"ZYX":this._x=u*f*d-c*h*p,this._y=c*h*d+u*f*p,this._z=c*f*p-u*h*d,this._w=c*f*d+u*h*p;break;case"YZX":this._x=u*f*d+c*h*p,this._y=c*h*d+u*f*p,this._z=c*f*p-u*h*d,this._w=c*f*d-u*h*p;break;case"XZY":this._x=u*f*d-c*h*p,this._y=c*h*d-u*f*p,this._z=c*f*p+u*h*d,this._w=c*f*d+u*h*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],d=t[10],u=n+o+d;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(f-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+f)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-r*o,this._w=a*f-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cf=class Cf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),f=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*f,this.y=n+l*f+o*c-s*d,this.z=r+l*d+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cf.prototype.isVector3=!0;let $=Cf;const Hc=new $,Ad=new Ia,Pf=class Pf{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],d=n[7],u=n[2],h=n[5],p=n[8],m=r[0],_=r[3],g=r[6],x=r[1],E=r[4],v=r[7],M=r[2],T=r[5],b=r[8];return s[0]=a*m+o*x+l*M,s[3]=a*_+o*E+l*T,s[6]=a*g+o*v+l*b,s[1]=c*m+f*x+d*M,s[4]=c*_+f*E+d*T,s[7]=c*g+f*v+d*b,s[2]=u*m+h*x+p*M,s[5]=u*_+h*E+p*T,s[8]=u*g+h*v+p*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*s*f+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,u=o*l-f*s,h=c*s-a*l,p=t*d+n*u+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return e[0]=d*m,e[1]=(r*c-f*n)*m,e[2]=(o*n-r*a)*m,e[3]=u*m,e[4]=(f*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=h*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ma("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return Ma("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return Ma("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pf.prototype.isMatrix3=!0;let Ke=Pf;const Gc=new Ke,Rd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ax(){const i={enabled:!0,workingColorSpace:sc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Mt&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(r.r=Sa(r.r),r.g=Sa(r.g),r.b=Sa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Nr?ac:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sc]:{primaries:e,whitePoint:n,transfer:ac,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),i}const ct=ax();function gr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gs;class ox{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gs===void 0&&(Gs=lc("canvas")),Gs.width=e.width,Gs.height=e.height;const r=Gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gr(t[n]/255)*255):t[n]=gr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lx=0;class Ef{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=La(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vc(r[a].image)):s.push(Vc(r[a]))}else s=Vc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ox.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let cx=0;const Wc=new $;class Hn extends Ls{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,n=dr,r=dr,s=Rn,a=ds,o=Pi,l=xi,c=Hn.DEFAULT_ANISOTROPY,f=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=La(),this.name="",this.source=new Ef(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zu:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case Ju:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zu:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case Ju:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=p0;Hn.DEFAULT_ANISOTROPY=1;const Df=class Df{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],h=l[5],p=l[9],m=l[2],_=l[6],g=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-m)<.01&&Math.abs(p-_)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+m)<.1&&Math.abs(p+_)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,v=(h+1)/2,M=(g+1)/2,T=(f+u)/4,b=(d+m)/4,S=(p+_)/4;return E>v&&E>M?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=T/n,s=b/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=S/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=b/s,r=S/s),this.set(n,r,s,t),this}let x=Math.sqrt((_-p)*(_-p)+(d-m)*(d-m)+(u-f)*(u-f));return Math.abs(x)<.001&&(x=1),this.x=(_-p)/x,this.y=(d-m)/x,this.z=(u-f)/x,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Df.prototype.isVector4=!0;let Gt=Df;class ux extends Ls{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Hn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ef(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends ux{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class E0 extends Hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hx extends Hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const uc=class uc{constructor(e,t,n,r,s,a,o,l,c,f,d,u,h,p,m,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,f,d,u,h,p,m,_)}set(e,t,n,r,s,a,o,l,c,f,d,u,h,p,m,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=f,g[10]=d,g[14]=u,g[3]=h,g[7]=p,g[11]=m,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Vs.setFromMatrixColumn(e,0).length(),s=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*f,h=a*d,p=o*f,m=o*d;t[0]=l*f,t[4]=-l*d,t[8]=c,t[1]=h+p*c,t[5]=u-m*c,t[9]=-o*l,t[2]=m-u*c,t[6]=p+h*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*f,h=l*d,p=c*f,m=c*d;t[0]=u+m*o,t[4]=p*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=h*o-p,t[6]=m+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*f,h=l*d,p=c*f,m=c*d;t[0]=u-m*o,t[4]=-a*d,t[8]=p+h*o,t[1]=h+p*o,t[5]=a*f,t[9]=m-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*f,h=a*d,p=o*f,m=o*d;t[0]=l*f,t[4]=p*c-h,t[8]=u*c+m,t[1]=l*d,t[5]=m*c+u,t[9]=h*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,h=a*c,p=o*l,m=o*c;t[0]=l*f,t[4]=m-u*d,t[8]=p*d+h,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=h*d+p,t[10]=u-m*d}else if(e.order==="XZY"){const u=a*l,h=a*c,p=o*l,m=o*c;t[0]=l*f,t[4]=-d,t[8]=c*f,t[1]=u*d+m,t[5]=a*f,t[9]=h*d-p,t[2]=p*d-h,t[6]=o*f,t[10]=m*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fx,e,dx)}lookAt(e,t,n){const r=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Rr.crossVectors(n,Jn),Rr.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Rr.crossVectors(n,Jn)),Rr.normalize(),il.crossVectors(Jn,Rr),r[0]=Rr.x,r[4]=il.x,r[8]=Jn.x,r[1]=Rr.y,r[5]=il.y,r[9]=Jn.y,r[2]=Rr.z,r[6]=il.z,r[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],d=n[5],u=n[9],h=n[13],p=n[2],m=n[6],_=n[10],g=n[14],x=n[3],E=n[7],v=n[11],M=n[15],T=r[0],b=r[4],S=r[8],A=r[12],R=r[1],I=r[5],D=r[9],O=r[13],L=r[2],F=r[6],Y=r[10],k=r[14],J=r[3],H=r[7],C=r[11],j=r[15];return s[0]=a*T+o*R+l*L+c*J,s[4]=a*b+o*I+l*F+c*H,s[8]=a*S+o*D+l*Y+c*C,s[12]=a*A+o*O+l*k+c*j,s[1]=f*T+d*R+u*L+h*J,s[5]=f*b+d*I+u*F+h*H,s[9]=f*S+d*D+u*Y+h*C,s[13]=f*A+d*O+u*k+h*j,s[2]=p*T+m*R+_*L+g*J,s[6]=p*b+m*I+_*F+g*H,s[10]=p*S+m*D+_*Y+g*C,s[14]=p*A+m*O+_*k+g*j,s[3]=x*T+E*R+v*L+M*J,s[7]=x*b+E*I+v*F+M*H,s[11]=x*S+E*D+v*Y+M*C,s[15]=x*A+E*O+v*k+M*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],h=e[14],p=e[3],m=e[7],_=e[11],g=e[15],x=l*h-c*u,E=o*h-c*d,v=o*u-l*d,M=a*h-c*f,T=a*u-l*f,b=a*d-o*f;return t*(m*x-_*E+g*v)-n*(p*x-_*M+g*T)+r*(p*E-m*M+g*b)-s*(p*v-m*T+_*b)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],h=e[11],p=e[12],m=e[13],_=e[14],g=e[15],x=t*o-n*a,E=t*l-r*a,v=t*c-s*a,M=n*l-r*o,T=n*c-s*o,b=r*c-s*l,S=f*m-d*p,A=f*_-u*p,R=f*g-h*p,I=d*_-u*m,D=d*g-h*m,O=u*g-h*_,L=x*O-E*D+v*I+M*R-T*A+b*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=(o*O-l*D+c*I)*F,e[1]=(r*D-n*O-s*I)*F,e[2]=(m*b-_*T+g*M)*F,e[3]=(u*T-d*b-h*M)*F,e[4]=(l*R-a*O-c*A)*F,e[5]=(t*O-r*R+s*A)*F,e[6]=(_*v-p*b-g*E)*F,e[7]=(f*b-u*v+h*E)*F,e[8]=(a*D-o*R+c*S)*F,e[9]=(n*R-t*D-s*S)*F,e[10]=(p*T-m*v+g*x)*F,e[11]=(d*v-f*T-h*x)*F,e[12]=(o*A-a*I-l*S)*F,e[13]=(t*I-n*A+r*S)*F,e[14]=(m*E-p*M-_*x)*F,e[15]=(f*M-d*E+u*x)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+n,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,d=o+o,u=s*c,h=s*f,p=s*d,m=a*f,_=a*d,g=o*d,x=l*c,E=l*f,v=l*d,M=n.x,T=n.y,b=n.z;return r[0]=(1-(m+g))*M,r[1]=(h+v)*M,r[2]=(p-E)*M,r[3]=0,r[4]=(h-v)*T,r[5]=(1-(u+g))*T,r[6]=(_+x)*T,r[7]=0,r[8]=(p+E)*b,r[9]=(_-x)*b,r[10]=(1-(u+m))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Vs.set(r[0],r[1],r[2]).length();const o=Vs.set(r[4],r[5],r[6]).length(),l=Vs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),bi.copy(this);const c=1/a,f=1/o,d=1/l;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=f,bi.elements[5]*=f,bi.elements[6]*=f,bi.elements[8]*=d,bi.elements[9]*=d,bi.elements[10]*=d,t.setFromRotationMatrix(bi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=$i,l=!1){const c=this.elements,f=2*s/(t-e),d=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r);let p,m;if(l)p=s/(a-s),m=a*s/(a-s);else if(o===$i)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===oc)p=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=$i,l=!1){const c=this.elements,f=2/(t-e),d=2/(n-r),u=-(t+e)/(t-e),h=-(n+r)/(n-r);let p,m;if(l)p=1/(a-s),m=a/(a-s);else if(o===$i)p=-2/(a-s),m=-(a+s)/(a-s);else if(o===oc)p=-1/(a-s),m=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};uc.prototype.isMatrix4=!0;let $t=uc;const Vs=new $,bi=new $t,fx=new $(0,0,0),dx=new $(1,1,1),Rr=new $,il=new $,Jn=new $,Pd=new $t,Dd=new Ia;class Cs{constructor(e=0,t=0,n=0,r=Cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cs.DEFAULT_ORDER="XYZ";class b0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let px=0;const Ld=new $,Ws=new Ia,nr=new $t,rl=new $,ka=new $,mx=new $,_x=new Ia,Id=new $(1,0,0),Ud=new $(0,1,0),Nd=new $(0,0,1),Fd={type:"added"},gx={type:"removed"},Xs={type:"childadded",child:null},Xc={type:"childremoved",child:null};class Kn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new $,t=new Cs,n=new Ia,r=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new Ke}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Id,e)}rotateY(e){return this.rotateOnAxis(Ud,e)}rotateZ(e){return this.rotateOnAxis(Nd,e)}translateOnAxis(e,t){return Ld.copy(e).applyQuaternion(this.quaternion),this.position.add(Ld.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Id,e)}translateY(e){return this.translateOnAxis(Ud,e)}translateZ(e){return this.translateOnAxis(Nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rl.copy(e):rl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(ka,rl,this.up):nr.lookAt(rl,ka,this.up),this.quaternion.setFromRotationMatrix(nr),r&&(nr.extractRotation(r.matrixWorld),Ws.setFromRotationMatrix(nr),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gx),Xc.child=e,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,_x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),u=a(e.skeletons),h=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=r,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kn.DEFAULT_UP=new $(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sl extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vx={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const _=t.getJointPose(m,n),g=this._getHandJoint(c,m);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&u>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new sl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},al={h:0,s:0,l:0};function qc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=yf(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=qc(a,s,e+1/3),this.g=qc(a,s,e),this.b=qc(a,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=mi){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const n=T0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return ct.workingToColorSpace(En.copy(this),e),Math.round(ot(En.r*255,0,255))*65536+Math.round(ot(En.g*255,0,255))*256+Math.round(ot(En.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(En.copy(this),t);const n=En.r,r=En.g,s=En.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=mi){ct.workingToColorSpace(En.copy(this),e);const t=En.r,n=En.g,r=En.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(al);const n=xo(Cr.h,al.h,t),r=xo(Cr.s,al.s,t),s=xo(Cr.l,al.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new mt;mt.NAMES=T0;class xx extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cs,this.environmentIntensity=1,this.environmentRotation=new Cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ti=new $,ir=new $,$c=new $,rr=new $,Ys=new $,qs=new $,Od=new $,Kc=new $,Zc=new $,Jc=new $,Qc=new Gt,jc=new Gt,eu=new Gt;class Ci{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ti.subVectors(e,t),r.cross(Ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ti.subVectors(r,t),ir.subVectors(n,t),$c.subVectors(e,t);const a=Ti.dot(Ti),o=Ti.dot(ir),l=Ti.dot($c),c=ir.dot(ir),f=ir.dot($c),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,h=(c*l-o*f)*u,p=(a*f-o*l)*u;return s.set(1-h-p,p,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rr.x),l.addScaledVector(a,rr.y),l.addScaledVector(o,rr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Qc.setScalar(0),jc.setScalar(0),eu.setScalar(0),Qc.fromBufferAttribute(e,t),jc.fromBufferAttribute(e,n),eu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qc,s.x),a.addScaledVector(jc,s.y),a.addScaledVector(eu,s.z),a}static isFrontFacing(e,t,n,r){return Ti.subVectors(n,t),ir.subVectors(e,t),Ti.cross(ir).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ti.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ci.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ys.subVectors(r,n),qs.subVectors(s,n),Kc.subVectors(e,n);const l=Ys.dot(Kc),c=qs.dot(Kc);if(l<=0&&c<=0)return t.copy(n);Zc.subVectors(e,r);const f=Ys.dot(Zc),d=qs.dot(Zc);if(f>=0&&d<=f)return t.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Ys,a);Jc.subVectors(e,s);const h=Ys.dot(Jc),p=qs.dot(Jc);if(p>=0&&h<=p)return t.copy(s);const m=h*c-l*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(qs,o);const _=f*p-h*d;if(_<=0&&d-f>=0&&h-p>=0)return Od.subVectors(s,r),o=(d-f)/(d-f+(h-p)),t.copy(r).addScaledVector(Od,o);const g=1/(_+m+u);return a=m*g,o=u*g,t.copy(n).addScaledVector(Ys,a).addScaledVector(qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zo{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wi):wi.fromBufferAttribute(s,a),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ol.copy(n.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),ll.subVectors(this.max,za),$s.subVectors(e.a,za),Ks.subVectors(e.b,za),Zs.subVectors(e.c,za),Pr.subVectors(Ks,$s),Dr.subVectors(Zs,Ks),ts.subVectors($s,Zs);let t=[0,-Pr.z,Pr.y,0,-Dr.z,Dr.y,0,-ts.z,ts.y,Pr.z,0,-Pr.x,Dr.z,0,-Dr.x,ts.z,0,-ts.x,-Pr.y,Pr.x,0,-Dr.y,Dr.x,0,-ts.y,ts.x,0];return!tu(t,$s,Ks,Zs,ll)||(t=[1,0,0,0,1,0,0,0,1],!tu(t,$s,Ks,Zs,ll))?!1:(cl.crossVectors(Pr,Dr),t=[cl.x,cl.y,cl.z],tu(t,$s,Ks,Zs,ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new $,new $,new $,new $,new $,new $,new $,new $],wi=new $,ol=new zo,$s=new $,Ks=new $,Zs=new $,Pr=new $,Dr=new $,ts=new $,za=new $,ll=new $,cl=new $,ns=new $;function tu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ns.fromArray(i,s);const o=r.x*Math.abs(ns.x)+r.y*Math.abs(ns.y)+r.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),f=n.dot(ns);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Qt=new $,ul=new ht;let Mx=0;class Qi extends Ls{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bv,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ul.fromBufferAttribute(this,t),ul.applyMatrix3(e),this.setXY(t,ul.x,ul.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=aa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=aa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=aa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=aa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=aa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),r=Nn(r,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class w0 extends Qi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class A0 extends Qi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vr extends Qi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Sx=new zo,Ha=new $,nu=new $;class _c{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const t=Ha.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ha,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(nu)),this.expandByPoint(Ha.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yx=0;const di=new $t,iu=new Kn,Js=new $,Qn=new zo,Ga=new zo,hn=new $;class Ui extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kv(e)?A0:w0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vr(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _c);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ga.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Qn.min,Ga.min),Qn.expandByPoint(hn),hn.addVectors(Qn.max,Ga.max),Qn.expandByPoint(hn)):(Qn.expandByPoint(Ga.min),Qn.expandByPoint(Ga.max))}Qn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)hn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(hn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)hn.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(e,c),hn.add(Js)),r=Math.max(r,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new $,l[S]=new $;const c=new $,f=new $,d=new $,u=new ht,h=new ht,p=new ht,m=new $,_=new $;function g(S,A,R){c.fromBufferAttribute(n,S),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,R),u.fromBufferAttribute(s,S),h.fromBufferAttribute(s,A),p.fromBufferAttribute(s,R),f.sub(c),d.sub(c),h.sub(u),p.sub(u);const I=1/(h.x*p.y-p.x*h.y);isFinite(I)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(I),_.copy(d).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(I),o[S].add(m),o[A].add(m),o[R].add(m),l[S].add(_),l[A].add(_),l[R].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,A=x.length;S<A;++S){const R=x[S],I=R.start,D=R.count;for(let O=I,L=I+D;O<L;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new $,v=new $,M=new $,T=new $;function b(S){M.fromBufferAttribute(r,S),T.copy(M);const A=o[S];E.copy(A),E.sub(M.multiplyScalar(M.dot(A))).normalize(),v.crossVectors(T,A);const I=v.dot(l[S])<0?-1:1;a.setXYZW(S,E.x,E.y,E.z,I)}for(let S=0,A=x.length;S<A;++S){const R=x[S],I=R.start,D=R.count;for(let O=I,L=I+D;O<L;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,f=new $,d=new $;if(e)for(let u=0,h=e.count;u<h;u+=3){const p=e.getX(u+0),m=e.getX(u+1),_=e.getX(u+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),o.add(f),l.add(f),c.add(f),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,u=new c.constructor(l.length*f);let h=0,p=0;for(let m=0,_=l.length;m<_;m++){o.isInterleavedBufferAttribute?h=l[m]*o.data.stride+o.offset:h=l[m]*f;for(let g=0;g<f;g++)u[p++]=c[h++]}return new Qi(u,f,d)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ui,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const u=c[f],h=e(u,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const h=c[d];f.push(h.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,h=d.length;u<h;u++)f.push(d[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ru=new $,Ex=new $,bx=new Ke;class Ur{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ru.subVectors(n,t).cross(Ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ru),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bx.getNormalMatrix(e),r=this.coplanarPoint(ru).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Tx=0;class Ho extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=La(),this.name="",this.type="Material",this.blending=go,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=r0,this.blendDst=s0,this.blendEquation=sa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zc,this.stencilZFail=zc,this.stencilZPass=zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ur().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ht().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ar=new $,su=new $,hl=new $,fl=new $;class R0{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){su.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),fl.copy(this.origin).sub(su);const s=e.distanceTo(t)*.5,a=-this.direction.dot(hl),o=fl.dot(this.direction),l=-fl.dot(hl),c=fl.lengthSq(),f=Math.abs(1-a*a);let d,u,h,p;if(f>0)if(d=a*l-o,u=a*o-l,p=s*f,d>=0)if(u>=-p)if(u<=p){const m=1/f;d*=m,u*=m,h=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(su).addScaledVector(hl,u),h}intersectSphere(e,t){if(e.radius<0)return null;ar.subVectors(e.center,this.origin);const n=ar.dot(this.direction),r=ar.dot(ar)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,d=e.x-a.x,u=e.y-a.y,h=e.z-a.z,p=t.x-a.x,m=t.y-a.y,_=t.z-a.z,g=n.x-a.x,x=n.y-a.y,E=n.z-a.z,v=Math.abs(l),M=Math.abs(c),T=Math.abs(f);let b,S,A,R,I,D,O,L,F,Y,k,J;if(v>=M&&v>=T?(A=l,D=d,F=p,J=g,l>=0?(b=c,S=f,R=u,I=h,O=m,L=_,Y=x,k=E):(b=f,S=c,R=h,I=u,O=_,L=m,Y=E,k=x)):M>=T?(A=c,D=u,F=m,J=x,c>=0?(b=f,S=l,R=h,I=d,O=_,L=p,Y=E,k=g):(b=l,S=f,R=d,I=h,O=p,L=_,Y=g,k=E)):(A=f,D=h,F=_,J=E,f>=0?(b=l,S=c,R=d,I=u,O=p,L=m,Y=g,k=x):(b=c,S=l,R=u,I=d,O=m,L=p,Y=x,k=g)),A===0)return null;const H=b/A,C=S/A,j=1/A,Se=R-H*D,ye=I-C*D,He=O-H*F,ze=L-C*F,Ve=Y-H*J,K=k-C*J,ee=Ve*ze-K*He,ge=Se*K-ye*Ve,Be=He*ye-ze*Se;if(r){if(ee<0||ge<0||Be<0)return null}else if((ee<0||ge<0||Be<0)&&(ee>0||ge>0||Be>0))return null;const me=ee+ge+Be;if(me===0)return null;const Fe=j*(ee*D+ge*F+Be*J);return(me>0?Fe<0:Fe>0)?null:this.at(Fe/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class C0 extends Ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cs,this.combine=a0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bd=new $t,is=new R0,dl=new _c,kd=new $,pl=new $,ml=new $,_l=new $,au=new $,gl=new $,zd=new $,vl=new $;class Er extends Kn{constructor(e=new Ui,t=new C0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(au.fromBufferAttribute(d,e),a?gl.addScaledVector(au,f):gl.addScaledVector(au.sub(t),f))}t.add(gl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(s),is.copy(e.ray).recast(e.near),!(dl.containsPoint(is.origin)===!1&&(is.intersectSphere(dl,kd)===null||is.origin.distanceToSquared(kd)>(e.far-e.near)**2))&&(Bd.copy(s).invert(),is.copy(e.ray).applyMatrix4(Bd),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,m=u.length;p<m;p++){const _=u[p],g=a[_.materialIndex],x=Math.max(_.start,h.start),E=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let v=x,M=E;v<M;v+=3){const T=o.getX(v),b=o.getX(v+1),S=o.getX(v+2);r=xl(this,g,e,n,c,f,d,T,b,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),m=Math.min(o.count,h.start+h.count);for(let _=p,g=m;_<g;_+=3){const x=o.getX(_),E=o.getX(_+1),v=o.getX(_+2);r=xl(this,a,e,n,c,f,d,x,E,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,m=u.length;p<m;p++){const _=u[p],g=a[_.materialIndex],x=Math.max(_.start,h.start),E=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let v=x,M=E;v<M;v+=3){const T=v,b=v+1,S=v+2;r=xl(this,g,e,n,c,f,d,T,b,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let _=p,g=m;_<g;_+=3){const x=_,E=_+1,v=_+2;r=xl(this,a,e,n,c,f,d,x,E,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function wx(i,e,t,n,r,s,a,o){let l;if(e.side===$n?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===ws,o),l===null)return null;vl.copy(o),vl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vl);return c<t.near||c>t.far?null:{distance:c,point:vl.clone(),object:i}}function xl(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,pl),i.getVertexPosition(l,ml),i.getVertexPosition(c,_l);const f=wx(i,e,t,n,pl,ml,_l,zd);if(f){const d=new $;Ci.getBarycoord(zd,pl,ml,_l,d),r&&(f.uv=Ci.getInterpolatedAttribute(r,o,l,c,d,new ht)),s&&(f.uv1=Ci.getInterpolatedAttribute(s,o,l,c,d,new ht)),a&&(f.normal=Ci.getInterpolatedAttribute(a,o,l,c,d,new $),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new $,materialIndex:0};Ci.getNormal(pl,ml,_l,u.normal),f.face=u,f.barycoord=d}return f}class Ax extends Hn{constructor(e=null,t=1,n=1,r,s,a,o,l,c=gn,f=gn,d,u){super(null,a,o,l,c,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rs=new _c,Rx=new ht(.5,.5),Ml=new $;class P0{constructor(e=new Ur,t=new Ur,n=new Ur,r=new Ur,s=new Ur,a=new Ur){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],d=s[5],u=s[6],h=s[7],p=s[8],m=s[9],_=s[10],g=s[11],x=s[12],E=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-a,h-f,g-p,M-x).normalize(),r[1].setComponents(c+a,h+f,g+p,M+x).normalize(),r[2].setComponents(c+o,h+d,g+m,M+E).normalize(),r[3].setComponents(c-o,h-d,g-m,M-E).normalize(),n)r[4].setComponents(l,u,_,v).normalize(),r[5].setComponents(c-l,h-u,g-_,M-v).normalize();else if(r[4].setComponents(c-l,h-u,g-_,M-v).normalize(),t===$i)r[5].setComponents(c+l,h+u,g+_,M+v).normalize();else if(t===oc)r[5].setComponents(l,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=Rx.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ml.x=r.normal.x>0?e.max.x:e.min.x,Ml.y=r.normal.y>0?e.max.y:e.min.y,Ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cx extends Ho{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hd=new $t,Rh=new R0,Sl=new _c,yl=new $;class Px extends Kn{constructor(e=new Ui,t=new Cx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sl.copy(n.boundingSphere),Sl.applyMatrix4(r),Sl.radius+=s,e.ray.intersectsSphere(Sl)===!1)return;Hd.copy(r).invert(),Rh.copy(e.ray).applyMatrix4(Hd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let p=u,m=h;p<m;p++){const _=c.getX(p);yl.fromBufferAttribute(d,_),Gd(yl,_,l,r,e,t,this)}}else{const u=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let p=u,m=h;p<m;p++)yl.fromBufferAttribute(d,p),Gd(yl,p,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Gd(i,e,t,n,r,s,a){const o=Rh.distanceSqToPoint(i);if(o<t){const l=new $;Rh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class D0 extends Hn{constructor(e=[],t=As,n,r,s,a,o,l,c,f){super(e,t,n,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uo extends Hn{constructor(e,t,n=er,r,s,a,o=gn,l=gn,c,f=yr,d=1){if(f!==yr&&f!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,r,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ef(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Dx extends Uo{constructor(e,t=er,n=As,r,s,a=gn,o=gn,l,c=yr){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class L0 extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Go extends Ui{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let u=0,h=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,r,a,2),p("x","z","y",1,-1,e,n,-t,r,a,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new vr(c,3)),this.setAttribute("normal",new vr(f,3)),this.setAttribute("uv",new vr(d,2));function p(m,_,g,x,E,v,M,T,b,S,A){const R=v/b,I=M/S,D=v/2,O=M/2,L=T/2,F=b+1,Y=S+1;let k=0,J=0;const H=new $;for(let C=0;C<Y;C++){const j=C*I-O;for(let Se=0;Se<F;Se++){const ye=Se*R-D;H[m]=ye*x,H[_]=j*E,H[g]=L,c.push(H.x,H.y,H.z),H[m]=0,H[_]=0,H[g]=T>0?1:-1,f.push(H.x,H.y,H.z),d.push(Se/b),d.push(1-C/S),k+=1}}for(let C=0;C<S;C++)for(let j=0;j<b;j++){const Se=u+j+F*C,ye=u+j+F*(C+1),He=u+(j+1)+F*(C+1),ze=u+(j+1)+F*C;l.push(Se,ye,ze),l.push(ye,He,ze),J+=6}o.addGroup(h,J,A),h+=J,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gc extends Ui{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,f=l+1,d=e/o,u=t/l,h=[],p=[],m=[],_=[];for(let g=0;g<f;g++){const x=g*u-a;for(let E=0;E<c;E++){const v=E*d-s;p.push(v,-x,0),m.push(0,0,1),_.push(E/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const E=x+c*g,v=x+c*(g+1),M=x+1+c*(g+1),T=x+1+c*g;h.push(E,v,T),h.push(v,M,T)}this.setIndex(h),this.setAttribute("position",new vr(p,3)),this.setAttribute("normal",new vr(m,3)),this.setAttribute("uv",new vr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Da(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Vd(r))r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Vd(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Fn(i){const e={};for(let t=0;t<i.length;t++){const n=Da(i[t]);for(const r in n)e[r]=n[r]}return e}function Vd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function I0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Ix={clone:Da,merge:Fn};var Ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ux,this.fragmentShader=Nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Da(e.uniforms),this.uniformsGroups=Lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new mt().setHex(r.value);break;case"v2":this.uniforms[n].value=new ht().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Gt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(r.value);break;case"m4":this.uniforms[n].value=new $t().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Fx extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ox extends Ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bx extends Ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const El=new $,bl=new Ia,Bi=new $;class U0 extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(El,bl,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,bl,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(El,bl,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,bl,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new $,Wd=new ht,Xd=new ht;class vi extends U0{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,Wd,Xd),t.subVectors(Xd,Wd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class N0 extends U0{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qs=-90,js=1;class kx extends Kn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vi(Qs,js,e,t);r.layers=this.layers,this.add(r);const s=new vi(Qs,js,e,t);s.layers=this.layers,this.add(s);const a=new vi(Qs,js,e,t);a.layers=this.layers,this.add(a);const o=new vi(Qs,js,e,t);o.layers=this.layers,this.add(o);const l=new vi(Qs,js,e,t);l.layers=this.layers,this.add(l);const c=new vi(Qs,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,u,h),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class zx extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Lf=class Lf{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Lf.prototype.isMatrix2=!0;let Yd=Lf;function qd(i,e,t,n){const r=Hx(n);switch(t){case x0:return i*e;case S0:return i*e/r.components*r.byteLength;case gf:return i*e/r.components*r.byteLength;case Rs:return i*e*2/r.components*r.byteLength;case vf:return i*e*2/r.components*r.byteLength;case M0:return i*e*3/r.components*r.byteLength;case Pi:return i*e*4/r.components*r.byteLength;case xf:return i*e*4/r.components*r.byteLength;case Hl:case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ju:case th:return Math.max(i,16)*Math.max(e,8)/4;case Qu:case eh:return Math.max(i,8)*Math.max(e,8)/2;case nh:case ih:case sh:case ah:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rh:case ic:case oh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ph:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _h:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yh:case Eh:case bh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Th:case wh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rc:case Ah:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hx(i){switch(i){case xi:case m0:return{byteLength:1,components:1};case Do:case _0:case tr:return{byteLength:2,components:1};case mf:case _f:return{byteLength:2,components:4};case er:case pf:case qi:return{byteLength:4,components:1};case g0:case v0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:df}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=df);function F0(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Gx(i){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const f=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,f);else{d.sort((h,p)=>h.start-p.start);let u=0;for(let h=1;h<d.length;h++){const p=d[u],m=d[h];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++u,d[u]=m)}d.length=u+1;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.bufferSubData(c,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xM="gl_FragColor = linearToOutputTexel( gl_FragColor );",MM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,NM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,YM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ES=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,US=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ry=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ly=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,py=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_y=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Vx,alphahash_pars_fragment:Wx,alphamap_fragment:Xx,alphamap_pars_fragment:Yx,alphatest_fragment:qx,alphatest_pars_fragment:$x,aomap_fragment:Kx,aomap_pars_fragment:Zx,batching_pars_vertex:Jx,batching_vertex:Qx,begin_vertex:jx,beginnormal_vertex:eM,bsdfs:tM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:oM,color_fragment:lM,color_pars_fragment:cM,color_pars_vertex:uM,color_vertex:hM,common:fM,cube_uv_reflection_fragment:dM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:_M,emissivemap_fragment:gM,emissivemap_pars_fragment:vM,colorspace_fragment:xM,colorspace_pars_fragment:MM,envmap_fragment:SM,envmap_common_pars_fragment:yM,envmap_pars_fragment:EM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:NM,envmap_vertex:TM,fog_vertex:wM,fog_pars_vertex:AM,fog_fragment:RM,fog_pars_fragment:CM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:DM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:IM,lights_pars_begin:UM,lights_toon_fragment:FM,lights_toon_pars_fragment:OM,lights_phong_fragment:BM,lights_phong_pars_fragment:kM,lights_physical_fragment:zM,lights_physical_pars_fragment:HM,lights_fragment_begin:GM,lights_fragment_maps:VM,lights_fragment_end:WM,lightprobes_pars_fragment:XM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:KM,map_fragment:ZM,map_pars_fragment:JM,map_particle_fragment:QM,map_particle_pars_fragment:jM,metalnessmap_fragment:eS,metalnessmap_pars_fragment:tS,morphinstance_vertex:nS,morphcolor_vertex:iS,morphnormal_vertex:rS,morphtarget_pars_vertex:sS,morphtarget_vertex:aS,normal_fragment_begin:oS,normal_fragment_maps:lS,normal_pars_fragment:cS,normal_pars_vertex:uS,normal_vertex:hS,normalmap_pars_fragment:fS,clearcoat_normal_fragment_begin:dS,clearcoat_normal_fragment_maps:pS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:_S,opaque_fragment:gS,packing:vS,premultiplied_alpha_fragment:xS,project_vertex:MS,dithering_fragment:SS,dithering_pars_fragment:yS,roughnessmap_fragment:ES,roughnessmap_pars_fragment:bS,shadowmap_pars_fragment:TS,shadowmap_pars_vertex:wS,shadowmap_vertex:AS,shadowmask_pars_fragment:RS,skinbase_vertex:CS,skinning_pars_vertex:PS,skinning_vertex:DS,skinnormal_vertex:LS,specularmap_fragment:IS,specularmap_pars_fragment:US,tonemapping_fragment:NS,tonemapping_pars_fragment:FS,transmission_fragment:OS,transmission_pars_fragment:BS,uv_pars_fragment:kS,uv_pars_vertex:zS,uv_vertex:HS,worldpos_vertex:GS,background_vert:VS,background_frag:WS,backgroundCube_vert:XS,backgroundCube_frag:YS,cube_vert:qS,cube_frag:$S,depth_vert:KS,depth_frag:ZS,distance_vert:JS,distance_frag:QS,equirect_vert:jS,equirect_frag:ey,linedashed_vert:ty,linedashed_frag:ny,meshbasic_vert:iy,meshbasic_frag:ry,meshlambert_vert:sy,meshlambert_frag:ay,meshmatcap_vert:oy,meshmatcap_frag:ly,meshnormal_vert:cy,meshnormal_frag:uy,meshphong_vert:hy,meshphong_frag:fy,meshphysical_vert:dy,meshphysical_frag:py,meshtoon_vert:my,meshtoon_frag:_y,points_vert:gy,points_frag:vy,shadow_vert:xy,shadow_frag:My,sprite_vert:Sy,sprite_frag:yy},xe={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Gi={basic:{uniforms:Fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Fn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Fn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new mt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Fn([xe.points,xe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Fn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Fn([xe.common,xe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Fn([xe.sprite,xe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Fn([xe.common,xe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Fn([xe.lights,xe.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Gi.physical={uniforms:Fn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Tl={r:0,b:0,g:0},Ey=new $t,O0=new Ke;O0.set(-1,0,0,0,1,0,0,0,1);function by(i,e,t,n,r,s){const a=new mt(0);let o=r===!0?0:1,l,c,f=null,d=0,u=null;function h(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const v=x.backgroundBlurriness>0;E=e.get(E,v)}return E}function p(x){let E=!1;const v=h(x);v===null?_(a,o):v&&v.isColor&&(_(v,1),E=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,E){const v=h(E);v&&(v.isCubeTexture||v.mapping===mc)?(c===void 0&&(c=new Er(new Go(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Da(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(O0),c.material.toneMapped=ct.getTransfer(v.colorSpace)!==Mt,(f!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Er(new gc(2,2),new Ii({name:"BackgroundMaterial",uniforms:Da(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ct.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function _(x,E){x.getRGB(Tl,I0(i)),t.buffers.color.setClear(Tl.r,Tl.g,Tl.b,E,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,_(a,o)},render:p,addToRenderList:m,dispose:g}}function Ty(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(I,D,O,L,F){let Y=!1;const k=d(I,L,O,D);s!==k&&(s=k,c(s.object)),Y=h(I,L,O,F),Y&&p(I,L,O,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(I,D,O,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function f(I){return i.deleteVertexArray(I)}function d(I,D,O,L){const F=L.wireframe===!0;let Y=n[D.id];Y===void 0&&(Y={},n[D.id]=Y);const k=I.isInstancedMesh===!0?I.id:0;let J=Y[k];J===void 0&&(J={},Y[k]=J);let H=J[O.id];H===void 0&&(H={},J[O.id]=H);let C=H[F];return C===void 0&&(C=u(l()),H[F]=C),C}function u(I){const D=[],O=[],L=[];for(let F=0;F<t;F++)D[F]=0,O[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:L,object:I,attributes:{},index:null}}function h(I,D,O,L){const F=s.attributes,Y=D.attributes;let k=0;const J=O.getAttributes();for(const H in J)if(J[H].location>=0){const j=F[H];let Se=Y[H];if(Se===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor)),j===void 0||j.attribute!==Se||Se&&j.data!==Se.data)return!0;k++}return s.attributesNum!==k||s.index!==L}function p(I,D,O,L){const F={},Y=D.attributes;let k=0;const J=O.getAttributes();for(const H in J)if(J[H].location>=0){let j=Y[H];j===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const Se={};Se.attribute=j,j&&j.data&&(Se.data=j.data),F[H]=Se,k++}s.attributes=F,s.attributesNum=k,s.index=L}function m(){const I=s.newAttributes;for(let D=0,O=I.length;D<O;D++)I[D]=0}function _(I){g(I,0)}function g(I,D){const O=s.newAttributes,L=s.enabledAttributes,F=s.attributeDivisors;O[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),F[I]!==D&&(i.vertexAttribDivisor(I,D),F[I]=D)}function x(){const I=s.newAttributes,D=s.enabledAttributes;for(let O=0,L=D.length;O<L;O++)D[O]!==I[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function E(I,D,O,L,F,Y,k){k===!0?i.vertexAttribIPointer(I,D,O,F,Y):i.vertexAttribPointer(I,D,O,L,F,Y)}function v(I,D,O,L){m();const F=L.attributes,Y=O.getAttributes(),k=D.defaultAttributeValues;for(const J in Y){const H=Y[J];if(H.location>=0){let C=F[J];if(C===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(C=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(C=I.instanceColor)),C!==void 0){const j=C.normalized,Se=C.itemSize,ye=e.get(C);if(ye===void 0)continue;const He=ye.buffer,ze=ye.type,Ve=ye.bytesPerElement,K=ze===i.INT||ze===i.UNSIGNED_INT||C.gpuType===pf;if(C.isInterleavedBufferAttribute){const ee=C.data,ge=ee.stride,Be=C.offset;if(ee.isInstancedInterleavedBuffer){for(let me=0;me<H.locationSize;me++)g(H.location+me,ee.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<H.locationSize;me++)_(H.location+me);i.bindBuffer(i.ARRAY_BUFFER,He);for(let me=0;me<H.locationSize;me++)E(H.location+me,Se/H.locationSize,ze,j,ge*Ve,(Be+Se/H.locationSize*me)*Ve,K)}else{if(C.isInstancedBufferAttribute){for(let ee=0;ee<H.locationSize;ee++)g(H.location+ee,C.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ee=0;ee<H.locationSize;ee++)_(H.location+ee);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ee=0;ee<H.locationSize;ee++)E(H.location+ee,Se/H.locationSize,ze,j,Se*Ve,Se/H.locationSize*ee*Ve,K)}}else if(k!==void 0){const j=k[J];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(H.location,j);break;case 3:i.vertexAttrib3fv(H.location,j);break;case 4:i.vertexAttrib4fv(H.location,j);break;default:i.vertexAttrib1fv(H.location,j)}}}}x()}function M(){A();for(const I in n){const D=n[I];for(const O in D){const L=D[O];for(const F in L){const Y=L[F];for(const k in Y)f(Y[k].object),delete Y[k];delete L[F]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const D=n[I.id];for(const O in D){const L=D[O];for(const F in L){const Y=L[F];for(const k in Y)f(Y[k].object),delete Y[k];delete L[F]}}delete n[I.id]}function b(I){for(const D in n){const O=n[D];for(const L in O){const F=O[L];if(F[I.id]===void 0)continue;const Y=F[I.id];for(const k in Y)f(Y[k].object),delete Y[k];delete F[I.id]}}}function S(I){for(const D in n){const O=n[D],L=I.isInstancedMesh===!0?I.id:0,F=O[L];if(F!==void 0){for(const Y in F){const k=F[Y];for(const J in k)f(k[J].object),delete k[J];delete F[Y]}delete O[L],Object.keys(O).length===0&&delete n[D]}}}function A(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:b,initAttributes:m,enableAttribute:_,disableUnusedAttributes:x}}function wy(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let h=0;h<f;h++)u+=c[h];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ay(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Pi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const S=b===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==xi&&b!==qi&&!S&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Ye("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:v,maxSamples:M,samples:T}}function Ry(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ur,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const h=d.length!==0||u||n!==0||r;return r=u,n=d.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=f(d,u,0)},this.setState=function(d,u,h){const p=d.clippingPlanes,m=d.clipIntersection,_=d.clipShadows,g=i.get(d);if(!r||p===null||p.length===0||s&&!_)s?f(null):c();else{const x=s?0:n,E=x*4;let v=g.clippingState||null;l.value=v,v=f(p,u,E,h);for(let M=0;M!==E;++M)v[M]=t[M];g.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,u,h,p){const m=d!==null?d.length:0;let _=null;if(m!==0){if(_=l.value,p!==!0||_===null){const g=h+m*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(_===null||_.length<g)&&(_=new Float32Array(g));for(let E=0,v=h;E!==m;++E,v+=4)a.copy(d[E]).applyMatrix4(x,o),a.normal.toArray(_,v),_[v+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}}const fa=4,Cy=6,Py=20,Dy=256,Va=new N0,$d=new mt;let ou=null,lu=0,cu=0,uu=!1;const Ly=new $,ss=new $;class Kd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Ly}=s;ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,lu,cu),this._renderer.xr.enabled=uu,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:tr,format:Pi,colorSpace:sc,depthBuffer:!1},r=Zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Iy(s)),this._blurMaterial=Ny(s,e,t),this._ggxMaterial=Uy(s,e,t)}return r}_compileMaterial(e){const t=new Er(new Ui,e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,r,s){const l=new vi(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor($d),d.toneMapping=Ji,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Er(new Go,new C0({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,_=m.material;let g=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,g=!0):(_.color.copy($d),g=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[E],s.y,s.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[E]));const M=this._cubeSize;ea(r,v*M,E>2?M:0,M,M),d.setRenderTarget(r),g&&d.render(m,l),d.render(e,l)}d.toneMapping=h,d.autoClear=u,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===As||e.mapping===Pa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),u=c*1.25,h=d*u,{_lodMax:p}=this,m=this._sizeLods[n],_=3*m*(n>p-fa?n-p+fa:0),g=4*(this._cubeSize-m);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=p-t,ea(s,_,g,3*m,2*m),r.setRenderTarget(s),r.render(o,Va),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,ea(e,_,g,3*m,2*m),r.setRenderTarget(e),r.render(o,Va)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const f=this._sizeLods[r],d=3*f*(r>this._lodMax-fa?r-this._lodMax+fa:0),u=4*(this._cubeSize-f);ea(t,d,u,3*f,2*f),a.setRenderTarget(t),a.render(l,Va)}}function Iy(i){const e=[],t=[];let n=i;const r=i-fa+1+Cy;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,h=3,p=new Float32Array(h*u*d),m=new Float32Array(h*u*d);for(let g=0;g<d;g++){const x=g%3*2/3-1,E=g>2?0:-1,v=[x,E,0,x+2/3,E,0,x+2/3,E+1,0,x,E,0,x+2/3,E+1,0,x,E+1,0];p.set(v,h*u*g);for(let M=0;M<u;M++){const T=f[M*2]*2-1,b=f[M*2+1]*2-1;g===0?ss.set(1,b,T):g===1?ss.set(-T,1,-b):g===2?ss.set(-T,b,1):g===3?ss.set(-1,b,-T):g===4?ss.set(-T,-1,b):ss.set(T,b,-1),ss.toArray(m,(g*u+M)*h)}}const _=new Ui;_.setAttribute("position",new Qi(p,h)),_.setAttribute("outputDirection",new Qi(m,h)),t.push(new Er(_,null)),n>fa&&n--}return{lodMeshes:t,sizeLods:e}}function Zd(i,e,t){const n=new Li(i,e,t);return n.texture.mapping=mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ea(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Uy(i,e,t){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Ny(i,e,t){return new Ii({name:"SphericalGaussianBlur",defines:{SAMPLES:Py,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Jd(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Qd(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class B0 extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new D0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Go(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:Da(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$n,blending:_r});s.uniforms.tEquirect.value=t;const a=new Er(r,s),o=t.minFilter;return t.minFilter===ds&&(t.minFilter=Rn),new kx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Fy(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,h=!1){return u==null?null:h?a(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===Oc||h===Bc)if(e.has(u)){const p=e.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new B0(p.height);return m.fromEquirectangularTexture(i,u),e.set(u,m),u.addEventListener("dispose",c),o(m.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const h=u.mapping,p=h===Oc||h===Bc,m=h===As||h===Pa;if(p||m){let _=t.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Kd(i)),_=p?n.fromEquirectangular(u,_):n.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const x=u.image;return p&&x&&x.height>0||m&&x&&l(x)?(n===null&&(n=new Kd(i)),_=p?n.fromEquirectangular(u):n.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",f),_.texture):null}}}return u}function o(u,h){return h===Oc?u.mapping=As:h===Bc&&(u.mapping=Pa),u}function l(u){let h=0;const p=6;for(let m=0;m<p;m++)u[m]!==void 0&&h++;return h===p}function c(u){const h=u.target;h.removeEventListener("dispose",c);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(u){const h=u.target;h.removeEventListener("dispose",f);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Oy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ma("WebGLRenderer: "+n+" extension not supported."),r}}}function By(i,e,t,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete r[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const h in u)e.update(u[h],i.ARRAY_BUFFER)}function c(d){const u=[],h=d.index,p=d.attributes.position;let m=0;if(p===void 0)return;if(h!==null){const x=h.array;m=h.version;for(let E=0,v=x.length;E<v;E+=3){const M=x[E+0],T=x[E+1],b=x[E+2];u.push(M,T,T,b,b,M)}}else{const x=p.array;m=p.version;for(let E=0,v=x.length/3-1;E<v;E+=3){const M=E+0,T=E+1,b=E+2;u.push(M,T,T,b,b,M)}}const _=new(p.count>=65535?A0:w0)(u,1);_.version=m;const g=s.get(d);g&&e.remove(g),s.set(d,_)}function f(d){const u=s.get(d);if(u){const h=d.index;h!==null&&u.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function ky(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,s,d*a),t.update(u,n,1)}function c(d,u,h){h!==0&&(i.drawElementsInstanced(n,u,s,d*a,h),t.update(u,n,h))}function f(d,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function zy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Hy(i,e,t){const n=new WeakMap,r=new Gt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let R=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var h=R;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),m===!0&&(v=2),_===!0&&(v=3);let M=o.attributes.position.count*v,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*T*4*d),S=new E0(b,M,T,d);S.type=qi,S.needsUpdate=!0;const A=v*4;for(let I=0;I<d;I++){const D=g[I],O=x[I],L=E[I],F=M*T*4*I;for(let Y=0;Y<D.count;Y++){const k=Y*A;p===!0&&(r.fromBufferAttribute(D,Y),b[F+k+0]=r.x,b[F+k+1]=r.y,b[F+k+2]=r.z,b[F+k+3]=0),m===!0&&(r.fromBufferAttribute(O,Y),b[F+k+4]=r.x,b[F+k+5]=r.y,b[F+k+6]=r.z,b[F+k+7]=0),_===!0&&(r.fromBufferAttribute(L,Y),b[F+k+8]=r.x,b[F+k+9]=r.y,b[F+k+10]=r.z,b[F+k+11]=L.itemSize===4?r.w:1)}}u={count:d,texture:S,size:new ht(M,T)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Gy(i,e,t,n,r){let s=new WeakMap;function a(c){const f=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return u}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Vy={[o0]:"LINEAR_TONE_MAPPING",[l0]:"REINHARD_TONE_MAPPING",[c0]:"CINEON_TONE_MAPPING",[u0]:"ACES_FILMIC_TONE_MAPPING",[f0]:"AGX_TONE_MAPPING",[d0]:"NEUTRAL_TONE_MAPPING",[h0]:"CUSTOM_TONE_MAPPING"};function Wy(i,e,t,n,r,s){const a=new Li(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ui;c.setAttribute("position",new vr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new vr([0,2,0,0,2,0],2));const f=new Fx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Er(c,f),u=new N0(-1,1,1,-1,0,1);let h=null,p=null,m=!1,_,g=null,x=[],E=!1;this.setSize=function(v,M){a.setSize(v,M),o!==null&&o.setSize(v,M),l!==null&&l.setSize(v,M);for(let T=0;T<x.length;T++){const b=x[T];b.setSize&&b.setSize(v,M)}},this.setEffects=function(v){x=v,E=x.length>0&&x[0].isRenderPass===!0;const M=a.width,T=a.height;x.length>0&&o===null&&(o=new Li(M,T,{type:tr,depthBuffer:!1,stencilBuffer:!1}),l=new Li(M,T,{type:tr,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<x.length;b++){const S=x[b];S.setSize&&S.setSize(M,T)}},this.begin=function(v,M){if(m||v.toneMapping===Ji&&x.length===0)return!1;if(g=M,M!==null){const T=M.width,b=M.height;(a.width!==T||a.height!==b)&&this.setSize(T,b)}return E===!1&&v.setRenderTarget(a),_=v.toneMapping,v.toneMapping=Ji,!0},this.hasRenderPass=function(){return E},this.end=function(v,M){v.toneMapping=_,m=!0;let T=a,b=o;for(let S=0;S<x.length;S++){const A=x[S];A.enabled!==!1&&(A.render(v,b,T,M),A.needsSwap!==!1&&(T=b,b=b===o?l:o))}if(h!==v.outputColorSpace||p!==v.toneMapping){h=v.outputColorSpace,p=v.toneMapping,f.defines={},ct.getTransfer(h)===Mt&&(f.defines.SRGB_TRANSFER="");const S=Vy[p];S&&(f.defines[S]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(g),v.render(d,u),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const k0=new Hn,Ch=new Uo(1,1),z0=new E0,H0=new hx,G0=new D0,jd=[],ep=[],tp=new Float32Array(16),np=new Float32Array(9),ip=new Float32Array(4);function Ua(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=jd[r];if(s===void 0&&(s=new Float32Array(r),jd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xc(i,e){let t=ep[e];t===void 0&&(t=new Int32Array(e),ep[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function qy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function $y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function Ky(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;ip.set(n),i.uniformMatrix2fv(this.addr,!1,ip),ln(t,n)}}function Zy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;np.set(n),i.uniformMatrix3fv(this.addr,!1,np),ln(t,n)}}function Jy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;tp.set(n),i.uniformMatrix4fv(this.addr,!1,tp),ln(t,n)}}function Qy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function e1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function t1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function n1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function i1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function r1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function s1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function a1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ch.compareFunction=t.isReversedDepthBuffer()?Sf:Mf,s=Ch):s=k0,t.setTexture2D(e||s,r)}function o1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||H0,r)}function l1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||G0,r)}function c1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||z0,r)}function u1(i){switch(i){case 5126:return Xy;case 35664:return Yy;case 35665:return qy;case 35666:return $y;case 35674:return Ky;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return Qy;case 35667:case 35671:return jy;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return r1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}function h1(i,e){i.uniform1fv(this.addr,e)}function f1(i,e){const t=Ua(e,this.size,2);i.uniform2fv(this.addr,t)}function d1(i,e){const t=Ua(e,this.size,3);i.uniform3fv(this.addr,t)}function p1(i,e){const t=Ua(e,this.size,4);i.uniform4fv(this.addr,t)}function m1(i,e){const t=Ua(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _1(i,e){const t=Ua(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function g1(i,e){const t=Ua(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function v1(i,e){i.uniform1iv(this.addr,e)}function x1(i,e){i.uniform2iv(this.addr,e)}function M1(i,e){i.uniform3iv(this.addr,e)}function S1(i,e){i.uniform4iv(this.addr,e)}function y1(i,e){i.uniform1uiv(this.addr,e)}function E1(i,e){i.uniform2uiv(this.addr,e)}function b1(i,e){i.uniform3uiv(this.addr,e)}function T1(i,e){i.uniform4uiv(this.addr,e)}function w1(i,e,t){const n=this.cache,r=e.length,s=xc(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ch:a=k0;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function A1(i,e,t){const n=this.cache,r=e.length,s=xc(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||H0,s[a])}function R1(i,e,t){const n=this.cache,r=e.length,s=xc(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||G0,s[a])}function C1(i,e,t){const n=this.cache,r=e.length,s=xc(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||z0,s[a])}function P1(i){switch(i){case 5126:return h1;case 35664:return f1;case 35665:return d1;case 35666:return p1;case 35674:return m1;case 35675:return _1;case 35676:return g1;case 5124:case 35670:return v1;case 35667:case 35671:return x1;case 35668:case 35672:return M1;case 35669:case 35673:return S1;case 5125:return y1;case 36294:return E1;case 36295:return b1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return C1}}class D1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u1(t.type)}}class L1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P1(t.type)}}class I1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const hu=/(\w+)(\])?(\[|\.)?/g;function rp(i,e){i.seq.push(e),i.map[e.id]=e}function U1(i,e,t){const n=i.name,r=n.length;for(hu.lastIndex=0;;){const s=hu.exec(n),a=hu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){rp(t,c===void 0?new D1(o,i,e):new L1(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new I1(o),rp(t,d)),t=d}}}class Xl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);U1(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function sp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const N1=37297;let F1=0;function O1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ap=new Ke;function B1(i){ct._getMatrix(ap,ct.workingColorSpace,i);const e=`mat3( ${ap.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case ac:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function op(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+O1(i.getShaderSource(e),o)}else return s}function k1(i,e){const t=B1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const z1={[o0]:"Linear",[l0]:"Reinhard",[c0]:"Cineon",[u0]:"ACESFilmic",[f0]:"AgX",[d0]:"Neutral",[h0]:"Custom"};function H1(i,e){const t=z1[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wl=new $;function G1(){ct.getLuminanceCoefficients(wl);const i=wl.x.toFixed(4),e=wl.y.toFixed(4),t=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function W1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function no(i){return i!==""}function lp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(i){return i.replace(Y1,$1)}const q1=new Map;function $1(i,e){let t=je[e];if(t===void 0){const n=q1.get(e);if(n!==void 0)t=je[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ph(t)}const K1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(i){return i.replace(K1,Z1)}function Z1(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const J1={[zl]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function Q1(i){return J1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j1={[As]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE",[mc]:"ENVMAP_TYPE_CUBE_UV"};function eE(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":j1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const tE={[Pa]:"ENVMAP_MODE_REFRACTION"};function nE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iE={[a0]:"ENVMAP_BLENDING_MULTIPLY",[wv]:"ENVMAP_BLENDING_MIX",[Av]:"ENVMAP_BLENDING_ADD"};function rE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":iE[i.combine]||"ENVMAP_BLENDING_NONE"}function sE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aE(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Q1(t),c=eE(t),f=nE(t),d=rE(t),u=sE(t),h=V1(t),p=W1(s),m=r.createProgram();let _,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(no).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(no).join(`
`),g.length>0&&(g+=`
`)):(_=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),g=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?je.tonemapping_pars_fragment:"",t.toneMapping!==Ji?H1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,k1("linearToOutputTexel",t.outputColorSpace),G1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),a=Ph(a),a=lp(a,t),a=cp(a,t),o=Ph(o),o=lp(o,t),o=cp(o,t),a=up(a),o=up(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=x+_+a,v=x+g+o,M=sp(r,r.VERTEX_SHADER,E),T=sp(r,r.FRAGMENT_SHADER,v);r.attachShader(m,M),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function b(I){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(m)||"",O=r.getShaderInfoLog(M)||"",L=r.getShaderInfoLog(T)||"",F=D.trim(),Y=O.trim(),k=L.trim();let J=!0,H=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,M,T);else{const C=op(r,M,"vertex"),j=op(r,T,"fragment");dt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+C+`
`+j)}else F!==""?Ye("WebGLProgram: Program Info Log:",F):(Y===""||k==="")&&(H=!1);H&&(I.diagnostics={runnable:J,programLog:F,vertexShader:{log:Y,prefix:_},fragmentShader:{log:k,prefix:g}})}r.deleteShader(M),r.deleteShader(T),S=new Xl(r,m),A=X1(r,m)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(m,N1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=T,this}let oE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cE(e),t.set(e,n)),n}}class cE{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}}function uE(i){return i===Rs||i===ic||i===rc}function hE(i,e,t,n,r,s){const a=new b0,o=new lE,l=new Set,c=[],f=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,A,R,I,D,O){const L=I.fog,F=D.geometry,Y=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,J=e.get(S.envMap||Y,k),H=J&&J.mapping===mc?J.image.height:null,C=h[S.type];S.precision!==null&&(u=n.getMaxPrecision(S.precision),u!==S.precision&&Ye("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Se=j!==void 0?j.length:0;let ye=0;F.morphAttributes.position!==void 0&&(ye=1),F.morphAttributes.normal!==void 0&&(ye=2),F.morphAttributes.color!==void 0&&(ye=3);let He,ze,Ve,K;if(C){const Ue=Gi[C];He=Ue.vertexShader,ze=Ue.fragmentShader}else{He=S.vertexShader,ze=S.fragmentShader;const Ue=o.getVertexShaderStage(S),se=o.getFragmentShaderStage(S);o.update(S,Ue,se),Ve=Ue.id,K=se.id}const ee=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Be=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,Fe=!!S.map,ke=!!S.matcap,De=!!J,Xe=!!S.aoMap,Je=!!S.lightMap,G=!!S.bumpMap&&S.wireframe===!1,nt=!!S.normalMap,yt=!!S.displacementMap,Ot=!!S.emissiveMap,qe=!!S.metalnessMap,_t=!!S.roughnessMap,B=S.anisotropy>0,Nt=S.clearcoat>0,We=S.dispersion>0,P=S.retroreflectivity>0,y=S.iridescence>0,z=S.sheen>0,W=S.transmission>0,Z=B&&!!S.anisotropyMap,ce=Nt&&!!S.clearcoatMap,ae=Nt&&!!S.clearcoatNormalMap,Q=Nt&&!!S.clearcoatRoughnessMap,ne=y&&!!S.iridescenceMap,fe=y&&!!S.iridescenceThicknessMap,we=z&&!!S.sheenColorMap,de=z&&!!S.sheenRoughnessMap,he=!!S.specularMap,le=!!S.specularColorMap,Le=!!S.specularIntensityMap,Oe=W&&!!S.transmissionMap,U=W&&!!S.thicknessMap,ue=!!S.gradientMap,te=!!S.alphaMap,pe=S.alphaTest>0,ve=!!S.alphaHash,ie=!!S.extensions;let oe=Ji;S.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(oe=i.toneMapping);const re={shaderID:C,shaderType:S.type,shaderName:S.name,vertexShader:He,fragmentShader:ze,defines:S.defines,customVertexShaderID:Ve,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Fe,matcap:ke,envMap:De,envMapMode:De&&J.mapping,envMapCubeUVHeight:H,aoMap:Xe,lightMap:Je,bumpMap:G,normalMap:nt,displacementMap:yt,emissiveMap:Ot,normalMapObjectSpace:nt&&S.normalMapType===Pv,normalMapTangentSpace:nt&&S.normalMapType===yd,packedNormalMap:nt&&S.normalMapType===yd&&uE(S.normalMap.format),metalnessMap:qe,roughnessMap:_t,anisotropy:B,anisotropyMap:Z,clearcoat:Nt,clearcoatMap:ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:Q,dispersion:We,retroreflection:P,iridescence:y,iridescenceMap:ne,iridescenceThicknessMap:fe,sheen:z,sheenColorMap:we,sheenRoughnessMap:de,specularMap:he,specularColorMap:le,specularIntensityMap:Le,transmission:W,transmissionMap:Oe,thicknessMap:U,gradientMap:ue,opaque:S.transparent===!1&&S.blending===go&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:ve,combine:S.combine,mapUv:Fe&&p(S.map.channel),aoMapUv:Xe&&p(S.aoMap.channel),lightMapUv:Je&&p(S.lightMap.channel),bumpMapUv:G&&p(S.bumpMap.channel),normalMapUv:nt&&p(S.normalMap.channel),displacementMapUv:yt&&p(S.displacementMap.channel),emissiveMapUv:Ot&&p(S.emissiveMap.channel),metalnessMapUv:qe&&p(S.metalnessMap.channel),roughnessMapUv:_t&&p(S.roughnessMap.channel),anisotropyMapUv:Z&&p(S.anisotropyMap.channel),clearcoatMapUv:ce&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&p(S.sheenRoughnessMap.channel),specularMapUv:he&&p(S.specularMap.channel),specularColorMapUv:le&&p(S.specularColorMap.channel),specularIntensityMapUv:Le&&p(S.specularIntensityMap.channel),transmissionMapUv:Oe&&p(S.transmissionMap.channel),thicknessMapUv:U&&p(S.thicknessMap.channel),alphaMapUv:te&&p(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(nt||B),vertexNormals:!!F.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Fe||te),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||F.attributes.normal===void 0&&nt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ye,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:Fe&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ot&&S.emissiveMap.isVideoTexture===!0&&ct.getTransfer(S.emissiveMap.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hr,flipSided:S.side===$n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ie&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&S.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function _(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)A.push(R),A.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(g(A,S),x(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function g(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numSunLights),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numSunLightShadows),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function x(S,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function E(S){const A=h[S.type];let R;if(A){const I=Gi[A];R=Ix.clone(I.uniforms)}else R=S.uniforms;return R}function v(S,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new aE(i,A,S,r),c.push(R),f.set(A,R)),R}function M(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),f.delete(S.cacheKey),S.destroy()}}function T(S){o.remove(S)}function b(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:E,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:b}}function fE(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function dE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,p,m,_,g){let x=i[e];return x===void 0?(x={id:u.id,object:u,geometry:h,material:p,materialVariant:a(u),groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[e]=x):(x.id=u.id,x.object=u,x.geometry=h,x.material=p,x.materialVariant=a(u),x.groupOrder=m,x.renderOrder=u.renderOrder,x.z=_,x.group=g),e++,x}function l(u,h,p,m,_,g,x){x.reversedDepth===!0&&(_=-_);const E=o(u,h,p,m,_,g);p.transmission>0?n.push(E):p.transparent===!0?r.push(E):t.push(E)}function c(u,h,p,m,_,g){const x=o(u,h,p,m,_,g);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):t.unshift(x)}function f(u,h){t.length>1&&t.sort(u||dE),n.length>1&&n.sort(h||fp),r.length>1&&r.sort(h||fp)}function d(){for(let u=e,h=i.length;u<h;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:f}}function pE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new dp,i.set(n,[a])):r>=s.length?(a=new dp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function mE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new mt};break;case"SpotLight":t={position:new $,direction:new $,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function _E(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gE=0;function vE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xE(i){const e=new mE,t=_E(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const r=new $,s=new $t,a=new $t;function o(c){let f=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let h=0,p=0,m=0,_=0,g=0,x=0,E=0,v=0,M=0,T=0,b=0,S=0,A=0,R=0;c.sort(vE);for(let D=0,O=c.length;D<O;D++){const L=c[D],F=L.color,Y=L.intensity,k=L.distance;let J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Rs?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=F.r*Y,d+=F.g*Y,u+=F.b*Y;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],Y);R++}else if(L.isSunLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const C=L.shadow,j=t.get(L);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=J;const Se=C.getViewportCount();for(let ye=0;ye<Se;ye++)n.sunShadowMatrix[m+ye]=C.getMatrix(ye),n.sunShadowCascade[m+ye]=C._cascadeData[ye];m+=Se,p++}n.sun[h]=H,h++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const C=L.shadow,j=t.get(L);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.directionalShadow[_]=j,n.directionalShadowMap[_]=J,n.directionalShadowMatrix[_]=L.shadow.matrix,M++}n.directional[_]=H,_++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(F).multiplyScalar(Y),H.distance=k,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[x]=H;const C=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,C.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=C.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=J,b++}x++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(F).multiplyScalar(Y),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=H,E++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const C=L.shadow,j=t.get(L);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,j.shadowCameraNear=C.camera.near,j.shadowCameraFar=C.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(Y),H.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[v]=H,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.sunLength!==h||I.directionalLength!==_||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==E||I.hemiLength!==v||I.numSunShadows!==p||I.numDirectionalShadows!==M||I.numPointShadows!==T||I.numSpotShadows!==b||I.numSpotMaps!==S||I.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=_,n.spot.length=x,n.rectArea.length=E,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=m,n.sunShadowCascade.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+S-A,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.sunLength=h,I.directionalLength=_,I.pointLength=g,I.spotLength=x,I.rectAreaLength=E,I.hemiLength=v,I.numSunShadows=p,I.numDirectionalShadows=M,I.numPointShadows=T,I.numSpotShadows=b,I.numSpotMaps=S,I.numLightProbes=R,n.version=gE++)}function l(c,f){let d=0,u=0,h=0,p=0,m=0,_=0;const g=f.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){const v=c[x];if(v.isSunLight){const M=n.sun[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),d++}else if(v.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),u++}else if(v.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function pp(i){const e=new xE(i),t=[],n=[],r=[];function s(u){d.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ME(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new pp(i),e.set(r,[o])):s>=a.length?(o=new pp(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const SE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,EE=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],bE=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],mp=new $t,Wa=new $,fu=new $;function TE(i,e,t){let n=new P0;const r=new ht,s=new ht,a=new Gt,o=new Ox,l=new Bx,c={},f=t.maxTextureSize,d={[ws]:$n,[$n]:ws,[hr]:hr},u=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:SE,fragmentShader:yE}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const p=new Ui;p.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Er(p,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let g=this.type;this.render=function(T,b,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===ov&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zl);const A=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(_r),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=g!==this.type;O&&b.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=T.length;L<F;L++){const Y=T[L],k=Y.shadow;if(k===void 0){Ye("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const J=k.getFrameExtents();r.multiply(J),s.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/J.x),r.x=s.x*J.x,k.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/J.y),r.y=s.y*J.y,k.mapSize.y=s.y));const H=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=H,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===to){if(Y.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Li(r.x,r.y,{format:Rs,type:tr,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new Uo(r.x,r.y,qi),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=yr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=gn,k.map.depthTexture.magFilter=gn}else Y.isPointLight?(k.map=new B0(r.x),k.map.depthTexture=new Dx(r.x,er)):(k.map=new Li(r.x,r.y),k.map.depthTexture=new Uo(r.x,r.y,er)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=yr,this.type===zl?(k.map.depthTexture.compareFunction=H?Sf:Mf,k.map.depthTexture.minFilter=Rn,k.map.depthTexture.magFilter=Rn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=gn,k.map.depthTexture.magFilter=gn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);const C=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Y.isPointLight!==!0&&k.updateMatrices(Y,S);for(let j=0;j<C;j++){const Se=k.getCamera(j);if(Y.isPointLight){const ye=k.camera,He=k.matrix,ze=Y.distance||ye.far;ze!==ye.far&&(ye.far=ze,ye.updateProjectionMatrix()),Wa.setFromMatrixPosition(Y.matrixWorld),ye.position.copy(Wa),fu.copy(ye.position),fu.add(EE[j]),ye.up.copy(bE[j]),ye.lookAt(fu),ye.updateMatrixWorld(),He.makeTranslation(-Wa.x,-Wa.y,-Wa.z),mp.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),k._frustum.setFromProjectionMatrix(mp,ye.coordinateSystem,ye.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,j),i.clear();else{j===0&&(i.setRenderTarget(k.map),i.clear());const ye=k.getViewport(j);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),D.viewport(a)}n=k.getFrustum(j),v(b,S,Se,Y,this.type)}k.isPointLightShadow!==!0&&this.type===to&&x(k,S),k.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(A,R,I)};function x(T,b){const S=e.update(m);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new Li(r.x,r.y,{format:Rs,type:tr}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,S,u,m,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,S,h,m,null)}function E(T,b,S,A){let R=null;const I=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)R=I;else if(R=S.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const D=R.uuid,O=b.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let F=L[O];F===void 0&&(F=R.clone(),L[O]=F,b.addEventListener("dispose",M)),R=F}if(R.visible=b.visible,R.wireframe=b.wireframe,A===to?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:d[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=i.properties.get(R);D.light=S}return R}function v(T,b,S,A,R){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===to)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const O=e.update(T),L=T.material;if(Array.isArray(L)){const F=O.groups;for(let Y=0,k=F.length;Y<k;Y++){const J=F[Y],H=L[J.materialIndex];if(H&&H.visible){const C=E(T,H,A,R);T.onBeforeShadow(i,T,b,S,O,C,J),i.renderBufferDirect(S,null,O,C,T,J),T.onAfterShadow(i,T,b,S,O,C,J)}}}else if(L.visible){const F=E(T,L,A,R);T.onBeforeShadow(i,T,b,S,O,F,null),i.renderBufferDirect(S,null,O,F,T,null),T.onAfterShadow(i,T,b,S,O,F,null)}}const D=T.children;for(let O=0,L=D.length;O<L;O++)v(D[O],b,S,A,R)}function M(T){T.target.removeEventListener("dispose",M);for(const S in c){const A=c[S],R=T.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function wE(i,e){function t(){let U=!1;const ue=new Gt;let te=null;const pe=new Gt(0,0,0,0);return{setMask:function(ve){te!==ve&&!U&&(i.colorMask(ve,ve,ve,ve),te=ve)},setLocked:function(ve){U=ve},setClear:function(ve,ie,oe,re,Ue){Ue===!0&&(ve*=re,ie*=re,oe*=re),ue.set(ve,ie,oe,re),pe.equals(ue)===!1&&(i.clearColor(ve,ie,oe,re),pe.copy(ue))},reset:function(){U=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let U=!1,ue=!1,te=null,pe=null,ve=null;return{setReversed:function(ie){if(ue!==ie){const oe=e.get("EXT_clip_control");ie?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const re=ve;ve=null,this.setClear(re)}},getReversed:function(){return ue},setTest:function(ie){ie?ee(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(ie){te!==ie&&!U&&(i.depthMask(ie),te=ie)},setFunc:function(ie){if(ue&&(ie=Gv[ie]),pe!==ie){switch(ie){case Vu:i.depthFunc(i.NEVER);break;case Wu:i.depthFunc(i.ALWAYS);break;case Xu:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case Yu:i.depthFunc(i.EQUAL);break;case qu:i.depthFunc(i.GEQUAL);break;case $u:i.depthFunc(i.GREATER);break;case Ku:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ie}},setLocked:function(ie){U=ie},setClear:function(ie){ve!==ie&&(ve=ie,ue&&(ie=1-ie),i.clearDepth(ie))},reset:function(){U=!1,te=null,pe=null,ve=null,ue=!1}}}function r(){let U=!1,ue=null,te=null,pe=null,ve=null,ie=null,oe=null,re=null,Ue=null;return{setTest:function(se){U||(se?ee(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(se){ue!==se&&!U&&(i.stencilMask(se),ue=se)},setFunc:function(se,Ne,Ae){(te!==se||pe!==Ne||ve!==Ae)&&(i.stencilFunc(se,Ne,Ae),te=se,pe=Ne,ve=Ae)},setOp:function(se,Ne,Ae){(ie!==se||oe!==Ne||re!==Ae)&&(i.stencilOp(se,Ne,Ae),ie=se,oe=Ne,re=Ae)},setLocked:function(se){U=se},setClear:function(se){Ue!==se&&(i.clearStencil(se),Ue=se)},reset:function(){U=!1,ue=null,te=null,pe=null,ve=null,ie=null,oe=null,re=null,Ue=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let f={},d={},u={},h=new WeakMap,p=[],m=null,_=!1,g=null,x=null,E=null,v=null,M=null,T=null,b=null,S=new mt(0,0,0),A=0,R=!1,I=null,D=null,O=null,L=null,F=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,J=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=J>=2);let C=null,j={};const Se=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),He=new Gt().fromArray(Se),ze=new Gt().fromArray(ye);function Ve(U,ue,te,pe){const ve=new Uint8Array(4),ie=i.createTexture();i.bindTexture(U,ie),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<te;oe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ue+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return ie}const K={};K[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Po),G(!1),nt(xd),ee(i.CULL_FACE),Xe(_r);function ee(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function ge(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function Be(U,ue){return u[U]!==ue?(i.bindFramebuffer(U,ue),u[U]=ue,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function me(U,ue){let te=p,pe=!1;if(U){te=h.get(ue),te===void 0&&(te=[],h.set(ue,te));const ve=U.textures;if(te.length!==ve.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,oe=ve.length;ie<oe;ie++)te[ie]=i.COLOR_ATTACHMENT0+ie;te.length=ve.length,pe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,pe=!0);pe&&i.drawBuffers(te)}function Fe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const ke={[sa]:i.FUNC_ADD,[cv]:i.FUNC_SUBTRACT,[uv]:i.FUNC_REVERSE_SUBTRACT};ke[hv]=i.MIN,ke[fv]=i.MAX;const De={[dv]:i.ZERO,[pv]:i.ONE,[mv]:i.SRC_COLOR,[r0]:i.SRC_ALPHA,[Sv]:i.SRC_ALPHA_SATURATE,[xv]:i.DST_COLOR,[gv]:i.DST_ALPHA,[_v]:i.ONE_MINUS_SRC_COLOR,[s0]:i.ONE_MINUS_SRC_ALPHA,[Mv]:i.ONE_MINUS_DST_COLOR,[vv]:i.ONE_MINUS_DST_ALPHA,[yv]:i.CONSTANT_COLOR,[Ev]:i.ONE_MINUS_CONSTANT_COLOR,[bv]:i.CONSTANT_ALPHA,[Tv]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(U,ue,te,pe,ve,ie,oe,re,Ue,se){if(U===_r){_===!0&&(ge(i.BLEND),_=!1);return}if(_===!1&&(ee(i.BLEND),_=!0),U!==lv){if(U!==g||se!==R){if((x!==sa||M!==sa)&&(i.blendEquation(i.FUNC_ADD),x=sa,M=sa),se)switch(U){case go:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gu:i.blendFunc(i.ONE,i.ONE);break;case Md:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",U);break}else switch(U){case go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Md:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sd:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",U);break}E=null,v=null,T=null,b=null,S.set(0,0,0),A=0,g=U,R=se}return}ve=ve||ue,ie=ie||te,oe=oe||pe,(ue!==x||ve!==M)&&(i.blendEquationSeparate(ke[ue],ke[ve]),x=ue,M=ve),(te!==E||pe!==v||ie!==T||oe!==b)&&(i.blendFuncSeparate(De[te],De[pe],De[ie],De[oe]),E=te,v=pe,T=ie,b=oe),(re.equals(S)===!1||Ue!==A)&&(i.blendColor(re.r,re.g,re.b,Ue),S.copy(re),A=Ue),g=U,R=!1}function Je(U,ue){U.side===hr?ge(i.CULL_FACE):ee(i.CULL_FACE);let te=U.side===$n;ue&&(te=!te),G(te),U.blending===go&&U.transparent===!1?Xe(_r):Xe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const pe=U.stencilWrite;o.setTest(pe),pe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ot(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(U){I!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),I=U)}function nt(U){U!==sv?(ee(i.CULL_FACE),U!==D&&(U===xd?i.cullFace(i.BACK):U===av?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),D=U}function yt(U){U!==O&&(k&&i.lineWidth(U),O=U)}function Ot(U,ue,te){U?(ee(i.POLYGON_OFFSET_FILL),(L!==ue||F!==te)&&(L=ue,F=te,a.getReversed()&&(ue=-ue),i.polygonOffset(ue,te))):ge(i.POLYGON_OFFSET_FILL)}function qe(U){U?ee(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function _t(U){U===void 0&&(U=i.TEXTURE0+Y-1),C!==U&&(i.activeTexture(U),C=U)}function B(U,ue,te){te===void 0&&(C===null?te=i.TEXTURE0+Y-1:te=C);let pe=j[te];pe===void 0&&(pe={type:void 0,texture:void 0},j[te]=pe),(pe.type!==U||pe.texture!==ue)&&(C!==te&&(i.activeTexture(te),C=te),i.bindTexture(U,ue||K[U]),pe.type=U,pe.texture=ue)}function Nt(){const U=j[C];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function y(){try{i.texSubImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function z(){try{i.texSubImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function ce(){try{i.texStorage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function ae(){try{i.texStorage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function Q(){try{i.texImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function ne(){try{i.texImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function fe(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function we(U,ue){d[U]!==ue&&(i.pixelStorei(U,ue),d[U]=ue)}function de(U){He.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),He.copy(U))}function he(U){ze.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ze.copy(U))}function le(U,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let pe=te.get(U);pe===void 0&&(pe=i.getUniformBlockIndex(ue,U.name),te.set(U,pe))}function Le(U,ue){const pe=c.get(ue).get(U);l.get(ue)!==pe&&(i.uniformBlockBinding(ue,pe,U.__bindingPointIndex),l.set(ue,pe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},d={},C=null,j={},u={},h=new WeakMap,p=[],m=null,_=!1,g=null,x=null,E=null,v=null,M=null,T=null,b=null,S=new mt(0,0,0),A=0,R=!1,I=null,D=null,O=null,L=null,F=null,He.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:ge,bindFramebuffer:Be,drawBuffers:me,useProgram:Fe,setBlending:Xe,setMaterial:Je,setFlipSided:G,setCullFace:nt,setLineWidth:yt,setPolygonOffset:Ot,setScissorTest:qe,activeTexture:_t,bindTexture:B,unbindTexture:Nt,compressedTexImage2D:We,compressedTexImage3D:P,texImage2D:Q,texImage3D:ne,pixelStorei:we,getParameter:fe,updateUBOMapping:le,uniformBlockBinding:Le,texStorage2D:ce,texStorage3D:ae,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:de,viewport:he,reset:Oe}}function AE(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,f=new WeakMap,d=new Set;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,y){return p?new OffscreenCanvas(P,y):lc("canvas")}function _(P,y,z){let W=1;const Z=We(P);if((Z.width>z||Z.height>z)&&(W=z/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ce=Math.floor(W*Z.width),ae=Math.floor(W*Z.height);u===void 0&&(u=m(ce,ae));const Q=y?m(ce,ae):u;return Q.width=ce,Q.height=ae,Q.getContext("2d").drawImage(P,0,0,ce,ae),Ye("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ce+"x"+ae+")."),Q}else return"data"in P&&Ye("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function g(P){return P.generateMipmaps}function x(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,y,z,W,Z,ce=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae;W&&(ae=e.get("EXT_texture_norm16"),ae||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=y;if(y===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8),z===i.UNSIGNED_SHORT&&ae&&(Q=ae.R16_EXT),z===i.SHORT&&ae&&(Q=ae.R16_SNORM_EXT)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),y===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8),z===i.UNSIGNED_SHORT&&ae&&(Q=ae.RG16_EXT),z===i.SHORT&&ae&&(Q=ae.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_SHORT&&ae&&(Q=ae.RGB16_EXT),z===i.SHORT&&ae&&(Q=ae.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),y===i.RGBA){const ne=ce?ac:ct.getTransfer(Z);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=ne===Mt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ae&&(Q=ae.RGBA16_EXT),z===i.SHORT&&ae&&(Q=ae.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(P,y){let z;return P?y===null||y===er||y===Lo?z=i.DEPTH24_STENCIL8:y===qi?z=i.DEPTH32F_STENCIL8:y===Do&&(z=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===er||y===Lo?z=i.DEPTH_COMPONENT24:y===qi?z=i.DEPTH_COMPONENT32F:y===Do&&(z=i.DEPTH_COMPONENT16),z}function T(P,y){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==gn&&P.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function b(P){const y=P.target;y.removeEventListener("dispose",b),A(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&d.delete(y)}function S(P){const y=P.target;y.removeEventListener("dispose",S),I(y)}function A(P){const y=n.get(P);if(y.__webglInit===void 0)return;const z=P.source,W=h.get(z);if(W){const Z=W[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(P),Object.keys(W).length===0&&h.delete(z)}n.remove(P)}function R(P){const y=n.get(P);i.deleteTexture(y.__webglTexture);const z=P.source,W=h.get(z);delete W[y.__cacheKey],a.memory.textures--}function I(P){const y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let Z=0;Z<y.__webglFramebuffer[W].length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[W][Z]);else i.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)i.deleteFramebuffer(y.__webglFramebuffer[W]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=P.textures;for(let W=0,Z=z.length;W<Z;W++){const ce=n.get(z[W]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(z[W])}n.remove(P)}let D=0;function O(){D=0}function L(){return D}function F(P){D=P}function Y(){const P=D;return P>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function k(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function J(P,y){const z=n.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const W=P.image;if(W===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(z,P,y);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function H(P,y){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ge(z,P,y);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function C(P,y){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ge(z,P,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function j(P,y){const z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Be(z,P,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}const Se={[Zu]:i.REPEAT,[dr]:i.CLAMP_TO_EDGE,[Ju]:i.MIRRORED_REPEAT},ye={[gn]:i.NEAREST,[Rv]:i.NEAREST_MIPMAP_NEAREST,[nl]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[kc]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},He={[Lv]:i.NEVER,[Ov]:i.ALWAYS,[Iv]:i.LESS,[Mf]:i.LEQUAL,[Uv]:i.EQUAL,[Sf]:i.GEQUAL,[Nv]:i.GREATER,[Fv]:i.NOTEQUAL};function ze(P,y){if(y.type===qi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===kc||y.magFilter===nl||y.magFilter===ds||y.minFilter===Rn||y.minFilter===kc||y.minFilter===nl||y.minFilter===ds)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Se[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Se[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Se[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ye[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ye[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,He[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===gn||y.minFilter!==nl&&y.minFilter!==ds||y.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ve(P,y){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",b));const W=y.source;let Z=h.get(W);Z===void 0&&(Z={},h.set(W,Z));const ce=k(y);if(ce!==P.__cacheKey){Z[ce]===void 0&&(Z[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[ce].usedTimes++;const ae=Z[P.__cacheKey];ae!==void 0&&(Z[P.__cacheKey].usedTimes--,ae.usedTimes===0&&R(y)),P.__cacheKey=ce,P.__webglTexture=Z[ce].texture}return z}function K(P,y,z){return Math.floor(Math.floor(P/z)/y)}function ee(P,y,z,W){const ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,W,y.data);else{ce.sort((we,de)=>we.start-de.start);let ae=0;for(let we=1;we<ce.length;we++){const de=ce[ae],he=ce[we],le=de.start+de.count,Le=K(he.start,y.width,4),Oe=K(de.start,y.width,4);he.start<=le+1&&Le===Oe&&K(he.start+he.count-1,y.width,4)===Le?de.count=Math.max(de.count,he.start+he.count-de.start):(++ae,ce[ae]=he)}ce.length=ae+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let we=0,de=ce.length;we<de;we++){const he=ce[we],le=Math.floor(he.start/4),Le=Math.ceil(he.count/4),Oe=le%y.width,U=Math.floor(le/y.width),ue=Le,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Oe,U,ue,te,z,W,y.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function ge(P,y,z){let W=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=i.TEXTURE_3D);const Z=Ve(P,y),ce=y.source;t.bindTexture(W,P.__webglTexture,i.TEXTURE0+z);const ae=n.get(ce);if(ce.version!==ae.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const te=ct.getPrimaries(ct.workingColorSpace),pe=y.colorSpace===Nr?null:ct.getPrimaries(y.colorSpace),ve=y.colorSpace===Nr||te===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ne=_(y.image,!1,r.maxTextureSize);ne=Nt(y,ne);const fe=s.convert(y.format,y.colorSpace),we=s.convert(y.type);let de=v(y.internalFormat,fe,we,y.normalized,y.colorSpace,y.isVideoTexture);ze(W,y);let he;const le=y.mipmaps,Le=y.isVideoTexture!==!0,Oe=ae.__version===void 0||Z===!0,U=ce.dataReady,ue=T(y,ne);if(y.isDepthTexture)de=M(y.format===ps,y.type),Oe&&(Le?t.texStorage2D(i.TEXTURE_2D,1,de,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,de,ne.width,ne.height,0,fe,we,null));else if(y.isDataTexture)if(le.length>0){Le&&Oe&&t.texStorage2D(i.TEXTURE_2D,ue,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)he=le[te],Le?U&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,fe,we,he.data):t.texImage2D(i.TEXTURE_2D,te,de,he.width,he.height,0,fe,we,he.data);y.generateMipmaps=!1}else Le?(Oe&&t.texStorage2D(i.TEXTURE_2D,ue,de,ne.width,ne.height),U&&ee(y,ne,fe,we)):t.texImage2D(i.TEXTURE_2D,0,de,ne.width,ne.height,0,fe,we,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Le&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,de,le[0].width,le[0].height,ne.depth);for(let te=0,pe=le.length;te<pe;te++)if(he=le[te],y.format!==Pi)if(fe!==null)if(Le){if(U)if(y.layerUpdates.size>0){const ve=qd(he.width,he.height,y.format,y.type);for(const ie of y.layerUpdates){const oe=he.data.subarray(ie*ve/he.data.BYTES_PER_ELEMENT,(ie+1)*ve/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ie,he.width,he.height,1,fe,oe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,fe,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,de,he.width,he.height,ne.depth,0,he.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,fe,we,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,de,he.width,he.height,ne.depth,0,fe,we,he.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Le&&Oe&&t.texStorage2D(i.TEXTURE_2D,ue,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)he=le[te],y.format!==Pi?fe!==null?Le?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,te,de,he.width,he.height,0,he.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?U&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,fe,we,he.data):t.texImage2D(i.TEXTURE_2D,te,de,he.width,he.height,0,fe,we,he.data)}else if(y.isDataArrayTexture)if(Le){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,de,ne.width,ne.height,ne.depth),U)if(y.layerUpdates.size>0){const te=qd(ne.width,ne.height,y.format,y.type);for(const pe of y.layerUpdates){const ve=ne.data.subarray(pe*te/ne.data.BYTES_PER_ELEMENT,(pe+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,ne.width,ne.height,1,fe,we,ve)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,we,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,ne.width,ne.height,ne.depth,0,fe,we,ne.data);else if(y.isData3DTexture)Le?(Oe&&t.texStorage3D(i.TEXTURE_3D,ue,de,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,we,ne.data)):t.texImage3D(i.TEXTURE_3D,0,de,ne.width,ne.height,ne.depth,0,fe,we,ne.data);else if(y.isFramebufferTexture){if(Oe)if(Le)t.texStorage2D(i.TEXTURE_2D,ue,de,ne.width,ne.height);else{let te=ne.width,pe=ne.height;for(let ve=0;ve<ue;ve++)t.texImage2D(i.TEXTURE_2D,ve,de,te,pe,0,fe,we,null),te>>=1,pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),d.add(y),te.onpaint=pe=>{const ve=pe.changedElements;for(const ie of d)ve.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{const ve=i.RGBA,ie=i.RGBA,oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ve,ie,oe,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(Le&&Oe){const te=We(le[0]);t.texStorage2D(i.TEXTURE_2D,ue,de,te.width,te.height)}for(let te=0,pe=le.length;te<pe;te++)he=le[te],Le?U&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe,we,he):t.texImage2D(i.TEXTURE_2D,te,de,fe,we,he);y.generateMipmaps=!1}else if(Le){if(Oe){const te=We(ne);t.texStorage2D(i.TEXTURE_2D,ue,de,te.width,te.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,we,ne)}else t.texImage2D(i.TEXTURE_2D,0,de,fe,we,ne);g(y)&&x(W),ae.__version=ce.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Be(P,y,z){if(y.image.length!==6)return;const W=Ve(P,y),Z=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+z);const ce=n.get(Z);if(Z.version!==ce.__version||W===!0){t.activeTexture(i.TEXTURE0+z);const ae=ct.getPrimaries(ct.workingColorSpace),Q=y.colorSpace===Nr?null:ct.getPrimaries(y.colorSpace),ne=y.colorSpace===Nr||ae===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,we=y.image[0]&&y.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!fe&&!we?de[ie]=_(y.image[ie],!0,r.maxCubemapSize):de[ie]=we?y.image[ie].image:y.image[ie],de[ie]=Nt(y,de[ie]);const he=de[0],le=s.convert(y.format,y.colorSpace),Le=s.convert(y.type),Oe=v(y.internalFormat,le,Le,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,ue=ce.__version===void 0||W===!0,te=Z.dataReady;let pe=T(y,he);ze(i.TEXTURE_CUBE_MAP,y);let ve;if(fe){U&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Oe,he.width,he.height);for(let ie=0;ie<6;ie++){ve=de[ie].mipmaps;for(let oe=0;oe<ve.length;oe++){const re=ve[oe];y.format!==Pi?le!==null?U?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,re.width,re.height,le,re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,Oe,re.width,re.height,0,re.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,re.width,re.height,le,Le,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,Oe,re.width,re.height,0,le,Le,re.data)}}}else{if(ve=y.mipmaps,U&&ue){ve.length>0&&pe++;const ie=We(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Oe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(we){U?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,le,Le,de[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,de[ie].width,de[ie].height,0,le,Le,de[ie].data);for(let oe=0;oe<ve.length;oe++){const Ue=ve[oe].image[ie].image;U?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,Ue.width,Ue.height,le,Le,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,Oe,Ue.width,Ue.height,0,le,Le,Ue.data)}}else{U?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,le,Le,de[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,le,Le,de[ie]);for(let oe=0;oe<ve.length;oe++){const re=ve[oe];U?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,le,Le,re.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,Oe,le,Le,re.image[ie])}}}g(y)&&x(i.TEXTURE_CUBE_MAP),ce.__version=Z.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function me(P,y,z,W,Z,ce){const ae=s.convert(z.format,z.colorSpace),Q=s.convert(z.type),ne=v(z.internalFormat,ae,Q,z.normalized,z.colorSpace),fe=n.get(y),we=n.get(z);if(we.__renderTarget=y,!fe.__hasExternalTextures){const de=Math.max(1,y.width>>ce),he=Math.max(1,y.height>>ce);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ce,ne,de,he,y.depth,0,ae,Q,null):t.texImage2D(Z,ce,ne,de,he,0,ae,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Z,we.__webglTexture,0,qe(y)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Z,we.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(P,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){const W=y.depthTexture,Z=W&&W.isDepthTexture?W.type:null,ce=M(y.stencilBuffer,Z),ae=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(y),ce,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(y),ce,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ce,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,P)}else{const W=y.textures;for(let Z=0;Z<W.length;Z++){const ce=W[Z],ae=s.convert(ce.format,ce.colorSpace),Q=s.convert(ce.type),ne=v(ce.internalFormat,ae,Q,ce.normalized,ce.colorSpace);_t(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(y),ne,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(y),ne,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ne,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(P,y,z){const W=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(y.depthTexture);if(Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,y.depthTexture.addEventListener("dispose",b)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ze(i.TEXTURE_CUBE_MAP,y.depthTexture);const fe=s.convert(y.depthTexture.format),we=s.convert(y.depthTexture.type);let de;y.depthTexture.format===yr?de=i.DEPTH_COMPONENT24:y.depthTexture.format===ps&&(de=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,de,y.width,y.height,0,fe,we,null)}}else J(y.depthTexture,0);const ce=Z.__webglTexture,ae=qe(y),Q=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ne=y.depthTexture.format===ps?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===yr)_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,ce,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,ce,0);else if(y.depthTexture.format===ps)_t(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,ce,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function De(P){const y=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const W=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=W}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)ke(y.__webglFramebuffer[W],P,W);else{const W=P.texture.mipmaps;W&&W.length>0?ke(y.__webglFramebuffer[0],P,0):ke(y.__webglFramebuffer,P,0)}else if(z){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=i.createRenderbuffer(),Fe(y.__webglDepthbuffer[W],P,!1);else{const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}else{const W=P.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Fe(y.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(P,y,z){const W=n.get(P);y!==void 0&&me(W.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&De(P)}function Je(P){const y=P.texture,z=n.get(P),W=n.get(y);P.addEventListener("dispose",S);const Z=P.textures,ce=P.isWebGLCubeRenderTarget===!0,ae=Z.length>1;if(ae||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=y.version,a.memory.textures++),ce){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let ne=0;ne<y.mipmaps.length;ne++)z.__webglFramebuffer[Q][ne]=i.createFramebuffer()}else z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)z.__webglFramebuffer[Q]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ae)for(let Q=0,ne=Z.length;Q<ne;Q++){const fe=n.get(Z[Q]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&_t(P)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<Z.length;Q++){const ne=Z[Q];z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);const fe=s.convert(ne.format,ne.colorSpace),we=s.convert(ne.type),de=v(ne.internalFormat,fe,we,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),he=qe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,de,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ze(i.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)me(z.__webglFramebuffer[Q][ne],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else me(z.__webglFramebuffer[Q],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(y)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Q=0,ne=Z.length;Q<ne;Q++){const fe=Z[Q],we=n.get(fe);let de=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,we.__webglTexture),ze(de,fe),me(z.__webglFramebuffer,P,fe,i.COLOR_ATTACHMENT0+Q,de,0),g(fe)&&x(de)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,W.__webglTexture),ze(Q,y),y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)me(z.__webglFramebuffer[ne],P,y,i.COLOR_ATTACHMENT0,Q,ne);else me(z.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,Q,0);g(y)&&x(Q),t.unbindTexture()}P.depthBuffer&&De(P)}function G(P){const y=P.textures;for(let z=0,W=y.length;z<W;z++){const Z=y[z];if(g(Z)){const ce=E(P),ae=n.get(Z).__webglTexture;t.bindTexture(ce,ae),x(ce),t.unbindTexture()}}}const nt=[],yt=[];function Ot(P){if(P.samples>0){if(_t(P)===!1){const y=P.textures,z=P.width,W=P.height;let Z=i.COLOR_BUFFER_BIT;const ce=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(P),Q=y.length>1;if(Q)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const we=n.get(y[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,z,W,0,0,z,W,Z,i.NEAREST),l===!0&&(nt.length=0,yt.length=0,nt.push(i.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(nt.push(ce),yt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,yt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const we=n.get(y[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function qe(P){return Math.min(r.maxSamples,P.samples)}function _t(P){const y=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(P){const y=a.render.frame;f.get(P)!==y&&(f.set(P,y),P.update())}function Nt(P,y){const z=P.colorSpace,W=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==sc&&z!==Nr&&(ct.getTransfer(z)===Mt?(W!==Pi||Z!==xi)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",z)),y}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=H,this.setTexture3D=C,this.setTextureCube=j,this.rebindTextures=Xe,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=me,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function RE(i,e){function t(n,r=Nr){let s;const a=ct.getTransfer(r);if(n===xi)return i.UNSIGNED_BYTE;if(n===mf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_f)return i.UNSIGNED_SHORT_5_5_5_1;if(n===g0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===v0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===m0)return i.BYTE;if(n===_0)return i.SHORT;if(n===Do)return i.UNSIGNED_SHORT;if(n===pf)return i.INT;if(n===er)return i.UNSIGNED_INT;if(n===qi)return i.FLOAT;if(n===tr)return i.HALF_FLOAT;if(n===x0)return i.ALPHA;if(n===M0)return i.RGB;if(n===Pi)return i.RGBA;if(n===yr)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===S0)return i.RED;if(n===gf)return i.RED_INTEGER;if(n===Rs)return i.RG;if(n===vf)return i.RG_INTEGER;if(n===xf)return i.RGBA_INTEGER;if(n===Hl||n===Gl||n===Vl||n===Wl)if(a===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qu||n===ju||n===eh||n===th)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ju)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===th)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nh||n===ih||n===rh||n===sh||n===ah||n===ic||n===oh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nh||n===ih)return a===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===rh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===sh)return s.COMPRESSED_R11_EAC;if(n===ah)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ic)return s.COMPRESSED_RG11_EAC;if(n===oh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lh||n===ch||n===uh||n===hh||n===fh||n===dh||n===ph||n===mh||n===_h||n===gh||n===vh||n===xh||n===Mh||n===Sh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===lh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ch)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ph)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_h)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sh)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yh||n===Eh||n===bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yh)return a===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Th||n===wh||n===rc||n===Ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Th)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const CE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new L0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ii({vertexShader:CE,fragmentShader:PE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Er(new gc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LE extends Ls{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,u=null,h=null,p=null;const m=typeof XRWebGLBinding<"u",_=new DE,g={},x=t.getContextAttributes();let E=null,v=null;const M=[],T=[],b=new ht;let S=null,A=null;const R=new vi;R.viewport=new Gt;const I=new vi;I.viewport=new Gt;const D=[R,I],O=new zx;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=M[K];return ee===void 0&&(ee=new Yc,M[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=M[K];return ee===void 0&&(ee=new Yc,M[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=M[K];return ee===void 0&&(ee=new Yc,M[K]=ee),ee.getHandSpace()};function Y(K){const ee=T.indexOf(K.inputSource);if(ee===-1)return;const ge=M[ee];ge!==void 0&&(ge.update(K.inputSource,K.frame,c||a),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",J);for(let K=0;K<M.length;K++){const ee=T[K];ee!==null&&(T[K]=null,M[K].disconnect(ee))}L=null,F=null,_.reset();for(const K in g)delete g[K];if(e.setRenderTarget(E),h=null,u=null,d=null,r=null,v=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(b.width,b.height,!1),A!==null){const K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return d===null&&m&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",k),r.addEventListener("inputsourceschange",J),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(b),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Be=null,me=null;x.depth&&(me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=x.stencil?ps:yr,Be=x.stencil?Lo:er);const Fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Fe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Li(u.textureWidth,u.textureHeight,{format:Pi,type:xi,depthTexture:new Uo(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ge={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Li(h.framebufferWidth,h.framebufferHeight,{format:Pi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(K){for(let ee=0;ee<K.removed.length;ee++){const ge=K.removed[ee],Be=T.indexOf(ge);Be>=0&&(T[Be]=null,M[Be].disconnect(ge))}for(let ee=0;ee<K.added.length;ee++){const ge=K.added[ee];let Be=T.indexOf(ge);if(Be===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=T.length){T.push(ge),Be=Fe;break}else if(T[Fe]===null){T[Fe]=ge,Be=Fe;break}if(Be===-1)break}const me=M[Be];me&&me.connect(ge)}}const H=new $,C=new $;function j(K,ee,ge){H.setFromMatrixPosition(ee.matrixWorld),C.setFromMatrixPosition(ge.matrixWorld);const Be=H.distanceTo(C),me=ee.projectionMatrix.elements,Fe=ge.projectionMatrix.elements,ke=me[14]/(me[10]-1),De=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],Je=(me[9]-1)/me[5],G=(me[8]-1)/me[0],nt=(Fe[8]+1)/Fe[0],yt=ke*G,Ot=ke*nt,qe=Be/(-G+nt),_t=qe*-G;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_t),K.translateZ(qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),me[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const B=ke+qe,Nt=De+qe,We=yt-_t,P=Ot+(Be-_t),y=Xe*De/Nt*B,z=Je*De/Nt*B;K.projectionMatrix.makePerspective(We,P,y,z,B,Nt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Se(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ee=K.near,ge=K.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),O.near=I.near=R.near=ee,O.far=I.far=R.far=ge,(L!==O.near||F!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,F=O.far),O.layers.mask=K.layers.mask|6,R.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;const Be=K.parent,me=O.cameras;Se(O,Be);for(let Fe=0;Fe<me.length;Fe++)Se(me[Fe],Be);me.length===2?j(O,R,I):O.projectionMatrix.copy(R.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),ye(K,O,Be)};function ye(K,ee,ge){ge===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Io*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(K){return g[K]};let He=null;function ze(K,ee){if(f=ee.getViewerPose(c||a),p=ee,f!==null){const ge=f.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let Be=!1;ge.length!==O.cameras.length&&(O.cameras.length=0,Be=!0);for(let De=0;De<ge.length;De++){const Xe=ge[De];let Je=null;if(h!==null)Je=h.getViewport(Xe);else{const nt=d.getViewSubImage(u,Xe);Je=nt.viewport,De===0&&(e.setRenderTargetTextures(v,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(v))}let G=D[De];G===void 0&&(G=new vi,G.layers.enable(De),G.viewport=new Gt,D[De]=G),G.matrix.fromArray(Xe.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(Xe.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Je.x,Je.y,Je.width,Je.height),De===0&&(O.matrix.copy(G.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Be===!0&&O.cameras.push(G)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){d=n.getBinding();const De=d.getDepthInformation(ge[0]);De&&De.isValid&&De.texture&&_.init(De,r.renderState)}if(me&&me.includes("camera-access")&&m){e.state.unbindTexture(),d=n.getBinding();for(let De=0;De<ge.length;De++){const Xe=ge[De].camera;if(Xe){let Je=g[Xe];Je||(Je=new L0,g[Xe]=Je);const G=d.getCameraImage(Xe);Je.sourceTexture=G}}}}for(let ge=0;ge<M.length;ge++){const Be=T[ge],me=M[ge];Be!==null&&me!==void 0&&me.update(Be,ee,c||a)}He&&He(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const Ve=new F0;Ve.setAnimationLoop(ze),this.setAnimationLoop=function(K){He=K},this.dispose=function(){}}}const IE=new $t,V0=new Ke;V0.set(-1,0,0,0,1,0,0,0,1);function UE(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,I0(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,x,E,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(_,g):g.isMeshLambertMaterial?(s(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(_,g),d(_,g)):g.isMeshPhongMaterial?(s(_,g),f(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(_,g),u(_,g),g.isMeshPhysicalMaterial&&h(_,g,v)):g.isMeshMatcapMaterial?(s(_,g),p(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),m(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?l(_,g,x,E):g.isSpriteMaterial?c(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===$n&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===$n&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const x=e.get(g),E=x.envMap,v=x.envMapRotation;E&&(_.envMap.value=E,_.envMapRotation.value.setFromMatrix4(IE.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(V0),_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,x,E){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*x,_.scale.value=E*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function f(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function d(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function u(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function h(_,g,x){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$n&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.retroreflectivity>0&&(_.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,g){g.matcap&&(_.matcap.value=g.matcap)}function m(_,g){const x=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function NE(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const T=M.program;n.uniformBlockBinding(v,T)}function c(v,M){let T=r[v.id];T===void 0&&(_(v),T=f(v),r[v.id]=T,v.addEventListener("dispose",x));const b=M.program;n.updateUBOMapping(v,b);const S=e.render.frame;s[v.id]!==S&&(u(v),s[v.id]=S)}function f(v){const M=d();v.__bindingPointIndex=M;const T=i.createBuffer(),b=v.__size,S=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,b,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const M=r[v.id],T=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,A=T.length;S<A;S++){const R=T[S];if(Array.isArray(R))for(let I=0,D=R.length;I<D;I++)h(R[I],S,I,b);else h(R,S,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,M,T,b){if(m(v,M,T,b)===!0){const S=v.__offset,A=v.value;if(Array.isArray(A)){let R=0;for(let I=0;I<A.length;I++){const D=A[I],O=g(D);p(D,v.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,v.__data)}}function p(v,M,T){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,T)}function m(v,M,T,b){const S=v.value,A=M+"_"+T;if(b[A]===void 0)return typeof S=="number"||typeof S=="boolean"?b[A]=S:ArrayBuffer.isView(S)?b[A]=S.slice():b[A]=S.clone(),!0;{const R=b[A];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return b[A]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function _(v){const M=v.uniforms;let T=0;const b=16;for(let A=0,R=M.length;A<R;A++){const I=Array.isArray(M[A])?M[A]:[M[A]];for(let D=0,O=I.length;D<O;D++){const L=I[D],F=Array.isArray(L.value)?L.value:[L.value];for(let Y=0,k=F.length;Y<k;Y++){const J=F[Y],H=g(J),C=T%b,j=C%H.boundary,Se=C+j;T+=j,Se!==0&&b-Se<H.storage&&(T+=b-Se),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=H.storage}}}const S=T%b;return S>0&&(T+=b-S),v.__size=T,v.__cache={},this}function g(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){const M=v.target;M.removeEventListener("dispose",x);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function E(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:E}}const FE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function OE(){return ki===null&&(ki=new Ax(FE,16,16,Rs,tr),ki.name="DFG_LUT",ki.minFilter=Rn,ki.magFilter=Rn,ki.wrapS=dr,ki.wrapT=dr,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class BE{constructor(e={}){const{canvas:t=zv(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:h=xi}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const m=h,_=new Set([xf,vf,gf]),g=new Set([xi,er,Do,Lo,mf,_f]),x=new Uint32Array(4),E=new Int32Array(4),v=new $;let M=null,T=null;const b=[],S=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,D=null,O=null,L=null,F=null;this._outputColorSpace=mi;let Y=0,k=0,J=null,H=-1,C=null;const j=new Gt,Se=new Gt;let ye=null;const He=new mt(0);let ze=0,Ve=t.width,K=t.height,ee=1,ge=null,Be=null;const me=new Gt(0,0,Ve,K),Fe=new Gt(0,0,Ve,K);let ke=!1;const De=new P0;let Xe=!1,Je=!1;const G=new $t,nt=new $,yt=new Gt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function _t(){return J===null?ee:1}let B=n;function Nt(w,N){return t.getContext(w,N)}let We,P,y,z,W,Z,ce,ae,Q,ne,fe,we,de,he,le,Le,Oe,U,ue,te,pe,ve,ie;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${df}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),B===null){const N="webgl2";if(B=Nt(N,w),B===null)throw Nt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(w){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),dt("WebGLRenderer: "+w.message),w}function oe(){We=new Oy(B),We.init(),pe=new RE(B,We),P=new Ay(B,We,e,pe),y=new wE(B,We),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),O=B.createFramebuffer(),L=B.createFramebuffer(),F=B.createFramebuffer(),z=new zy(B),W=new fE,Z=new AE(B,We,y,W,P,pe,z),ce=new Fy(R),ae=new Gx(B),ve=new Ty(B,ae),Q=new By(B,ae,z,ve),ne=new Gy(B,Q,ae,ve,z),U=new Hy(B,P,Z),le=new Ry(W),fe=new hE(R,ce,We,P,ve,le),we=new UE(R,W),de=new pE,he=new ME(We),Oe=new by(R,ce,y,ne,p,l),Le=new TE(R,ne,P),ie=new NE(B,z,P,y),ue=new wy(B,We,z),te=new ky(B,We,z),z.programs=fe.programs,R.capabilities=P,R.extensions=We,R.properties=W,R.renderLists=de,R.shadowMap=Le,R.state=y,R.info=z}m!==xi&&(A=new Wy(m,t.width,t.height,o,r,s));const re=new LE(R,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=We.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=We.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(Ve,K,!1))},this.getSize=function(w){return w.set(Ve,K)},this.setSize=function(w,N,q=!0){if(re.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=w,K=N,t.width=Math.floor(w*ee),t.height=Math.floor(N*ee),q===!0&&(t.style.width=w+"px",t.style.height=N+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(Ve*ee,K*ee).floor()},this.setDrawingBufferSize=function(w,N,q){Ve=w,K=N,ee=q,t.width=Math.floor(w*q),t.height=Math.floor(N*q),this.setViewport(0,0,w,N)},this.setEffects=function(w){if(m===xi){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let N=0;N<w.length;N++)if(w[N].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(j)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,N,q,V){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,N,q,V),y.viewport(j.copy(me).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(Fe)},this.setScissor=function(w,N,q,V){w.isVector4?Fe.set(w.x,w.y,w.z,w.w):Fe.set(w,N,q,V),y.scissor(Se.copy(Fe).multiplyScalar(ee).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){y.setScissorTest(ke=w)},this.setOpaqueSort=function(w){ge=w},this.setTransparentSort=function(w){Be=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,q=!0){let V=0;if(w){let X=!1;if(J!==null){const _e=J.texture.format;X=_.has(_e)}if(X){const _e=J.texture.type,be=g.has(_e),Me=Oe.getClearColor(),Re=Oe.getClearAlpha(),Ie=Me.r,Qe=Me.g,at=Me.b;be?(x[0]=Ie,x[1]=Qe,x[2]=at,x[3]=Re,B.clearBufferuiv(B.COLOR,0,x)):(E[0]=Ie,E[1]=Qe,E[2]=at,E[3]=Re,B.clearBufferiv(B.COLOR,0,E))}else V|=B.COLOR_BUFFER_BIT}N&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Oe.dispose(),de.dispose(),he.dispose(),W.dispose(),ce.dispose(),ne.dispose(),ve.dispose(),ie.dispose(),fe.dispose(),re.dispose(),re.removeEventListener("sessionstart",It),re.removeEventListener("sessionend",Tt),lt.stop()};function Ue(w){w.preventDefault(),Td("WebGLRenderer: Context Lost."),I=!0}function se(){Td("WebGLRenderer: Context Restored."),I=!1;const w=z.autoReset,N=Le.enabled,q=Le.autoUpdate,V=Le.needsUpdate,X=Le.type;oe(),z.autoReset=w,Le.enabled=N,Le.autoUpdate=q,Le.needsUpdate=V,Le.type=X}function Ne(w){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ae(w){const N=w.target;N.removeEventListener("dispose",Ae),$e(N)}function $e(w){Kt(w),W.remove(w)}function Kt(w){const N=W.get(w).programs;N!==void 0&&(N.forEach(function(q){fe.releaseProgram(q)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,q,V,X,_e){N===null&&(N=Ot);const be=X.isMesh&&X.matrixWorld.determinantAffine()<0,Me=un(w,N,q,V,X);y.setMaterial(V,be);let Re=q.index,Ie=1;if(V.wireframe===!0){if(Re=Q.getWireframeAttribute(q),Re===void 0)return;Ie=2}const Qe=q.drawRange,at=q.attributes.position;let Ce=Qe.start*Ie,gt=(Qe.start+Qe.count)*Ie;_e!==null&&(Ce=Math.max(Ce,_e.start*Ie),gt=Math.min(gt,(_e.start+_e.count)*Ie)),Re!==null?(Ce=Math.max(Ce,0),gt=Math.min(gt,Re.count)):at!=null&&(Ce=Math.max(Ce,0),gt=Math.min(gt,at.count));const Jt=gt-Ce;if(Jt<0||Jt===1/0)return;ve.setup(X,V,Me,q,Re);let Ut,wt=ue;if(Re!==null&&(Ut=ae.get(Re),wt=te,wt.setIndex(Ut)),X.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*_t()),wt.setMode(B.LINES)):wt.setMode(B.TRIANGLES);else if(X.isLine){let Sn=V.linewidth;Sn===void 0&&(Sn=1),y.setLineWidth(Sn*_t()),X.isLineSegments?wt.setMode(B.LINES):X.isLineLoop?wt.setMode(B.LINE_LOOP):wt.setMode(B.LINE_STRIP)}else X.isPoints?wt.setMode(B.POINTS):X.isSprite&&wt.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(We.get("WEBGL_multi_draw"))wt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Sn=X._multiDrawStarts,Ee=X._multiDrawCounts,Ln=X._multiDrawCount,ft=Re?ae.get(Re).bytesPerElement:1,fi=W.get(V).currentProgram.getUniforms();for(let Oi=0;Oi<Ln;Oi++)fi.setValue(B,"_gl_DrawID",Oi),wt.render(Sn[Oi]/ft,Ee[Oi])}else if(X.isInstancedMesh)wt.renderInstances(Ce,Jt,X.count);else if(q.isInstancedBufferGeometry){const Sn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ee=Math.min(q.instanceCount,Sn);wt.renderInstances(Ce,Jt,Ee)}else wt.render(Ce,Jt)};function it(w,N,q,V){D!==null&&w.isNodeMaterial&&D.setObject(V,w),Xe===!0&&le.setState(w,q,!1),w.transparent===!0&&w.side===hr&&w.forceSinglePass===!1?(w.side=$n,w.needsUpdate=!0,Ht(w,N,V),w.side=ws,w.needsUpdate=!0,Ht(w,N,V),w.side=hr):Ht(w,N,V)}this.compile=function(w,N,q=null){q===null&&(q=w),D!==null&&D.renderStart(w,N,q),T=he.get(q),T.init(N),S.push(T),q.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),w!==q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),Je=this.localClippingEnabled,Xe=le.init(this.clippingPlanes,Je),Xe===!0&&le.setGlobalState(this.clippingPlanes,N),D!==null&&Le.render(T.state.shadowsArray,q,N);const V=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _e=X.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){const Me=_e[be];it(Me,q,N,X),V.add(Me)}else it(_e,q,N,X),V.add(_e)}),T=S.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(w,N,q=null){const V=this.compile(w,N,q);return new Promise(X=>{function _e(){if(V.forEach(function(be){const Re=W.get(be).currentProgram;(Re===void 0||Re.isReady())&&V.delete(be)}),V.size===0){X(w);return}setTimeout(_e,10)}We.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Lt=null;function cn(w){Lt&&Lt(w)}function It(){lt.stop()}function Tt(){lt.start()}const lt=new F0;lt.setAnimationLoop(cn),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(w){Lt=w,re.setAnimationLoop(w),w===null?lt.stop():lt.start()},re.addEventListener("sessionstart",It),re.addEventListener("sessionend",Tt),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(w,N);const q=re.enabled===!0&&re.isPresenting===!0,V=A!==null&&(J===null||q)&&A.begin(R,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,N,J),T=he.get(w,S.length),T.init(N),T.state.textureUnits=Z.getTextureUnits(),S.push(T),G.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),De.setFromProjectionMatrix(G,$i,N.reversedDepth),Je=this.localClippingEnabled,Xe=le.init(this.clippingPlanes,Je),M=de.get(w,b.length),M.init(),b.push(M),re.enabled===!0&&re.isPresenting===!0){const be=R.xr.getDepthSensingMesh();be!==null&&Pn(be,N,-1/0,R.sortObjects)}Pn(w,N,0,R.sortObjects),M.finish(),D!==null&&D.updateLights(T.state.lightsArray),R.sortObjects===!0&&M.sort(ge,Be),qe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,qe&&Oe.addToRenderList(M,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&le.beginShadows();const X=T.state.shadowsArray;if(Le.render(X,w,N),Xe===!0&&le.endShadows(),(V&&A.hasRenderPass())===!1){const be=M.opaque,Me=M.transmissive;if(T.setupLights(),N.isArrayCamera){const Re=N.cameras;if(Me.length>0)for(let Ie=0,Qe=Re.length;Ie<Qe;Ie++){const at=Re[Ie];Mn(be,Me,w,at)}qe&&Oe.render(w);for(let Ie=0,Qe=Re.length;Ie<Qe;Ie++){const at=Re[Ie];Pt(M,w,at,at.viewport)}}else Me.length>0&&Mn(be,Me,w,N),qe&&Oe.render(w),Pt(M,w,N)}J!==null&&k===0&&(Z.updateMultisampleRenderTarget(J),Z.updateRenderTargetMipmap(J)),V&&A.end(R),w.isScene===!0&&w.onAfterRender(R,w,N),ve.resetDefaultState(),H=-1,C=null,S.pop(),S.length>0?(T=S[S.length-1],Z.setTextureUnits(T.state.textureUnits),Xe===!0&&le.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?M=b[b.length-1]:M=null,D!==null&&D.renderEnd()};function Pn(w,N,q,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(De)){V&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(G);const be=ne.update(w),Me=w.material;Me.visible&&M.push(w,be,Me,q,yt.z,null,N)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(De))){const be=ne.update(w),Me=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),yt.copy(be.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4(G)),Array.isArray(Me)){const Re=be.groups;for(let Ie=0,Qe=Re.length;Ie<Qe;Ie++){const at=Re[Ie],Ce=Me[at.materialIndex];Ce&&Ce.visible&&M.push(w,be,Ce,q,yt.z,at,N)}}else Me.visible&&M.push(w,be,Me,q,yt.z,null,N)}}const _e=w.children;for(let be=0,Me=_e.length;be<Me;be++)Pn(_e[be],N,q,V)}function Pt(w,N,q,V){const{opaque:X,transmissive:_e,transparent:be}=w;T.setupLightsView(q),Xe===!0&&le.setGlobalState(R.clippingPlanes,q),V&&y.viewport(j.copy(V)),X.length>0&&Dn(X,N,q),_e.length>0&&Dn(_e,N,q),be.length>0&&Dn(be,N,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Mn(w,N,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Ce=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Li(1,1,{generateMipmaps:!0,type:Ce?tr:xi,minFilter:ds,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const _e=T.state.transmissionRenderTarget[V.id],be=V.viewport||j;_e.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);const Me=R.getRenderTarget(),Re=R.getActiveCubeFace(),Ie=R.getActiveMipmapLevel();R.setRenderTarget(_e),R.getClearColor(He),ze=R.getClearAlpha(),ze<1&&R.setClearColor(16777215,.5),R.clear(),qe&&Oe.render(q);const Qe=R.toneMapping;R.toneMapping=Ji;const at=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Xe===!0&&le.setGlobalState(R.clippingPlanes,V),Dn(w,q,V),Z.updateMultisampleRenderTarget(_e),Z.updateRenderTargetMipmap(_e),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let gt=0,Jt=N.length;gt<Jt;gt++){const Ut=N[gt],{object:wt,geometry:Sn,material:Ee,group:Ln}=Ut;if(Ee.side===hr&&wt.layers.test(V.layers)){const ft=Ee.side;Ee.side=$n,Ee.needsUpdate=!0,Zt(wt,q,V,Sn,Ee,Ln),Ee.side=ft,Ee.needsUpdate=!0,Ce=!0}}Ce===!0&&(Z.updateMultisampleRenderTarget(_e),Z.updateRenderTargetMipmap(_e))}R.setRenderTarget(Me,Re,Ie),R.setClearColor(He,ze),at!==void 0&&(V.viewport=at),R.toneMapping=Qe}function Dn(w,N,q){const V=N.isScene===!0?N.overrideMaterial:null;for(let X=0,_e=w.length;X<_e;X++){const be=w[X],{object:Me,geometry:Re,group:Ie}=be;let Qe=be.material;Qe.allowOverride===!0&&V!==null&&(Qe=V),Me.layers.test(q.layers)&&Zt(Me,N,q,Re,Qe,Ie)}}function Zt(w,N,q,V,X,_e){D!==null&&X.isNodeMaterial&&D.setObject(w,X),w.onBeforeRender(R,N,q,V,X,_e),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(R,N,q,V,w,_e),X.transparent===!0&&X.side===hr&&X.forceSinglePass===!1?(X.side=$n,X.needsUpdate=!0,R.renderBufferDirect(q,N,V,X,w,_e),X.side=ws,X.needsUpdate=!0,R.renderBufferDirect(q,N,V,X,w,_e),X.side=hr):R.renderBufferDirect(q,N,V,X,w,_e),w.onAfterRender(R,N,q,V,X,_e)}function Ht(w,N,q){N.isScene!==!0&&(N=Ot);const V=W.get(w),X=T.state.lights,_e=T.state.shadowsArray,be=X.state.version,Me=fe.getParameters(w,X.state,_e,N,q,T.state.lightProbeGridArray),Re=fe.getProgramCacheKey(Me);let Ie=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=ce.get(w.envMap||V.environment,Qe),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",Ae),Ie=new Map,V.programs=Ie);let at=Ie.get(Re);if(at!==void 0){if(V.currentProgram===at&&V.lightsStateVersion===be)return Fi(w,Me),at}else Me.uniforms=fe.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,q,Me),w.onBeforeCompile(Me,R),at=fe.acquireProgram(Me,Re),Ie.set(Re,at),V.uniforms=Me.uniforms;const Ce=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=le.uniform),Fi(w,Me),V.needsLights=hi(w),V.lightsStateVersion=be,V.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.sunLights.value=X.state.sun,Ce.sunLightShadows.value=X.state.sunShadow,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.sunShadowMatrix.value=X.state.sunShadowMatrix,Ce.sunShadowCascade.value=X.state.sunShadowCascade,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=at,V.uniformsList=null,at}function tn(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Xl.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Fi(w,N){const q=W.get(w);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function Us(w,N){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let q=0,V=w.length;q<V;q++){const X=w[q];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function un(w,N,q,V,X){N.isScene!==!0&&(N=Ot),Z.resetTextureUnits();const _e=N.fog,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,Me=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ct.workingColorSpace,Re=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ie=ce.get(V.envMap||be,Re),Qe=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,at=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!q.morphAttributes.position,gt=!!q.morphAttributes.normal,Jt=!!q.morphAttributes.color;let Ut=Ji;V.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ut=R.toneMapping);const wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Sn=wt!==void 0?wt.length:0,Ee=W.get(V),Ln=T.state.lights;if(Xe===!0&&(Je===!0||w!==C)){const Dt=w===C&&V.id===H;le.setState(V,w,Dt)}let ft=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ln.state.version||Ee.outputColorSpace!==Me||X.isBatchedMesh&&Ee.batching===!1||!X.isBatchedMesh&&Ee.batching===!0||X.isBatchedMesh&&Ee.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ee.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ee.instancing===!1||!X.isInstancedMesh&&Ee.instancing===!0||X.isSkinnedMesh&&Ee.skinning===!1||!X.isSkinnedMesh&&Ee.skinning===!0||X.isInstancedMesh&&Ee.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ee.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ee.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ee.instancingMorph===!1&&X.morphTexture!==null||Ee.envMap!==Ie||V.fog===!0&&Ee.fog!==_e||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==le.numPlanes||Ee.numIntersection!==le.numIntersection)||Ee.vertexAlphas!==Qe||Ee.vertexTangents!==at||Ee.morphTargets!==Ce||Ee.morphNormals!==gt||Ee.morphColors!==Jt||Ee.toneMapping!==Ut||Ee.morphTargetsCount!==Sn||!!Ee.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Ee.__version=V.version);let fi=Ee.currentProgram;ft===!0&&(fi=Ht(V,N,X),D&&V.isNodeMaterial&&D.onUpdateProgram(V,fi,Ee));let Oi=!1,br=!1,Fs=!1;const Et=fi.getUniforms(),Xt=Ee.uniforms;if(y.useProgram(fi.program)&&(Oi=!0,br=!0,Fs=!0),V.id!==H&&(H=V.id,br=!0),Ee.needsLights){const Dt=Us(T.state.lightProbeGridArray,X);Ee.lightProbeGrid!==Dt&&(Ee.lightProbeGrid=Dt,br=!0)}if(Oi||C!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Et.setValue(B,"projectionMatrix",w.projectionMatrix),Et.setValue(B,"viewMatrix",w.matrixWorldInverse);const wr=Et.map.cameraPosition;wr!==void 0&&wr.setValue(B,nt.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&Et.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Et.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,br=!0,Fs=!0)}if(Ee.needsLights&&(Ln.state.sunShadowMap.length>0&&Et.setValue(B,"sunShadowMap",Ln.state.sunShadowMap,Z),Ln.state.directionalShadowMap.length>0&&Et.setValue(B,"directionalShadowMap",Ln.state.directionalShadowMap,Z),Ln.state.spotShadowMap.length>0&&Et.setValue(B,"spotShadowMap",Ln.state.spotShadowMap,Z),Ln.state.pointShadowMap.length>0&&Et.setValue(B,"pointShadowMap",Ln.state.pointShadowMap,Z)),X.isSkinnedMesh){Et.setOptional(B,X,"bindMatrix"),Et.setOptional(B,X,"bindMatrixInverse");const Dt=X.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Et.setValue(B,"boneTexture",Dt.boneTexture,Z))}X.isBatchedMesh&&(Et.setOptional(B,X,"batchingTexture"),Et.setValue(B,"batchingTexture",X._matricesTexture,Z),Et.setOptional(B,X,"batchingIdTexture"),Et.setValue(B,"batchingIdTexture",X._indirectTexture,Z),Et.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Et.setValue(B,"batchingColorTexture",X._colorsTexture,Z));const Tr=q.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&U.update(X,q,fi),(br||Ee.receiveShadow!==X.receiveShadow)&&(Ee.receiveShadow=X.receiveShadow,Et.setValue(B,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Xt.envMapIntensity.value=N.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=OE()),br){if(Et.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ee.needsLights&&Wt(Xt,Fs),_e&&V.fog===!0&&we.refreshFogUniforms(Xt,_e),we.refreshMaterialUniforms(Xt,V,ee,K,T.state.transmissionRenderTarget[w.id]),Ee.needsLights&&Ee.lightProbeGrid){const Dt=Ee.lightProbeGrid;Xt.probesSH.value=Dt.texture,Xt.probesMin.value.copy(Dt.boundingBox.min),Xt.probesMax.value.copy(Dt.boundingBox.max),Xt.probesResolution.value.copy(Dt.resolution)}Xl.upload(B,tn(Ee),Xt,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xl.upload(B,tn(Ee),Xt,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Et.setValue(B,"center",X.center),Et.setValue(B,"modelViewMatrix",X.modelViewMatrix),Et.setValue(B,"normalMatrix",X.normalMatrix),Et.setValue(B,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){const Dt=V.uniformsGroups;for(let wr=0,Os=Dt.length;wr<Os;wr++){const If=Dt[wr];ie.update(If,fi),ie.bind(If,fi)}}return fi}function Wt(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.sunLights.needsUpdate=N,w.sunLightShadows.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function hi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,N,q){const V=W.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=N,W.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const q=W.get(w);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,q=0){J=w,Y=N,k=q;let V=null,X=!1,_e=!1;if(w){const Me=W.get(w);if(Me.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),j.copy(w.viewport),Se.copy(w.scissor),ye=w.scissorTest,y.viewport(j),y.scissor(Se),y.setScissorTest(ye),H=-1;return}else if(Me.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(Me.__hasExternalTextures)Z.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Qe=w.depthTexture;if(Me.__boundDepthTexture!==Qe){if(Qe!==null&&W.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}const Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(_e=!0);const Ie=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?V=Ie[N][q]:V=Ie[N],X=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?V=W.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?V=Ie[q]:V=Ie,j.copy(w.viewport),Se.copy(w.scissor),ye=w.scissorTest}else j.copy(me).multiplyScalar(ee).floor(),Se.copy(Fe).multiplyScalar(ee).floor(),ye=ke;if(q!==0&&(V=O),y.bindFramebuffer(B.FRAMEBUFFER,V)&&y.drawBuffers(w,V),y.viewport(j),y.scissor(Se),y.setScissorTest(ye),X){const Me=W.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,q)}else if(_e){const Me=N;for(let Re=0;Re<w.textures.length;Re++){const Ie=W.get(w.textures[Re]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Re,Ie.__webglTexture,q,Me)}}else if(w!==null&&q!==0){const Me=W.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,q)}H=-1};function Ns(w){const N=W.get(w);return(N.__readFormat!==w.format||N.__readType!==w.type)&&(N.__readFormat=w.format,N.__readType=w.type,N.__formatReadable=P.textureFormatReadable(w.format),N.__typeReadable=P.textureTypeReadable(w.type)),N}this.readRenderTargetPixels=function(w,N,q,V,X,_e,be,Me=0){if(!(w&&w.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){y.bindFramebuffer(B.FRAMEBUFFER,Re);try{const Ie=w.textures[Me],Qe=Ie.format,at=Ie.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const Ce=Ns(Ie);if(Ce.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&q>=0&&q<=w.height-X&&B.readPixels(N,q,V,X,pe.convert(Qe),pe.convert(at),_e)}finally{const Ie=J!==null?W.get(J).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(w,N,q,V,X,_e,be,Me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re)if(N>=0&&N<=w.width-V&&q>=0&&q<=w.height-X){y.bindFramebuffer(B.FRAMEBUFFER,Re);const Ie=w.textures[Me],Qe=Ie.format,at=Ie.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const Ce=Ns(Ie);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,gt),B.bufferData(B.PIXEL_PACK_BUFFER,_e.byteLength,B.STREAM_READ),B.readPixels(N,q,V,X,pe.convert(Qe),pe.convert(at),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Jt=J!==null?W.get(J).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Jt);const Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Hv(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,gt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,_e),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(gt),B.deleteSync(Ut),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,q=0){const V=Math.pow(2,-q),X=Math.floor(w.image.width*V),_e=Math.floor(w.image.height*V),be=N!==null?N.x:0,Me=N!==null?N.y:0;Z.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,be,Me,X,_e),y.unbindTexture()},this.copyTextureToTexture=function(w,N,q=null,V=null,X=0,_e=0){let be,Me,Re,Ie,Qe,at,Ce,gt,Jt;const Ut=w.isCompressedTexture?w.mipmaps[_e]:w.image;if(q!==null)be=q.max.x-q.min.x,Me=q.max.y-q.min.y,Re=q.isBox3?q.max.z-q.min.z:1,Ie=q.min.x,Qe=q.min.y,at=q.isBox3?q.min.z:0;else{const Xt=Math.pow(2,-X);be=Math.floor(Ut.width*Xt),Me=Math.floor(Ut.height*Xt),w.isDataArrayTexture?Re=Ut.depth:w.isData3DTexture?Re=Math.floor(Ut.depth*Xt):Re=1,Ie=0,Qe=0,at=0}V!==null?(Ce=V.x,gt=V.y,Jt=V.z):(Ce=0,gt=0,Jt=0);const wt=pe.convert(N.format),Sn=pe.convert(N.type);let Ee;N.isData3DTexture?(Z.setTexture3D(N,0),Ee=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),Ee=B.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),Ee=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);const Ln=y.getParameter(B.UNPACK_ROW_LENGTH),ft=y.getParameter(B.UNPACK_IMAGE_HEIGHT),fi=y.getParameter(B.UNPACK_SKIP_PIXELS),Oi=y.getParameter(B.UNPACK_SKIP_ROWS),br=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,Ut.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ut.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Ie),y.pixelStorei(B.UNPACK_SKIP_ROWS,Qe),y.pixelStorei(B.UNPACK_SKIP_IMAGES,at);const Fs=w.isDataArrayTexture||w.isData3DTexture,Et=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const Xt=W.get(w),Tr=W.get(N),Dt=W.get(Xt.__renderTarget),wr=W.get(Tr.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,Dt.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let Os=0;Os<Re;Os++)Fs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(w).__webglTexture,X,at+Os),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(N).__webglTexture,_e,Jt+Os)),B.blitFramebuffer(Ie,Qe,be,Me,Ce,gt,be,Me,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||W.has(w)){const Xt=W.get(w),Tr=W.get(N);y.bindFramebuffer(B.READ_FRAMEBUFFER,L),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let Dt=0;Dt<Re;Dt++)Fs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.__webglTexture,X,at+Dt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xt.__webglTexture,X),Et?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tr.__webglTexture,_e,Jt+Dt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tr.__webglTexture,_e),X!==0?B.blitFramebuffer(Ie,Qe,be,Me,Ce,gt,be,Me,B.COLOR_BUFFER_BIT,B.NEAREST):Et?B.copyTexSubImage3D(Ee,_e,Ce,gt,Jt+Dt,Ie,Qe,be,Me):B.copyTexSubImage2D(Ee,_e,Ce,gt,Ie,Qe,be,Me);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Et?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Ee,_e,Ce,gt,Jt,be,Me,Re,wt,Sn,Ut.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(Ee,_e,Ce,gt,Jt,be,Me,Re,wt,Ut.data):B.texSubImage3D(Ee,_e,Ce,gt,Jt,be,Me,Re,wt,Sn,Ut):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,_e,Ce,gt,be,Me,wt,Sn,Ut.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,_e,Ce,gt,Ut.width,Ut.height,wt,Ut.data):B.texSubImage2D(B.TEXTURE_2D,_e,Ce,gt,be,Me,wt,Sn,Ut);y.pixelStorei(B.UNPACK_ROW_LENGTH,Ln),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft),y.pixelStorei(B.UNPACK_SKIP_PIXELS,fi),y.pixelStorei(B.UNPACK_SKIP_ROWS,Oi),y.pixelStorei(B.UNPACK_SKIP_IMAGES,br),_e===0&&N.generateMipmaps&&B.generateMipmap(Ee),y.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){Y=0,k=0,J=null,y.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const kE=`
vec3 flow(vec3 p, float t){
  return vec3(sin(p.y*.9 + t*.31) + sin(p.z*1.7 - t*.23)*.5,
              sin(p.z*.8 - t*.27) + sin(p.x*1.5 + t*.19)*.5,
              sin(p.x*.7 + t*.29) + sin(p.y*1.9 - t*.21)*.5);
}`,zE=(i,e,t,n)=>[Math.sin(e*.9+n*.31)+Math.sin(t*1.7-n*.23)*.5,Math.sin(t*.8-n*.27)+Math.sin(i*1.5+n*.19)*.5,Math.sin(i*.7+n*.29)+Math.sin(e*1.9-n*.21)*.5],HE=`
attribute vec3 aTo; attribute vec3 aMid; attribute vec3 aCol; attribute vec3 aColTo; attribute float aR; attribute float aD; attribute vec4 aMo;
uniform float uP, uTime, uSize, uPx, uMR, uSpin, uDoubt, uFade, uVel, uAudio, uOnset, uRise, uMoRate, uHold, uBurst;
uniform vec2 uMouse, uBurstAt;
varying vec3 vC; varying float vA;
${kE}
vec3 motion(vec4 m, float t){
  if (m.w < 0.) return vec3(0.);
  if (m.w < 10.) return m.xyz*sin(t*uMoRate + m.w);
  if (m.w < 20.) return m.xyz*fract(t*uMoRate*.35 + m.w);
  return vec3(0.);
}
void main(){
  float d = aR*.38 + aD*.22;                       // late deciders start late
  float k = clamp((uP - d) / (1. - d), 0., 1.);
  k = clamp(k + sin(uTime*1.7 + aR*31.)*.12*k*(1.-k)*4.*uDoubt, 0., 1.); // step, doubt, step again
  float e = k*k*(3.-2.*k), ie = 1.-e, mid = 4.*e*ie;
  vec3 pos = ie*ie*position + 2.*ie*e*aMid + e*e*aTo;
  vec3 f = flow(pos*.45 + aR*.6, uTime);
  pos += f*(mid*.55 + .025 + uDoubt*.08*ie);
  pos += f*smoothstep(.92, 1., aD)*(.5 + .5*sin(uTime*.6 + aR*50.))*.7; // the ones who never quite agree
  pos += motion(aMo, uTime)*e;                                          // the shape's own life: pistons, exhaust, ripples
  pos.y += step(10., aMo.w)*uRise*e;                                    // lift-off
  pos += normalize(pos + 1e-4)*uOnset*.12*aR;                           // each note nudges the field outward
  float c = cos(uSpin), s = sin(uSpin);
  pos.xz = mat2(c, -s, s, c)*pos.xz;
  vec2 dm = pos.xy - uMouse; float fm = smoothstep(uMR, 0., length(dm))*(1. - uHold);
  pos.xy += normalize(dm + 1e-4)*fm*.6; pos.z += fm*.8;
  // hold: the dots conspire toward you, circling as they come
  vec2 toM = uMouse - pos.xy; float near = smoothstep(5.5, 0., length(toM))*uHold;
  pos.xy += toM*near*(.55 + .4*aR) + vec2(-toM.y, toM.x)*near*.25*sin(uTime*2.3 + aR*6.);
  pos.z *= 1. - near*.7;
  // click: a shockwave that throws them out; the morph maths pulls them home
  vec2 fb = pos.xy - uBurstAt; float bd = length(fb), bk = uBurst*exp(-bd*.32);
  pos.xy += normalize(fb + 1e-4)*bk*(1.4 + 2.6*aR); pos.z += bk*(aR - .5)*5.;
  pos.y += uVel*(aR - .5)*2.2;
  vec4 mv = modelViewMatrix*vec4(pos, 1.);
  gl_Position = projectionMatrix*mv;
  gl_PointSize = uSize*uPx*(.5 + aR*.9)/-mv.z*(1. + fm*1.2 + uAudio*.55*aR + uOnset*.4);
  vC = mix(aCol, aColTo, e) + fm*vec3(.95, .7, .25)*.5 + uOnset*vec3(.5, .36, .12)*aR + (near*.6 + bk*.5)*vec3(1., .72, .3);
  vA = (.45 + .55*aR)*uFade*(1. - mid*.3);
}`,GE=`
varying vec3 vC; varying float vA;
void main(){
  float d = length(gl_PointCoord - .5);
  if (d > .5) discard;
  gl_FragColor = vec4(vC, smoothstep(.5, .05, d)*vA);
}`;class VE{renderer;scene=new xx;camera=new vi(35,1,.1,100);n;u={uP:{value:1},uTime:{value:0},uSize:{value:24},uPx:{value:1},uMR:{value:1},uSpin:{value:0},uDoubt:{value:1},uFade:{value:1},uVel:{value:0},uAudio:{value:0},uOnset:{value:0},uRise:{value:0},uMoRate:{value:2},uHold:{value:0},uBurst:{value:0},uMouse:{value:new ht(99,99)},uBurstAt:{value:new ht(0,0)}};geo=new Ui;rand;doubt;mouseTarget=new ht(99,99);morphStart=0;morphDur=2.4;morphing=!1;spinSpeed=0;constructor(e,t,n=7){this.n=t,this.renderer=new BE({canvas:e,antialias:!1,alpha:!0,powerPreference:"high-performance"}),this.camera.position.z=10;const r=Na(n);this.rand=new Float32Array(t).map(()=>r()),this.doubt=new Float32Array(t).map(()=>r());const s=W0(t,{w:30,h:18},n),a=(c,f)=>new Qi(c,f);this.geo.setAttribute("position",a(s.pos,3)),this.geo.setAttribute("aTo",a(s.pos.slice(),3)),this.geo.setAttribute("aMid",a(s.pos.slice(),3)),this.geo.setAttribute("aCol",a(s.col,3)),this.geo.setAttribute("aColTo",a(s.col.slice(),3)),this.geo.setAttribute("aR",a(this.rand,1)),this.geo.setAttribute("aD",a(this.doubt,1)),this.geo.setAttribute("aMo",a(new Float32Array(t*4).fill(-1),4));const o=new Ii({vertexShader:HE,fragmentShader:GE,uniforms:this.u,transparent:!0,depthWrite:!1,blending:Gu}),l=new Px(this.geo,o);l.frustumCulled=!1,this.scene.add(l),this.resize(),this.renderer.compile(this.scene,this.camera)}toWorld(e,t){const n=this.view();return{x:(e/innerWidth-.5)*n.w,y:-(t/innerHeight-.5)*n.h}}view(){const e=2*Math.tan(sx.degToRad(this.camera.fov/2))*this.camera.position.z;return{w:e*this.camera.aspect,h:e}}resize(){const e=innerWidth,t=innerHeight,n=Math.min(devicePixelRatio,1.5);this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.u.uPx.value=n*(t/900)}setMouse(e,t){const n=this.view();this.mouseTarget.set(e*n.w/2,t*n.h/2)}setBudget(e){this.geo.setDrawRange(0,Math.floor(this.n*e))}get budget(){return this.geo.drawRange.count===1/0?this.n:this.geo.drawRange.count}morph(e,t=2.4,n=1.1){const r=this.geo.attributes,s=r.position.array,a=r.aTo.array,o=r.aMid.array,l=r.aCol.array,c=r.aColTo.array,f=r.aMo.array,d=this.u.uMoRate.value,u=this.u.uRise.value,h=this.u.uP.value,p=this.u.uTime.value,m=this.u.uDoubt.value;for(let _=0;_<this.n;_++){const g=this.rand[_],x=g*.38+this.doubt[_]*.22;let E=Math.min(1,Math.max(0,(h-x)/(1-x)));E=Math.min(1,Math.max(0,E+Math.sin(p*1.7+g*31)*.12*E*(1-E)*4*m));const v=E*E*(3-2*E),M=1-v,T=4*v*M,b=_*3,S=M*M*s[b]+2*M*v*o[b]+v*v*a[b],A=M*M*s[b+1]+2*M*v*o[b+1]+v*v*a[b+1],R=M*M*s[b+2]+2*M*v*o[b+2]+v*v*a[b+2],I=zE(S*.45+g*.6,A*.45+g*.6,R*.45+g*.6,p),D=T*.55+.025+m*.08*M;s[b]=S+I[0]*D,s[b+1]=A+I[1]*D,s[b+2]=R+I[2]*D;const O=_*4,L=f[O+3];if(L>=0){const F=L<10?Math.sin(p*d+L):L<20?(p*d*.35+L)%1:0;s[b]+=f[O]*F*v,s[b+1]+=f[O+1]*F*v+(L>=10?u*v:0),s[b+2]+=f[O+2]*F*v}for(let F=0;F<3;F++)l[b+F]+=(c[b+F]-l[b+F])*v}a.set(e.pos),c.set(e.col),e.mo?f.set(e.mo):f.fill(-1),this.u.uRise.value=0;for(let _=0;_<this.n;_++){const g=_*3,x=this.rand[_];for(let E=0;E<3;E++){const v=(Math.floor(a[g+E]/n)+.5)*n,M=(Math.floor(s[g+E]/n)+.5)*n;o[g+E]=M*.3+v*.7+(x-.5)*.08}o[g+2]+=x*.8}for(const _ of["position","aTo","aMid","aCol","aColTo","aMo"])r[_].needsUpdate=!0;this.u.uP.value=0,this.morphDur=t,this.morphStart=p,this.morphing=!0}tick(e,t,n=!0){if(this.u.uTime.value=e,this.morphing){const r=Math.min(1,(e-this.morphStart)/this.morphDur);this.u.uP.value=1-Math.pow(1-r,2.2),r>=1&&(this.morphing=!1)}this.u.uSpin.value+=this.spinSpeed*t,this.u.uMouse.value.lerp(this.mouseTarget,.1),n&&this.renderer.render(this.scene,this.camera)}dispose(){this.geo.dispose(),this.renderer.dispose()}}function Na(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function W0(i,e,t=3,n=[.5,.5,.55]){const r=Na(t),s=new Float32Array(i*3),a=new Float32Array(i*3);for(let o=0;o<i;o++){s.set([(r()-.5)*e.w*1.8,(r()-.5)*e.h*1.8,-1-r()*14],o*3);const l=.15+r()**3*.85,c=r()<.04;a.set(c?[l,l*.72,l*.3]:[n[0]*l,n[1]*l,n[2]*l],o*3)}return{pos:s,col:a}}const rn={k:1,ox:0,oy:0},Ei=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],ya=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],No=[1,.7,.26],WE=[.8,.46,.12],Di=[.93,.91,.86],Ea=[.5,.52,.56];function _p([i,e,t],n,r,s=0){let a=Math.cos(s),o=Math.sin(s);return[i,e]=[i*a-e*o,i*o+e*a],a=Math.cos(r),o=Math.sin(r),[i,t]=[i*a+t*o,-i*o+t*a],a=Math.cos(n),o=Math.sin(n),[e,t]=[e*a-t*o,e*o+t*a],[i,e,t]}function Ni(i,e,t,n,r,s,a=0){const o=Na(t),l=new Float32Array(i*3),c=new Float32Array(i*3),[f,d]=typeof s=="number"?[s,s*.72]:s,u=Math.min(1,e.w*.86/f,e.h*.8/d)*rn.k,h=n.some(_=>_.motion),p=h?new Float32Array(i*4).fill(-1):void 0,m=[];n.reduce((_,g)=>(m.push(_+g.share),_+g.share),0);for(let _=0;_<i;_++){const g=o(),x=m.findIndex(b=>g<b);if(x<0){l.set([(o()-.5)*e.w*1.7,(o()-.5)*e.h*1.7,-3-o()*8],_*3);const b=.08+o()*.14;c.set([b,b,b*1.1],_*3);continue}const E=n[x],v=E.sample(o),M=E.color(o,v),T=_p(v,r[0],r[1],r[2]);if(l.set([T[0]*u+rn.ox,(T[1]+a)*u+rn.oy,T[2]*u],_*3),c.set(M,_*3),p&&E.motion){const b=E.motion(o,v),S=_p([b[0],b[1],b[2]],r[0],r[1],r[2]);p.set([S[0]*u,S[1]*u,S[2]*u,b[3]],_*4)}}return{pos:l,col:c,mo:p}}const Ki=(i,e,t=.015)=>n=>{const r=ya(i,e,n());return[r[0]+(n()-.5)*t,r[1]+(n()-.5)*t,r[2]+(n()-.5)*t]},Ps=(i,e)=>t=>{const n=Math.floor(t()*3),r=t()<.5?-1:1,s=[(t()*2-1)*e[0],(t()*2-1)*e[1],(t()*2-1)*e[2]];return s[n]=r*e[n],[i[0]+s[0],i[1]+s[1],i[2]+s[2]]},mn=(i,e,t=.6)=>n=>{const r=t+n()*(1-t);return Ei(i,e,n()).map(s=>s*r)};function XE(i,e){const r=[];for(let p=-2;p<=2;p++)for(let m=-2;m<=2;m++){const _=Math.max(Math.abs(p),Math.abs(m),Math.abs(p+m));(_===1||_===2)&&r.push([.52*Math.sqrt(3)*(p+m/2),.52*1.5*m])}const s=.55,a=[0,s,2.5],o={share:.52,sample:p=>{const[m,_]=r[Math.floor(p()*r.length)];let g=0,x=0;do g=(p()*2-1)*.52*.93*.866,x=(p()*2-1)*.52*.93;while(Math.abs(x)+Math.abs(g)/Math.sqrt(3)>.52*.93);const E=m+g,v=_+x;return[E,v+s,(E*E+v*v)*.045]},color:(p,m)=>Ei(No,WE,Math.min(1,Math.hypot(m[0],m[1]-s)/2.3+p()*.25)).map(_=>_*(.75+p()*.3))},l={share:.06,sample:p=>{const m=[[0,s+2.15,.2],[-1.86,s-1.08,.2],[1.86,s-1.08,.2]];return Ki(m[Math.floor(p()*3)],a)(p)},color:mn(Ea,Di,.5)},c={share:.02,sample:p=>{const m=p()*6.283,_=Math.sqrt(p())*.2;return[a[0]+Math.cos(m)*_,a[1]+Math.sin(m)*_,a[2]]},color:()=>No},f=[[-4.2,0],[-2.3,2],[2.3,2],[4.2,0],[2.3,-2],[-2.3,-2]],d=(p,m)=>{let _=!1;for(let g=0,x=5;g<6;x=g++){const[E,v]=f[g],[M,T]=f[x];v>m!=T>m&&p<(M-E)*(m-v)/(T-v)+E&&(_=!_)}return _},u={share:.32,sample:p=>{let m=0,_=0;do m=(p()*2-1)*4.2,_=(p()*2-1)*2;while(!d(m,_));const g=Math.floor(p()*5);return[m*(1-g*.03),-1.95-g*.1,_*(1-g*.03)-.2]},color:p=>Ei([.62,.5,.62],[.82,.72,.8],p()).map(m=>m*(.35+p()*.3))},h={share:.06,sample:p=>Ps([0,-1.35,-.3],[.45,.55,.35])(p),color:mn([.35,.33,.3],[.55,.5,.42])};return Ni(i,e,11,[o,l,c,u,h],[.38,-.55,0],8.6,.1)}function YE(i,e){const r={share:.44,sample:p=>{const m=p()*6.283,_=1.85*Math.sqrt(p());return[Math.cos(m)*_,Math.sin(m)*_,.55*(_/1.85)**2]},color:(p,m)=>Di.map(_=>_*(.5+.5*(1-Math.hypot(m[0],m[1])/1.85*.6)*(.7+p()*.3)))},s={share:.05,sample:p=>{const m=p()*6.283;return[Math.cos(m)*1.85,Math.sin(m)*1.85,.55+(p()-.5)*.03]},color:()=>Di},a={share:.03,sample:p=>{const m=Math.floor(p()*3)*2.094+.5;return Ki([Math.cos(m)*1.85*.95,Math.sin(m)*1.85*.95,.55],[0,0,1.25])(p)},color:mn(Ea,Di)},o={share:.14,sample:p=>{const m=Math.floor(p()*10),_=m*.628,g=_+.628,x=p(),E=.85;return p()<.75?[Math.cos(_)*E*(1-x)+Math.cos(g)*E*x,Math.sin(_)*E*(1-x)+Math.sin(g)*E*x,-.55-p()*.45]:[(p()*2-1)*.7,(p()*2-1)*.7,-1]},color:mn([.75,.56,.26],[.5,.4,.25])},l={share:.03,sample:p=>{const m=p()*6.283,_=.32*Math.sqrt(p());return[.9,Math.cos(m)*_-.1,-.78+Math.sin(m)*_]},color:p=>No.map(m=>m*(.8+p()*.2))},c={share:.05,sample:Ki([-.4,.6,-.9],[-6,4.3,-2.4],.01),color:mn(Ea,Di,.35)},f=[-2.9,-1.2,-1],d={share:.1,sample:p=>{if(p()<.3)return Ki([-.6,-.4,-.8],f)(p);const m=Math.floor(p()*3),_=ya([-1.7,-.75,-.9],f,m/2.4),g=p()*6.283;return[_[0]+(p()-.5)*.45,_[1]+Math.cos(g)*.17,_[2]+Math.sin(g)*.17]},color:mn([.45,.42,.4],[.7,.65,.58])},u=[2.8,-1,-.9],h={share:.1,sample:p=>p()<.35?Ki([.6,-.4,-.8],u)(p):Ps(u,[.32,.26,.22])(p),color:mn(Ea,[.8,.6,.3])};return Ni(i,e,12,[r,s,a,o,l,c,d,h],[-.18,.55,.05],8,.2)}function qE(i,e){const s=(f,d)=>{const u=Math.sin(f*127.1+d*311.7)*43758.5453;return u-Math.floor(u)};return Ni(i,e,13,[{share:.56,sample:f=>{const d=(f()*2-1)*1.6,u=(f()*2-1)*1.6;return f()<.5?[Math.round(d/.065)*.065,u,.06]:[d,Math.round(u/.065)*.065,.06]},color:(f,d)=>{const u=s(Math.floor((d[0]+1.6)/.4),Math.floor((d[1]+1.6)/.4));return(u>.82?Ei(No,Di,f()*.4):Ei([.38,.48,.7],[.62,.72,.9],u)).map(h=>h*(.55+f()*.45))}},{share:.06,sample:f=>{const d=f()*2-1,u=f()<.5?-1:1;return f()<.5?[d*1.6,u*1.6,.06]:[u*1.6,d*1.6,.06]},color:()=>Di},{share:.16,sample:f=>[(f()*2-1)*2.3,(f()*2-1)*2.3,-.08],color:f=>[.12,.16,.14].map(d=>d*(.6+f()*.6))},{share:.18,sample:f=>{const d=Math.floor(f()*24),u=(d+.5)/24*2-1,h=Math.floor(f()*4),p=u*2.3*.92+(f()-.5)*.08,m=2.3+f()*.45;return h===0?[p,m,-.1]:h===1?[p,-m,-.1]:h===2?[m,p,-.1]:[-m,p,-.1]},color:f=>No.map(d=>d*(.6+f()*.4))}],[-.95,0,.35],6.4,-.1)}function Dh(i,e,t,n,r,s,a=.82,o=21,l=.84){const c=Na(o),f=1400,d=Math.round(f*e.h/e.w),u=document.createElement("canvas");u.width=f,u.height=d;const h=u.getContext("2d",{willReadFrequently:!0});if(!h)throw new Error("2D canvas unavailable");let p=d/(t.length*1.3);h.font=n(p);const m=Math.max(...t.map(T=>h.measureText(T).width));p=Math.min(p,p*(f*l)/m),h.font=n(p),h.fillStyle="#fff",h.textBaseline="middle",h.textAlign="center",t.forEach((T,b)=>h.fillText(T,f/2,d/2+(b-(t.length-1)/2)*p*1.05));const _=h.getImageData(0,0,f,d).data,g=[];for(let T=0;T<d;T+=2)for(let b=0;b<f;b+=2)_[(T*f+b)*4+3]>128&&g.push(b,T);const x=g.length/2,E=new Float32Array(i*3),v=new Float32Array(i*3),M=e.w/f;for(let T=0;T<i;T++)if(x&&c()<a){const b=Math.floor(c()*x)*2,S=g[b],A=g[b+1];E.set([(S-f/2)*M+(c()-.5)*M*1.4,-(A-d/2)*M+(c()-.5)*M*1.4,(c()-.5)*.15],T*3),v.set(Ei(r,s,Math.min(1,Math.max(0,S/f+(c()-.5)*.2))),T*3)}else{E.set([(c()-.5)*e.w*1.7,(c()-.5)*e.h*1.7,-3-c()*8],T*3);const b=.07+c()*.12;v.set([b,b,b*1.1],T*3)}return{pos:E,col:v}}function $E(i,e){const t=Na(31),n=new Float32Array(i*3),r=new Float32Array(i*3),s=Math.min(1,e.w/9);for(let a=0;a<i;a++){const o=t()*6.283,l=Math.acos(2*t()-1),c=(.4+t()**1.8*3.6)*s;n.set([Math.sin(l)*Math.cos(o)*c*1.5,Math.cos(l)*c*.8,Math.sin(l)*Math.sin(o)*c],a*3);const f=.2+t()*.5;r.set(t()<.05?[f,f*.7,f*.3]:[f*.8,f*.82,f*.9],a*3)}return{pos:n,col:r}}const Fo=[{id:"say",name:"Say",line:"Talk to your browser.",body:"Press a key, say what you want, and it happens. Under a second. Your voice stays on your computer.",status:"Building v1",orbit:0},{id:"glassbox",name:"glassbox",line:"See what your AI agent sends.",body:"A live window on everything your coding agent sends out. It stops secrets before they leave your machine.",status:"Building",orbit:0},{id:"clible",name:"Clible",line:"A site you watch, not scroll.",body:"The home for my products. One field of dots that changes shape and shows itself around.",status:"Site built",orbit:1},{id:"nod",name:"nod",line:"You are not alone on this page.",body:"A small badge that shows how many people are on the same page as you, and lets you nod to them. Nothing is saved.",status:"Parked, working demo",orbit:2},{id:"roomy",name:"Roomy",line:"Get your disk back.",body:"Finds old build folders and caches your tools can rebuild, and clears them safely.",status:"Idea, parked",orbit:2},{id:"turn",name:"turn",line:"Know when it is your turn.",body:"A QR code at the counter shows your place in line, live, on your phone. No app.",status:"Idea",orbit:2}],KE=[{title:"Fast beats clever.",body:"Most requests are simple. Answer those at once. Save the clever part for when it is needed."},{title:"Show the value first.",body:"Let people see what they get before asking for anything."},{title:"Keep it on the device.",body:"If data does not need to leave your computer, it does not."},{title:"One thing, done well.",body:"Small tools, finished properly."}],Mc={email:"hello@ayushsrivastav.com",github:"https://github.com/srvstav"},gp=[{shape:"huddle",caption:""},{shape:"webb",caption:"James Webb Space Telescope — 18 gold mirrors, 1.5 million km from Earth"},{shape:"voyager",caption:"Voyager 1 — launched 1977, still sending data home"},{shape:"chip",caption:"The microchip — billions of switches on a fingernail"},{shape:"people",caption:""},{shape:"name",caption:""}],X0=[{id:"v12",name:"Ferrari 12Cilindri",line:"A 6.5-litre V12 with no turbo. It revs to 9,500 rpm.",rate:13,spin:"turn",ms:4600},{id:"starship",name:"Starship",line:"The largest rocket ever flown. Its booster flies home and the tower catches it.",rate:4,spin:"sway",ms:6200},{id:"exosphere",name:"The exosphere",line:"Where the air runs out and space begins, hundreds of kilometres up.",rate:.8,spin:"still",ms:4600},{id:"alma",name:"ALMA, Chile",line:"66 antennas, 5,000 m up in the Atacama, working as one telescope.",rate:1,spin:"sway",ms:4800},{id:"halley",name:"Halley VI, Antarctica",line:"A research station on legs and skis, so it can move when the ice does.",rate:1.1,spin:"sway",ms:4800},{id:"sphere",name:"Sphere, Las Vegas",line:"Its outside is one screen, called the Exosphere: about 1.2 million LED pucks.",rate:1,spin:"look",ms:4800},{id:"opera",name:"Sydney Opera House",line:"Every shell was cut from the same sphere. It took 14 years to build.",rate:1.4,spin:"sway",ms:4800},{id:"drones",name:"Drone shows, China",line:"Thousands of drones flying as one picture in the night sky.",rate:2.6,spin:"sway",ms:5e3}],Y0=299792.458,ZE=Y0*86400,JE=Date.UTC(2026,10,15),QE=17,jE=(i=Date.now())=>ZE+(i-JE)/1e3*QE,eb=i=>i/Y0,tb=new Intl.NumberFormat("en-US"),cc=i=>tb.format(Math.round(i));function nb(i){const e=Math.floor(i/3600),t=Math.floor(i%3600/60),n=Math.floor(i%60);return`${e} h ${String(t).padStart(2,"0")} m ${String(n).padStart(2,"0")} s`}const ta=26,Al=10,Rl=9;function ib(i,e,t){const[n,r,s,a]=[...i.querySelectorAll("i")],o=i.querySelector("b"),l={x:innerWidth/2,y:innerHeight/2,w:ta,h:ta};let c=l.x,f=l.y,d=null,u=0,h=null,p="",m=!1,_=!1;addEventListener("pointermove",M=>{M.pointerType==="mouse"&&(c=M.clientX,f=M.clientY,d=M.target?.closest?.("a, button, [data-lock]")??null)},{passive:!0});const g=(M,T)=>{const b=M/innerWidth*24,S=90-T/innerHeight*180;return`RA ${String(Math.floor(b)).padStart(2,"0")}h${String(Math.floor(b%1*60)).padStart(2,"0")} · DEC ${S>=0?"+":"−"}${String(Math.abs(Math.round(S))).padStart(2,"0")}°`},x=M=>(M.getAttribute("data-lock")||M.getAttribute("aria-label")||M.textContent||"").trim().slice(0,28),E=(M,T,b,S=1)=>{M&&(M.style.transform=`translate3d(${T.toFixed(1)}px,${b.toFixed(1)}px,0)${S!==1?` scale(${S.toFixed(2)})`:""}`)};function v(M=0){let T,b;d&&d.checkVisibility?.({checkVisibilityCSS:!0})===!1&&(d=null);const S=h?h.el:d;if(S){const O=S.getBoundingClientRect();T={x:O.left-Al,y:O.top-Al,w:O.width+Al*2,h:O.height+Al*2},b=h?.text||`Lock · ${x(S)}`}else{const O=h?.x??c,L=h?.y??f;T={x:O-ta/2,y:L-ta/2,w:ta,h:ta},b=h?.text||g(O,L)}const A=h?.2:.3;l.x+=(T.x-l.x)*A,l.y+=(T.y-l.y)*A,l.w+=(T.w-l.w)*A,l.h+=(T.h-l.h)*A,u+=(M-u)*.3;const R=u*4;E(n,l.x-R,l.y-R),E(r,l.x+l.w-Rl+R,l.y-R),E(s,l.x-R,l.y+l.h-Rl+R),E(a,l.x+l.w-Rl+R,l.y+l.h-Rl+R),E(o,l.x+l.w/2-1.5,l.y+l.h/2-1.5,1+u*2.5),E(e,l.x,l.y+l.h+8+R);const I=!!S,D=t||!!h;I!==m&&(i.classList.toggle("is-locked",I),m=I),D!==_&&(i.classList.toggle("is-visible",D),_=D),b!==p&&(e.textContent=b,p=b)}return{frame:v,lock(M,T=""){if(!M){h=null;return}h=M instanceof Element?{el:M,text:T||`Lock · ${x(M)}`}:{x:M.x,y:M.y,text:T}},get piloted(){return!!h}}}const rb="http://www.w3.org/2000/svg",Xa=500,Ya=280,qa=[170,290,430],vp=.3,Ai=(i,e,t)=>{const n=document.createElementNS(rb,i);for(const[r,s]of Object.entries(e))n.setAttribute(r,String(s));return t?.appendChild(n),n},as=i=>i.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`);function sb(i,e,t,n){const r=Ai("g",{},i);qa.forEach((m,_)=>Ai("ellipse",{cx:Xa,cy:Ya,rx:m,ry:m*vp,class:`ring ring--${_}`},r));const s=Ai("g",{class:"sun"},i);Ai("circle",{cx:Xa,cy:Ya,r:46,class:"sun__halo"},s),Ai("circle",{cx:Xa,cy:Ya,r:9,class:"sun__core"},s),Ai("text",{x:Xa,y:Ya+34,class:"sun__label","text-anchor":"middle"},s).textContent="AS";const a=Ai("g",{},i),o=[0,0,0],l=n.map(m=>{const _=o[m.orbit]++,g=n.filter(E=>E.orbit===m.orbit).length,x=Ai("g",{class:"sat",tabindex:0,role:"button","aria-label":`${m.name}: ${m.line} ${m.status}.`,"data-lock":m.name},a);return Ai("circle",{r:22,class:"sat__hit"},x),Ai("circle",{r:5+(2-m.orbit)*1.5,class:`sat__dot sat__dot--${m.orbit}`},x),Ai("text",{x:14,y:4,class:"sat__name"},x).textContent=m.name,{p:m,g:x,a:_/g*Math.PI*2+m.orbit*.9,w:.32*(qa[0]/qa[m.orbit])**1.5,inFront:!0}});t.innerHTML=n.map(m=>`<li data-id="${m.id}"><b>${as(m.name)}</b> ${as(m.line)} <span>${as(m.status)}</span></li>`).join("");let c=1,f=1,d=null,u=!1;const h=m=>{if(d=m,f=m?0:1,l.forEach(_=>_.g.classList.toggle("is-on",_===m)),!m){e.hidden=!0;return}e.hidden=!1,e.innerHTML=`<p class="mono">${as(m.p.status)}</p><h3>${as(m.p.name)}</h3><p class="orbit__line">${as(m.p.line)}</p><p>${as(m.p.body)}</p>`};l.forEach(m=>{m.g.addEventListener("pointerenter",()=>h(m)),m.g.addEventListener("pointerleave",()=>h(null)),m.g.addEventListener("focus",()=>h(m)),m.g.addEventListener("blur",()=>h(null)),m.g.addEventListener("click",()=>h(d===m?null:m))}),new IntersectionObserver(([m])=>{u=m.isIntersecting}).observe(i);function p(m){if(u){c+=(f-c)*Math.min(1,m*4);for(const _ of l){_.a+=_.w*m*c;const g=Math.sin(_.a),x=Xa+Math.cos(_.a)*qa[_.p.orbit],E=Ya+g*qa[_.p.orbit]*vp,v=(g+1)/2;_.g.setAttribute("transform",`translate(${x.toFixed(1)} ${E.toFixed(1)}) scale(${(.75+v*.45).toFixed(3)})`),_.g.style.opacity=String(.4+v*.6);const M=g>-.15;M!==_.inFront&&((M?a:r).appendChild(_.g),_.inFront=M)}}}return{frame:p,show:m=>h(m?l.find(_=>_.p.id===m)??null:null),el:m=>l.find(_=>_.p.id===m)?.g??null}}const du=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function ab(i,e,t,n){const r=e.getContext("2d");if(!r)throw new Error("2D canvas unavailable");const s=t.map((E,v)=>[0,.2,.44,.66,.86][v]??v/t.length);let a=0,o=0,l=1,c=0,f={x:0,y:0},d=-1,u=null;const h=()=>u??=ob(512);let p=0;const m=[{x:.18,wd:.08,c:"120,86,64"},{x:.43,wd:.11,c:"96,104,128"},{x:.62,wd:.07,c:"150,112,82"},{x:.83,wd:.05,c:"86,92,110"}];function _(){l=Math.min(devicePixelRatio,1.5),a=innerWidth,o=innerHeight,e.width=a*l,e.height=o*l,e.style.width=`${a}px`,e.style.height=`${o}px`,g()}function g(){if(!r)return;r.setTransform(l,0,0,l,0,0),r.fillStyle="#050506",r.fillRect(0,0,a,o);const E=du(.06,.72,c),v=du(.3,.78,c),M={x:a*.63,y:o*.56};if(v>0){r.save(),r.translate(a/2,o/2),r.rotate(-.12),r.translate(-a/2,-o/2);for(const D of m){const O=D.x*a,L=D.wd*a,F=r.createLinearGradient(O-L,0,O+L,0);F.addColorStop(0,`rgba(${D.c},0)`),F.addColorStop(.5,`rgba(${D.c},${.32*v})`),F.addColorStop(1,`rgba(${D.c},0)`),r.fillStyle=F,r.fillRect(O-L,-o*.2,L*2,o*1.4)}r.restore()}const T=Math.min(a,o)*.32,b=T*Math.pow(.45/T,E),S=a/2+(M.x-a/2)*E,A=o/2+(M.y-o/2)*E;if(f={x:S,y:A},b>1.6){const D=r.createRadialGradient(S,A,b*.9,S,A,b*1.25);D.addColorStop(0,"rgba(120,170,255,.35)"),D.addColorStop(1,"rgba(120,170,255,0)"),r.fillStyle=D,r.beginPath(),r.arc(S,A,b*1.25,0,6.283),r.fill(),r.drawImage(h(),S-b,A-b,b*2,b*2)}else{const D=5+p*9,O=r.createRadialGradient(S,A,0,S,A,D);O.addColorStop(0,`rgba(185,211,255,${.55+p*.3})`),O.addColorStop(1,"rgba(185,211,255,0)"),r.fillStyle=O,r.beginPath(),r.arc(S,A,D,0,6.283),r.fill(),r.fillStyle="#d6e6ff",r.beginPath(),r.arc(S,A,Math.max(.7,b),0,6.283),r.fill()}let R=0;s.forEach((D,O)=>{c>=D&&(R=O)}),R!==d&&(t.forEach((D,O)=>D.classList.toggle("is-on",O===R)),d=R);const I=du(.8,.9,c);n.style.opacity=String(I),n.style.transform=`translate3d(${S+14}px, ${A-30}px, 0)`}const x=Ze.create({trigger:i,pin:i.querySelector(".pale__pin")??!0,start:"top top",end:"+=330%",scrub:!0,onUpdate:E=>{c=E.progress,g()},onRefresh:()=>g()});return addEventListener("resize",()=>et.delayedCall(.1,_)),_(),{st:x,prepare:h,setGlow(E){Math.abs(E-p)<.01||(p=E,x.isActive&&c>.6&&g())},stops:s,get dot(){return f}}}function ob(i){const e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d");if(!t)return e;const n=t.createImageData(i,i),r=n.data,s=Na(17),a=new Uint8Array(512),o=Array.from({length:256},(p,m)=>m);for(let p=255;p>0;p--){const m=Math.floor(s()*(p+1));[o[p],o[m]]=[o[m],o[p]]}for(let p=0;p<512;p++)a[p]=o[p&255];const l=p=>p*p*(3-2*p),c=(p,m,_)=>a[a[a[p&255]+(m&255)]+(_&255)]/255,f=(p,m,_)=>{const g=Math.floor(p),x=Math.floor(m),E=Math.floor(_),v=l(p-g),M=l(m-x),T=l(_-E),b=(S,A,R)=>S+(A-S)*R;return b(b(b(c(g,x,E),c(g+1,x,E),v),b(c(g,x+1,E),c(g+1,x+1,E),v),M),b(b(c(g,x,E+1),c(g+1,x,E+1),v),b(c(g,x+1,E+1),c(g+1,x+1,E+1),v),M),T)},d=(p,m,_,g)=>{let x=0,E=.5,v=1;for(let M=0;M<g;M++)x+=f(p*v,m*v,_*v)*E,E*=.5,v*=2.03;return x},u=[-.62,-.48,.62],h=Math.hypot(...u);u.forEach((p,m)=>u[m]/=h);for(let p=0;p<i;p++)for(let m=0;m<i;m++){const _=(m+.5)/i*2-1,g=(p+.5)/i*2-1,x=_*_+g*g,E=(p*i+m)*4;if(x>1){r[E+3]=0;continue}const v=Math.sqrt(1-x),M=2.2,T=d(_*M+4,g*M+1.3,v*M,5),b=d(_*3.4+9,g*6.5,v*3.4+2,4),S=Math.max(0,_*u[0]+g*u[1]+v*u[2]),A=Math.pow(S,.75),R=Math.pow(1-v,3),I=Math.min(1,Math.max(0,(.53-T)*5)),D=Math.min(1,Math.max(0,(T-.53)*6)),O=[20-I*8,62-I*22,140-I*30],L=[70+D*60,92+D*30,52+D*10],F=l(Math.min(1,Math.max(0,(T-.515)/.03)));let Y=O.map((H,C)=>H+(L[C]-H)*F);const k=l(Math.min(1,Math.max(0,(Math.abs(g)+(T-.5)*.5-.8)/.08)));Y=Y.map(H=>H+(232-H)*k);const J=Math.max(0,Math.min(1,(b-.5)*3.2));Y=Y.map(H=>H+(245-H)*J);for(let H=0;H<3;H++)r[E+H]=Math.min(255,Y[H]*(.04+A*1.05)+[90,150,255][H]*R*(.25+S*.9));r[E+3]=255}return t.putImageData(n,0,0),e}const St=Math.PI*2,pt=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],Xr=i=>{const e=Math.hypot(...i)||1;return[i[0]/e,i[1]/e,i[2]/e]},Yr=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],bt=(i,e,t=1)=>[i[0]+e[0]*t,i[1]+e[1]*t,i[2]+e[2]*t],pr=(i,e,t,n)=>{const r=Xr(Math.abs(e[1])>.9?Yr(e,[1,0,0]):Yr(e,[0,1,0])),s=Yr(e,r);return bt(bt(i,r,Math.cos(n)*t),s,Math.sin(n)*t)},lb=(i,e,t,n=.02)=>r=>{const s=r(),a=ya(ya(i,e,s),ya(e,t,s),s);return[a[0]+(r()-.5)*n,a[1]+(r()-.5)*n,a[2]+(r()-.5)*n]};function cb(i,e){const t=32.5*Math.PI/180,n=[[0,Math.cos(t),-Math.sin(t)],[0,Math.cos(t),Math.sin(t)]],r=h=>{const p=h%2,m=Math.floor(h/2);return{bank:p,i:m,base:[-1.75+m*.7+p*.18,0,0],axis:n[p]}},s=[0,6,4,10,2,8,1,7,5,11,3,9],a={share:.15,sample:h=>{const p=r(Math.floor(h()*12));return pr(bt(p.base,p.axis,.35+h()*1.15),p.axis,.27,h()*St)},color:mn([.5,.52,.56],[.7,.72,.76],.45)},o={share:.11,sample:h=>{const p=r(Math.floor(h()*12));return pr(bt(p.base,p.axis,.95),p.axis,.24*Math.sqrt(h()),h()*St)},color:h=>pt(Di,.8+h()*.2),motion:(h,p)=>{const m=p[2]<0?0:1,_=Math.round((p[0]-m*.18+1.75)/.7),g=_*2+m,x=n[m];return[x[0]*.3,x[1]*.3,x[2]*.3,s.indexOf(g)/12*St]}},l={share:.2,sample:h=>{const p=h()<.5?0:1,m=n[p],_=bt([p*.18,0,0],m,1.68),g=[1,0,0],x=Xr(Yr(m,g)),E=(h()*2-1)*2.15,v=(h()*2-1)*.32,M=h()<.7?.12:(h()*2-1)*.12;return bt(bt(bt(_,g,E),x,v),m,M)},color:h=>pt([.92,.09,.08],.6+h()*.4)},c={share:.16,sample:Ps([0,-.55,0],[2.25,.55,.78]),color:mn([.36,.37,.4],[.5,.5,.54],.5)},f={share:.06,sample:h=>h()<.5?Ki([-2.4,-.35,0],[2.4,-.35,0],.06)(h):pr([-2.45,-.35,0],[1,0,0],.95*Math.sqrt(h()),h()*St),color:mn(Ea,Di,.5)};return Ni(i,e,41,[a,o,l,c,f,{share:.13,sample:h=>{const p=Math.floor(h()*12),m=-1.75+Math.floor(p/2)*.7+.09,_=(p%2?1:-1)*.16,g=h();return pr([m,1.25+g*.75,_],[0,1,0],.1+g*g*.1,h()*St)},color:h=>pt([.86,.88,.92],.55+h()*.45)},{share:.1,sample:h=>{const p=r(Math.floor(h()*12)),m=p.bank?1:-1,_=bt(p.base,p.axis,1.2);return lb(bt(_,[0,0,m],.3),[_[0],-.1,m*1.7],[_[0]*.6,-1.05,m*1.25],.05)(h)},color:h=>Ei([.75,.45,.25],[.45,.35,.7],h()).map(p=>p*(.55+h()*.4))}],[.42,-.62,0],[6.4,4.6],-.15)}function ub(i,e){const n=[0,0,0,20],r=x=>.45+.55*Math.max(0,Math.cos(Math.atan2(x[2],x[0])-2.4)),s=(x,E,v)=>M=>{const T=M()*St,b=x+M()*(E-x);return[Math.cos(T)*.45,b,Math.sin(T)*.45]},a=(x,E)=>{const v=E[1]*3.2%1<.06?.7:1;return pt([.8,.82,.86],r(E)*v*(.75+x()*.25))},o={share:.2,sample:s(-3.2,.4),color:a,motion:()=>n},l={share:.15,sample:s(.45,2.7),color:(x,E)=>Math.atan2(E[2],E[0])>-.3&&Math.atan2(E[2],E[0])<2.6?pt([.12,.12,.13],.6+x()*.5):a(x,E),motion:()=>n},c={share:.05,sample:x=>{const E=x(),v=2.7+E*.95,M=.45*Math.sqrt(1-E*E*.96),T=x()*St;return[Math.cos(T)*M,v,Math.sin(T)*M]},color:a,motion:()=>n},f={share:.035,sample:x=>{const E=x()<.4,v=x()<.5?-1:1,M=E?2.95+x()*.45:.55+x()*.7,T=.45+x()*(E?.28:.4);return[v*T,M,(x()-.5)*.05]},color:x=>pt([.15,.15,.16],1+x()),motion:()=>n},d={share:.02,sample:x=>{const E=Math.floor(x()*4)*St/4+.78,v=.45+x()*.32;return[Math.cos(E)*v,.1+x()*.28,Math.sin(E)*v]},color:mn(Ea,Di),motion:()=>n},u={share:.02,sample:x=>{const E=x()*St,v=.45*Math.sqrt(x());return[Math.cos(E)*v,-3.25,Math.sin(E)*v]},color:()=>[1,.85,.6],motion:()=>n},h={share:.22,sample:x=>{const E=x()*St,v=.45*.9*Math.sqrt(x());return[Math.cos(E)*v,-3.3,Math.sin(E)*v]},color:x=>{const E=x();return E<.35?[1,.95,.8]:E<.75?[1,.62,.22]:[.9,.35,.12]},motion:(x,E)=>[E[0]*2.2+(x()-.5)*.5,-3.4-x()*.8,E[2]*2.2+(x()-.5)*.5,10+x()]},p={share:.06,sample:x=>{const E=(x()*2-1)*3.2,v=Math.exp(-Math.abs(E)*.7)*.9;return[E,-3.6+x()*v,(x()-.5)*1.6]},color:x=>pt(Di,.25+x()*.3),motion:x=>[(x()-.5)*.2,.12,0,x()*St]},m=-1.45,_={share:.1,sample:x=>{const E=x(),v=-3.4+x()*7.2;if(E<.45){const T=Math.floor(x()*4);return[m+(T&1?.28:-.28),v,T&2?.28:-.28]}if(E<.75){const T=-3.4+Math.floor(x()*18)*.4,b=x()*2-1;return x()<.5?[m+b*.28,T+Math.abs(b)*.4,.28]:[m+.28,T+Math.abs(b)*.4,b*.28]}const M=x()<.5?-1:1;return[m+.3+x()*1.05,2.15+(x()-.5)*.08,M*(.32+x()*.04)]},color:mn([.3,.31,.35],[.48,.49,.53],.5)},g={share:.03,sample:x=>x()<.6?pr([0,-3.35,0],[0,1,0],.45+.1+x()*.35,x()*St):Ki([(x()-.5)*1.4,-3.4,(x()-.5)*1.4],[(x()-.5)*1.4,-3.85,(x()-.5)*1.4])(x),color:mn([.3,.3,.32],[.45,.45,.48])};return Ni(i,e,42,[o,l,c,f,d,u,h,p,_,g],[.06,-.3,0],[5,8.4],.2)}function hb(i,e){const n=[0,-19.4,-2],r=.56,s=.3,a=(h,p)=>[Math.sin(h)*(16+p),n[1]+Math.cos(h)*(16+p),n[2]+(Math.random()-.5)*.4],o={share:.38,sample:h=>{const p=(h()*2-1)*r,m=-Math.pow(h(),2.2)*2.6;return a(p,m)},color:(h,p)=>{const m=Math.asin(p[0]/16),_=Math.max(0,Math.min(1,(s+.32-m)/.35));if(_<.25&&h()<.05)return[1,.65,.3];const g=h()<.35?1:0,x=Ei([.08,.25,.6],[.85,.9,.95],g*.8);return pt(x,.06+_*.85*(.7+h()*.3))}},l={share:.15,sample:h=>a((h()*2-1)*r,h()*.2),color:(h,p)=>{const m=Math.asin(p[0]/16),_=.3+.7*Math.max(0,1-Math.abs(m-s)*1.6);return pt([.35,.7,1],_*(.7+h()*.3))}},c={share:.05,sample:h=>a((h()*2-1)*r,.46+(h()-.5)*.05),color:h=>pt([.35,.95,.5],.35+h()*.2)},f={share:.12,sample:h=>a((h()*2-1)*r,.55+-Math.log(1-h()*.97)*.9),color:h=>pt([.45,.5,1],.1+h()*.25),motion:h=>[(h()-.5)*.25,(h()-.5)*.25,0,h()*St]},d=a(s,.05);return Ni(i,e,43,[o,l,c,f,{share:.1,sample:h=>{const p=h();if(p<.45){const m=h()*St,_=Math.pow(h(),2)*.45;return[d[0]+Math.cos(m)*_,d[1]+Math.sin(m)*_,d[2]+.2]}if(p<.75){const m=Math.floor(h()*8)*St/8+.2,_=h()**1.6*2.8;return[d[0]+Math.cos(m)*_,d[1]+Math.sin(m)*_,d[2]+.2]}return a(s+(h()-.5)*.3*h(),.1+h()*.15)},color:h=>Ei([1,.97,.9],[1,.75,.35],h()*.6)}],[0,0,0],[12.5,6.6],.9)}function fb(i,e){const s=Xr([Math.sin(-.35)*Math.cos(.62),Math.sin(.62),Math.cos(-.35)*Math.cos(.62)]),a=(()=>{let m=7;return()=>(m=m*16807%2147483647)/2147483647})(),o=[];for(let m=0;m<34;m++){const _=m<22,g=_?(a()*2-1)*3.6:(a()*2-1)*6.5,x=_?-.8-a()*4.2:-1-a()*6;o.push([g,-1.4+.95,x])}const l={share:.19,sample:m=>{const _=o[Math.floor(m()*o.length)],g=m()*St,x=.46*Math.sqrt(m()),E=(x/.46)**2*.16;return m()<.12?Ki(pr(_,s,.4,Math.floor(m()*4)*St/4+.4),bt(_,s,.45),.01)(m):bt(pr(_,s,x,g),s,E)},color:m=>pt([.95,.95,.97],.3+m()*.45)},c={share:.07,sample:m=>{const _=o[Math.floor(m()*o.length)];return m()<.6?pr([_[0],-1.4+m()*.78,_[2]],[0,1,0],.1,m()*St):Ps([_[0],-1.4+.82,_[2]],[.16,.1,.12])(m)},color:mn([.7,.7,.72],[.9,.9,.92],.5)},f={share:.12,sample:m=>[(m()*2-1)*7.5,-1.4+(m()-.5)*.05,2.5-Math.pow(m(),.7)*10],color:m=>pt([.42,.32,.24],.25+m()*.25)},d=m=>.5+.45*Math.sin(m*.9)+.25*Math.sin(m*2.3+1)+2.6*Math.max(0,1-Math.abs(m-3.6)/1.6);return Ni(i,e,44,[l,c,f,{share:.09,sample:m=>{const _=(m()*2-1)*8,g=-1.4+d(_),x=m()<.4?g:-1.4+m()*(g- -1.4);return[_,x,-8.5]},color:(m,_)=>pt([.32,.22,.33],.25+.35*(_[1]>-1.4+d(_[0])-.05?1:m()*.5))},{share:.26,sample:m=>{const _=m(),g=m()<.25,x=[-8,6.2,-9.5],E=[8,1.4,-9.5],v=ya(x,E,g?.62+(m()-.5)*.18:_);v[1]+=Math.sin((g?.62:_)*Math.PI)*1.2;let M=(m()+m()+m()-1.5)*(g?1.5:1.05);return Math.abs(M-.1)<.12&&m()<.8&&(M+=.3),[v[0]-M*.29,v[1]+M*.96,v[2]]},color:m=>m()<.2?pt([1,.82,.55],.4+m()*.5):pt([.75,.78,1],.2+m()*.5)},{share:.02,sample:m=>{const _=m()<.6?[-5.2,4.6,-9]:[-3.9,5.3,-9],g=m()*St,x=m()*.45;return[_[0]+Math.cos(g)*x,_[1]+Math.sin(g)*x*.7,_[2]]},color:m=>pt([.8,.82,1],.3+m()*.3)}],[.3,0,0],[12,7.4],-.9)}function db(i,e){const t=Array.from({length:8},(f,d)=>({x:-3.6+d*1.03,red:d===4})),n=f=>f.red?[.56,.5,.36]:[.46,.3,.3],r={share:.34,sample:f=>{const d=t[Math.floor(f()*t.length)],u=n(d),h=[d.x,u[1],0];if(d.red&&f()<.25){const p=f();return[d.x+(f()*2-1)*u[0],2*u[1]+p*.22,(f()*2-1)*u[2]*(1-p)]}return Ps(h,u)(f)},color:(f,d)=>{const u=t.reduce((h,p)=>Math.abs(p.x-d[0])<Math.abs(h.x-d[0])?p:h);return pt(u.red?[.88,.14,.1]:[.16,.42,.88],.55+f()*.45)}},s={share:.04,sample:f=>{const d=t[Math.floor(f()*t.length)],u=n(d);return[d.x+Math.round((f()*2-1)*3)*u[0]/4,u[1]*(d.red?1.2:1.05),u[2]+.01]},color:()=>[1,.85,.5]},a={share:.1,sample:f=>{const d=t[Math.floor(f()*t.length)],u=n(d),h=d.x+(f()<.5?-1:1)*u[0]*.7,p=(f()<.5?-1:1)*u[2]*.8;return f()<.7?Ki([h,0,p],[h,-1.25,p],.02)(f):Ki([h-.22,-1.27,p],[h+.22,-1.27,p],.02)(f)},color:mn([.3,.3,.32],[.55,.55,.58],.5)},o={share:.03,sample:f=>{const d=Math.floor(f()*7),u=t[d].x+.5;return Ps([u,.28,0],[.08,.12,.12])(f)},color:mn([.4,.4,.44],[.6,.6,.62])};return Ni(i,e,45,[r,s,a,o,{share:.12,sample:f=>[(f()*2-1)*7.5,-1.3+(f()-.5)*.04,3-Math.pow(f(),.7)*9],color:f=>pt([.8,.88,1],.15+f()*.25)},{share:.3,sample:f=>{const d=Math.floor(f()*3),u=(f()*2-1)*7.5,h=-4-d*1.6+Math.sin(u*.45+d)*1.4,p=1.4+d*.3+.3*Math.sin(u*.8),m=Math.pow(f(),1.8)*(1.8+.9*Math.sin(u*.6+d*2));return[u,p+m,h]},color:(f,d)=>{const u=Math.min(1,Math.max(0,(d[1]-1.5)/2.4));return pt(Ei([.25,1,.5],[.62,.3,.95],u*u),(.75-u*.45)*(.5+f()*.5))},motion:(f,d)=>[.18,0,.25,(d[0]*1.3%St+St)%St]}],[.14,-.35,0],[9.6,6.2],-.3)}function pb(i,e){const n=[0,.45,0],r=Xr([0,.08,1]),s=9e3,a=h=>{const p=1-(h+.5)/s*2,m=Math.sqrt(1-p*p),_=h*2.399963;return[Math.cos(_)*m,p,Math.sin(_)*m]},o=[0,1,0],l=Xr(Yr(o,r)),c=Yr(r,l);return Ni(i,e,46,[{share:.82,sample:h=>{const p=a(Math.floor(h()*s));return[n[0]+p[0]*2.3,n[1]+p[1]*2.3,n[2]+p[2]*2.3]},color:(h,p)=>{const m=Xr([p[0]-n[0],p[1]-n[1],p[2]-n[2]]),_=Math.acos(Math.max(-1,Math.min(1,m[0]*r[0]+m[1]*r[1]+m[2]*r[2]))),g=Math.atan2(m[0]*c[0]+m[1]*c[1]+m[2]*c[2],m[0]*l[0]+m[1]*l[1]+m[2]*l[2]);if(Math.hypot(_*Math.cos(g)+.22,_*Math.sin(g)-.22)<.1)return[1,1,1];if(_<.27)return[.03,.03,.05];if(_<.72){const M=.7+.3*Math.sin(g*38+Math.sin(g*7)*2);return pt(Ei([1,.72,.25],[.2,.7,1],(_-.27)/.45),M*1.5)}if(_<.79)return[.05,.1,.2];const E=_>.95&&Math.sin(g*9+_*11)>.985?1:0,v=_>1.35?.06:1;return pt(E?[.85,.16,.16]:[.96,.95,.92],v*(.5+h()*.2))}},{share:.06,sample:h=>h()<.5?pr([0,n[1]-2.3+.05,0],[0,1,0],1.6+h()*.2,h()*St):[(h()*2-1)*5,n[1]-2.3,(h()*2-1)*3],color:h=>pt([.6,.6,.7],.15+h()*.3)},{share:.06,sample:h=>{const p=(h()<.5?-1:1)*(3.3+h()*2.5),m=n[1]-2.3+1+Math.abs(Math.sin(p*3.1))*3;return[Math.round(p*6)/6,n[1]-2.3+h()*(m-(n[1]-2.3)),-3.5]},color:h=>h()<.15?[1,.8,.45]:pt([.4,.45,.7],.15+h()*.25)}],[0,0,0],[6.6,6.4],-.2)}function mb(i,e){const t=(d,u,h)=>[[-2.4,2.3,1.55,-1],[-1.45,2.05,1.4,-1],[-.6,1.7,1.2,-1],[.05,1.05,.9,1]].map(([p,m,_,g])=>({x:p*u+h,z:d,H:m*u,wd:_*u,face:g})),n=[...t(0,1,0),...t(-2.25,.86,.35),{x:-3.6,z:1.9,H:.85,wd:.45,face:-1},{x:-3.15,z:1.9,H:.6,wd:.35,face:1}],r=n.map(d=>d.H*d.wd),s=r.reduce((d,u)=>d+u,0),a=d=>{let u=d()*s;for(let h=0;h<n.length;h++)if((u-=r[h])<0)return n[h];return n[0]},o=(d,u)=>{const h=d()<.3,p=Math.pow(d(),.8),m=h?d()<.66?d()<.5?-1:1:0:d()*2-1,_=u.wd*Math.pow(1-p,.55),g=.3*u.H*(1-m*m)*Math.sin(Math.PI*p*.9);return[u.x+u.face*(u.H*.42*Math.pow(p,1.6)+g),p*u.H*(1-.22*m*m),u.z+m*_]},l={share:.6,sample:d=>o(d,a(d)),color:(d,u)=>pt([.98,.96,.9],(.62+.3*((u[1]*9+Math.abs(u[2])*6)%1>.5?1:0))*(.8+d()*.2))},c={share:.15,sample:d=>d()<.7?Ps([-1.1,-.32,-.2],[2.8,.32,3.1])(d):[1.7+d()*.9,-.64+d()*.64*(1-d()),(d()*2-1)*2.4],color:mn([.58,.45,.33],[.75,.6,.45],.45)};return Ni(i,e,47,[l,c,{share:.14,sample:d=>{if(d()<.55){const u=o(d,a(d));return[u[0]+(d()-.5)*.12,-1.3-u[1]*.55,u[2]+1.6]}return[(d()*2-1)*7,-.7-d()*1.6,3.5-d()*8]},color:(d,u)=>u[1]<-.75&&d()<.5?pt([.6,.65,.75],.12+d()*.15):pt([.15,.3,.55],.1+d()*.2),motion:d=>[.06,0,0,d()*St]}],[.24,1.05,0],[8,5.8],-.2)}function _b(i,e){const t=u=>[-5.4+10.8*u,1.5+.85*Math.sin(St*(1.4*u+.1)),1.3*Math.sin(St*.9*u)-1],n=u=>{const h=Xr(bt(t(Math.min(1,u+.002)),t(Math.max(0,u-.002)),-1)),p=Xr(Yr(h,[0,1,0])),m=Yr(p,h);return{T:h,N:p,B:m}},r=u=>.1+.27*Math.pow(u,.6),s=[];for(let u=0;u<150;u++){const h=u/149,{N:p,B:m}=n(h),_=t(h),g=r(h);for(let x=0;x<12;x++){const E=x/12*St;s.push({p:bt(bt(_,p,Math.cos(E)*g),m,Math.sin(E)*g),t:h,kind:x<6?0:1})}if(u%6===0&&u<140)for(let x=1;x<=3;x++)s.push({p:bt(_,n(h).B,g+x*.09),t:h,kind:2})}const a=t(1),o=n(1);for(let u=0;u<140;u++){const h=1-(u+.5)/70,p=Math.sqrt(Math.max(0,1-h*h)),m=u*2.4;s.push({p:bt(bt(bt(a,o.T,.32+p*Math.cos(m)*.38),o.B,h*.32),o.N,p*Math.sin(m)*.32),t:1,kind:3})}for(let u=0;u<40;u++){const h=u/39,p=u%2?1:-1;s.push({p:bt(bt(bt(a,o.T,.1-h*.6),o.B,.3+h*.7),o.N,p*.2),t:1,kind:4})}for(let u=0;u<60;u++){const h=u/59,p=u%2?1:-1;s.push({p:bt(bt(bt(a,o.T,.65+h*1.2),o.B,-.15-Math.sin(h*3)*.35),o.N,p*(.25+h*.5)),t:1,kind:4})}for(const u of[-1,1])s.push({p:bt(bt(bt(a,o.T,.55),o.B,.12),o.N,u*.2),t:1,kind:5});let l=s[0];return Ni(i,e,48,[{share:.62,sample:u=>{const h=l=s[Math.floor(u()*s.length)];return[h.p[0]+(u()-.5)*.02,h.p[1]+(u()-.5)*.02,h.p[2]+(u()-.5)*.02]},color:u=>{const h=l;if(h.kind===5)return[1,1,1];if(h.kind===4)return[.4,.9,1];if(h.kind===2)return[1,.25,.15];const p=h.kind===1?.75:1;return pt(Ei([1,.22,.14],[1,.78,.28],Math.min(1,h.t*1.3)),p*(.85+u()*.15))},motion:(u,h)=>[0,.1,.06,(h[0]+5.4)/10.8*18%St]},{share:.16,sample:u=>{const h=Math.round((u()*2-1)*7.5*5)/5,p=-2.8+1.1+Math.abs(Math.sin(h*1.7)*Math.cos(h*.53))*2.4;return[h+(u()-.5)*.16,-2.8+Math.round(u()*(p+2.8)*8)/8,-4-Math.abs(Math.sin(h*4.1))*1.5]},color:u=>u()<.3?pt([1,.85,.55],.5+u()*.4):pt([.4,.55,1],.15+u()*.3)},{share:.12,sample:u=>{const h=s[Math.floor(u()*s.length)];return u()<.6?[h.p[0]+(u()-.5)*.3,-3.1-(h.p[1]+1.5)*.35,h.p[2]+1]:[(u()*2-1)*7.5,-3.1-u()*.9,1-u()*4]},color:u=>u()<.5?pt([1,.6,.25],.12+u()*.15):pt([.3,.45,.8],.08+u()*.12),motion:u=>[.12,0,0,u()*St]}],[.05,.15,0],[12.5,7.6],.45)}const gb={v12:cb,starship:ub,exosphere:hb,alma:fb,halley:db,sphere:pb,opera:mb,drones:_b},Cl=Math.PI*2,vb=i=>window.requestIdleCallback?window.requestIdleCallback(i,{timeout:2500}):setTimeout(i,300);function xb(i,e,t){const n=new Map;let r=-1,s=1/0,a=0,o=!1,l=!0,c=!1,f=0,d=0,u=0,h=null;const p=()=>{const E=i.view();if(innerWidth>=860){rn.k=.56,rn.ox=E.w*.14,rn.oy=E.h*.16;return}const M=t.gap(),T=(M.top+M.bottom)/2-scrollY*0,b=Math.max(120,M.bottom-M.top);rn.k=Math.min(.9,b*1.05/(innerHeight*.8)),rn.ox=0,rn.oy=-(T/innerHeight-.5)*E.h},m=E=>{let v=n.get(E);return v||(p(),v=gb[e[E].id](i.n,i.view()),rn.k=1,rn.ox=rn.oy=0,n.set(E,v)),v},_=E=>{const v=(E%e.length+e.length)%e.length;n.has(v)||vb(()=>m(v))};function g(E,v=1.6){r=(E%e.length+e.length)%e.length;const M=e[r];h?.kill(),h=null,i.morph(m(r),v,1),i.u.uDoubt.value=.25,et.to(i.u.uDoubt,{value:.08,duration:v*1.4,overwrite:!0}),i.u.uMoRate.value=M.rate;const T=Math.round(d/Cl)*Cl;et.to({v:d},{v:T,duration:1.2,ease:"power3.inOut",onUpdate(){d=this.targets()[0].v}}),M.id==="starship"&&(h=et.timeline({delay:v+.5}).to(i.scene.position,{x:.03,duration:.05,repeat:11,yoyo:!0,ease:"none"}).set(i.scene.position,{x:0}).to(i.u.uRise,{value:.5,duration:1.3,ease:"power1.in"},"<").to(i.u.uRise,{value:16,duration:2.6,ease:"power3.in"})),s=performance.now()+M.ms,t.onChange(r,M,M.ms),_(r+1)}const x=(E=9e3)=>{a=performance.now()+E};return{start(){if(!o){o=!0,p(),g(0,2.2);for(let E=1;E<e.length;E++)_(E)}},next(){x(),g(r+1)},prev(){x(),g(r-1)},to(E){x(),g(E)},get index(){return r},setVisible(E){l=E},drag(E){u+=E*.0045,x()},burst(E,v){const M=i.toWorld(E,v);i.u.uBurstAt.value.set(M.x,M.y),et.timeline().to(i.u.uBurst,{value:1,duration:.12,ease:"power2.out",overwrite:!0}).to(i.u.uBurst,{value:0,duration:1.7,ease:"power3.out"}),x()},hold(E){et.to(i.u.uHold,{value:E?1:0,duration:E?.7:1.1,ease:E?"power2.out":"power3.inOut",overwrite:!0}),E&&x()},write(E){const v=E.trim().slice(0,16);if(!v){c&&(c=!1,g(r,1.3));return}c=!0,h?.kill(),p();const M=i.view(),T=Dh(i.n,{w:M.w*rn.k*1.2,h:M.h*rn.k*1.2},[v],b=>`600 ${b}px "Clash Display"`,[1,.72,.3],[.93,.91,.86],.85,29);for(let b=0;b<i.n;b++)T.pos[b*3]+=rn.ox,T.pos[b*3+1]+=rn.oy;rn.k=1,rn.ox=rn.oy=0,i.morph(T,1.1,.7),i.u.uMoRate.value=1,et.to({v:d},{v:Math.round(d/Cl)*Cl,duration:.9,onUpdate(){d=this.targets()[0].v}})},relayout(){n.clear(),o&&g(r,1)},frame(E,v){if(!o)return;f=E,u*=Math.pow(.04,v);const M=e[r];!c&&M.spin==="turn"&&(d+=.12*v),d+=u;const T=c?0:M.spin==="sway"?Math.sin(f*.45)*.35:M.spin==="look"?Math.sin(f*.7)*.3+Math.sin(f*1.9)*.05:0;i.spinSpeed=0,i.u.uSpin.value=d+T;const b=performance.now();l&&!c&&b>s&&b>a&&g(r+1),b<a&&s<a&&(s=a+1200)}}}const xp=5e3,Mp=75e3;function Mb({cues:i,reticle:e,scrollTo:t,topOf:n,onState:r,outro:s}){let a="standby",o=0,l=0,c=0,f=0,d=null;const u=new Set,h=M=>{a=M,r(M,d,Math.max(0,c-performance.now()))},p=M=>(u.add(M),new Promise(T=>M.eventCallback("onComplete",()=>{u.delete(M),T()}))),m=M=>p(et.delayedCall(M/1e3,()=>{})),_=(M,T=2400)=>{const b={y:scrollY},S=Math.abs(M-scrollY);if(S<4)return Promise.resolve();const A=S>innerHeight*1.2;return p(et.to(b,{y:M,duration:et.utils.clamp(A?.9:.5,2.4,S/T),ease:A?"expo.inOut":"power2.inOut",onUpdate:()=>t(b.y)}))},g=(M,T=900,b=2600)=>m(et.utils.clamp(T,b,(M.textContent??"").trim().split(/\s+/).length/330*6e4)),x=()=>{const M=scrollY+innerHeight*.5,T=i.findIndex(b=>n(b.section)+b.section.offsetHeight>M);return T<0?0:T};async function E(M){const T=()=>M===o&&a==="flying",b={ok:T,glide:_,wait:m,read:g,lock:e.lock};for(let S=x();T();S=(S+1)%i.length){if(d=i[S],r(a,d,0),S===0&&scrollY>10&&(e.lock(null),await _(0,9e3),!T())||(await d.perform(b),!T()))return;if(S===i.length-1&&s){if(e.lock(null),await _(0,9e3),!T()||(d=i[0],await s(b),!T()))return;e.lock(null),document.body.classList.remove("is-piloted"),c=performance.now()+Mp,h("done");return}}}const v={get state(){return a},start(){a==="flying"||a==="off"||(f=performance.now(),h("flying"),document.body.classList.add("is-piloted"),E(++o))},yieldTo(){if(!(a==="off"||a==="standby")){if(a==="done"){c=performance.now()+Mp;return}a==="flying"&&(performance.now()-f<3500&&(l=Math.min(3,l+1)),o++,u.forEach(M=>M.kill()),u.clear(),e.lock(null),document.body.classList.remove("is-piloted")),c=performance.now()+xp*2**l,h("paused")}},toggle(){if(a==="off"||a==="done"){l=0,a="paused",v.start();return}v.yieldTo(),c=1/0,h("off")},frame(){if(a!=="paused"&&a!=="done")return;const M=c-performance.now();M<=0?v.start():a==="paused"&&r(a,d,M)},arm(){a==="standby"&&(a="paused",c=performance.now()+900)},get total(){return xp*2**l}};return v}et.registerPlugin(Ze);const Pe=(i,e=document)=>{const t=e.querySelector(i);if(!t)throw new Error(`Missing element: ${i}`);return t},xn=(i,e=document)=>[...e.querySelectorAll(i)],Wi=i=>i.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`),q0=i=>new Promise(e=>setTimeout(e,i)),Sc={get:i=>{try{return localStorage.getItem(i)}catch{return null}},set:(i,e)=>{try{localStorage.setItem(i,e)}catch{}}},Lh=matchMedia("(prefers-reduced-motion: reduce)").matches,yc=matchMedia("(hover: hover) and (pointer: fine)").matches,Ih=innerWidth<860,Sp=[1,.72,.3],yp=[.93,.91,.86],Sb=[.5,.5,.55],yb=performance.now();Pe("#filesTrack").innerHTML=Fo.map((i,e)=>`
  <article class="file" data-lock="${Wi(i.name)}" style="--i:${e}">
    <header class="mono"><span>${String(e+1).padStart(2,"0")} / ${String(Fo.length).padStart(2,"0")}</span><span class="file__status file__status--${i.orbit}">${Wi(i.status)}</span></header>
    <h3 class="file__name">${Wi(i.name)}</h3>
    <p class="file__line">${Wi(i.line)}</p>
    <p class="file__body">${Wi(i.body)}</p>
    <span class="file__ghost" aria-hidden="true">${String(e+1).padStart(2,"0")}</span>
  </article>`).join("");Pe("#howList").innerHTML=KE.map((i,e)=>`
  <li class="how__item" data-n="${String(e+1).padStart(2,"0")}"><h3>${Wi(i.title)}</h3><p>${Wi(i.body)}</p></li>`).join("");Pe("#marquee").innerHTML=Array(4).fill(Fo.map(i=>`<span>${Wi(i.name)}</span><i>✦</i>`).join("")).join("");const Fr=Pe("#mail");Fr.href=`mailto:${Mc.email}`;Fr.textContent=Mc.email;Pe("#gh").href=Mc.github;const or=i=>Pe(`[data-cue="${i}"]`);let Ge=null;try{Ge=new VE(Pe("#gl"),Ih?26e3:72e3)}catch(i){console.warn("WebGL unavailable, continuing without particles",i),document.body.classList.add("no-gl")}const Is=new iv({lerp:.12,wheelMultiplier:1});Is.stop();Is.on("scroll",Ze.update);const oa=i=>i.getBoundingClientRect().top+scrollY,Eb=i=>Is.scrollTo(i,{immediate:!0,force:!0}),$0=ib(Pe("#reticle"),Pe("#reticleLabel"),yc);yc&&document.body.classList.add("has-reticle");const io=sb(Pe("#orbitSvg"),Pe("#orbitCard"),Pe("#orbitLegend"),Fo);let K0=0,Z0=!1,Ep=-1,bp=0,Tp=scrollY,na=0,pu=0,wp=0,Uh=60,mu=0,Ap=0,Pl=0;const bb=Pe("#stay"),bf=Pe("#marquee"),Tb=Pe("#clock"),wb=Pe("#km"),Ab=Pe("#hudKm"),J0=Pe("#lightTime");et.ticker.add(i=>{Is.raf(i*1e3);const e=Math.min(.05,Math.max(1/240,i-bp));if(bp=i,na+=(et.utils.clamp(-1.5,1.5,(scrollY-Tp)/e/4e3)-na)*.12,Tp=scrollY,Ct?.frame(i,e),Ge){const s=ui?et.utils.clamp(0,1,1-scrollY/(innerHeight*.95)):1;Ge.u.uFade.value=s,Ge.u.uVel.value=na,Ge.tick(i,e,s>.002)}xr.frame();const t=xr.level,n=xr.onset;Ge&&(Ge.u.uAudio.value=t,Ge.u.uOnset.value=n),$0.frame(t),io.frame(e),Jr.frame(),us.setGlow(t),Math.abs(t-Ep)>.015&&(Ep=t,document.documentElement.style.setProperty("--lvl",t.toFixed(3))),Pl-=(40+Math.abs(na)*900)*e*(na<-.02?-1:1);const r=K0;if(r&&Z0&&(Pl=(Pl%r-r)%r,bf.style.transform=`translate3d(${Pl}px,0,0) skewX(${et.utils.clamp(-12,12,-na*18)}deg)`),i-Ap>.1){Ap=i;const s=jE(),a=cc(s);wb.textContent=a,Ab.textContent=a,J0.textContent=nb(eb(s));const o=Math.floor((performance.now()-yb)/1e3),l=Math.floor(o/60),c=o%60;bb.textContent=`You have been here ${l?`${l} min `:""}${c} s. In that time Voyager 1 moved ${cc(o*17)} km further from home.`,Tb.textContent=`T+${[o/3600,o/60%60,o%60].map(f=>String(Math.floor(f)).padStart(2,"0")).join(":")}`}pu++,i-wp>1&&(Uh=pu,pu=0,wp=i,mu=Uh<38?mu+1:0,Ge&&mu>=2&&Ge.budget===Ge.n&&Ge.setBudget(.5),la&&u_())});et.ticker.lagSmoothing(0);const Rb=['600 80px "Clash Display"','italic 300 80px "Newsreader"'],_u=Promise.race([Promise.all(Rb.map(i=>document.fonts.load(i))),q0(3e3)]),Cb={huddle:1500,webb:3100,voyager:3100,chip:2800,people:2500,name:2700};let ui=!1,Q0=0,Nh="—";const gu=Pe("#caption"),Pb=Pe("#beatNo");function Rp(i){if(!Ge)return null;const e=Ge.n,t=Ge.view();switch(i){case"huddle":return $E(e,t);case"webb":return XE(e,t);case"voyager":return YE(e,t);case"chip":return qE(e,t);case"people":return Dh(e,t,Ih?["all made","by people."]:["all made by people."],n=>`italic 300 ${n}px "Newsreader"`,yp,Sp,.8,22,.78);case"name":return Dh(e,t,Ih?["Ayush","Srivastav"]:["Ayush Srivastav"],n=>`600 ${n}px "Clash Display"`,Sp,yp,.84,23,.86)}}async function Db(){if(!Ge||Lh)return await _u,Oo();const i=new URLSearchParams(location.search).get("beat");if(i&&gp.some(t=>t.shape===i)){await _u;const t=Rp(i);if(!t)return;Ge.morph(t,2.5),Ge.spinSpeed=.09,et.to(Ge.u.uDoubt,{value:.3,duration:2.5}),Nh=i;return}const e=gp.filter(t=>t.shape!=="name");for(const[t,n]of e.entries()){if(ui)return;(n.shape==="people"||n.shape==="name")&&await _u;const r=Rp(n.shape);if(!r||ui)return;const s=Cb[n.shape],a=n.shape==="people"||n.shape==="name";Nh=n.shape,Ge.morph(r,s/1e3*.9,a?.7:1.1),et.fromTo(Ge.u.uDoubt,{value:1},{value:a?.1:.3,duration:s/1e3,ease:"power2.out"}),a?(Ge.spinSpeed=0,et.to(Ge.u.uSpin,{value:Math.round(Ge.u.uSpin.value/(Math.PI*2))*Math.PI*2,duration:1.4,ease:"power3.inOut"})):n.shape!=="huddle"&&(Ge.spinSpeed=.09),Pb.textContent=`${String(t).padStart(2,"0")} / ${String(e.length-1).padStart(2,"0")}`,Lb(n.caption),await q0(s)}Oo()}function Lb(i){if(!i){et.to(gu,{opacity:0,duration:.4});return}et.set(gu,{opacity:1}),ys(gu,i,1.1)}function Oo(){if(ui)return;ui=!0,Q0=performance.now(),document.body.classList.remove("is-loading"),Is.start(),Ge&&(et.killTweensOf(Ge.u.uDoubt),Ge.u.uDoubt.value=.15,Ct&&!Lh?Ct.start():(Ge.spinSpeed=.012,Ge.morph(W0(Ge.n,Ge.view(),5,Sb),2.4,2.5))),Nb(),Lh?Jr.toggle():Jr.arm(),(window.requestIdleCallback??(e=>setTimeout(e,1200)))(()=>us.prepare(),{timeout:4e3})}Pe("#skip").addEventListener("click",Oo);addEventListener("keydown",i=>{!ui&&(i.key==="Enter"||i.key==="Escape"||i.key===" ")&&Oo()});addEventListener("wheel",()=>{ui||Oo()},{passive:!0});const Cp="·:+×*<>/\\=-01",Pp=new WeakMap;function ys(i,e,t=.6){Pp.get(i)?.kill();const n={p:0};Pp.set(i,et.to(n,{p:1,duration:t,ease:"none",onUpdate:()=>{const r=Math.floor(n.p*e.length);i.textContent=e.slice(0,r)+[...e.slice(r,r+12)].map(s=>s===" "?" ":Cp[Math.random()*Cp.length|0]).join("")},onComplete:()=>{i.textContent=e}}))}function Ib(i){const e=(i.textContent??"").trim().split(/\s+/);i.innerHTML=e.map(t=>`<span class="w">${[...t].map(n=>`<span class="ch">${Wi(n)}</span>`).join("")}</span>`).join(" ")}function Ub(i){i.innerHTML=i.innerHTML.replace(/(<em>.*?<\/em>|[^\s<]+)/g,'<span class="wd">$1</span>')}xn(".split").forEach(Ib);xn(".words").forEach(Ub);function Nb(){et.fromTo(".hero__name .ch",{yPercent:115,rotate:6,opacity:0},{yPercent:0,rotate:0,opacity:1,duration:1.05,stagger:.028,ease:"expo.out",delay:.1}),et.fromTo(".marvel > *, .hero__foot > *, .hud, .dock",{opacity:0,y:16},{opacity:1,y:0,duration:.9,stagger:.06,delay:.35,ease:"expo.out"})}et.set(".hud, .dock",{opacity:0});xn("section:not(.hero) .split").forEach(i=>et.fromTo(xn(".ch",i),{yPercent:110},{yPercent:0,stagger:.018,duration:1,ease:"expo.out",scrollTrigger:{trigger:i,start:"top 85%"}}));xn("section:not(.hero) .kicker").forEach(i=>Ze.create({trigger:i,start:"top 90%",once:!0,onEnter:()=>ys(i,i.textContent??"",.7)}));xn(".words").forEach(i=>et.to(xn(".wd",i),{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:i,start:"top 78%",end:"bottom 52%",scrub:!0}}));et.fromTo(".distance__num",{letterSpacing:".2em",opacity:0},{letterSpacing:"-.04em",opacity:1,ease:"expo.out",duration:1.6,scrollTrigger:{trigger:".distance__num",start:"top 85%"}});const j0=xn(".pale__line"),us=ab(or("pale"),Pe("#pale"),j0,Pe("#paleHere"));let Fh=null;const Fb=et.matchMedia();Fb.add("(min-width: 860px)",()=>{const i=Pe("#filesTrack");return Fh=et.to(i,{x:()=>-(i.scrollWidth-innerWidth+64),ease:"none",scrollTrigger:{trigger:".files",pin:".files__pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth+64}`,scrub:.6,invalidateOnRefresh:!0}}).scrollTrigger??null,()=>{Fh=null}});xn(".file").forEach(i=>{yc&&(i.addEventListener("pointermove",e=>{const t=i.getBoundingClientRect();i.style.setProperty("--rx",`${((e.clientY-t.top)/t.height-.5)*-8}deg`),i.style.setProperty("--ry",`${((e.clientX-t.left)/t.width-.5)*10}deg`)}),i.addEventListener("pointerleave",()=>{i.style.setProperty("--rx","0deg"),i.style.setProperty("--ry","0deg")}))});const Ob=Pe("#howIndex");xn(".how__item").forEach(i=>Ze.create({trigger:i,start:"top 60%",end:"bottom 60%",onToggle:e=>{i.classList.toggle("is-on",e.isActive),e.isActive&&ys(Ob,i.dataset.n??"",.4)}}));Ze.create({start:0,end:"max",onUpdate:i=>et.set("#prog",{scaleX:i.progress})});Ge&&et.to(Ge.camera.position,{z:15,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}});Pe("#copy").addEventListener("click",async()=>{const i=Pe("#copy");try{await navigator.clipboard.writeText(Mc.email),ys(i,"Copied",.4)}catch{ys(i,"Select and copy above",.4)}setTimeout(()=>ys(i,"Copy address",.4),2200)});yc&&(Fr.addEventListener("pointermove",i=>{const e=Fr.getBoundingClientRect();et.to(Fr,{x:(i.clientX-e.left-e.width/2)*.12,y:(i.clientY-e.top-e.height/2)*.25,duration:.5,ease:"power3.out"})}),Fr.addEventListener("pointerleave",()=>et.to(Fr,{x:0,y:0,duration:.9,ease:"elastic.out(1, .4)"})));xn('a[href^="#"]').forEach(i=>i.addEventListener("click",e=>{const t=i.getAttribute("href")??"#";t.length<2||(e.preventDefault(),Is.scrollTo(t==="#top"?0:t,{duration:1.6}))}));addEventListener("pointermove",i=>Ge?.setMouse(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight*2-1)),{passive:!0});addEventListener("resize",()=>Ge?.resize());const Tf=()=>{K0=bf.scrollWidth/2};Tf();addEventListener("resize",Tf);document.fonts.ready.then(Tf);new IntersectionObserver(([i])=>{Z0=i.isIntersecting}).observe(bf);const Bb=Pe("#mvIdx"),e_=Pe("#mvName"),Dp=Pe("#mvLine"),kb=Pe("#mvBar"),t_=Pe("#mvDots"),n_=Pe(".hero");t_.innerHTML=X0.map((i,e)=>`<button type="button" aria-label="${Wi(i.name)}" data-k="${e}"></button>`).join("");const i_=xn("button",t_);function zb(i,e,t){Bb.textContent=String(i+1).padStart(2,"0"),ys(e_,e.name,.55),et.fromTo(Dp,{opacity:0,y:8},{opacity:1,y:0,duration:.6,delay:.25,ease:"expo.out",onStart:()=>{Dp.textContent=e.line}}),i_.forEach((n,r)=>n.classList.toggle("is-on",r===i)),et.fromTo(kb,{scaleX:0},{scaleX:1,duration:t/1e3,ease:"none",overwrite:!0})}const Ct=Ge?xb(Ge,X0,{onChange:zb,gap:()=>({top:Pe("#marvel").getBoundingClientRect().bottom+scrollY+8,bottom:Pe(".hero__name").getBoundingClientRect().top+scrollY-8})}):null;Ct||(Pe("#marvel").hidden=!0);i_.forEach(i=>i.addEventListener("click",()=>Ct?.to(Number(i.dataset.k))));Pe("#mvPrev").addEventListener("click",()=>Ct?.prev());Pe("#mvNext").addEventListener("click",()=>Ct?.next());let r_=!0;new IntersectionObserver(([i])=>{r_=i.isIntersecting,Ct?.setVisible(i.isIntersecting)},{threshold:.35}).observe(n_);let sn=null;const Hb=i=>!i?.closest?.("a, button, input, label");n_.addEventListener("pointerdown",i=>{!Ct||!ui||!Hb(i.target)||(Ge?.setMouse(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight*2-1)),sn={x:i.clientX,lx:i.clientX,dragged:!1,held:!1,timer:window.setTimeout(()=>{sn&&!sn.dragged&&(sn.held=!0,Ct.hold(!0))},240)})});addEventListener("pointermove",i=>{!sn||!Ct||(!sn.dragged&&Math.abs(i.clientX-sn.x)>7&&(sn.dragged=!0,clearTimeout(sn.timer),sn.held&&(Ct.hold(!1),sn.held=!1)),sn.dragged&&Ct.drag(i.clientX-sn.lx),sn.lx=i.clientX)},{passive:!0});const s_=i=>{!sn||!Ct||(clearTimeout(sn.timer),sn.held?Ct.hold(!1):!sn.dragged&&i.type==="pointerup"&&Ct.burst(i.clientX,i.clientY),sn=null)};addEventListener("pointerup",s_);addEventListener("pointercancel",s_);addEventListener("keydown",i=>{!Ct||!ui||!r_||i.target?.closest?.("input")||(i.key==="ArrowRight"?Ct.next():i.key==="ArrowLeft"&&Ct.prev())});const Bo=Pe("#write");let Lp=0;Bo.addEventListener("input",()=>{clearTimeout(Lp),Lp=window.setTimeout(()=>Ct?.write(Bo.value),260)});Bo.addEventListener("keydown",i=>{(i.key==="Enter"||i.key==="Escape")&&Bo.blur()});let Ip=0;addEventListener("resize",()=>{clearTimeout(Ip),Ip=window.setTimeout(()=>{ui&&Ct?.relayout()},250)});const wf=[{id:"hero",label:"Hello",section:or("hero"),perform:async i=>{if(await i.glide(0),!!i.ok()&&(i.lock(e_,"Marvel"),await i.wait(1500),!!i.ok())){if(Ct&&Ge){const e=innerWidth*(innerWidth>=860?.64:.5),t=innerHeight*.34;if(i.lock({x:e,y:t},"Click · scatter"),await i.wait(500),!i.ok()||(Ct.burst(e,t),await i.wait(1300),!i.ok()))return}i.lock(Pe(".hero__name"),"Lock · Ayush Srivastav"),await i.wait(1100),i.ok()&&(i.lock(Pe(".hero__line"),"Reading"),await i.read(Pe(".hero__line"),1100),i.ok()&&(i.lock(Pe(".hero__now"),"Now"),await i.wait(1e3)))}}},{id:"distance",label:"Far",section:or("distance"),perform:async i=>{const e=or("distance");if(i.lock(null),await i.glide(oa(e)-innerHeight*.08),!!i.ok()&&(i.lock(Pe(".distance__num"),"Tracking · Voyager 1"),await i.wait(1500),!!i.ok())){for(const t of xn(".words",e))if(i.lock(t,"Reading"),await i.glide(oa(t)+t.offsetHeight-innerHeight*.5,650),!i.ok()||(await i.wait(500),!i.ok()))return}}},{id:"pale",label:"Home",section:or("pale"),perform:async i=>{const e=us.st;i.lock(null);for(const[t,n]of us.stops.entries())if(await i.glide(e.start+(e.end-e.start)*Math.min(1,n+(t?.05:0)),t?1100:2400),!i.ok()||(t>=2&&i.lock(us.dot,t===us.stops.length-1?"Earth · 0.12 pixel":"Earth · less than a pixel"),await i.read(j0[t],t===us.stops.length-1?2400:1300,2600),!i.ok()))return;i.lock(null),await i.glide(e.end+4)}},{id:"orbit",label:"Orbit",section:or("orbit"),perform:async i=>{if(i.lock(null),await i.glide(oa(Pe(".orbit__stage"))-innerHeight*.2),!!i.ok()){for(const e of["say","glassbox","clible"]){const t=io.el(e);if(t&&(io.show(e),i.lock(t,`Lock · ${Fo.find(n=>n.id===e)?.name}`),await i.wait(1500),!i.ok())){io.show(null);return}}io.show(null)}}},{id:"files",label:"Projects",section:or("files"),perform:async i=>{const e=xn(".file");i.lock(null);for(const[t,n]of e.entries()){const r=Fh,s=r?r.start+(r.end-r.start)*(t/(e.length-1)):oa(n)-innerHeight*.15;if(await i.glide(s,r?2600:2e3),!i.ok()||(i.lock(n,`File ${String(t+1).padStart(2,"0")}`),await i.read(n,1e3,1700),!i.ok()))return}}},{id:"how",label:"How",section:or("how"),perform:async i=>{for(const e of xn(".how__item"))if(await i.glide(oa(e)-innerHeight*.4,1800),!i.ok()||(i.lock(Pe("h3",e),`Principle ${e.dataset.n}`),await i.read(e,900,1600),!i.ok()))return}},{id:"contact",label:"Signal",section:or("contact"),perform:async i=>{i.lock(null),await i.glide(document.documentElement.scrollHeight-innerHeight),i.ok()&&(i.lock(Fr,"Lock · say hello"),await i.wait(1600),i.ok()&&(i.lock(J0,"Light time · Voyager 1"),await i.wait(1600),i.ok()&&(i.lock(null),await i.wait(2800))))}}],Oh=Pe("#pilot"),Gb=Pe("#pilotState"),Vb=Pe("#pilotChapter"),a_=Pe("#pilotSegs");a_.innerHTML=wf.map(()=>"<i></i>").join("");const Wb=xn("i",a_);let Up="";function Xb(i,e,t){const n=e?wf.indexOf(e):-1,r=i==="paused"?`Resumes in ${Math.ceil(t/1e3)}`:i==="off"?"Autopilot off":i==="done"?"Your turn":"Autopilot",s=i==="flying"&&e?`${String(n+1).padStart(2,"0")} · ${e.label}`:i==="paused"?"You are driving":i==="off"?"Tap to turn on":i==="done"?"Tour done · tap to replay":"Standing by";Oh.style.setProperty("--p",i==="paused"?String(1-t/Jr.total):"0");const a=i+r+s;a!==Up&&(Up=a,document.body.dataset.pilot=i,Oh.setAttribute("aria-pressed",String(i!=="off"&&i!=="done")),Gb.textContent=r,Vb.textContent=s,Wb.forEach((o,l)=>o.classList.toggle("is-on",l<=n&&i==="flying")))}const Jr=Mb({cues:wf,reticle:$0,scrollTo:Eb,topOf:oa,onState:Xb,outro:async i=>{if(!Ct||!Ge)return;const e=innerWidth*(innerWidth>=860?.64:.5),t=innerHeight*.34;i.lock({x:e,y:t},"Hold · gather"),Ge.setMouse(e/innerWidth*2-1,-(t/innerHeight*2-1)),await i.wait(500),i.ok()&&(Ct.hold(!0),await i.wait(1600),Ct.hold(!1),i.ok()&&(await i.wait(700),i.ok()&&(i.lock(Bo,"Type · write"),await i.wait(1500),i.ok()&&(i.lock(Pe("#mvHint"),"Your turn"),await i.wait(1800)))))}});Oh.addEventListener("click",()=>Jr.toggle());const Yb=i=>{!ui||performance.now()-Q0<400||i.type==="keydown"&&["Shift","Alt","Meta","Control"].includes(i.key)||i.target?.closest?.("#pilot")||Jr.yieldTo()};["wheel","touchstart","keydown","pointerdown"].forEach(i=>addEventListener(i,Yb,{passive:!0}));const qb=Pe("#prelude"),Bh=Pe("#sound"),kh=Pe("#introSound"),xr=rv(qb),o_=()=>{const i=xr.playing;Bh.textContent=i?"Sound on":"Sound off",Bh.setAttribute("aria-pressed",String(i)),kh.textContent=i?"♪ Prelude in C":"♪ Play with sound",kh.classList.toggle("is-on",i),document.body.classList.toggle("has-sound",i)},Af=async()=>{await xr.start()&&(Sc.set("as-sound","on"),o_())},l_=async()=>{xr.playing?(xr.stop(),Sc.set("as-sound","off"),o_()):await Af()};Bh.addEventListener("click",l_);kh.addEventListener("click",i=>{i.stopPropagation(),l_()});const c_=()=>{["pointerdown","keydown","touchend"].forEach(i=>removeEventListener(i,c_,!0)),Sc.get("as-sound")!=="off"&&!xr.playing&&Af()};["pointerdown","keydown","touchend"].forEach(i=>addEventListener(i,c_,{capture:!0,passive:!0}));Sc.get("as-sound")!=="off"&&Af();const $b={hero:.5,distance:.4,pale:.9,orbit:.45,files:.42,how:.38,contact:.55};xn("[data-cue]").forEach(i=>Ze.create({trigger:i,start:"top 55%",end:"bottom 55%",onToggle:e=>{e.isActive&&xr.setMood($b[i.dataset.cue??""]??.45)}}));const Kb=Pe("#instrument");let la=!1;function u_(){Pe("#dFps").textContent=String(Uh),Pe("#dDots").textContent=Ge?`${cc(Ge.budget)} / ${cc(Ge.n)}`:"no WebGL",Pe("#dPx").textContent=Ge?Ge.renderer.getPixelRatio().toFixed(2):"—",Pe("#dBeat").textContent=ui?"sky":Nh,Pe("#dPilot").textContent=Jr.state}addEventListener("keydown",i=>{i.target?.closest?.("input")||(i.shiftKey&&i.key.toLowerCase()==="a"||i.key==="Escape"&&la)&&(la=i.key==="Escape"?!1:!la,Kb.hidden=!la,la&&u_())});Object.assign(window,{__site:{pilot:Jr,lenis:Is,reel:Ct,field:Ge,get introDone(){return ui}}});addEventListener("pagehide",()=>Ge?.dispose());Db();
