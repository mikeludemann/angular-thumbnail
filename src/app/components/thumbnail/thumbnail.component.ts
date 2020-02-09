import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'thumbnail',
	templateUrl: './thumbnail.component.html',
	styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() id: string;
	@Input() classname: string;
	@Input() imagename: string;
	@Input() width: string;
	@Input() height: string;
	@Input() zoomlevel: string;
	@Input() alttext: string;
	@Input() size: string;

	@ViewChild('thumb', {static: false}) el: ElementRef;

	constructor() { }

	ngOnInit() {

		this.el.nativeElement.children[0].style.width = this.width + 'px';
		this.el.nativeElement.children[0].style.height = this.height + 'px';

	}

}
