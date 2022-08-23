import phone from '../../images/Telefon.jpeg';

export default function Home() {
   return (
      <>
      <div style={{
         marginTop: 100,
         marginLeft: 200,
         width: 900,
        }}>
         <p
         style={{
            fontSize: 50,
            color: '#010101'
            }}
         >Welcome to our service!</p>
<p
style={{
   fontSize: 30,
   color: '#010101'
   }}
>
This application is a convenient e-book of contacts for you.
Thank you for using our service!
Enjoy your use!</p>

</div>
<img style={{
 width: 900,
 marginLeft: 200,  
}} src={phone}></img>
</>
   );
};