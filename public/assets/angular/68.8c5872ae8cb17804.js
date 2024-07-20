"use strict";(self.webpackChunkdocument_management=self.webpackChunkdocument_management||[]).push([[68],{2760:(A,h,o)=>{o.d(h,{c:()=>f});const f=[{id:0,name:"Daily"},{id:1,name:"Weekly"},{id:2,name:"Monthly"},{id:3,name:"Quarterly"},{id:4,name:"HalfYearly"},{id:5,name:"Yearly"}]},690:(A,h,o)=>{o.d(h,{v:()=>N});var p=o(529),f=o(9646),u=o(262),g=o(2760),v=o(4650),S=o(8032);let N=(()=>{class d{constructor(i,c){this.httpClient=i,this.commonHttpErrorService=c}getUsers(){return this.httpClient.get("user").pipe((0,u.K)(this.commonHttpErrorService.handleError))}getUsersForDropdown(){return this.httpClient.get("user-dropdown").pipe((0,u.K)(this.commonHttpErrorService.handleError))}getRoles(){return this.httpClient.get("role").pipe((0,u.K)(this.commonHttpErrorService.handleError))}getRolesForDropdown(){return this.httpClient.get("role-dropdown").pipe((0,u.K)(this.commonHttpErrorService.handleError))}getMyReminder(i){return this.httpClient.get(`reminder/${i}/myreminder`).pipe((0,u.K)(this.commonHttpErrorService.handleError))}getReminder(i){return this.httpClient.get(`reminder/${i}`).pipe((0,u.K)(this.commonHttpErrorService.handleError))}addDocumentAuditTrail(i){return this.httpClient.post("documentAuditTrail",i).pipe((0,u.K)(this.commonHttpErrorService.handleError))}downloadDocument(i,c){return this.httpClient.get(`document/${i}/download/${c} `,{reportProgress:!0,observe:"events",responseType:"blob"})}isDownloadFlag(i,c){return this.httpClient.get(`document/${i}/isDownloadFlag/isPermission/${c}`)}getDocumentToken(i){return this.httpClient.get(`documentToken/${i}/token`)}deleteDocumentToken(i){return this.httpClient.delete(`documentToken/${i}`)}readDocument(i,c){return this.httpClient.get(`document/${i}/readText/${c}`)}getReminderFrequency(){return(0,f.of)(g.c)}getAllRemindersForCurrentUser(i){const m=(new p.LE).set("fields",i.fields?i.fields:"").set("orderBy",i.orderBy?i.orderBy:"").set("pageSize",i.pageSize.toString()).set("skip",i.skip.toString()).set("searchQuery",i.searchQuery?i.searchQuery:"").set("subject",i.subject?i.subject:"").set("message",i.message?i.message:"").set("frequency",i.frequency?i.frequency:"");return this.httpClient.get("reminder/all/currentuser",{params:m,observe:"response"})}deleteReminderCurrentUser(i){return this.httpClient.delete(`reminder/currentuser/${i}`)}}return d.\u0275fac=function(i){return new(i||d)(v.LFG(p.eN),v.LFG(S.U))},d.\u0275prov=v.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},6462:(A,h,o)=>{o.r(h),o.d(h,{NotificationModule:()=>st});var p=o(6895),f=o(8988),u=o(319),g=o(6308),v=o(4913),S=o(6451),N=o(4968),d=o(8505),T=o(8372),i=o(1884),c=o(2676),m=o(1312),E=o(1135),R=o(9646),b=o(262),D=o(8746);class Z{get count(){return this._count}constructor(s){this.notificationService=s,this.notificationsSubject=new E.X([]),this.responseHeaderSubject=new E.X(null),this.loadingSubject=new E.X(!1),this.loading$=this.loadingSubject.asObservable(),this._count=0,this.responseHeaderSubject$=this.responseHeaderSubject.asObservable()}connect(s){return this.notificationsSubject.asObservable()}disconnect(s){this.notificationsSubject.complete(),this.loadingSubject.complete()}loadNotifications(s){this.loadingSubject.next(!0),this.notificationService.getNotifications(s).pipe((0,b.K)(()=>(0,R.of)([])),(0,D.x)(()=>this.loadingSubject.next(!1))).subscribe(n=>{const a=new m.E;a.pageSize=parseInt(n.headers.get("pageSize")),a.totalCount=parseInt(n.headers.get("totalCount")),a.skip=parseInt(n.headers.get("skip")),this.responseHeaderSubject.next({...a});const r=[...n.body];this._count=r.length,this.notificationsSubject.next(r)})}}var L=o(7281),x=o(8739),t=o(4650),O=o(5769),U=o(1218),M=o(914),I=o(7185),l=o(671),y=o(1572),_=o(9383),j=o(8017);const Y=["input"];function $(e,s){1&e&&(t.TgZ(0,"th",28),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ACTION")," "))}function B(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(n);const r=t.oxw().$implicit,C=t.oxw();return t.KtG(C.viewDocument(r))}),t._UZ(1,"i",32),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&e&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"VIEW_DOCUMENT")," "))}function H(e,s){if(1&e&&(t.TgZ(0,"td",29),t.YNc(1,B,4,3,"button",30),t.qZA()),2&e){const n=s.$implicit;t.xp6(1),t.Q6J("ngIf",n.documentId)}}function Q(e,s){1&e&&(t.TgZ(0,"th",28),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"DATE")," "))}function z(e,s){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.ALo(2,"utcToLocalTime"),t.qZA()),2&e){const n=s.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.createdDate,"short")," ")}}function w(e,s){1&e&&(t.TgZ(0,"th",28),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"MESSAGE")," "))}function F(e,s){1&e&&(t.TgZ(0,"span",34),t._uU(1,"new"),t.qZA())}function J(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"b"),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"translate"),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(2),t.hij(" ",n.documentName,""),t.xp6(1),t.hij(" ",t.lcZ(4,2,"DOCUMENT_PERMISSION_GRANTED_TO_YOU")," ")}}function K(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"b"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._uU(4),t.BQk()),2&e){const n=t.oxw(2).$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,2,"DOCUMENT_NAME"),""),t.xp6(2),t.hij(" : ",n.documentName," :: ")}}function G(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"b"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._uU(4," :: "),t.YNc(5,K,5,4,"ng-container",26),t._uU(6),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(2),t.Oqu(t.lcZ(3,3,"REMINDER")),t.xp6(3),t.Q6J("ngIf",n.documentId),t.xp6(1),t.hij(" ",n.message," ")}}function W(e,s){if(1&e&&(t.TgZ(0,"td",29),t.YNc(1,F,2,0,"span",33),t.YNc(2,J,5,4,"ng-container",26),t.YNc(3,G,7,5,"ng-container",26),t.qZA()),2&e){const n=s.$implicit;t.xp6(1),t.Q6J("ngIf",!n.isRead),t.xp6(1),t.Q6J("ngIf",!n.message),t.xp6(1),t.Q6J("ngIf",n.message)}}function k(e,s){1&e&&t._UZ(0,"tr",35)}function P(e,s){1&e&&t._UZ(0,"tr",36)}function X(e,s){1&e&&(t.ynx(0),t.TgZ(1,"div",37)(2,"strong"),t._uU(3),t.ALo(4,"translate"),t.qZA()(),t.BQk()),2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"NO_DATA_FOUND")))}function V(e,s){1&e&&(t.TgZ(0,"div",38),t._UZ(1,"mat-spinner"),t.qZA())}const q=function(){return[10,20,30]},tt=[{path:"",component:(()=>{class e extends c.H{constructor(n,a,r,C){super(),this.notificationService=n,this.overlay=a,this.documentService=r,this.toastrService=C,this.notifications=[],this.displayedColumns=["action","createdDate","message"],this.isLoadingResults=!0,this.notificationResource=new v.J,this.notificationResource.pageSize=10,this.notificationResource.orderBy="createdDate desc"}ngOnInit(){this.dataSource=new Z(this.notificationService),this.dataSource.loadNotifications(this.notificationResource),this.getResourceParameter()}ngAfterViewInit(){this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),this.sub$.sink=(0,S.T)(this.sort.sortChange,this.paginator.page).pipe((0,d.b)(()=>{this.notificationResource.skip=this.paginator.pageIndex*this.paginator.pageSize,this.notificationResource.pageSize=this.paginator.pageSize,this.notificationResource.orderBy=this.sort.active+" "+this.sort.direction,this.dataSource.loadNotifications(this.notificationResource)})).subscribe(),this.sub$.sink=(0,N.R)(this.input.nativeElement,"keyup").pipe((0,T.b)(1e3),(0,i.x)(),(0,d.b)(()=>{this.paginator.pageIndex=0,this.notificationResource.skip=0,this.notificationResource.name=this.input.nativeElement.value,this.dataSource.loadNotifications(this.notificationResource)})).subscribe()}getResourceParameter(){this.sub$.sink=this.dataSource.responseHeaderSubject$.subscribe(n=>{n&&(this.notificationResource.pageSize=n.pageSize,this.notificationResource.skip=n.skip,this.notificationResource.totalCount=n.totalCount)})}viewDocument(n){this.sub$.sink=this.notificationService.markAsRead(n.id).subscribe(),this.sub$.sink=this.documentService.getDocument(n.documentId).subscribe(a=>{if(!a||0==Object.keys(a).length)return void this.toastrService.error("you don't have permission to access this document.");const C=a.url.split(".")[1];this.overlay.open(L.Y,{position:"center",origin:"global",panelClass:["file-preview-overlay-container","white-background"],data:{documentId:a.id,name:a.name,extension:C,isRestricted:!1,isVersion:!1}})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(O.g),t.Y36(U.T),t.Y36(M.Z),t.Y36(I._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-notification-list"]],viewQuery:function(n,a){if(1&n&&(t.Gf(x.NW,5),t.Gf(g.YE,5),t.Gf(Y,5)),2&n){let r;t.iGM(r=t.CRH())&&(a.paginator=r.first),t.iGM(r=t.CRH())&&(a.sort=r.first),t.iGM(r=t.CRH())&&(a.input=r.first)}},features:[t.qOj],decls:41,vars:21,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[1,"breadcrumb-main"],[1,"row"],[1,"col-6"],[1,"breadcrumb-title"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"body"],[1,"row","margin-2"],[1,"col-md-6"],[1,"form-label"],[1,"form-control",3,"placeholder"],["input",""],[1,"col"],[1,"table-responsive"],["mat-table","","matSort","","matSortActive","createdDate","matSortDirection","desc",1,"w-100",3,"dataSource"],["matColumnDef","action"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","createdDate"],["matColumnDef","message"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],[4,"ngIf"],["class","loading-shade",4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["type","button","class","btn btn-sm btn-success",3,"click",4,"ngIf"],["type","button",1,"btn","btn-sm","btn-success",3,"click"],[1,"las","la-eye"],["class","badge bg-success",4,"ngIf"],[1,"badge","bg-success"],["mat-header-row",""],["mat-row",""],[1,"col-sm-12","m-t-15"],[1,"loading-shade"]],template:function(n,a){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2"),t._uU(8),t.ALo(9,"translate"),t.qZA()()()()()(),t.TgZ(10,"div",4)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"label",12),t._uU(17),t.ALo(18,"translate"),t.qZA(),t._UZ(19,"input",13,14),t.ALo(21,"translate"),t.qZA()(),t.TgZ(22,"div",4)(23,"div",15)(24,"div",16)(25,"table",17),t.ynx(26,18),t.YNc(27,$,3,3,"th",19),t.YNc(28,H,2,1,"td",20),t.BQk(),t.ynx(29,21),t.YNc(30,Q,3,3,"th",19),t.YNc(31,z,3,4,"td",20),t.BQk(),t.ynx(32,22),t.YNc(33,w,3,3,"th",19),t.YNc(34,W,4,3,"td",20),t.BQk(),t.YNc(35,k,1,0,"tr",23),t.YNc(36,P,1,0,"tr",24),t.qZA(),t._UZ(37,"mat-paginator",25),t.YNc(38,X,5,3,"ng-container",26),t.qZA()()()()()()()()(),t.YNc(39,V,2,0,"div",27),t.ALo(40,"async")),2&n&&(t.xp6(8),t.Oqu(t.lcZ(9,12,"NOTIFICATIONS")),t.xp6(9),t.Oqu(t.lcZ(18,14,"SEARCH_BY_DOCUMENT_NAME_OR_MESSAGE")),t.xp6(2),t.s9C("placeholder",t.lcZ(21,16,"SEARCH_BY_DOCUMENT_NAME_OR_MESSAGE")),t.xp6(6),t.Q6J("dataSource",a.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("length",a.notificationResource.totalCount)("pageSize",a.notificationResource.pageSize)("pageSizeOptions",t.DdM(20,q)),t.xp6(1),t.Q6J("ngIf",0===a.dataSource.count),t.xp6(1),t.Q6J("ngIf",t.lcZ(40,18,a.dataSource.loading$)))},dependencies:[p.O5,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,y.Ou,g.YE,g.nU,x.NW,p.Ov,_.X$,j.M]}),e})(),canActivate:[u.a]}];let et=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.Bz.forChild(tt),f.Bz]}),e})();var it=o(3417),nt=o(4144),ot=o(455);let st=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,it.m,et,l.p0,y.Cq,ot.rP,g.JX,x.TU,nt.c]}),e})()}}]);