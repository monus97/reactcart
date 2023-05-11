import LOGO from "../publics/icons8-shopping-cart-24.png"
function Header(props) {
  console.log(props.data,"--------header--------->");
  return (
    <div>
        <div>
          <span className="counter" >{props.data.length}</span>
            <img src={LOGO} className="logo" />
        </div>
    </div>
  );
}

export default Header;
