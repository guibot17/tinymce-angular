(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(module,exports){function webpackEmptyAsyncContext(req){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e})}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,module.exports=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=225},228:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Events_1=__webpack_require__(229);exports.bindHandlers=function(ctx,editor,initEvent){Events_1.validEvents.forEach(function(eventName){var eventEmitter=ctx[eventName];eventEmitter.observers.length>0&&("onInit"===eventName?ctx.ngZone.run(function(){return eventEmitter.emit({event:initEvent,editor:editor})}):editor.on(eventName.substring(2),ctx.ngZone.run(function(){return function(event){return eventEmitter.emit({event:event,editor:editor})}})))})};var unique=0;exports.uuid=function(prefix){var time=(new Date).getTime();return prefix+"_"+Math.floor(1e9*Math.random())+ ++unique+String(time)},exports.isTextarea=function(element){return void 0!==element&&"textarea"===element.tagName.toLowerCase()};var normalizePluginArray=function(plugins){return void 0===plugins||""===plugins?[]:Array.isArray(plugins)?plugins:plugins.split(" ")};exports.mergePlugins=function(initPlugins,inputPlugins){return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins))}},229:function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=__webpack_require__(33),Events=function(){function Events(){this.onBeforePaste=new core_1.EventEmitter,this.onBlur=new core_1.EventEmitter,this.onClick=new core_1.EventEmitter,this.onContextMenu=new core_1.EventEmitter,this.onCopy=new core_1.EventEmitter,this.onCut=new core_1.EventEmitter,this.onDblclick=new core_1.EventEmitter,this.onDrag=new core_1.EventEmitter,this.onDragDrop=new core_1.EventEmitter,this.onDragEnd=new core_1.EventEmitter,this.onDragGesture=new core_1.EventEmitter,this.onDragOver=new core_1.EventEmitter,this.onDrop=new core_1.EventEmitter,this.onFocus=new core_1.EventEmitter,this.onFocusIn=new core_1.EventEmitter,this.onFocusOut=new core_1.EventEmitter,this.onKeyDown=new core_1.EventEmitter,this.onKeyPress=new core_1.EventEmitter,this.onKeyUp=new core_1.EventEmitter,this.onMouseDown=new core_1.EventEmitter,this.onMouseEnter=new core_1.EventEmitter,this.onMouseLeave=new core_1.EventEmitter,this.onMouseMove=new core_1.EventEmitter,this.onMouseOut=new core_1.EventEmitter,this.onMouseOver=new core_1.EventEmitter,this.onMouseUp=new core_1.EventEmitter,this.onPaste=new core_1.EventEmitter,this.onSelectionChange=new core_1.EventEmitter,this.onActivate=new core_1.EventEmitter,this.onAddUndo=new core_1.EventEmitter,this.onBeforeAddUndo=new core_1.EventEmitter,this.onBeforeExecCommand=new core_1.EventEmitter,this.onBeforeGetContent=new core_1.EventEmitter,this.onBeforeRenderUI=new core_1.EventEmitter,this.onBeforeSetContent=new core_1.EventEmitter,this.onChange=new core_1.EventEmitter,this.onClearUndos=new core_1.EventEmitter,this.onDeactivate=new core_1.EventEmitter,this.onDirty=new core_1.EventEmitter,this.onExecCommand=new core_1.EventEmitter,this.onGetContent=new core_1.EventEmitter,this.onHide=new core_1.EventEmitter,this.onInit=new core_1.EventEmitter,this.onLoadContent=new core_1.EventEmitter,this.onNodeChange=new core_1.EventEmitter,this.onPostProcess=new core_1.EventEmitter,this.onPostRender=new core_1.EventEmitter,this.onPreInit=new core_1.EventEmitter,this.onPreProcess=new core_1.EventEmitter,this.onProgressState=new core_1.EventEmitter,this.onRedo=new core_1.EventEmitter,this.onRemove=new core_1.EventEmitter,this.onReset=new core_1.EventEmitter,this.onSaveContent=new core_1.EventEmitter,this.onSetAttrib=new core_1.EventEmitter,this.onObjectResizeStart=new core_1.EventEmitter,this.onObjectResized=new core_1.EventEmitter,this.onObjectSelected=new core_1.EventEmitter,this.onSetContent=new core_1.EventEmitter,this.onShow=new core_1.EventEmitter,this.onSubmit=new core_1.EventEmitter,this.onUndo=new core_1.EventEmitter,this.onVisualAid=new core_1.EventEmitter}var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_0,_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22,_23,_24,_25,_26,_27,_28,_29,_30,_31,_32,_33,_34,_35,_36,_37,_38;return __decorate([core_1.Output(),__metadata("design:type","function"==typeof(_a=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_a:Object)],Events.prototype,"onBeforePaste",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_b=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_b:Object)],Events.prototype,"onBlur",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_c=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_c:Object)],Events.prototype,"onClick",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_d=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_d:Object)],Events.prototype,"onContextMenu",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_e=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_e:Object)],Events.prototype,"onCopy",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_f=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_f:Object)],Events.prototype,"onCut",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_g=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_g:Object)],Events.prototype,"onDblclick",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_h=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_h:Object)],Events.prototype,"onDrag",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_j=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_j:Object)],Events.prototype,"onDragDrop",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_k=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_k:Object)],Events.prototype,"onDragEnd",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_l=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_l:Object)],Events.prototype,"onDragGesture",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_m=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_m:Object)],Events.prototype,"onDragOver",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_o=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_o:Object)],Events.prototype,"onDrop",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_p=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_p:Object)],Events.prototype,"onFocus",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_q=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_q:Object)],Events.prototype,"onFocusIn",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_r=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_r:Object)],Events.prototype,"onFocusOut",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_s=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_s:Object)],Events.prototype,"onKeyDown",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_t=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_t:Object)],Events.prototype,"onKeyPress",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_u=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_u:Object)],Events.prototype,"onKeyUp",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_v=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_v:Object)],Events.prototype,"onMouseDown",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_w=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_w:Object)],Events.prototype,"onMouseEnter",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_x=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_x:Object)],Events.prototype,"onMouseLeave",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_y=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_y:Object)],Events.prototype,"onMouseMove",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_z=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_z:Object)],Events.prototype,"onMouseOut",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_0=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_0:Object)],Events.prototype,"onMouseOver",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_1=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_1:Object)],Events.prototype,"onMouseUp",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_2=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_2:Object)],Events.prototype,"onPaste",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_3=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_3:Object)],Events.prototype,"onSelectionChange",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_4=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_4:Object)],Events.prototype,"onActivate",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_5=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_5:Object)],Events.prototype,"onAddUndo",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_6=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_6:Object)],Events.prototype,"onBeforeAddUndo",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_7=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_7:Object)],Events.prototype,"onBeforeExecCommand",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_8=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_8:Object)],Events.prototype,"onBeforeGetContent",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_9=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_9:Object)],Events.prototype,"onBeforeRenderUI",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_10=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_10:Object)],Events.prototype,"onBeforeSetContent",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_11=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_11:Object)],Events.prototype,"onChange",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_12=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_12:Object)],Events.prototype,"onClearUndos",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_13=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_13:Object)],Events.prototype,"onDeactivate",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_14=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_14:Object)],Events.prototype,"onDirty",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_15=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_15:Object)],Events.prototype,"onExecCommand",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_16=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_16:Object)],Events.prototype,"onGetContent",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_17=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_17:Object)],Events.prototype,"onHide",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_18=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_18:Object)],Events.prototype,"onInit",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_19=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_19:Object)],Events.prototype,"onLoadContent",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_20=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_20:Object)],Events.prototype,"onNodeChange",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_21=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_21:Object)],Events.prototype,"onPostProcess",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_22=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_22:Object)],Events.prototype,"onPostRender",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_23=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_23:Object)],Events.prototype,"onPreInit",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_24=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_24:Object)],Events.prototype,"onPreProcess",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_25=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_25:Object)],Events.prototype,"onProgressState",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_26=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_26:Object)],Events.prototype,"onRedo",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_27=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_27:Object)],Events.prototype,"onRemove",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_28=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_28:Object)],Events.prototype,"onReset",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_29=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_29:Object)],Events.prototype,"onSaveContent",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_30=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_30:Object)],Events.prototype,"onSetAttrib",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_31=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_31:Object)],Events.prototype,"onObjectResizeStart",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_32=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_32:Object)],Events.prototype,"onObjectResized",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_33=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_33:Object)],Events.prototype,"onObjectSelected",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_34=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_34:Object)],Events.prototype,"onSetContent",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_35=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_35:Object)],Events.prototype,"onShow",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_36=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_36:Object)],Events.prototype,"onSubmit",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_37=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_37:Object)],Events.prototype,"onUndo",void 0),__decorate([core_1.Output(),__metadata("design:type","function"==typeof(_38=void 0!==core_1.EventEmitter&&core_1.EventEmitter)?_38:Object)],Events.prototype,"onVisualAid",void 0),Events}();exports.Events=Events,exports.validEvents=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"]},231:function(module,exports,__webpack_require__){__webpack_require__(232),__webpack_require__(312),module.exports=__webpack_require__(313)},313:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(105),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(230);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes),Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(517)},module)}.call(this,__webpack_require__(314)(module))},517:function(module,exports,__webpack_require__){"use strict";(function(module){var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};Object.defineProperty(exports,"__esModule",{value:!0});var angular_1=__webpack_require__(105),editor_component_1=__webpack_require__(518),core_1=__webpack_require__(33),DisablingTestComponent=function(){function DisablingTestComponent(){var _this=this;this.isDisabled=!1,this.toggleDisabled=function(){return _this.isDisabled=!_this.isDisabled}}return DisablingTestComponent=__decorate([core_1.Component({selector:"testing-disabling",template:'\n    <editor [disabled]="isDisabled" initialValue="<p>hello world</p>"></editor>\n    <button (click)="toggleDisabled()">{{ isDisabled ? \'enable\' : \'disable\' }}</button>\n  '})],DisablingTestComponent)}();angular_1.storiesOf("Editor",module).addDecorator(angular_1.moduleMetadata({declarations:[editor_component_1.EditorComponent]})).add("with some emoji initialValue",function(){return{component:editor_component_1.EditorComponent,props:{initialValue:"😀 😎 👍 💯"}}}).add("with cloudChannel set to 5-dev",function(){return{component:editor_component_1.EditorComponent,props:{cloudChannel:"5-dev"}}},{notes:"Make sure to do a full refresh of this page to load Tinymce 5."}).add("disabling",function(){return{component:DisablingTestComponent}})}).call(this,__webpack_require__(168)(module))},518:function(module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)},__param=this&&this.__param||function(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=__webpack_require__(33),forms_1=__webpack_require__(226),ScriptLoader=__webpack_require__(519),Utils_1=__webpack_require__(228),TinyMCE_1=__webpack_require__(520),Events_1=__webpack_require__(229),common_1=__webpack_require__(145),scriptState=ScriptLoader.create(),EDITOR_COMPONENT_VALUE_ACCESSOR={provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return EditorComponent}),multi:!0},EditorComponent=function(_super){function EditorComponent(elementRef,ngZone,platformId){var _this=_super.call(this)||this;return _this.platformId=platformId,_this.element=void 0,_this.cloudChannel="5",_this.apiKey="",_this.id="",_this.toolbar=null,_this.onTouchedCallback=function(){},_this.onChangeCallback=function(x){},_this.elementRef=elementRef,_this.ngZone=ngZone,_this.initialise=_this.initialise.bind(_this),_this}var _b,_c,_d;return __extends(EditorComponent,_super),Object.defineProperty(EditorComponent.prototype,"disabled",{get:function(){return this._disabled},set:function(val){this._disabled=val,this.editor&&this.editor.initialized&&this.editor.setMode(val?"readonly":"design")},enumerable:!0,configurable:!0}),EditorComponent.prototype.writeValue=function(value){this.initialValue=value||this.initialValue,value=value||"",this.editor&&this.editor.initialized&&"string"==typeof value&&this.editor.setContent(value)},EditorComponent.prototype.registerOnChange=function(fn){this.onChangeCallback=fn},EditorComponent.prototype.registerOnTouched=function(fn){this.onTouchedCallback=fn},EditorComponent.prototype.setDisabledState=function(isDisabled){this.editor?this.editor.setMode(isDisabled?"readonly":"design"):isDisabled&&(this.init=__assign({},this.init,{readonly:!0}))},EditorComponent.prototype.ngAfterViewInit=function(){if(common_1.isPlatformBrowser(this.platformId))if(this.id=this.id||Utils_1.uuid("tiny-angular"),this.inline=void 0!==this.inline?"boolean"!=typeof this.inline||this.inline:this.init&&this.init.inline,this.createElement(),null!==TinyMCE_1.getTinymce())this.initialise();else if(this.element&&this.element.ownerDocument){var doc=this.element.ownerDocument,channel=this.cloudChannel,apiKey=this.apiKey;ScriptLoader.load(scriptState,doc,"https://cloud.tinymce.com/"+channel+"/tinymce.min.js?apiKey="+apiKey,this.initialise)}},EditorComponent.prototype.ngOnDestroy=function(){null!==TinyMCE_1.getTinymce()&&TinyMCE_1.getTinymce().remove(this.editor)},EditorComponent.prototype.createElement=function(){var tagName="string"==typeof this.tagName?this.tagName:"div";this.element=document.createElement(this.inline?tagName:"textarea"),this.element&&(this.element.id=this.id,Utils_1.isTextarea(this.element)&&(this.element.style.visibility="hidden"),this.elementRef.nativeElement.appendChild(this.element))},EditorComponent.prototype.initialise=function(){var _this=this,finalInit=__assign({},this.init,{target:this.element,inline:this.inline,readonly:this.disabled,plugins:Utils_1.mergePlugins(this.init&&this.init.plugins,this.plugins),toolbar:this.toolbar||this.init&&this.init.toolbar,setup:function(editor){_this.editor=editor,editor.on("init",function(e){_this.initEditor(e,editor)}),_this.init&&"function"==typeof _this.init.setup&&_this.init.setup(editor)}});Utils_1.isTextarea(this.element)&&(this.element.style.visibility=""),this.ngZone.runOutsideAngular(function(){TinyMCE_1.getTinymce().init(finalInit)})},EditorComponent.prototype.initEditor=function(initEvent,editor){var _this=this;"string"==typeof this.initialValue&&this.ngZone.run(function(){return editor.setContent(_this.initialValue)}),editor.on("blur",function(){return _this.ngZone.run(function(){return _this.onTouchedCallback()})}),editor.on("setcontent",function(_a){var content=_a.content;return"html"===_a.format&&content&&_this.ngZone.run(function(){return _this.onChangeCallback(content)})}),editor.on("change keyup undo redo",function(){return _this.ngZone.run(function(){return _this.onChangeCallback(editor.getContent())})}),Utils_1.bindHandlers(this,editor,initEvent)},__decorate([core_1.Input(),__metadata("design:type",Object)],EditorComponent.prototype,"cloudChannel",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],EditorComponent.prototype,"apiKey",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],EditorComponent.prototype,"init",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],EditorComponent.prototype,"id",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],EditorComponent.prototype,"initialValue",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],EditorComponent.prototype,"inline",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],EditorComponent.prototype,"tagName",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],EditorComponent.prototype,"plugins",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],EditorComponent.prototype,"toolbar",void 0),__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],EditorComponent.prototype,"disabled",null),EditorComponent=__decorate([core_1.Component({selector:"editor",template:"<ng-template></ng-template>",styles:[":host { display: block; }"],providers:[EDITOR_COMPONENT_VALUE_ACCESSOR]}),__param(2,core_1.Inject(core_1.PLATFORM_ID)),__metadata("design:paramtypes",["function"==typeof(_b=void 0!==core_1.ElementRef&&core_1.ElementRef)?_b:Object,"function"==typeof(_c=void 0!==core_1.NgZone&&core_1.NgZone)?_c:Object,"function"==typeof(_d="undefined"!=typeof Object&&Object)?_d:Object])],EditorComponent)}(Events_1.Events);exports.EditorComponent=EditorComponent},519:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Utils_1=__webpack_require__(228);exports.create=function(){return{listeners:[],scriptId:Utils_1.uuid("tiny-script"),scriptLoaded:!1}},exports.load=function(state,doc,url,callback){state.scriptLoaded?callback():(state.listeners.push(callback),doc.getElementById(state.scriptId)||function(scriptId,doc,url,callback){var scriptTag=doc.createElement("script");scriptTag.type="application/javascript",scriptTag.id=scriptId,scriptTag.addEventListener("load",callback),scriptTag.src=url,doc.head&&doc.head.appendChild(scriptTag)}(state.scriptId,doc,url,function(){state.listeners.forEach(function(fn){return fn()}),state.scriptLoaded=!0}))}},520:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.getTinymce=function(){var w="undefined"!=typeof window?window:void 0;return w&&w.tinymce?w.tinymce:null}}},[[231,1,2]]]);
//# sourceMappingURL=main.85e30e7f11581c92d753.bundle.js.map