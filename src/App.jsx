import React, { useState, useEffect, useCallback } from "react";
import { Plus, Minus, Trash2, Pencil, Check, Sparkles, ChevronRight, ChevronUp, ChevronDown, Gift, Circle, Lock, Unlock, QrCode, Instagram, MessageCircle, Users, Search, Star, TrendingUp, X, Copy } from "lucide-react";

// QR Code Generator for JavaScript (c) 2009 Kazuhiko Arase, MIT license.
// Embedded locally so QR codes render without any external network request.
var qrcode=function(){var t=function(t,r){var e=t,n=g[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=B.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=B.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=B.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=B.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=A.getRSBlocks(t,r),o=b(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=k(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=M(t);break;case"Alphanumeric":e=x(t);break;case"Byte":e=m(t);break;case"Kanji":e=L(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=A.getRSBlocks(t,n),o=b(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var g=0;for(i=0;i<r.length;i++)g+=r[i].dataCount;if(o.getLengthInBits()<=8*g)break}e=t}c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=B.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",l+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return I(e,e,function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1})},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(o*r,n*r,r,r)},f};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=S(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a=1,u=2,f=4,c=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,s=2,v=3,d=4,w=5,p=6,y=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case l:return function(t,r){return(t+r)%2==0};case h:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case v:return function(t,r){return(t+r)%3==0};case d:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case w:return function(t,r){return t*r%2+t*r%3==0};case p:return function(t,r){return(t*r%2+t*r%3)%2==0};case y:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=k([1],0),e=0;e<t;e+=1)r=r.multiply(k([1,C.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case f:case c:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case f:return 16;case c:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case f:return 16;case c:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},o),C=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function k(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=C.gexp(C.glog(n.getAt(e))+C.glog(t.getAt(o)));return k(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=C.glog(n.getAt(0))-C.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=C.gexp(C.glog(t.getAt(o))+r);return k(e,0).mod(t)}};return n}var A=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case g.L:return t[4*(r-1)+0];case g.M:return t[4*(r-1)+1];case g.Q:return t[4*(r-1)+2];case g.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},e}(),b=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},x=function(t){var r=u,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},m=function(r){var e=f,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},L=function(r){var e=c,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(){var t=n("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},D=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},S=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},I=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=D(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=D();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)};

const FONTS = (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
    .font-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
    .font-body { font-family: 'Inter', sans-serif; }
    .gold-grad { background: linear-gradient(135deg, #D9B65C 0%, #B8892E 50%, #E8CA82 100%); }
    .gold-text-grad { background: linear-gradient(135deg, #B8892E 0%, #D9B65C 60%, #C79A3D 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
  `}</style>
);

const C = {
  ink: "#1C1917",
  inkSoft: "#6B6259",
  white: "#FFFFFF",
  paper: "#FCFAF6",
  line: "#EDE7DB",
  gold: "#B8892E",
  goldLight: "#E8CA82",
  goldDeep: "#8A6423",
  berry: "#A8395C",
};

function QRCodeSVG({ text, size = 240 }) {
  const [dataUrl, setDataUrl] = useState(null);

  useEffect(() => {
    if (!text) {
      setDataUrl(null);
      return;
    }
    try {
      const qr = qrcode(0, "M");
      qr.addData(text);
      qr.make();
      const count = qr.getModuleCount();
      const cell = size / count;
      let rects = "";
      for (let r = 0; r < count; r++) {
        for (let c = 0; c < count; c++) {
          if (qr.isDark(r, c)) rects += `<rect x="${c * cell}" y="${r * cell}" width="${cell}" height="${cell}" fill="#1C1917"/>`;
        }
      }
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="${size}" height="${size}" fill="#FFFFFF"/>${rects}</svg>`;
      setDataUrl(`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`);
    } catch {
      setDataUrl(null);
    }
  }, [text, size]);

  if (!dataUrl) return null;
  return <img src={dataUrl} alt="Código QR" width={size} height={size} style={{ display: "block" }} />;
}

const SEED_CATEGORIES = [
  { id: "platos_catrachos", label: "Platos Catrachos" },
  { id: "desayunos_dulces", label: "Desayunos Dulces" },
  { id: "platos_principales", label: "Platos Principales" },
  { id: "alitas_de_pollo", label: "Alitas de Pollo" },
  { id: "refrescadores", label: "Refrescadores" },
  { id: "shakes", label: "Shakes" },
  { id: "naturales", label: "Naturales" },
  { id: "iced_coffee", label: "Iced Coffee" },
  { id: "hot_coffee", label: "Hot Coffee" },
];

const MENU_VERSION = 3;
const STAMPS_FOR_REWARD = 10;
const ADMIN_PIN = "0022";
const INSTAGRAM_URL = "https://www.instagram.com/chilas_brownies?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const WHATSAPP_URL = "https://wa.me/50487500720";
const SITE_URL = "https://chilasbrownies.netlify.app";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Chila's Brownies, Jutiquile, Olancho, Honduras");

const SEED_PRODUCTS = [
  // Platos Catrachos
  { id: "p1", name: "Plato Catracho", category: "platos_catrachos", price: 185, description: "Frijoles, carne, plátano maduro, huevo, 2 tortillas, queso & mantequilla.", available: true },
  { id: "p2", name: "La Burrita", category: "platos_catrachos", price: 95, description: "Tortilla de maíz con quesillo, frijoles, huevo, plátano maduro, chorizo, aguacate, queso & mantequilla.", available: true },
  { id: "p3", name: "Huevo Ranchero", category: "platos_catrachos", price: 145, description: "Huevo estrellado, salsa ranchera, frijoles, plátano maduro, 2 tortillas, queso & mantequilla.", available: true },

  { id: "p4", name: "Baleada Sencilla", category: "platos_catrachos", price: 25, description: "", available: true },
  { id: "p5", name: "Baleada Con Huevo", category: "platos_catrachos", price: 35, description: "", available: true },
  { id: "p6", name: "La Baleadita", category: "platos_catrachos", price: 45, description: "", available: true },
  { id: "p7", name: "Baleada Con Todo", category: "platos_catrachos", price: 75, description: "", available: true },

  // Desayunos Dulces
  { id: "p8", name: "Tostada Francesa", category: "desayunos_dulces", price: 185, description: "Helado de vainilla, dulce de leche & miel.", available: true },
  { id: "p9", name: "Pancake Clásico", category: "desayunos_dulces", price: 140, description: "3 panqueques, azúcar glass & miel.", available: true },
  { id: "p10", name: "Nutella Pancake", category: "desayunos_dulces", price: 165, description: "3 panqueques, nutella, azúcar glass & miel.", available: true },
  { id: "p11", name: "Cinnamon Roll Pancake", category: "desayunos_dulces", price: 210, description: "3 panqueques, relleno de canela, glaseado de queso crema & miel.", available: true },
  { id: "p12", name: "Waffle Clásico", category: "desayunos_dulces", price: 140, description: "Waffle, azúcar glass & miel.", available: true },
  { id: "p13", name: "Nutella Waffle", category: "desayunos_dulces", price: 185, description: "Waffle, nutella, azúcar glass & helado de vainilla.", available: true },
  { id: "p14", name: "Triple Chocolate Waffle", category: "desayunos_dulces", price: 220, description: "Waffle, nutella, galleta de chocolate & helado de chocolate.", available: true },

  // Platos Principales
  { id: "p15", name: "Chilaquiles", category: "platos_principales", price: 265, description: "Tortilla de maíz frita en salsa roja, carne de res, frijoles, huevo estrellado, guacamole, crema & queso.", available: true },
  { id: "p16", name: "Water Burger", category: "platos_principales", price: 310, description: "Carne de res & cerdo, queso muenster & papas fritas.", available: true },
  { id: "p17", name: "Chicken Burger", category: "platos_principales", price: 295, description: "Pechuga de pollo empanizada, queso, lechuga, aderezo y papas fritas.", available: true },
  { id: "p18", name: "Toscana", category: "platos_principales", price: 295, description: "Pechuga de pollo a la plancha, ensalada primavera, papas fritas, pan con ajo y aderezo.", available: true },
  { id: "p19", name: "Tenders de Pollo", category: "platos_principales", price: 265, description: "Tiras de pollo empanizadas, papas fritas, ranch & ketchup.", available: true },

  { id: "p20", name: "Papas Preparadas", category: "platos_principales", price: 195, description: "Papas fritas, pechuga de pollo empanizada, queso cheddar, ketchup & aderezo de la casa.", available: true },
  { id: "p21", name: "Nachos de Pollo", category: "platos_principales", price: 199, description: "Tortilla de maíz frita, pollo, pico de gallo, queso cheddar, aderezo de la casa & jalapeño.", available: true },
  { id: "p22", name: "Burrito Cesar", category: "platos_principales", price: 180, description: "Tortilla de harina, pollo, lechuga, pico de gallo, aderezo de la casa & queso mozzarella.", available: true },

  // Alitas de Pollo
  { id: "p23", name: "6 Alitas", category: "alitas_de_pollo", price: 210, description: "Salsas a elegir: BBQ, Buffalo o Agridulce.", available: true },
  { id: "p24", name: "12 Alitas", category: "alitas_de_pollo", price: 320, description: "Salsas a elegir: BBQ, Buffalo o Agridulce.", available: true },
  { id: "p25", name: "18 Alitas", category: "alitas_de_pollo", price: 455, description: "Salsas a elegir: BBQ, Buffalo o Agridulce.", available: true },

  // Refrescadores (12oz / 16oz)
  { id: "p28", name: "Deslumbrado", category: "refrescadores", price: 75, description: "12oz L.75 / 16oz L.95", available: true },
  { id: "p29", name: "Zudrink", category: "refrescadores", price: 75, description: "12oz L.75 / 16oz L.95", available: true },
  { id: "p30", name: "Berry Berry", category: "refrescadores", price: 75, description: "12oz L.75 / 16oz L.95", available: true },
  { id: "p31", name: "Limonada de Coco", category: "refrescadores", price: 85, description: "12oz L.85 / 16oz L.110", available: true },

  // Shakes (12oz / 16oz)
  { id: "p32", name: "Chila's Shake", category: "shakes", price: 130, description: "12oz L.130 / 16oz L.160", available: true },
  { id: "p33", name: "Pink Party Shake", category: "shakes", price: 75, description: "12oz L.75 / 16oz L.95", available: true },
  { id: "p34", name: "Vainilla Shake", category: "shakes", price: 75, description: "12oz L.75 / 16oz L.95", available: true },
  { id: "p35", name: "Oreo Milk Shake", category: "shakes", price: 85, description: "12oz L.85 / 16oz L.110", available: true },
  { id: "p36", name: "Taro", category: "shakes", price: 75, description: "12oz L.75 / 16oz L.90", available: true },
  { id: "p37", name: "Dulce de Leche", category: "shakes", price: 75, description: "12oz L.75 / 16oz L.90", available: true },
  { id: "p38", name: "Horchata", category: "shakes", price: 75, description: "12oz L.75 / 16oz L.90", available: true },
  { id: "p39", name: "Chai", category: "shakes", price: 75, description: "12oz L.75 / 16oz L.90", available: true },

  // Naturales (sin precio fijo)
  { id: "p40", name: "Sandía", category: "naturales", price: 0, description: "", available: true },
  { id: "p41", name: "Melón", category: "naturales", price: 0, description: "", available: true },
  { id: "p42", name: "Piña", category: "naturales", price: 0, description: "", available: true },
  { id: "p43", name: "Fresa", category: "naturales", price: 0, description: "", available: true },
  { id: "p44", name: "Fresa Limón", category: "naturales", price: 0, description: "", available: true },
  { id: "p45", name: "Limonada", category: "naturales", price: 0, description: "", available: true },

  // Iced Coffee (12oz / 16oz)
  { id: "p46", name: "Mocha", category: "iced_coffee", price: 85, description: "12oz L.85 / 16oz L.105", available: true },
  { id: "p47", name: "Mocha Blanco", category: "iced_coffee", price: 85, description: "12oz L.85 / 16oz L.105", available: true },
  { id: "p48", name: "Latte", category: "iced_coffee", price: 75, description: "12oz L.75 / 16oz L.95", available: true },
  { id: "p49", name: "Caramel Latte", category: "iced_coffee", price: 82, description: "12oz L.82 / 16oz L.102", available: true },
  { id: "p50", name: "Red Velvet Latte", category: "iced_coffee", price: 88, description: "12oz L.88 / 16oz L.108", available: true },
  { id: "p51", name: "Tres Leches Latte", category: "iced_coffee", price: 85, description: "12oz L.85 / 16oz L.105", available: true },
  { id: "p52", name: "Matcha", category: "iced_coffee", price: 90, description: "12oz L.90 / 16oz L.110", available: true },
  { id: "p53", name: "Matcha + Fresa", category: "iced_coffee", price: 99, description: "12oz L.99 / 16oz L.120", available: true },

  // Hot Coffee
  { id: "p54", name: "Americano", category: "hot_coffee", price: 53, description: "", available: true },
  { id: "p55", name: "Mocha", category: "hot_coffee", price: 85, description: "", available: true },
  { id: "p56", name: "Mocha Blanco", category: "hot_coffee", price: 85, description: "", available: true },
  { id: "p57", name: "Capuchino", category: "hot_coffee", price: 70, description: "", available: true },
  { id: "p58", name: "Latte", category: "hot_coffee", price: 70, description: "", available: true },
  { id: "p59", name: "Caramel Latte", category: "hot_coffee", price: 85, description: "", available: true },
  { id: "p60", name: "Chai", category: "hot_coffee", price: 75, description: "", available: true },
  { id: "p61", name: "Café Bombón", category: "hot_coffee", price: 75, description: "", available: true },
  { id: "p62", name: "Matcha", category: "hot_coffee", price: 90, description: "", available: true },
];



function normalizePhone(v) {
  return v.replace(/\D/g, "").slice(0, 8);
}

function formatVisitDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleString("es-HN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
  } catch {
    return "";
  }
}

const memoryCache = { config: null, configPromise: null, customers: new Map() };

const STORAGE_ENDPOINT = "/.netlify/functions/storage";

async function robustGet(key, shared, attempts = 3) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(`${STORAGE_ENDPOINT}?key=${encodeURIComponent(key)}`);
      if (!res.ok) throw new Error("bad response");
      const data = await res.json();
      if (data.value === null || data.value === undefined) return null;
      return { key, value: data.value };
    } catch {
      if (i < attempts - 1) await new Promise((r) => setTimeout(r, 400 * (i + 1)));
    }
  }
  return null;
}

