import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdockpanel';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxDockPanelComponent = class jqxDockPanelComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'lastchildfill', 'width'];
        // jqxDockPanelComponent events
        this.onLayout = new EventEmitter();
        this.elementRef = containerElement;
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                let areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDockPanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDockPanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDockPanel(this.properties[i])) {
                        this.host.jqxDockPanel(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    }
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    createComponent(options) {
        if (this.host) {
            return;
        }
        if (options) {
            JQXLite.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = JQXLite(this.elementRef.nativeElement.firstChild);
        this.moveClasses(this.elementRef.nativeElement, this.host[0]);
        this.moveStyles(this.elementRef.nativeElement, this.host[0]);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockPanel', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxDockPanel('setOptions', options);
    }
    // jqxDockPanelComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDockPanel('disabled', arg);
        }
        else {
            return this.host.jqxDockPanel('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDockPanel('height', arg);
        }
        else {
            return this.host.jqxDockPanel('height');
        }
    }
    lastchildfill(arg) {
        if (arg !== undefined) {
            this.host.jqxDockPanel('lastchildfill', arg);
        }
        else {
            return this.host.jqxDockPanel('lastchildfill');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDockPanel('width', arg);
        }
        else {
            return this.host.jqxDockPanel('width');
        }
    }
    // jqxDockPanelComponent functions
    refresh() {
        this.host.jqxDockPanel('refresh');
    }
    __wireEvents__() {
        this.host.on('layout', (eventData) => { this.onLayout.emit(eventData); });
    }
}; //jqxDockPanelComponent
jqxDockPanelComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxDockPanelComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('lastchildfill'),
    tslib_1.__metadata("design:type", Boolean)
], jqxDockPanelComponent.prototype, "attrLastchildfill", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxDockPanelComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxDockPanelComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxDockPanelComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxDockPanelComponent.prototype, "onLayout", void 0);
jqxDockPanelComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxDockPanel',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxDockPanelComponent);
export { jqxDockPanelComponent };
