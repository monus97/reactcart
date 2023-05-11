import Header from "../components/Header";
import { connect, Connect } from "react-redux";

const mapStateToProps = state=>({
data:state.CardItems
})
const mapDispatchToProps = dispatch=>({
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;