async function robustSet(key, value, shared, attempts = 4) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(STORAGE_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ key, value }),
      });
      if (!res.ok) throw new Error("bad response");
      return true;
    } catch {
      if (i < attempts - 1) await new Promise((r) => setTimeout(r, 400 * (i + 1)));
    }
  }
  return false;
}

async function robustList(prefix, attempts = 4) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(`${STORAGE_ENDPOINT}?prefix=${encodeURIComponent(prefix)}`);
      if (!res.ok) throw new Error("bad response");
      const data = await res.json();
      return Array.isArray(data.keys) ? data.keys : [];
    } catch {
      if (i < attempts - 1) await new Promise((r) => setTimeout(r, 400 * (i + 1)));
    }
  }
  return [];
}

async function robustDelete(key, attempts = 4) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(`${STORAGE_ENDPOINT}?key=${encodeURIComponent(key)}`, { method: "DELETE" });
      if (!res.ok) throw new Error("bad response");
      return true;
    } catch {
      if (i < attempts - 1) await new Promise((r) => setTimeout(r, 400 * (i + 1)));
    }
  }
  return false;
}

function loadConfigOnce() {
  if (!memoryCache.configPromise) {
    memoryCache.configPromise = (async () => {
      const res = await robustGet("store-config", true, 6);
      let config;
      if (res) {
        try {
          config = JSON.parse(res.value);
        } catch {
          config = null;
        }
      }
      if (!config || typeof config !== "object") {
        config = { products: SEED_PRODUCTS, categories: SEED_CATEGORIES, shareUrl: "", menuVersion: MENU_VERSION };
        robustSet("store-config", JSON.stringify(config), true, 6);
      } else if (config.menuVersion !== MENU_VERSION) {
        config = { products: SEED_PRODUCTS, categories: SEED_CATEGORIES, shareUrl: config.shareUrl || "", menuVersion: MENU_VERSION };
        robustSet("store-config", JSON.stringify(config), true, 6);
      }
      if (!Array.isArray(config.products)) config.products = SEED_PRODUCTS;
      if (!Array.isArray(config.categories)) config.categories = SEED_CATEGORIES;
      if (typeof config.shareUrl !== "string") config.shareUrl = "";
      memoryCache.config = config;
      return config;
    })();
  }
  return memoryCache.configPromise;
}

