import { Comment } from "./comment"

export class CommentList{
  year=new Date().getFullYear();
  month=new Date().getMonth();
  day=new Date().getDay();
  date=this.day+'/'+this.month+'/'+this.year;

  commentList:Comment[]=[
    {id:1,time:this.date,name:'serdar6666',profil:'profil.jpg' ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:1,time:this.date,name:'samet243090',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:3,time:this.date,name:'Burakzeybekx',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:4,time:this.date,name:'aylinavcininbokuolun',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:5,time:this.date,name:'orfezeus',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:6,time:this.date,name:'balik burcu erkegi',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:6,time:this.date,name:'ebean',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:6,time:this.date,name:'orfezeus',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:9,time:this.date,name:'samet243090',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:10,time:this.date,name:'serdar6666',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:11,time:this.date,name:'Burakzeybekx',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:11,time:this.date,name:'orfezeus',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:14,time:this.date,name:'balik burcu erkegi' ,profil:'profil.jpg' ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:14,time:this.date,name:'serdar6666',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:15,time:this.date,name:'serdar6666' ,profil:'profil.jpg' ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:16,time:this.date,name:'serdar6666',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'},
    {id:17,time:this.date,name:'serdar6666',profil:'profil.jpg'  ,comment:'bu filmin devamı nezaman gelir bir bilgi varmı acaba sanırsam yüzüklerin efendisi gibi seri yapacaklar..müthiş bir filmdi emeğiniz için teşekkür ederim'}
  ]
}


