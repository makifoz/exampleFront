import { Component, OnInit,ViewChild } from '@angular/core';
import {Page, PageableListService} from './../pageable-list.service';
import {MatPaginator, MatPaginatorModule, } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';



export class Dummy{
  name: String;
  surname : String;
  number : Number;
  age : Number;

}

export class MyPaninator extends MatPaginator{
  nextPage(){

  }
   
  previousPage(){

  }
  _changePageSize(pageSize: number){
        
  }
   

}



@Component({
  selector: 'app-pageable-list',
  templateUrl: './pageable-list.component.html',
  styleUrls: ['./pageable-list.component.css']
})
export class PageableListComponent implements OnInit {

  displayedColumns = [ 'name', 'surname', 'age','number'];
  dataSource: MatTableDataSource<Dummy>;
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  constructor(public pageableListService:PageableListService) {
   
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource;

    this.getDummyData(new Page(this.dataSource.paginator.pageIndex, this.dataSource.paginator.pageSize));
  }


  ngOnInit(): void {
    
  }

  getDummyData(page:Page){
    this.pageableListService.getData(page)
    .subscribe((res :any)=>{
        this.dataSource.data = res["content"];
        this.resultsLength = res["totalElements"];
        


    })
    
    ;
    
  };


  
  


}

