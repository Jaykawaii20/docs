"use strict";(self.webpackChunkdocument_management=self.webpackChunkdocument_management||[]).push([[522],{2852:(T,h,c)=>{c.d(h,{c:()=>d});var m=c(6941),u=c(4004),A=c(4650);let d=(()=>{class p extends m.c8{constructor(_){super("Action",_)}getActionByPage(_){return this.getAll().pipe((0,u.U)(v=>v.filter(x=>x.pageId==_)))}}return p.\u0275fac=function(_){return new(_||p)(A.LFG(m.yV))},p.\u0275prov=A.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},8853:(T,h,c)=>{c.d(h,{P:()=>A});var m=c(6941),u=c(4650);let A=(()=>{class d extends m.c8{constructor(t){super("Page",t)}}return d.\u0275fac=function(t){return new(t||d)(u.LFG(m.yV))},d.\u0275prov=u.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},3522:(T,h,c)=>{c.r(h),c.d(h,{PageModule:()=>vt});var m=c(6895),u=c(8988),A=c(319),d=c(2676),p=c(8505),t=c(4650),_=c(8853),v=c(7185),x=c(6107),r=c(4006),Z=c(5412),P=c(9383);function U(e,i){1&e&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"PAGE_NAME_IS_REQUIRED")," "))}function S(e,i){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,U,3,3,"div",23),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.pageForm.get("name").touched&&(null==n.pageForm.get("name").errors?null:n.pageForm.get("name").errors.required))}}function N(e,i){1&e&&(t.TgZ(0,"div",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ORDER_IS_REQUIRED")," "))}function D(e,i){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,N,3,3,"div",23),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.pageForm.get("order").touched&&(null==n.pageForm.get("order").errors?null:n.pageForm.get("order").errors.required))}}function Y(e,i){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",25),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.savePage())}),t._UZ(2,"i",26),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.BQk()}2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"SAVE"),""))}function M(e,i){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",25),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.savePage())}),t._UZ(2,"i",26),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.BQk()}2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"SAVE"),""))}let y=(()=>{class e extends d.H{constructor(n,o,a,s,l,C){super(),this.dialogRef=n,this.data=o,this.pageService=a,this.toastrServoce=s,this.fb=l,this.translationService=C,this.isEdit=!1}ngOnInit(){this.createForm(),this.data.id&&(this.pageForm.patchValue(this.data),this.isEdit=!0)}createForm(){this.pageForm=this.fb.group({name:["",r.kI.required],order:["",[r.kI.required]]})}onNoClick(){this.dialogRef.close()}savePage(){if(!this.pageForm.valid)return void this.pageForm.markAllAsTouched();const n=this.pageForm.value;this.data.id?(n.id=this.data.id,this.pageService.update(n).subscribe(o=>{this.toastrServoce.success(this.translationService.getValue("PAGE_UPDATED_SUCCESSFULLY")),this.dialogRef.close()})):this.pageService.add(n).subscribe(()=>{this.toastrServoce.success(this.translationService.getValue("PAGE_ADDED_SUCCESSFULLY")),this.dialogRef.close()})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Z.so),t.Y36(Z.WI),t.Y36(_.P),t.Y36(v._W),t.Y36(r.QS),t.Y36(x.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-manage-page"]],features:[t.qOj],decls:37,vars:17,consts:[[1,"modal-content1"],[1,"modal-header"],[1,"d-flex","w-100","align-items-center","justify-content-between"],[1,"col-md-8","col"],[1,"modal-title"],[1,"col-sm-auto","ml-auto","col-auto"],["type","button","data-dismiss","modal",1,"close",3,"click"],[1,"fas","fa-times"],[3,"formGroup"],[1,"modal-body"],[1,"row"],[1,"col-md-12"],[1,"form-group"],["for","pageName",1,"text-danger"],["formControlName","name","type","text","id","pageName",1,"form-control"],[4,"ngIf"],["for","order",1,"text-danger"],["formControlName","order","type","number","id","order",1,"form-control"],[1,"modal-footer"],[1,"form-row","w-100","justify-content-end"],[1,"col-md-auto","col-auto"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-times-circle"],["class","text-danger",4,"ngIf"],[1,"text-danger"],["cdkFocusInitial","",1,"btn","btn-success","btn-sm","m-right-10",3,"click"],[1,"fas","fa-save"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"div",5)(8,"button",6),t.NdJ("click",function(){return o.onNoClick()}),t._UZ(9,"i",7),t.qZA()()()(),t.TgZ(10,"form",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12)(15,"label",13),t._uU(16),t.ALo(17,"translate"),t.qZA(),t._UZ(18,"input",14),t.YNc(19,S,2,1,"div",15),t.qZA()()(),t.TgZ(20,"div",10)(21,"div",11)(22,"div",12)(23,"label",16),t._uU(24),t.ALo(25,"translate"),t.qZA(),t._UZ(26,"input",17),t.YNc(27,D,2,1,"div",15),t.qZA()()()(),t.TgZ(28,"div",18)(29,"div",19)(30,"div",20),t.YNc(31,Y,5,3,"ng-container",15),t.YNc(32,M,5,3,"ng-container",15),t.TgZ(33,"button",21),t.NdJ("click",function(){return o.onNoClick()}),t._UZ(34,"i",22),t._uU(35),t.ALo(36,"translate"),t.qZA()()()()()()),2&n&&(t.xp6(5),t.hij(" ",t.lcZ(6,9,"PAGE")," "),t.xp6(5),t.Q6J("formGroup",o.pageForm),t.xp6(6),t.hij("",t.lcZ(17,11,"NAME")," *"),t.xp6(3),t.Q6J("ngIf",o.pageForm.get("name").touched&&o.pageForm.get("name").errors),t.xp6(5),t.hij(" ",t.lcZ(25,13,"ORDER_NUMBER"),"*"),t.xp6(3),t.Q6J("ngIf",o.pageForm.get("order").touched&&o.pageForm.get("order").errors),t.xp6(4),t.Q6J("ngIf",!o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isEdit),t.xp6(3),t.hij(" ",t.lcZ(36,15,"CANCEL"),""))},dependencies:[m.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,P.X$]}),e})();var E=c(2852);function F(e,i){1&e&&(t.TgZ(0,"div",26),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ACTION_NAME_IS_REQUIRED ")," "))}function I(e,i){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,F,3,3,"div",25),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.actionForm.get("name").touched&&(null==n.actionForm.get("name").errors?null:n.actionForm.get("name").errors.required))}}function w(e,i){1&e&&(t.TgZ(0,"div",26),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ORDER_IS_REQUIRED")," "))}function R(e,i){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,w,3,3,"div",25),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.actionForm.get("order").touched&&(null==n.actionForm.get("order").errors?null:n.actionForm.get("order").errors.required))}}function k(e,i){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",27),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.saveAction())}),t._UZ(2,"i",28),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.BQk()}2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"SAVE")," "))}function O(e,i){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",27),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.saveAction())}),t._UZ(2,"i",28),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.BQk()}2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,"SAVE")," "))}let j=(()=>{class e extends d.H{constructor(n,o,a,s,l,C){super(),this.dialogRef=n,this.data=o,this.actionService=a,this.toastrService=s,this.fb=l,this.translationService=C,this.isEdit=!1,this.isDisabled=!0}ngOnInit(){this.createForm(),this.data.id&&(this.actionForm.patchValue(this.data),this.isEdit=!0)}createForm(){this.actionForm=this.fb.group({pagename:[{value:this.data.pagename,disabled:this.isDisabled}],name:["",r.kI.required],order:["",[r.kI.required]]})}onCancel(){this.dialogRef.close()}saveAction(){if(!this.actionForm.valid)return void this.actionForm.markAllAsTouched();const n=this.actionForm.value;n.pageId=this.data.pageId,this.data.id?(n.id=this.data.id,this.actionService.update(n).subscribe(()=>{this.toastrService.success(this.translationService.getValue("ACTION_UPDATED_SUCCESSFULLY")),this.dialogRef.close(this.data)})):this.actionService.add(n).subscribe(()=>{this.toastrService.success(this.translationService.getValue("ACTION_SAVED_SUCCESSFULLY")),this.dialogRef.close(this.data)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Z.so),t.Y36(Z.WI),t.Y36(E.c),t.Y36(v._W),t.Y36(r.QS),t.Y36(x.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-manage-action"]],features:[t.qOj],decls:45,vars:20,consts:[[1,"modal-content1"],[1,"modal-header"],[1,"d-flex","w-100","align-items-center","justify-content-between"],[1,"col-md-10","col"],[1,"modal-title"],[1,"col-sm-auto","col-auto","ml-auto"],["type","button","data-dismiss","modal",1,"close",3,"click"],[1,"fas","fa-times"],[3,"formGroup"],[1,"modal-body"],[1,"row"],[1,"col-md-12"],[1,"form-group"],[1,"input-group"],["formControlName","pagename","type","text","id","actionName",1,"form-control"],["for","actionName",1,"text-danger"],["formControlName","name","type","text","id","actionName",1,"form-control"],[4,"ngIf"],["for","order",1,"text-danger"],["formControlName","order","type","number","id","order",1,"form-control"],[1,"modal-footer"],[1,"form-row","w-100","justify-content-end"],[1,"col-md-auto","col-auto"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-times-circle"],["class","text-danger",4,"ngIf"],[1,"text-danger"],["cdkFocusInitial","",1,"btn","btn-success","btn-sm","m-right-10",3,"click"],[1,"fas","fa-save"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"div",5)(8,"button",6),t.NdJ("click",function(){return o.onCancel()}),t._UZ(9,"i",7),t.qZA()()()(),t.TgZ(10,"form",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12)(15,"label"),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"div",13),t._UZ(19,"input",14),t.qZA()()()(),t.TgZ(20,"div",10)(21,"div",11)(22,"div",12)(23,"label",15),t._uU(24),t.ALo(25,"translate"),t.qZA(),t._UZ(26,"input",16),t.YNc(27,I,2,1,"div",17),t.qZA()()(),t.TgZ(28,"div",10)(29,"div",11)(30,"div",12)(31,"label",18),t._uU(32),t.ALo(33,"translate"),t.qZA(),t._UZ(34,"input",19),t.YNc(35,R,2,1,"div",17),t.qZA()()()(),t.TgZ(36,"div",20)(37,"div",21)(38,"div",22),t.YNc(39,k,5,3,"ng-container",17),t.YNc(40,O,5,3,"ng-container",17),t.TgZ(41,"button",23),t.NdJ("click",function(){return o.onCancel()}),t._UZ(42,"i",24),t._uU(43),t.ALo(44,"translate"),t.qZA()()()()()()),2&n&&(t.xp6(5),t.hij(" ",t.lcZ(6,10,"MANAGE_ACTION")," "),t.xp6(5),t.Q6J("formGroup",o.actionForm),t.xp6(6),t.Oqu(t.lcZ(17,12,"PAGE")),t.xp6(8),t.hij("",t.lcZ(25,14,"NAME")," *"),t.xp6(3),t.Q6J("ngIf",o.actionForm.get("name").touched&&o.actionForm.get("name").errors),t.xp6(5),t.hij("",t.lcZ(33,16,"ORDER_NUMBER")," *"),t.xp6(3),t.Q6J("ngIf",o.actionForm.get("order").touched&&o.actionForm.get("order").errors),t.xp6(4),t.Q6J("ngIf",!o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isEdit),t.xp6(3),t.hij(" ",t.lcZ(44,18,"CANCEL")," "))},dependencies:[m.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,P.X$]}),e})();var f=c(7340),J=c(5485),g=c(671),b=c(1572),L=c(7392);function Q(e,i){1&e&&(t.TgZ(0,"div",22),t._UZ(1,"mat-spinner"),t.qZA())}function q(e,i){1&e&&t._UZ(0,"th",23)}function B(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"mat-icon",26),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit,s=t.oxw();return t.KtG(s.toggleRow(a))}),t._uU(1," chevron_right"),t.qZA()}}function H(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"mat-icon",26),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit,s=t.oxw();return t.KtG(s.toggleRow(a))}),t._uU(1," expand_more"),t.qZA()}}function $(e,i){if(1&e&&(t.TgZ(0,"td",24),t.YNc(1,B,2,0,"mat-icon",25),t.YNc(2,H,2,0,"mat-icon",25),t.qZA()),2&e){const n=i.$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",n!=o.expandedElement),t.xp6(1),t.Q6J("ngIf",n==o.expandedElement)}}function G(e,i){1&e&&(t.TgZ(0,"th",27),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"ACTION")," "))}function V(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"td",28)(1,"button",29),t.NdJ("click",function(){const s=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.managePage(s))}),t._UZ(2,"i",30),t.TgZ(3,"span",31),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"button",32),t.NdJ("click",function(){const s=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.deletePage(s))}),t._UZ(7,"i",33),t.TgZ(8,"span",31),t._uU(9),t.ALo(10,"translate"),t.qZA()()()}2&e&&(t.xp6(4),t.hij(" ",t.lcZ(5,2,"EDIT"),""),t.xp6(5),t.hij(" ",t.lcZ(10,4,"DELETE"),""))}function K(e,i){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"NAME")," "))}function W(e,i){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function z(e,i){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ORDER")," "))}function X(e,i){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.order," ")}}function tt(e,i){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij("",t.lcZ(2,1,"ACTION")," "))}function et(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"td",24)(1,"button",29),t.NdJ("click",function(){const s=t.CHM(n).$implicit,l=t.oxw(2);return t.KtG(l.manageAction(s))}),t._UZ(2,"i",38),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",32),t.NdJ("click",function(){const s=t.CHM(n).$implicit,l=t.oxw(2);return t.KtG(l.deleteAction(s))}),t._UZ(6,"i",39),t._uU(7),t.ALo(8,"translate"),t.qZA()()}2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,2,"EDIT")," "),t.xp6(4),t.hij(" ",t.lcZ(8,4,"DELETE")," "))}function nt(e,i){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"NAME")," "))}function ot(e,i){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function it(e,i){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ORDER")," "))}function at(e,i){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.order," ")}}function ct(e,i){1&e&&(t.TgZ(0,"th",23),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"CODE")," "))}function st(e,i){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.code," ")}}function rt(e,i){1&e&&t._UZ(0,"tr",40)}function lt(e,i){1&e&&t._UZ(0,"tr",41)}function dt(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"td",24)(1,"div",34)(2,"div",35)(3,"div",0)(4,"div",1)(5,"div",2)(6,"h2"),t._uU(7),t.ALo(8,"translate"),t.qZA()()(),t.TgZ(9,"div",1)(10,"button",29),t.NdJ("click",function(){const s=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.addAction(s))}),t._UZ(11,"i",5),t._uU(12),t.ALo(13,"translate"),t.qZA()()(),t.TgZ(14,"table",36),t.ynx(15,13),t.YNc(16,tt,3,3,"th",11),t.YNc(17,et,9,6,"td",12),t.BQk(),t.ynx(18,16),t.YNc(19,nt,3,3,"th",11),t.YNc(20,ot,2,1,"td",12),t.BQk(),t.ynx(21,17),t.YNc(22,it,3,3,"th",11),t.YNc(23,at,2,1,"td",12),t.BQk(),t.ynx(24,37),t.YNc(25,ct,3,3,"th",11),t.YNc(26,st,2,1,"td",12),t.BQk(),t.YNc(27,rt,1,0,"tr",19),t.YNc(28,lt,1,0,"tr",20),t.qZA()()()()}if(2&e){const n=i.$implicit,o=t.oxw();t.uIk("colspan",o.displayedColumns.length),t.xp6(1),t.Q6J("@detailExpand",n===o.expandedElement?"expanded":"collapsed"),t.xp6(6),t.hij(" ",t.lcZ(8,8,"ACTION"),""),t.xp6(5),t.hij(" ",t.lcZ(13,10,"ADD_ACTION")," "),t.xp6(2),t.Q6J("dataSource",o.subActions),t.xp6(13),t.Q6J("matHeaderRowDef",o.subActionColumnToDisplay)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.subActionColumnToDisplay)}}function mt(e,i){1&e&&t._UZ(0,"tr",40)}function gt(e,i){1&e&&t._UZ(0,"tr",41)}function pt(e,i){1&e&&t._UZ(0,"tr",42)}const _t=function(){return["expandedDetail"]};let ut=(()=>{class e extends d.H{constructor(n,o,a,s,l,C){super(),this.dialog=n,this.commonDialogService=o,this.actionService=a,this.cd=s,this.toastrServoce=l,this.translationService=C,this.deletePageHandler=new t.vpe,this.displayedColumns=["subaction","action","name","order"],this.subActionColumnToDisplay=["action","name","order","code"],this.subActions=[]}ngOnInit(){}toggleRow(n){this.subActions=[],n&&this.actionService.getActionByPage(n.id).subscribe(o=>{this.subActions=o}),this.expandedElement=this.expandedElement===n?null:n,this.cd.detectChanges()}deletePage(n){this.sub$.sink=this.commonDialogService.deleteConformationDialog(this.translationService.getValue("ARE_YOU_SURE_YOU_WANT_TO_DELETE"),n.name).subscribe(o=>{o&&this.deletePageHandler.emit(n.id)})}manageAction(n){const o=this.dialog.open(j,{width:"350px",data:Object.assign({},n,{pageId:this.expandedElement.id},{pagename:this.expandedElement.name})});this.sub$.sink=o.afterClosed().subscribe(a=>{a&&this.actionService.getActionByPage(this.expandedElement.id).subscribe(s=>{this.subActions=s})})}deleteAction(n){this.sub$.sink=this.commonDialogService.deleteConformationDialog(this.translationService.getValue("ARE_YOU_SURE_YOU_WANT_TO_DELETE"),n.name).subscribe(o=>{o&&(this.sub$.sink=this.actionService.delete(n.id).subscribe(()=>{this.toastrServoce.success(this.translationService.getValue("ACTION_DELETED_SUCCESSFULLY")),this.actionService.getActionByPage(this.expandedElement.id).subscribe(a=>{this.subActions=a})}))})}managePage(n){this.dialog.open(y,{width:"350px",data:Object.assign({},n)})}addAction(n){this.manageAction({id:"",name:"",code:""})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Z.uw),t.Y36(J.V),t.Y36(E.c),t.Y36(t.sBO),t.Y36(v._W),t.Y36(x.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-page-list-presentation"]],inputs:{pages:"pages",loading:"loading"},outputs:{deletePageHandler:"deletePageHandler"},features:[t.qOj],decls:33,vars:13,consts:[[1,"row","mb-3","align-items-center","justify-content-between"],[1,"col-md-auto","col-sm-auto"],[1,"section-title"],[1,"widget-title"],[1,"btn","btn-success","btn-sm","m-right-10",3,"click"],[1,"fas","fa-plus"],["class","loading-shade",4,"ngIf"],[1,"mat-elevation-z8"],[1,"table-container"],["mat-table","","multiTemplateDataRows","",1,"mat-elevation-z8","table",3,"dataSource"],["matColumnDef","subaction"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","action"],["style","width:30%","mat-header-cell","",4,"matHeaderCellDef"],["style","width:30%","mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","order"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-row","","class","example-detail-row",4,"matRowDef","matRowDefColumns"],[1,"loading-shade"],["mat-header-cell",""],["mat-cell",""],["class","cursor-pointer",3,"click",4,"ngIf"],[1,"cursor-pointer",3,"click"],["mat-header-cell","",2,"width","30%"],["mat-cell","",2,"width","30%"],["type","button",1,"btn","btn-success","btn-sm","m-right-10",3,"click"],[1,"fas","fa-pencil-alt"],[1,"d-none","d-sm-inline"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-trash-alt"],[1,"element-detail"],[1,"inner-table","mat-elevation-z8"],["mat-table","","multiTemplateDataRows","",1,"table",3,"dataSource"],["matColumnDef","code"],[1,"fas","fa-pen"],[1,"fas","fa-trash"],["mat-header-row",""],["mat-row",""],["mat-row","",1,"example-detail-row"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4),t.ALo(5,"translate"),t.qZA()()(),t.TgZ(6,"div",1)(7,"h4",3)(8,"button",4),t.NdJ("click",function(){return o.managePage(null)}),t._UZ(9,"i",5),t._uU(10),t.ALo(11,"translate"),t.qZA()()()(),t.YNc(12,Q,2,0,"div",6),t.TgZ(13,"div",7)(14,"div",8)(15,"table",9),t.ynx(16,10),t.YNc(17,q,1,0,"th",11),t.YNc(18,$,3,2,"td",12),t.BQk(),t.ynx(19,13),t.YNc(20,G,3,3,"th",14),t.YNc(21,V,11,6,"td",15),t.BQk(),t.ynx(22,16),t.YNc(23,K,3,3,"th",11),t.YNc(24,W,2,1,"td",12),t.BQk(),t.ynx(25,17),t.YNc(26,z,3,3,"th",11),t.YNc(27,X,2,1,"td",12),t.BQk(),t.ynx(28,18),t.YNc(29,dt,29,12,"td",12),t.BQk(),t.YNc(30,mt,1,0,"tr",19),t.YNc(31,gt,1,0,"tr",20),t.YNc(32,pt,1,0,"tr",21),t.qZA()()()),2&n&&(t.xp6(4),t.Oqu(t.lcZ(5,8,"PAGES")),t.xp6(6),t.hij(" ",t.lcZ(11,10,"ADD_PAGE")," "),t.xp6(2),t.Q6J("ngIf",!o.loading),t.xp6(3),t.Q6J("dataSource",o.pages),t.xp6(15),t.Q6J("matHeaderRowDef",o.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(12,_t)))},dependencies:[m.O5,g.BZ,g.fO,g.as,g.w1,g.Dz,g.nj,g.ge,g.ev,g.XQ,g.Gk,b.Ou,L.Hw,P.X$],styles:["tr.example-detail-row[_ngcontent-%COMP%]{height:0!important}.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.example-element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex}.inner-table[_ngcontent-%COMP%]{margin:1em;padding:1em;width:100%!important}"],data:{animation:[(0,f.X$)("detailExpand",[(0,f.SB)("collapsed",(0,f.oB)({height:"0px",minHeight:"0",display:"none"})),(0,f.SB)("expanded",(0,f.oB)({height:"*"})),(0,f.eR)("expanded <=> collapsed",(0,f.jt)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),e})();const ft=[{path:"",component:(()=>{class e extends d.H{constructor(n,o,a){super(),this.pageService=n,this.toastrServoce=o,this.translationService=a,this.displayedColumns=["action","name"]}ngOnInit(){this.loading$=this.pageService.loaded$.pipe((0,p.b)(n=>{n||this.getPages()})),this.pages$=this.pageService.entities$}deletePage(n){this.sub$.sink=this.pageService.delete(n).subscribe(()=>{this.toastrServoce.success(this.translationService.getValue("PAGE_DELETED_SUCCESSFULLY"))})}getPages(){this.pageService.getAll()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_.P),t.Y36(v._W),t.Y36(x.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-page-list"]],features:[t.qOj],decls:3,vars:6,consts:[[3,"pages","loading","deletePageHandler"]],template:function(n,o){1&n&&(t.TgZ(0,"app-page-list-presentation",0),t.NdJ("deletePageHandler",function(s){return o.deletePage(s)}),t.ALo(1,"async"),t.ALo(2,"async"),t.qZA()),2&n&&t.Q6J("pages",t.lcZ(1,2,o.pages$))("loading",t.lcZ(2,4,o.loading$))},dependencies:[ut,m.Ov]}),e})(),canActivate:[A.a]}];let ht=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(ft),u.Bz]}),e})();var At=c(3417);let vt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,r.u5,ht,g.p0,b.Cq,Z.Is,At.m,r.UX,L.Ps]}),e})()}}]);