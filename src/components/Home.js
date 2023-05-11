import LOGO from "../publics/icons8-shopping-cart-24.png"
import minilogo from "../publics/photo-1533450718592-29d45635f0a9.jpg";
function Home(props) {
  //  console.log(props,"----------------->");
  return (
    <div>
      <h1>home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={minilogo} />
        </div>
        <div className="text-wrapper item">
          <span>tigers</span>
          <span>price : $10000</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={()=>props.addToCartHandler({price : 10000,name:"tigers"})}>add to cart</button>
        </div>
        <div className="wrap">
          <button  onClick={()=> props.removeToCartHandler()}>remove to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
