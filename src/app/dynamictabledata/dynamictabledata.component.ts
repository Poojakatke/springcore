import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamictabledata',
  templateUrl: './dynamictabledata.component.html',
  styleUrls: ['./dynamictabledata.component.css']
})
export class DynamictabledataComponent {
  constructor(){
    this.getData();
  }
array:any=[
//   {
//      Name:"Pooja" , 
//     Address:"Add1",
//     Email:"pooja@gmail.com"
//   },
//   {
//     Name:"vaishnavi" , 
//    Address:"Add2",
//    Email:"pooja@gmail.com"
//  }
{
  "id": 1000,
  "name": "James Butt",
  "country": {
    "name": "Algeria",
    "code": "dz"
  },
  "company": "Benton, John B Jr",
  "date": "2015-09-13",
  "status": "unqualified",
  "activity": 17,
  "representative": {
    "name": "Ioni Bowcher",
    "image": "ionibowcher.png"
  }
},
{
    "id": 1001,
    "name": "Josephine Darakjy",
    "country": {
      "name": "Egypt",
      "code": "eg"
    },
    "company": "Chanay, Jeffrey A Esq",
    "date": "2019-02-09",
    "status": "proposal",
    "activity": 0,
    "representative": {
      "name": "Amy Elsner",
      "image": "amyelsner.png"
    }
  },
  {
    "id": 1002,
    "name": "Art Venere",
    "country": {
      "name": "Panama",
      "code": "pa"
    },
    "company": "Chemel, James L Cpa",
    "date": "2017-05-13",
    "status": "qualified",
    "activity": 63,
    "representative": {
      "name": "Asiya Javayant",
      "image": "asiyajavayant.png"
    }
  },
  {
    "id": 1003,
    "name": "Lenna Paprocki",
    "country": {
      "name": "Slovenia",
      "code": "si"
    },
    "company": "Feltz Printing Service",
    "date": "2020-09-15",
    "status": "new",
    "activity": 37,
    "representative": {
      "name": "Xuxue Feng",
      "image": "xuxuefeng.png"
    }
  },
  {
    "id": 1004,
    "name": "Donette Foller",
    "country": {
      "name": "South Africa",
      "code": "za"
    },
    "company": "Printing Dimensions",
    "date": "2016-05-20",
    "status": "proposal",
    "activity": 33,
    "representative": {
      "name": "Asiya Javayant",
      "image": "asiyajavayant.png"
    }
  },
  {
    "id": 1005,
    "name": "Simona Morasca",
    "country": {
      "name": "Egypt",
      "code": "eg"
    },
    "company": "Chapman, Ross E Esq",
    "date": "2018-02-16",
    "status": "qualified",
    "activity": 68,
    "representative": {
      "name": "Ivan Magalhaes",
      "image": "ivanmagalhaes.png"
    }
  },
  {
    "id": 1006,
    "name": "Mitsue Tollner",
    "country": {
      "name": "Paraguay",
      "code": "py"
    },
    "company": "Morlong Associates",
    "date": "2018-02-19",
    "status": "renewal",
    "activity": 54,
    "representative": {
      "name": "Ivan Magalhaes",
      "image": "ivanmagalhaes.png"
    }
  },
  {
    "id": 1007,
    "name": "Leota Dilliard",
    "country": {
      "name": "Serbia",
      "code": "rs"
    },
    "company": "Commercial Press",
    "date": "2019-08-13",
    "status": "renewal",
    "activity": 69,
    "representative": {
      "name": "Onyama Limba",
      "image": "onyamalimba.png"
    }
  },
  {
    "id": 1008,
    "name": "Sage Wieser",
    "country": {
      "name": "Egypt",
      "code": "eg"
    },
    "company": "Truhlar And Truhlar Attys",
    "date": "2018-11-21",
    "status": "unqualified",
    "activity": 76,
    "representative": {
      "name": "Ivan Magalhaes",
      "image": "ivanmagalhaes.png"
    }
  },
  {
    "id": 1009,
    "name": "Kris Marrier",
    "country": {
      "name": "Mexico",
      "code": "mx"
    },
    "company": "King, Christopher A Esq",
    "date": "2015-07-07",
    "status": "proposal",
    "activity": 3,
    "representative": {
      "name": "Onyama Limba",
      "image": "onyamalimba.png"
    }
  },
  {
    "id": 1010,
    "name": "Minna Amigon",
    "country": {
      "name": "Romania",
      "code": "ro"
    },
    "company": "Dorl, James J Esq",
    "date": "2018-11-07",
    "status": "qualified",
    "activity": 38,
    "representative": {
      "name": "Anna Fali",
      "image": "annafali.png"
    }
  },
  {
    "id": 1011,
    "name": "Abel Maclead",
    "country": {
      "name": "Singapore",
      "code": "sg"
    },
    "company": "Rangoni Of Florence",
    "date": "2017-03-11",
    "status": "qualified",
    "activity": 87,
    "representative": {
      "name": "Bernardo Dominic",
      "image": "bernardodominic.png"
    }
  },
  {
    "id": 1012,
    "name": "Kiley Caldarera",
    "country": {
      "name": "Serbia",
      "code": "rs"
    },
    "company": "Feiner Bros",
    "date": "2015-10-20",
    "status": "unqualified",
    "activity": 80,
    "representative": {
      "name": "Onyama Limba",
      "image": "onyamalimba.png"
    }
  },

];
tabKey:any=[];
tabValue:any=[];
getData(){
this.array.forEach((element:any) => {
  this.tabKey=Object.keys(element);
  this.tabValue.push(Object.values(element));//multiple data send
});

}
}
