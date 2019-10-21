/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxResponsivePanelComponent implements OnChanges {
    attrAnimationDirection: string;
    attrAnimationHideDelay: number | string;
    attrAnimationShowDelay: number | string;
    attrAnimationType: string;
    attrAutoClose: boolean;
    attrCollapseBreakpoint: number;
    attrCollapseWidth: number;
    attrInitContent: () => void;
    attrTheme: string;
    attrToggleButton: string | any;
    attrToggleButtonSize: number | string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxResponsivePanel;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    animationDirection(arg?: string): string;
    animationHideDelay(arg?: number | string): number | string;
    animationShowDelay(arg?: number | string): number | string;
    animationType(arg?: string): string;
    autoClose(arg?: boolean): boolean;
    collapseBreakpoint(arg?: number): number;
    collapseWidth(arg?: number): number;
    height(arg?: string | number): string | number;
    initContent(arg?: () => void): () => void;
    theme(arg?: string): string;
    toggleButton(arg?: string | any): string | any;
    toggleButtonSize(arg?: number | string): number | string;
    width(arg?: string | number): string | number;
    close(): void;
    destroy(): void;
    isCollapsed(): boolean;
    isOpened(): boolean;
    open(): void;
    refresh(): void;
    render(): void;
    onClose: EventEmitter<any>;
    onCollapse: EventEmitter<any>;
    onExpand: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    __wireEvents__(): void;
}