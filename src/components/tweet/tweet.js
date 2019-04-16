import React from 'react'
import {withRouter} from 'react-router-dom'; //component içinden yönlendirme için withRouter import ettik.

import './tweets.css';


const decideDate = (date) => {

    let result ='';
    
    const diffMS = new Date().getTime() -new Date(date).getTime();//milisaniye cinsinden fark
    const min = parseInt(diffMS / 1000 / 60);//1000 bölünce saniye tekrar 60 bölünce dkya
    const hour = parseInt(min/60);//saat
    const day = parseInt(hour/24);//gün

   if(min < 1){
       result = 'Yaklaşık bir dakika önce';
   }else{
       if(hour < 1){
           result = min + 'dakika önce';
       }else{
           if(day < 1){
              result = hour +' saat önce';
           }else{
            result = day +' gün önce';
           }
       }
   }
    return result;
}
const Tweet = ({ tweet , history }) => {//withRouter sayesinde props un içinde history i kullanmamızı sağlayacak.

    return (
        //tweet üzerine tıklandığında tweet düzenleme ekranına gitmek istiyruz bu yüzden onClick metodu ile bi yönledirme yapıyoruz ancak bu yönledirmede tıklanan tweet bilgilerini taşımamız gerek
        //li olduğu için bu şekilde pathname ile güncel state bilgsini yani tıkladğımız tweet in bilgisinide yolluyoruz.
        <div className="tweet-wrapper event" onClick={() => {history.push({
            pathname:'/editTweet',
            state: {
             tweet
                  } 
         });}}>
            <div className="content">
                <div className="summary">
                    {tweet.email}
                  <div className="date">
                  {decideDate(tweet.date)}
                  </div>
                </div>
                <div className="extra text">
                {tweet.tweet}
             </div>
            </div>
        </div>

    )

}
export default withRouter(Tweet); //withRouter ile tweet componentinin gönderilmesini sağlıyoruz ve bu tweet in props una bağlanmasını sağladık.