function useStorage() {
  const [ready, setReady] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    (async () => {
      const config = await loadConfigOnce();
      setProducts(config.products);
      setCategories(config.categories);
      setShareUrl(config.shareUrl);
      setReady(true);
    })();
  }, []);

  const saveProducts = useCallback(async (next) => {
    const current = await loadConfigOnce();
    const nextConfig = { ...current, products: next };
    memoryCache.config = nextConfig;
    setProducts(next);
    return await robustSet("store-config", JSON.stringify(nextConfig), true, 6);
  }, []);

  const saveCategories = useCallback(async (next) => {
    const current = await loadConfigOnce();
    const nextConfig = { ...current, categories: next };
    memoryCache.config = nextConfig;
    setCategories(next);
    return await robustSet("store-config", JSON.stringify(nextConfig), true, 6);
  }, []);

  const saveShareUrl = useCallback(async (next) => {
    const current = await loadConfigOnce();
    const nextConfig = { ...current, shareUrl: next };
    memoryCache.config = nextConfig;
    setShareUrl(next);
    return await robustSet("store-config", JSON.stringify(nextConfig), true, 6);
  }, []);

  return { ready, products, saveProducts, categories, saveCategories, shareUrl, saveShareUrl };
}

async function getCustomer(phone) {
  if (memoryCache.customers.has(phone)) return memoryCache.customers.get(phone);
  const res = await robustGet(`customer:${phone}`, true);
  const parsed = res ? JSON.parse(res.value) : null;
  if (parsed) memoryCache.customers.set(phone, parsed);
  return parsed;
}

async function saveCustomer(phone, data) {
  memoryCache.customers.set(phone, data);
  return await robustSet(`customer:${phone}`, JSON.stringify(data), true);
}

async function deleteCustomer(phone) {
  memoryCache.customers.delete(phone);
  return await robustDelete(`customer:${phone}`);
}

async function trackCategoryView(categoryId) {
  try {
    const res = await robustGet("category-views", true);
    let views = {};
    if (res) {
      try {
        views = JSON.parse(res.value);
        if (typeof views !== "object" || views === null) views = {};
      } catch {
        views = {};
      }
    }
    views[categoryId] = (views[categoryId] || 0) + 1;
    await robustSet("category-views", JSON.stringify(views), true);
  } catch {
    // best-effort — stats are non-critical and should never block browsing
  }
}

async function getCategoryViews() {
  const res = await robustGet("category-views", true);
  if (!res) return {};
  try {
    const views = JSON.parse(res.value);
    return typeof views === "object" && views !== null ? views : {};
  } catch {
    return {};
  }
}

async function getAllCustomers() {
  const keys = await robustList("customer:");
  const customers = [];
  for (const key of keys) {
    const phone = key.slice("customer:".length);
    const c = await getCustomer(phone);
    if (c) {
      const history = (c.visits && c.visits.history) || [];
      customers.push({
        phone,
        name: c.name || "",
        visits: (c.visits && c.visits.units) || 0,
        redeemed: (c.visits && c.visits.redeemed) || 0,
        lastVisit: history[0] || "",
      });
    }
  }
  return customers;
}

