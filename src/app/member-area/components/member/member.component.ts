import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  name: String = '';

  constructor(private activaedRouter: ActivatedRoute, private route: ActivatedRoute) { }

  ngOnInit(): void {
/*     this.activaedRouter.queryParams.subscribe(params => {
      console.log('params:', params);
    });
 */
    this.route.params.subscribe(params => {
      console.log('Name:', params);
      this.name = params['name'];
    });
  }

}
