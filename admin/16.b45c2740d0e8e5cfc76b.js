(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{FnMX:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("2Vo4"),o=n("AytR"),i=n("fXoL"),a=n("tk/3");const s="sharing_map";let c=(()=>{class t{constructor(t){this.httpClient=t,this.baseUrl=o.a.baseUrl,this._sharingSub=new r.a(null),this.sharing$=this._sharingSub.asObservable();let e=localStorage.getItem(s);e&&this._sharingSub.next(JSON.parse(e))}listHierarchy(){return this.httpClient.get(this.baseUrl+"/listHierarchy")}listUserLog(t){return this.httpClient.get(`${this.baseUrl}/logActivity/${t}`)}getUser(t){return this.httpClient.get(`${this.baseUrl}/getUser/${t}`)}listUser(t,e){return this.httpClient.get(e?`${this.baseUrl}/listUsers/${t}/${e}`:`${this.baseUrl}/listUsers/${t}`)}updateStatus(t,e){return this.httpClient.post(`${this.baseUrl}/updateUser/${t}`,e)}registration(t){return this.httpClient.post(this.baseUrl+"/registration",t)}logCreditRef(t){return this.httpClient.get(`${this.baseUrl}/logCreditRef/${t}`)}changePassword(t){return this.httpClient.post(`${this.baseUrl}/updateUser/${t.userId}`,t)}changeExposureLimit(t){return this.httpClient.post(`${this.baseUrl}/updateUser/${t.userId}`,t)}updateShare(t){return this.httpClient.post(`${this.baseUrl}/updateUser/${t.userId}`,t)}getlog(t){return this.httpClient.get(`${this.baseUrl}/logTransaction/${t}`)}logActivity(t){return this.httpClient.get(`${this.baseUrl}/logActivity/${t}`)}betHistory(t,e,n){return this.httpClient.get(`${this.baseUrl}/betsHistory?from=${t}&to=${e}&userId=${n}`)}profitLoss(t,e,n){return this.httpClient.get(`${this.baseUrl}/profitLoss?from=${t}&to=${e}&userId=${n}`)}setSharing(t){this._sharingSub.next(t),localStorage.setItem(s,JSON.stringify(t))}allowUnmatchedBet(t,e){return this.httpClient.get(e?`/unmatchedBets/${t}/1`:`/unmatchedBets/${t}/0`)}}return t.\u0275fac=function(e){return new(e||t)(i.bc(a.b))},t.\u0275prov=i.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},X3zk:function(t,e,n){"use strict";n.r(e),n.d(e,"LoginModule",(function(){return f}));var r=n("ofXK"),o=n("tyNb"),i=n("3Pt+"),a=n("fXoL"),s=n("lGQG"),c=n("rj1t"),g=n("5eHb"),l=n("jhN1"),h=n("OlR4"),p=n("FnMX"),d=n("NM+/");function u(t,e){if(1&t&&(a.Xb(0,"span",15),a.Jc(1),a.Wb()),2&t){const t=a.gc();a.Fb(1),a.Lc("",t.errorMsg," ")}}let b=(()=>{class t{constructor(t,e,n,r,o,i,a,s){this.formBuilder=t,this.authService=e,this.tokenService=n,this.toastr=r,this.router=o,this.sanitization=i,this.common=a,this.usersService=s,this.serverError=!1}ngOnInit(){this.loginForm=this.formBuilder.group({userName:["",i.y.required],password:["",i.y.required],captcha:[,i.y.required],log:[,i.y.required]}),this.getCaptcha()}login(){this.loginForm.valid?(console.log(this.loginForm.value),this.authService.login(this.loginForm.value).subscribe(t=>{0===t.errorCode&&t.result?(this.tokenService.set(t.result[0].token),this.authService.setCurrentUser(t.result[0]),this.authService.setLoggedIn(!0),this.usersService.setSharing({cricketFancySharing:t.result[0].cricketFancySharing,cricketSharing:t.result[0].cricketSharing,dogRaceSharing:t.result[0].dogRaceSharing,horseRaceSharing:t.result[0].horseRaceSharing,indianCasinoSharing:t.result[0].indianCasinoSharing,intCasinoSharing:t.result[0].intCasinoSharing,soccerGoalsSharing:t.result[0].soccerGoalsSharing,soccerSharing:t.result[0].soccerSharing,tennisSharing:t.result[0].tennisSharing}),this.common.listHierarchy(),this.common.listAllHierarchy(),this.common.updateBalance(),this.toastr.success("Login Successful"),this.router.navigate(["/"])):1===t.errorCode&&(this.serverError=!0,this.errorMsg=t.errorDescription,this.getCaptcha()),console.log(t)})):(console.log(this.loginForm),this.userName.errors&&this.userName.errors.required?this.errorMsg="Username is empty":this.password.errors&&this.password.errors.required?this.errorMsg="Password is empty":this.captcha.errors&&this.captcha.errors.required&&(this.errorMsg="Captcha is empty"))}getCaptcha(){this.authService.getCaptcha().subscribe(t=>{this.captchaImg=this.sanitization.bypassSecurityTrustResourceUrl("data:image/jpeg;base64,"+t.img),this.loginForm.get("log").setValue(t.log)})}get userName(){return this.loginForm.get("userName")}get password(){return this.loginForm.get("password")}get captcha(){return this.loginForm.get("captcha")}}return t.\u0275fac=function(e){return new(e||t)(a.Rb(i.d),a.Rb(s.a),a.Rb(c.a),a.Rb(g.b),a.Rb(o.c),a.Rb(l.b),a.Rb(h.a),a.Rb(p.a))},t.\u0275cmp=a.Lb({type:t,selectors:[["app-login"]],decls:17,vars:3,consts:[[1,"scene"],["appTheme","",1,"login-wrap"],[1,"kv"],["src","assets/images/transparent.gif","alt","Logo"],[1,"login-panel",3,"formGroup","ngSubmit"],["src","assets/images/transparent.gif","alt","Logo",1,"logo"],[1,"header"],["formControlName","userName","id","loginName","type","text","placeholder","Username","required",""],["formControlName","password","id","password","type","password","placeholder","Password","required",""],[1,"captcha-group"],["formControlName","captcha","id","captha","type","text","placeholder","Captcha","required",""],["alt","",3,"src"],["type","submit",1,"btn-send"],[1,"icon-login"],["id","errorMsg","class","error",4,"ngIf"],["id","errorMsg",1,"error"]],template:function(t,e){1&t&&(a.Sb(0,"div",0),a.Xb(1,"div",1),a.Xb(2,"div",2),a.Sb(3,"img",3),a.Wb(),a.Xb(4,"form",4),a.ec("ngSubmit",(function(){return e.login()})),a.Sb(5,"img",5),a.Xb(6,"div",6),a.Jc(7,"Agent Login"),a.Wb(),a.Sb(8,"input",7),a.Sb(9,"input",8),a.Xb(10,"div",9),a.Sb(11,"input",10),a.Sb(12,"img",11),a.Wb(),a.Xb(13,"button",12),a.Jc(14," Login "),a.Sb(15,"img",13),a.Wb(),a.Hc(16,u,2,1,"span",14),a.Wb(),a.Wb()),2&t&&(a.Fb(4),a.nc("formGroup",e.loginForm),a.Fb(8),a.nc("src",e.captchaImg,a.Cc),a.Fb(4),a.nc("ngIf",e.loginForm.invalid||e.serverError))},directives:[d.a,i.A,i.q,i.h,i.b,i.p,i.g,i.w,r.m],styles:[".button[_ngcontent-%COMP%]{background:#eee linear-gradient(180deg,var(--primary),hsl(var(--primary),-5%) 60%) repeat-x;border:1px solid #bbb;border-radius:4px;color:var(--on-secondary);font-weight:700;line-height:23px;font-size:12px;padding:0 8px;display:inline-block;text-align:center;cursor:pointer;outline:0;font-family:Tahoma,Helvetica,sans-serif}.button.btn[_ngcontent-%COMP%]:hover:not(:disabled){text-decoration:none;background:#fff url(bg-btn_hover.a56286f3f60d756c3aac.gif) repeat-x}.btn.elevated[_ngcontent-%COMP%]{box-shadow:0 2px 2px 1px rgba(0,0,0,.15)}.btn-cancel[_ngcontent-%COMP%]{background:#eee linear-gradient(180deg,var(--primary),hsl(var(--primary),-5%) 60%) repeat-x;border:1px solid #bbb;border-radius:4px;color:var(--on-secondary);font-weight:700;line-height:23px;font-size:12px;padding:0 8px;display:inline-block;text-align:center;cursor:pointer;outline:0;font-family:Tahoma,Helvetica,sans-serif;background:#f13e3e;color:#444}.btn-cancel.btn[_ngcontent-%COMP%]:hover:not(:disabled){text-decoration:none;background:#fff url(bg-btn_hover.a56286f3f60d756c3aac.gif) repeat-x}.back[_ngcontent-%COMP%], .yes[_ngcontent-%COMP%]{background-color:#7bc8ff}.back1[_ngcontent-%COMP%]{background-color:#95d3ff}.back2[_ngcontent-%COMP%]{background-color:#aeddff}.back3[_ngcontent-%COMP%]{background-color:#c8e8ff}.lay[_ngcontent-%COMP%], .no[_ngcontent-%COMP%]{background-color:#82ffb6}.lay1[_ngcontent-%COMP%]{background-color:#9cffc5}.lay2[_ngcontent-%COMP%]{background-color:#b5ffd4}.lay3[_ngcontent-%COMP%]{background-color:#cfffe3}.profit-text[_ngcontent-%COMP%]{color:#0bac0b}.loss-text[_ngcontent-%COMP%]{color:#d42c2c}.profit-text-dark[_ngcontent-%COMP%]{color:#087c08}.loss-text-dark[_ngcontent-%COMP%]{color:#aa2323}.success-text[_ngcontent-%COMP%]{color:#12a112}.danger-text[_ngcontent-%COMP%]{color:#d63939}.lcExch   [_nghost-%COMP%]{display:block;height:100%;background-image:url(/assets/images/CLouds5.png)}.lcExch   [_nghost-%COMP%]   .scene[_ngcontent-%COMP%]{background:url(/assets/images/bg2.jpg) #d7ecfa no-repeat!important;background-color:#bdb9bd;z-index:-1;position:absolute;top:0;bottom:0;left:0;overflow:hidden;right:0;height:800px}.lcExch   [_nghost-%COMP%]   .clouds[_ngcontent-%COMP%]{width:100%;height:1000px;top:20px;position:relative;animation-duration:50s;animation-direction:alternate;animation-name:example;animation-iteration-count:infinite}@keyframes example{0%{left:0;top:10px}to{left:1000px;top:0}}.lcExch   [_nghost-%COMP%]   .scene[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;bottom:0}.lcExch   [_nghost-%COMP%]   .ground[_ngcontent-%COMP%]{width:100%;height:30px;background:#1d1818;z-index:999}.lcExch   [_nghost-%COMP%]   .scene[_ngcontent-%COMP%] > div.clouds[_ngcontent-%COMP%]{width:101%;height:405px;bottom:90px;background:url(/assets/images/CLouds5.png) repeat;top:8px;z-index:-1}.lcExch   [_nghost-%COMP%]   .kv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background-image:url(/assets/images/logos/lcexch-ferrari.png);height:94%}.lcExch   [_nghost-%COMP%]   .login-panel[_ngcontent-%COMP%]{top:15%}.lcExch   [_nghost-%COMP%]   .login-panel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:block;background-image:url(/assets/images/logos/lcExch.png);height:64px;background-size:contain;background-repeat:no-repeat;margin-bottom:8px}.login-wrap[_ngcontent-%COMP%], .maintain-wrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;position:absolute;top:15%;left:calc(50% - 540px / 2);width:540px;height:408px;background-color:var(--secondary);border-radius:8px;box-shadow:0 5px 20px rgba(0,0,0,.5);color:var(--primary)}.kv[_ngcontent-%COMP%]{border-radius:8px 0 0 8px;display:flex;align-items:center;justify-content:center;padding:0 30px;background-image:linear-gradient(5deg,var(--primary) 30%,transparent 145%)}.kv[_ngcontent-%COMP%], .kv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.kv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background-size:contain;background-position:0;background-repeat:no-repeat}.skyInrPlay[_ngcontent-%COMP%]   .kv[_ngcontent-%COMP%]{width:100%;padding:0 12px;background-image:linear-gradient(5deg,var(--primary) 38%,transparent 155%)}.login-panel[_ngcontent-%COMP%]{display:flex;flex-flow:column;overflow:hidden;color:#243a48;margin:0 34px;position:relative;top:25%}.login-panel[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:none}.login-panel[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{font-size:20px;line-height:24px;margin-bottom:15px}.login-panel[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{position:relative;width:220px}.login-panel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:33px;font-size:14px;line-height:21px;border:1px solid #aaa;box-shadow:inset 0 2px 0 0 rgba(0,0,0,.1);margin:0 0 7px}.login-panel[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%]{width:100%;height:36px;line-height:36px;font-size:15px;margin:15px 0 0}.login-panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:20px;line-height:24px;margin-bottom:15px}.error[_ngcontent-%COMP%]{color:#d0021b;font-size:13px;line-height:16px;margin-top:12px}.captcha-group[_ngcontent-%COMP%]{position:relative}.captcha-group[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;right:0;top:50%;transform:translateY(-70%)}"]}),t})();var m=n("lFoZ");const C=[{path:"",component:b}];let f=(()=>{class t{}return t.\u0275mod=a.Pb({type:t}),t.\u0275inj=a.Ob({factory:function(e){return new(e||t)},imports:[[r.c,o.f.forChild(C),i.j,i.v,m.a]]}),t})()}}]);