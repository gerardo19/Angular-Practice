import { Directive, ElementRef, HostListener, Input, DebugElement, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
    selector: '[appDynamicMenu]'
})
export class DynamicMenuDirective implements OnInit {

    constructor(private element: ElementRef) { }

    ngOnInit() {
        this.addElements();
    }

    @Input('appDynamicMenu') roleSelected: string;

    menu: any[] = [
        {
            name: 'Read 01',
            roles: ['SA', 'ADMIN', 'VIEWER']
        },
        {
            name: 'Write 01',
            roles: ['SA', 'ADMIN']
        },
        {
            name: 'Delete 01',
            roles: ['SA']
        }
    ];

    private addElements() {
        let content = "";
        let natEl = this.element.nativeElement;

        natEl.style.backgroundColor = '#373F72';
        natEl.style.color = "white";
        natEl.style.listStyleType = "none";

        for (const data of this.menu) {
            if (data.roles.includes(this.roleSelected)) {
                content += `<li class="nav-item"><a class="nav-link">${data.name}</a></li>`
            }
        }
        
        natEl.innerHTML = content;
    }
}