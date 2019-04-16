import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendTweet , updateTweet , deleteTweet} from '../../../actions';
import './newTweet.css'
class newTweet extends Component {
    
    constructor (props) {
        super(props);
       
        const tweet = props.location.state ? props.location.state.tweet : null;// Bu değer dolu ise tweet üzerine tıklanarak düzenlenme isteği ile doldurulmuş demektir.Öyleyse o değeri tweet e atadık.Boşsa boş obje atadık.

        this.state = {
            tweet: tweet ? tweet.tweet : '' //eğer yukarda tanımladığımız tweet dolu ise onu al boşsa boş string ata bu şekilde new tweet ekranındaki textareanın içini dolu bir şekilde ekrana yazdırmış olduk.

        }
        this.renderButtons = this.renderButtons.bind(this);
      
    }
     //bu şekilde tek bir alanda input alıyorsak bu şekilde fonk. yazamadan onChange tanımlayabilriz ve bunu bind etmemize gerek kalmaz normalde içinde this.setState kullancacağımız için
     //constructor içinde onChange fonskiynun bind etmemiz gerekiyordu ancak bu şekilde tek satır halindede yazbiliyoruz.
     onChange = (event) =>  this.setState({ [event.target.name]: event.target.value })
    
     
     renderButtons() {
        const tweet = this.props.location.state ? this.props.location.state.tweet : null;

        return tweet ? (
            <div>
                <button className="ui red basic button" onClick={ () => {
                this.props.deleteTweet(tweet.uid);}}>Sil</button> 
                <button className="ui green basic button" onClick={ () => {
                this.props.updateTweet({
                    uid: tweet.uid,
                    email: tweet.email,
                    tweet: this.state.tweet,//state içinden aldık çünkü güncel tweet state in içinde var.
                    date: tweet.date
                });}}>Güncelle</button> 
            </div>
            
        ) : (
            <button className="ui primary basic button" onClick={ () => {
                this.props.sendTweet(this.state);}}>Gönder</button> 
        )
     }


    render() {
        return (
            <div className="new-tweet-container">
                <div className="new-tweet-wrapper ui form">
                    <div className="field">
                        <label>Tweet</label>
                        <textarea rows="3"
                        placeholder = "Tweet"
                        value={this.state.tweet}
                        onChange={this.onChange}
                        name="tweet"/>
                    </div>
                    {this.renderButtons()}
                </div>
            </div>
        )
    }
}
export default connect(null,{ sendTweet,updateTweet , deleteTweet }) (newTweet);