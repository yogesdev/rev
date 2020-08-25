import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CampaignService } from '../../../services/campaign.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  iab_categories:any;
  iab_subcategories:any;;
  filtered:any;;
  selected:any;
  subCat={
    category:''
  };
  constructor(private catserve: CategoriesService, private campcall :CampaignService) { }
  dummy_data='';
  ngOnInit(): void {
    this.catserve.getCategories(this.dummy_data).subscribe(
      (data:any)=>{
        this.iab_categories=data.msg;
        console.log(this.iab_categories);
      }
    );
  }

  
  
  getSubCategory(){     

    this.subCat.category=this.selected;    
    this.catserve.getsubCategories(this.subCat)
    .subscribe(
      (data)=>{
        if(data.msg.length){
          this.iab_subcategories=data.msg;
        }
        else{
          this.iab_subcategories=[{"subcategory":"0","cat_name":"Select"}];
        }
       
     
      }
    );
  }


  addCamps ={
    campaignname : '',
    revenue_type : '',
    totalbudget : '',
    revenue :'',
    country :'',

  };
  
  campAddform = new FormGroup({
    campaignname:new FormControl(null),
    totalbudget:new FormControl(null),
    revenue_type:new FormControl(null),
    revenue:new FormControl(null),
    category:new FormControl(null),
    subcategory:new FormControl(null),
    country:new FormControl(null),
    
  });
  addCampaign()
  {
    this.addCamps.campaignname = this.campAddform.value.campaignname ;
    this.addCamps.revenue_type = this.campAddform.value.revenue_type ;
    this.addCamps.totalbudget = this.campAddform.value.totalbudget ;
    this.addCamps.revenue = this.campAddform.value.revenue ;
    console.log(this.addCamps);
    this.campcall.addCampaign(this.addCamps).subscribe(
      (data)=>{
        console.log(data);
      }
    );

  }

}