function StampCard({ catLabel, units, redeemed, onRemove }) {
  const earned = Math.floor(units / STAMPS_FOR_REWARD);
  const available = earned - redeemed;
  const currentInCard = units % STAMPS_FOR_REWARD;
  const stamps = Array.from({ length: STAMPS_FOR_REWARD });
  return (
    <div className="rounded-2xl p-5 bg-white" style={{ border: `1px solid ${C.line}` }}>
      <div className="flex items-center justify-between mb-4">
        <div className="font-display font-semibold text-base" style={{ color: C.ink }}>{catLabel}</div>
        {available > 0 && (
          <div className="flex items-center gap-1 text-[11px] font-body font-semibold px-2.5 py-1 rounded-full gold-grad text-white">
            <Gift size={11} /> {available} premio{available > 1 ? "s" : ""}
          </div>
        )}
      </div>
      <div className="grid grid-cols-5 gap-2.5">
        {stamps.map((_, i) => {
          const filled = i < currentInCard;
          const isNext = i === currentInCard;
          return (
            <div
              key={i}
              className="aspect-square rounded-full flex items-center justify-center font-display font-semibold text-[11px] transition-all"
              style={
                filled
                  ? { background: "linear-gradient(135deg, #D9B65C, #8A6423)", color: "white", boxShadow: "0 2px 6px rgba(138,100,35,0.35)" }
                  : { border: `1.5px solid ${isNext ? C.gold : C.line}`, color: isNext ? C.gold : "#C9C2B6" }
              }
            >
              {filled ? "✓" : i + 1}
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs font-body" style={{ color: C.inkSoft }}>
          {currentInCard === 0 && units > 0 ? "Tarjeta completa canjeada. Empezando una nueva." : `Faltan ${STAMPS_FOR_REWARD - currentInCard} para tu premio`}
        </div>
        {units > 0 && onRemove && (
          <button onClick={onRemove} className="text-xs font-body underline flex-shrink-0" style={{ color: C.berry }}>
            Quitar una compra
          </button>
        )}
      </div>
    </div>
  );
}

function inputStyle() {
  return { border: `1.5px solid ${C.line}`, background: C.paper };
}

function ProductForm({ initial, categories, onSave, onCancel }) {
  const [form, setForm] = useState(initial || { name: "", category: (categories || [])[0]?.id || "", price: "", description: "", available: true });
  return (
    <div className="rounded-2xl p-4 space-y-3 bg-white" style={{ border: `1.5px solid ${C.goldLight}` }}>
      <input
        className="w-full rounded-xl px-3.5 py-2.5 font-body text-sm outline-none"
        style={inputStyle()}
        placeholder="Nombre del producto"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <div className="flex gap-2">
        <select
          className="flex-1 rounded-xl px-3.5 py-2.5 font-body text-sm outline-none"
          style={inputStyle()}
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          {categories.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
        </select>
        <input
          className="w-28 rounded-xl px-3.5 py-2.5 font-body text-sm outline-none"
          style={inputStyle()}
          placeholder="Precio L."
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
      </div>
      <textarea
        className="w-full rounded-xl px-3.5 py-2.5 font-body text-sm outline-none resize-none"
        style={inputStyle()}
        placeholder="Descripción corta"
        rows={2}
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <label className="flex items-center gap-2 font-body text-sm" style={{ color: C.ink }}>
        <input type="checkbox" checked={form.available} onChange={(e) => setForm({ ...form, available: e.target.checked })} />
        Disponible ahora
      </label>
      <div className="flex gap-2 pt-1">
        <button
          className="flex-1 rounded-xl py-2.5 font-display font-semibold text-sm text-white flex items-center justify-center gap-1 gold-grad"
          onClick={() => form.name.trim() && onSave({ ...form, price: Number(form.price) || 0 })}
        >
          <Check size={16} /> Guardar
        </button>
        <button className="rounded-xl py-2.5 px-4 font-body text-sm" style={{ border: `1.5px solid ${C.line}`, color: C.inkSoft }} onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

function CustomerDetail({ customer, onBack, onUpdated }) {
  const [visits, setVisits] = useState(customer.visits);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);

  const commit = async (nextVisits) => {
    setVisits(nextVisits);
    setSaving(true);
    setSaveError(false);
    const ok = await saveCustomer(customer.phone, { name: customer.name, visits: nextVisits });
    setSaving(false);
    if (ok) {
      onUpdated(customer.phone, nextVisits);
    } else {
      setSaveError(true);
    }
  };

  const addVisit = () => {
    const history = [new Date().toISOString(), ...(visits.history || [])];
    commit({ ...visits, units: visits.units + 1, history });
  };

  const removeVisit = () => {
    const nextUnits = Math.max(0, visits.units - 1);
    const nextRedeemed = Math.min(visits.redeemed, Math.floor(nextUnits / STAMPS_FOR_REWARD));
    const history = (visits.history || []).slice(1);
    commit({ units: nextUnits, redeemed: nextRedeemed, history });
  };

  const redeemReward = () => {
    commit({ ...visits, redeemed: visits.redeemed + 1 });
  };

  const available = Math.floor(visits.units / STAMPS_FOR_REWARD) - visits.redeemed;

  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-1 font-body text-sm mb-4" style={{ color: C.inkSoft }}>
        <ChevronRight size={16} style={{ transform: "rotate(180deg)" }} /> Volver a la lista
      </button>

      <div className="mb-5">
        <div className="font-display font-semibold text-xl" style={{ color: C.ink }}>{customer.name || "Sin nombre"}</div>
        <div className="font-body text-sm mt-0.5" style={{ color: C.inkSoft }}>{customer.phone}</div>
      </div>

      {saveError && (
        <div className="rounded-xl px-3.5 py-2.5 mb-4 font-body text-xs" style={{ background: C.gold + "15", color: C.goldDeep }}>
          El cambio quedó guardado en este dispositivo, pero tardó en sincronizar con el servidor.
        </div>
      )}

      <div className="max-w-md">
        <StampCard catLabel="Visitas a Chila's Brownies" units={visits.units} redeemed={visits.redeemed} onRemove={!saving ? removeVisit : null} />

        {available > 0 && (
          <button disabled={saving} className="w-full mt-1.5 rounded-xl py-2.5 font-display font-semibold text-sm text-white flex items-center justify-center gap-1" style={{ background: C.berry, opacity: saving ? 0.6 : 1 }} onClick={redeemReward}>
            <Gift size={14} /> Canjear premio
          </button>
        )}

        <button disabled={saving} className="mt-4 w-full rounded-2xl py-3.5 font-display font-semibold text-sm flex items-center justify-center gap-1" style={{ border: `1.5px dashed ${C.goldLight}`, color: C.gold, opacity: saving ? 0.6 : 1 }} onClick={addVisit}>
          <Plus size={16} /> {saving ? "Guardando..." : "Registrar visita"}
        </button>
      </div>
    </div>
  );
}

function CustomerListPanel({ onClose }) {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [confirmingPhone, setConfirmingPhone] = useState(null);
  const [deletingPhone, setDeletingPhone] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [opening, setOpening] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const list = await getAllCustomers();
      list.sort((a, b) => (b.lastVisit || "").localeCompare(a.lastVisit || ""));
      setCustomers(list);
      setLoading(false);
    })();
  }, []);

  const normalize = (s) =>
    (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const filteredCustomers = search.trim()
    ? customers.filter((c) => normalize(c.name).includes(normalize(search)) || c.phone.includes(search.trim()))
    : customers;

  const openCustomer = async (c) => {
    setOpening(c.phone);
    const full = await getCustomer(c.phone);
    setOpening(null);
    setSelectedCustomer({
      phone: c.phone,
      name: c.name,
      visits: full && full.visits ? { history: [], ...full.visits } : { units: c.visits, redeemed: c.redeemed, history: [] },
    });
  };

  const handleCustomerUpdated = (phone, nextVisits) => {
    setCustomers((prev) =>
      prev.map((c) =>
        c.phone === phone
          ? { ...c, visits: nextVisits.units, redeemed: nextVisits.redeemed, lastVisit: (nextVisits.history && nextVisits.history[0]) || c.lastVisit }
          : c
      )
    );
  };

  const handleDelete = async (phone) => {
    setDeletingPhone(phone);
    const ok = await deleteCustomer(phone);
    setDeletingPhone(null);
    setConfirmingPhone(null);
    if (ok) {
      setCustomers((prev) => prev.filter((c) => c.phone !== phone));
    } else {
      alert("No se pudo eliminar al cliente. Intenta de nuevo.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: C.paper }}>
      <div className="flex items-center justify-between px-5 md:px-8 pt-6 pb-4 bg-white" style={{ borderBottom: `1px solid ${C.line}` }}>
        <div>
          <div className="font-display font-semibold text-lg" style={{ color: C.ink }}>{selectedCustomer ? selectedCustomer.name || "Cliente" : "Clientes"}</div>
          <div className="font-body text-xs mt-0.5" style={{ color: C.inkSoft }}>
            {selectedCustomer ? selectedCustomer.phone : loading ? "Cargando..." : `${customers.length} cliente${customers.length === 1 ? "" : "s"} registrado${customers.length === 1 ? "" : "s"}`}
          </div>
        </div>
        <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
          <X size={18} color={C.inkSoft} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 md:px-8 py-5">
        {selectedCustomer ? (
          <CustomerDetail customer={selectedCustomer} onBack={() => setSelectedCustomer(null)} onUpdated={handleCustomerUpdated} />
        ) : loading ? (
          <div className="text-center pt-10 font-body" style={{ color: C.inkSoft }}>Cargando clientes...</div>
        ) : customers.length === 0 ? (
          <div className="text-center pt-10 font-body text-sm" style={{ color: C.inkSoft }}>Todavía no hay clientes registrados.</div>
        ) : (
          <>
            <div className="relative mb-4 max-w-md">
              <Search size={16} color={C.inkSoft} className="absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                className="w-full rounded-xl pl-10 pr-3.5 py-2.5 font-body text-sm outline-none"
                style={inputStyle()}
                placeholder="Buscar por nombre o teléfono..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {filteredCustomers.length === 0 ? (
              <div className="text-center py-10 font-body text-sm" style={{ color: C.inkSoft }}>Ningún cliente coincide con "{search}".</div>
            ) : (
              <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
                {filteredCustomers.map((c) => {
              const available = Math.floor(c.visits / STAMPS_FOR_REWARD) - c.redeemed;
              const isConfirming = confirmingPhone === c.phone;
              const isDeleting = deletingPhone === c.phone;
              return (
                <div
                  key={c.phone}
                  onClick={() => !isConfirming && openCustomer(c)}
                  className="rounded-2xl p-4 bg-white cursor-pointer"
                  style={{ border: `1px solid ${isConfirming ? C.berry : C.line}`, opacity: opening === c.phone ? 0.6 : 1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-display font-semibold text-base" style={{ color: C.ink }}>{c.name || "Sin nombre"}</div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {available > 0 && !isConfirming && (
                        <span className="text-[10px] font-body font-semibold px-2 py-0.5 rounded-full gold-grad text-white">{available} premio{available > 1 ? "s" : ""}</span>
                      )}
                      <button
                        onClick={(e) => { e.stopPropagation(); setConfirmingPhone(isConfirming ? null : c.phone); }}
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: isConfirming ? C.line : C.paper }}
                        aria-label="Eliminar cliente"
                      >
                        <Trash2 size={13} color={C.berry} />
                      </button>
                    </div>
                  </div>
                  <div className="font-body text-sm mt-0.5" style={{ color: C.inkSoft }}>{c.phone}</div>
                  <div className="flex items-center gap-4 mt-2.5 font-body text-sm" style={{ color: C.inkSoft }}>
                    <span><span className="font-display font-semibold" style={{ color: C.ink }}>{c.visits}</span> visitas</span>
                    <span><span className="font-display font-semibold" style={{ color: C.ink }}>{c.redeemed}</span> canjeados</span>
                  </div>
                  {c.lastVisit && (
                    <div className="font-body text-xs mt-1.5" style={{ color: C.inkSoft }}>Última visita: {formatVisitDate(c.lastVisit)}</div>
                  )}
                  {isConfirming && (
                    <div className="mt-3 pt-3" style={{ borderTop: `1px solid ${C.line}` }}>
                      <div className="font-body text-xs mb-2" style={{ color: C.berry }}>¿Eliminar a {c.name || "este cliente"} y todos sus puntos? No se puede deshacer.</div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDelete(c.phone)}
                          disabled={isDeleting}
                          className="flex-1 rounded-lg py-2 font-display font-semibold text-xs text-white disabled:opacity-60"
                          style={{ background: C.berry }}
                        >
                          {isDeleting ? "Eliminando..." : "Sí, eliminar"}
                        </button>
                        <button
                          onClick={() => setConfirmingPhone(null)}
                          disabled={isDeleting}
                          className="rounded-lg py-2 px-3 font-body text-xs"
                          style={{ border: `1.5px solid ${C.line}`, color: C.inkSoft }}
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function CategoryStatsPanel({ categories, onClose }) {
  const [loading, setLoading] = useState(true);
  const [views, setViews] = useState({});

  useEffect(() => {
    (async () => {
      const v = await getCategoryViews();
      setViews(v);
      setLoading(false);
    })();
  }, []);

  const rows = categories
    .map((c) => ({ id: c.id, label: c.label, count: views[c.id] || 0 }))
    .sort((a, b) => b.count - a.count);
  const max = Math.max(1, ...rows.map((r) => r.count));

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" style={{ background: "rgba(28,25,23,0.5)" }} onClick={onClose}>
      <div className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl p-6 max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-1">
          <div className="font-display font-semibold text-lg" style={{ color: C.ink }}>Categorías más vistas</div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: C.paper }}>
            <X size={16} color={C.inkSoft} />
          </button>
        </div>
        <div className="font-body text-xs mb-5" style={{ color: C.inkSoft }}>Cada vez que alguien toca una categoría, cuenta como una vista. Es un indicador de interés, no de ventas.</div>

        {loading ? (
          <div className="text-center py-8 font-body text-sm" style={{ color: C.inkSoft }}>Cargando...</div>
        ) : rows.every((r) => r.count === 0) ? (
          <div className="text-center py-8 font-body text-sm" style={{ color: C.inkSoft }}>Todavía no hay datos suficientes.</div>
        ) : (
          <div className="space-y-3">
            {rows.map((r) => (
              <div key={r.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-body text-sm font-semibold" style={{ color: C.ink }}>{r.label}</span>
                  <span className="font-display font-semibold text-sm" style={{ color: C.gold }}>{r.count}</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: C.paper }}>
                  <div className="h-2 rounded-full gold-grad" style={{ width: `${(r.count / max) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CustomerListButton({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
      style={{ border: `1.5px solid ${C.line}` }}
      aria-label="Ver lista de clientes"
    >
      <Users size={18} color={C.gold} />
    </button>
  );
}

function AdminLock({ isAdmin, onUnlock, onLock }) {
  const [open, setOpen] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);

  const attempt = () => {
    if (pinInput === ADMIN_PIN) {
      onUnlock();
      setOpen(false);
      setPinInput("");
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleClick = () => {
    if (isAdmin) {
      onLock();
    } else {
      setOpen((v) => !v);
    }
  };

  return (
    <div className="relative flex-shrink-0">
      <button
        onClick={handleClick}
        className="w-6 h-6 flex items-center justify-center"
        aria-label={isAdmin ? "Salir del modo administrador" : "Acceso administrador"}
      >
        {isAdmin ? <Unlock size={13} color={C.gold} /> : <Lock size={13} color="#DAD4C8" />}
      </button>

      {open && !isAdmin && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-8 z-50 w-56 rounded-xl p-3 bg-white" style={{ border: `1px solid ${C.line}`, boxShadow: "0 8px 24px rgba(28,25,23,0.12)" }}>
            <div className="font-body text-xs mb-2" style={{ color: C.inkSoft }}>Clave de administrador</div>
            <div className="flex gap-2">
              <input
                className="flex-1 min-w-0 rounded-lg px-2.5 py-2 font-body text-sm outline-none text-center tracking-widest"
                style={{ border: `1.5px solid ${pinError ? C.berry : C.line}`, background: C.paper }}
                placeholder="Clave"
                type="password"
                inputMode="numeric"
                value={pinInput}
                onChange={(e) => { setPinInput(e.target.value); setPinError(false); }}
                onKeyDown={(e) => e.key === "Enter" && attempt()}
                autoFocus
              />
              <button className="rounded-lg px-3 font-display font-semibold text-xs text-white gold-grad flex-shrink-0" onClick={attempt}>
                Entrar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function CatalogTab({ products, saveProducts, categories, saveCategories, isAdmin, onUnlock, onLock }) {
  const [activeCat, setActiveCat] = useState((categories || [])[0]?.id || "");
  const [editingId, setEditingId] = useState(null);
  const [adding, setAdding] = useState(false);
  const [editingCats, setEditingCats] = useState(false);
  const [newCatLabel, setNewCatLabel] = useState("");
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    if (!categories.find((c) => c.id === activeCat)) setActiveCat((categories || [])[0]?.id || "");
  }, [categories]);

  const filtered = products.filter((p) => p.category === activeCat);

  const updateProduct = (id, patch) => saveProducts(products.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  const deleteProduct = (id) => saveProducts(products.filter((p) => p.id !== id));
  const addProduct = (data) => {
    saveProducts([...products, { ...data, id: "p" + Date.now() }]);
    setAdding(false);
  };

  const moveProduct = (id, direction) => {
    const idx = products.findIndex((p) => p.id === id);
    if (idx === -1) return;
    const cat = products[idx].category;
    let swapIdx = -1;
    if (direction === "up") {
      for (let i = idx - 1; i >= 0; i--) {
        if (products[i].category === cat) { swapIdx = i; break; }
      }
    } else {
      for (let i = idx + 1; i < products.length; i++) {
        if (products[i].category === cat) { swapIdx = i; break; }
      }
    }
    if (swapIdx === -1) return;
    const next = [...products];
    [next[idx], next[swapIdx]] = [next[swapIdx], next[idx]];
    saveProducts(next);
  };

  const removeCategory = (id) => {
    saveCategories(categories.filter((c) => c.id !== id));
  };

  const addCategory = () => {
    const label = newCatLabel.trim();
    if (!label) return;
    const id = label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") || "cat_" + Date.now();
    if (categories.some((c) => c.id === id)) return;
    saveCategories([...categories, { id, label }]);
    setNewCatLabel("");
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-2 flex-1 overflow-x-auto md:overflow-visible md:flex-wrap pb-1" style={{ scrollbarWidth: "none" }}>
          {categories.map((c) => {
            const activeStyle = activeCat === c.id ? { background: C.ink, color: "white", border: `1.5px solid ${C.ink}` } : { color: C.inkSoft, border: `1.5px solid ${C.line}` };
            return (
              <button key={c.id} onClick={() => { setActiveCat(c.id); trackCategoryView(c.id); }} className="flex-shrink-0 font-display font-semibold text-sm py-2.5 px-4 rounded-full transition-all whitespace-nowrap" style={activeStyle}>
                {c.label}
              </button>
            );
          })}
        </div>
        {isAdmin && (
          <button
            onClick={() => setShowStats(true)}
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ border: `1.5px solid ${C.line}` }}
            aria-label="Ver categorías más vistas"
          >
            <TrendingUp size={14} color={C.inkSoft} />
          </button>
        )}
        {isAdmin && (
          <button
            onClick={() => setEditingCats((v) => !v)}
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
            style={editingCats ? { background: C.ink } : { border: `1.5px solid ${C.line}` }}
          >
            <Pencil size={14} color={editingCats ? "white" : C.inkSoft} />
          </button>
        )}
      </div>

      {showStats && <CategoryStatsPanel categories={categories} onClose={() => setShowStats(false)} />}

      {editingCats && isAdmin && (
        <div className="rounded-2xl p-4 mb-5 space-y-2.5 bg-white" style={{ border: `1.5px solid ${C.goldLight}` }}>
          <div className="font-display font-semibold text-sm mb-1" style={{ color: C.ink }}>Editar categorías</div>
          {categories.map((c) => (
            <div key={c.id} className="flex items-center justify-between rounded-xl px-3.5 py-2" style={{ background: C.paper }}>
              <span className="font-body text-sm" style={{ color: C.ink }}>{c.label}</span>
              <button onClick={() => removeCategory(c.id)} className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: C.berry + "15" }}>
                <Trash2 size={13} color={C.berry} />
              </button>
            </div>
          ))}
          {categories.length === 0 && (
            <div className="font-body text-sm text-center py-2" style={{ color: C.inkSoft }}>No hay categorías. Agregá una abajo.</div>
          )}
          <div className="flex gap-2 pt-1">
            <input
              className="flex-1 rounded-xl px-3.5 py-2.5 font-body text-sm outline-none"
              style={inputStyle()}
              placeholder="Nueva categoría"
              value={newCatLabel}
              onChange={(e) => setNewCatLabel(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addCategory()}
            />
            <button className="rounded-xl px-4 font-display font-semibold text-sm text-white gold-grad" onClick={addCategory}>
              Añadir
            </button>
          </div>
        </div>
      )}

      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
        {filtered.map((p, i) =>
          editingId === p.id ? (
            <div key={p.id} style={{ gridColumn: "1 / -1" }}>
              <ProductForm initial={p} categories={categories} onSave={(data) => { updateProduct(p.id, data); setEditingId(null); }} onCancel={() => setEditingId(null)} />
            </div>
          ) : (
            <div key={p.id} className="rounded-2xl p-4 flex items-start gap-3 bg-white" style={{ border: `1px solid ${C.line}`, opacity: p.available ? 1 : 0.5 }}>
              <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: p.available ? "linear-gradient(#D9B65C, #8A6423)" : C.line }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="font-display font-semibold text-base" style={{ color: C.ink }}>{p.name}</div>
                  {p.featured && (
                    <span className="text-[10px] font-body font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 gold-grad text-white">
                      <Star size={9} fill="white" /> Más pedido
                    </span>
                  )}
                  {!p.available && (
                    <span className="text-[10px] font-body font-semibold px-2 py-0.5 rounded-full" style={{ background: C.line, color: C.inkSoft }}>Agotado</span>
                  )}
                </div>
                {/^\d+oz L\.\d+ \/ \d+oz L\.\d+$/.test(p.description) ? (
                  <div className="font-display font-semibold text-sm mt-1.5 gold-text-grad">{p.description}</div>
                ) : (
                  <>
                    {p.description && <div className="font-body text-sm mt-0.5" style={{ color: C.inkSoft }}>{p.description}</div>}
                    {p.price > 0 && <div className="font-display font-semibold text-sm mt-1.5 gold-text-grad">L. {p.price}</div>}
                  </>
                )}
              </div>
              {isAdmin && (
                <div className="flex flex-col gap-1.5 flex-shrink-0">
                  <div className="flex gap-1">
                    <button disabled={i === 0} onClick={() => moveProduct(p.id, "up")} className="w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-30" style={{ background: C.paper }}>
                      <ChevronUp size={14} color={C.inkSoft} />
                    </button>
                    <button disabled={i === filtered.length - 1} onClick={() => moveProduct(p.id, "down")} className="w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-30" style={{ background: C.paper }}>
                      <ChevronDown size={14} color={C.inkSoft} />
                    </button>
                  </div>
                  <button onClick={() => updateProduct(p.id, { available: !p.available })} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: C.paper }}>
                    <Check size={14} color={C.gold} />
                  </button>
                  <button onClick={() => updateProduct(p.id, { featured: !p.featured })} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: p.featured ? C.gold + "20" : C.paper }} aria-label="Marcar como más pedido">
                    <Star size={14} color={C.gold} fill={p.featured ? C.gold : "none"} />
                  </button>
                  <button onClick={() => setEditingId(p.id)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: C.paper }}>
                    <Pencil size={14} color={C.inkSoft} />
                  </button>
                  <button onClick={() => deleteProduct(p.id)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: C.paper }}>
                    <Trash2 size={14} color={C.berry} />
                  </button>
                </div>
              )}
            </div>
          )
        )}
        {filtered.length === 0 && !adding && (
          <div className="text-center py-10 font-body text-sm" style={{ color: C.inkSoft }}>Todavía no hay productos aquí.</div>
        )}
      </div>

      {!isAdmin || categories.length === 0 ? null : adding ? (
        <div className="mt-3"><ProductForm initial={{ name: "", category: activeCat, price: "", description: "", available: true }} categories={categories} onSave={addProduct} onCancel={() => setAdding(false)} /></div>
      ) : (
        <button onClick={() => setAdding(true)} className="mt-3 w-full rounded-2xl py-3.5 font-display font-semibold text-sm flex items-center justify-center gap-1" style={{ border: `1.5px dashed ${C.goldLight}`, color: C.gold }}>
          <Plus size={16} /> Agregar producto
        </button>
      )}
    </div>
  );
}

function PointsTab({ isAdmin, onUnlock, onLock }) {
  const [phone, setPhone] = useState("");
  const [activePhone, setActivePhone] = useState(null);
  const [name, setName] = useState("");
  const [visits, setVisits] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [askName, setAskName] = useState(false);

  const load = async (ph) => {
    setLoading(true);
    const c = await getCustomer(ph);
    if (c) {
      setName(c.name || "");
      setVisits(c.visits ? { history: [], ...c.visits } : { units: 0, redeemed: 0, history: [] });
      setAskName(!c.name);
    } else {
      setVisits({ units: 0, redeemed: 0, history: [] });
      setAskName(true);
    }
    setActivePhone(ph);
    setLoading(false);
  };

  const handleEnter = () => {
    const clean = normalizePhone(phone);
    if (clean.length >= 8) load(clean);
  };

  const commitCustomer = async (nextVisits, nextName) => {
    setVisits(nextVisits);
    setSaving(true);
    setSaveError(false);
    const ok = await saveCustomer(activePhone, { name: nextName ?? name, visits: nextVisits });
    setSaving(false);
    if (!ok) setSaveError(true);
  };

  const addVisit = async () => {
    const history = [new Date().toISOString(), ...(visits.history || [])];
    await commitCustomer({ ...visits, units: visits.units + 1, history });
  };

  const removeVisit = async () => {
    const nextUnits = Math.max(0, visits.units - 1);
    const nextRedeemed = Math.min(visits.redeemed, Math.floor(nextUnits / STAMPS_FOR_REWARD));
    const history = (visits.history || []).slice(1);
    await commitCustomer({ units: nextUnits, redeemed: nextRedeemed, history });
  };

  const redeemReward = async () => {
    await commitCustomer({ ...visits, redeemed: visits.redeemed + 1 });
  };

  if (!activePhone) {
    return (
      <div className="flex flex-col items-center pt-8 gap-4">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center gold-grad">
          <Sparkles color="white" size={26} />
        </div>
        <div className="text-center">
          <div className="font-display font-semibold text-lg" style={{ color: C.ink }}>Tu tarjeta de puntos</div>
          <div className="font-body text-sm mt-0.5" style={{ color: C.inkSoft }}>Ingresá tu número de teléfono</div>
        </div>
        <input
          className="w-full rounded-xl px-4 py-3.5 font-body text-center text-lg tracking-wide outline-none bg-white"
          style={{ border: `1.5px solid ${C.line}` }}
          placeholder="9999-9999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEnter()}
        />
        <button className="w-full rounded-xl py-3.5 font-display font-semibold text-white flex items-center justify-center gap-1 gold-grad" onClick={handleEnter}>
          Ver mis puntos <ChevronRight size={18} />
        </button>
      </div>
    );
  }

  if (loading || !visits) return <div className="text-center pt-10 font-body" style={{ color: C.inkSoft }}>Cargando...</div>;

  const available = Math.floor(visits.units / STAMPS_FOR_REWARD) - visits.redeemed;

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-display font-semibold text-lg" style={{ color: C.ink }}>{name ? `Hola, ${name}` : "Hola"}</div>
          <div className="font-body text-xs mt-0.5" style={{ color: C.inkSoft }}>{activePhone}</div>
        </div>
        <button
          className="font-body text-xs underline"
          style={{ color: saving ? C.line : C.inkSoft, pointerEvents: saving ? "none" : "auto" }}
          disabled={saving}
          onClick={() => { setActivePhone(null); setPhone(""); setSaveError(false); }}
        >
          {saving ? "Guardando..." : "Cambiar número"}
        </button>
      </div>

      {saveError && (
        <div className="rounded-xl px-3.5 py-2.5 mb-4 font-body text-xs" style={{ background: C.gold + "15", color: C.goldDeep }}>
          El cambio quedó guardado en este dispositivo, pero tardó en sincronizar con el servidor. Podés seguir usando la app con normalidad.
        </div>
      )}

      {askName && (
        <div className="rounded-xl p-3 mb-4 flex gap-2 bg-white" style={{ border: `1.5px solid ${C.goldLight}` }}>
          <input
            className="flex-1 rounded-lg px-3 py-2 font-body text-sm outline-none"
            style={inputStyle()}
            placeholder="¿Cómo te llamás?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="rounded-lg px-4 font-display font-semibold text-sm text-white gold-grad" onClick={() => { commitCustomer(visits, name); setAskName(false); }}>
            Guardar
          </button>
        </div>
      )}

      <StampCard catLabel="Visitas a Chila's Brownies" units={visits.units} redeemed={visits.redeemed} onRemove={isAdmin && !saving ? removeVisit : null} />

      {available > 0 && isAdmin && (
        <button disabled={saving} className="w-full mt-1.5 rounded-xl py-2.5 font-display font-semibold text-sm text-white flex items-center justify-center gap-1" style={{ background: C.berry, opacity: saving ? 0.6 : 1 }} onClick={redeemReward}>
          <Gift size={14} /> Canjear premio
        </button>
      )}

      {isAdmin && (
        <button disabled={saving} className="mt-4 w-full rounded-2xl py-3.5 font-display font-semibold text-sm flex items-center justify-center gap-1" style={{ border: `1.5px dashed ${C.goldLight}`, color: C.gold, opacity: saving ? 0.6 : 1 }} onClick={addVisit}>
          <Plus size={16} /> {saving ? "Guardando..." : "Registrar visita"}
        </button>
      )}

      {visits.history && visits.history.length > 0 && (
        <div className="mt-5 rounded-2xl p-4 bg-white" style={{ border: `1px solid ${C.line}` }}>
          <div className="font-display font-semibold text-sm mb-2.5" style={{ color: C.ink }}>Historial de visitas</div>
          <div className="space-y-1.5 max-h-52 overflow-y-auto">
            {visits.history.map((iso, i) => (
              <div key={i} className="font-body text-xs flex items-center justify-between" style={{ color: C.inkSoft }}>
                <span>{formatVisitDate(iso)}</span>
                {i === 0 && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: C.gold + "15", color: C.goldDeep }}>Más reciente</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SharePanel({ shareUrl, saveShareUrl, onClose }) {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(shareUrl || "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState(false);

  const isValidUrl = /^https?:\/\/.+/i.test(input.trim());

  const handleSave = async () => {
    if (!isValidUrl || saving) return;
    setSaving(true);
    setSaveError(false);
    const ok = await saveShareUrl(input.trim());
    setSaving(false);
    if (ok) {
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setEditing(false);
      }, 700);
    } else {
      setSaveError(true);
    }
  };

  if (!editing && shareUrl) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col" style={{ background: C.paper }}>
        <div className="flex items-center justify-between px-5 pt-6 pb-4">
          <div className="font-display font-semibold text-lg" style={{ color: C.ink }}>Escaneá para ver la tienda</div>
          <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: C.white, border: `1px solid ${C.line}` }}>
            <X size={18} color={C.inkSoft} />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
          <div className="p-5 rounded-3xl bg-white" style={{ border: `1px solid ${C.line}`, boxShadow: "0 8px 30px rgba(28,25,23,0.08)" }}>
            <QRCodeSVG text={shareUrl} size={280} />
          </div>
          <div className="text-center">
            <div className="font-display font-semibold text-base" style={{ color: C.ink }}>Chila's Brownies</div>
            <div className="font-body text-xs mt-1" style={{ color: C.inkSoft }}>Apuntá la cámara del celular al código</div>
          </div>
        </div>

        <div className="px-6 pb-8 pt-2 text-center">
          <button className="font-body text-xs underline" style={{ color: C.inkSoft }} onClick={() => { setInput(shareUrl); setEditing(true); }}>
            Cambiar el enlace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" style={{ background: "rgba(28,25,23,0.5)" }} onClick={onClose}>
      <div
        className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="font-display font-semibold text-lg" style={{ color: C.ink }}>Compartir con código QR</div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: C.paper }}>
            <X size={16} color={C.inkSoft} />
          </button>
        </div>

        <div className="font-body text-sm mb-4" style={{ color: C.inkSoft }}>
          Para que la gente escanee y abra la app, primero hay que publicar este artifact desde Claude (botón "Compartir" o "Publish" arriba del artifact) y pegar aquí el enlace público que te dé.
        </div>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 rounded-xl px-3.5 py-2.5 font-body text-sm outline-none"
            style={inputStyle()}
            placeholder="https://claude.ai/..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="rounded-xl px-4 font-display font-semibold text-sm text-white gold-grad flex-shrink-0 disabled:opacity-40"
            disabled={!isValidUrl || saving}
            onClick={handleSave}
          >
            {saving ? "..." : saved ? <Check size={16} /> : "Guardar"}
          </button>
        </div>

        {saveError && (
          <div className="rounded-xl px-3.5 py-2.5 mb-4 font-body text-xs" style={{ background: C.berry + "15", color: C.berry }}>
            No se pudo guardar el enlace. Revisá tu conexión y tocá "Guardar" de nuevo.
          </div>
        )}

        {isValidUrl ? (
          <div className="flex flex-col items-center gap-3 py-2">
            <div className="p-4 rounded-2xl bg-white" style={{ border: `1px solid ${C.line}` }}>
              <QRCodeSVG text={input.trim()} size={240} />
            </div>
            <div className="font-body text-xs text-center" style={{ color: C.inkSoft }}>
              Mantén presionada la imagen para guardarla o imprimirla y ponerla en la tienda.
            </div>
          </div>
        ) : (
          <div className="text-center py-8 font-body text-sm" style={{ color: C.inkSoft }}>
            Pegá el enlace público de la app arriba para generar el código QR.
          </div>
        )}

        {shareUrl && (
          <button className="w-full mt-4 text-center font-body text-xs underline" style={{ color: C.inkSoft }} onClick={() => setEditing(false)}>
            Volver al código QR
          </button>
        )}
      </div>
    </div>
  );
}

export default function ChilasApp() {
  const [tab, setTab] = useState("catalogo");
  const [showShare, setShowShare] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { ready, products, saveProducts, categories, saveCategories, shareUrl, saveShareUrl } = useStorage();

  return (
    <div className="min-h-screen" style={{ background: C.paper }}>
      {FONTS}
      <div className="w-full mx-auto pb-24">
        <div className="px-6 md:px-10 lg:px-14 2xl:px-20 pt-9 md:pt-10 pb-6 bg-white" style={{ borderBottom: `1px solid ${C.line}` }}>
          <div className="flex items-start justify-between">
            <div>
              <div className="font-display font-semibold text-3xl leading-tight" style={{ color: C.ink }}>
                Chila's <span className="gold-text-grad">Brownies</span>
              </div>
              <div className="font-body text-sm mt-1.5" style={{ color: C.inkSoft }}>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline" style={{ textDecorationColor: C.line }}>
                  Jutiquile, Olancho
                </a>
                {" · Mar–Dom 8am–7pm"}
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 mt-1">
              <div className="flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ border: `1.5px solid ${C.line}` }}
                  aria-label="Instagram"
                >
                  <Instagram size={18} color={C.gold} />
                </a>
                {isAdmin && <CustomerListButton onOpen={() => setShowCustomers(true)} />}
                <button
                  onClick={() => setShowShare(true)}
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ border: `1.5px solid ${C.line}` }}
                  aria-label="Compartir con código QR"
                >
                  <QrCode size={18} color={C.gold} />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ border: `1.5px solid ${C.line}` }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} color="#25D366" />
                </a>
                <AdminLock isAdmin={isAdmin} onUnlock={() => setIsAdmin(true)} onLock={() => setIsAdmin(false)} />
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 md:px-8 lg:px-12 2xl:px-20 pt-6 md:pt-8">
          {!ready ? (
            <div className="text-center pt-10 font-body" style={{ color: C.inkSoft }}>Cargando la tienda...</div>
          ) : tab === "catalogo" ? (
            <CatalogTab products={products} saveProducts={saveProducts} categories={categories} saveCategories={saveCategories} isAdmin={isAdmin} onUnlock={() => setIsAdmin(true)} onLock={() => setIsAdmin(false)} />
          ) : (
            <div className="max-w-md mx-auto">
              <PointsTab isAdmin={isAdmin} onUnlock={() => setIsAdmin(true)} onLock={() => setIsAdmin(false)} />
            </div>
          )}
        </div>
      </div>

      {showShare && <SharePanel shareUrl={shareUrl || SITE_URL} saveShareUrl={saveShareUrl} onClose={() => setShowShare(false)} />}
      {showCustomers && <CustomerListPanel onClose={() => setShowCustomers(false)} />}

      <div className="fixed bottom-0 left-0 right-0 bg-white" style={{ borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-2xl mx-auto flex">
          {[
            { id: "catalogo", label: "Catálogo" },
            { id: "puntos", label: "Mis puntos" },
          ].map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className="flex-1 flex flex-col items-center gap-1 py-3.5 font-display font-semibold text-sm relative">
              <span style={{ color: tab === t.id ? C.ink : C.inkSoft }}>{t.label}</span>
              {tab === t.id && <div className="absolute bottom-0 h-[2px] w-10 rounded-full gold-grad" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
