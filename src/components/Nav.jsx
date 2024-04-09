
import '../styles/Nav.css';

function Nav() {
  return (
    <div className="Nav md:sticky"> 
      <nav className='sticky' id="stickyElement">
        <div className="boxq">
            <a className="internal_link" href="#aim">
                <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmpbB3jSjMF-FDgIL1E-eRN6eeCDLSsvoAQ&amp;usqp=CAU"/><br/>
                Aim</a>
        </div>
        <div className="boxq">
            <a className="internal_link" href="#theory">
                <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1648/1648697.png"/><br/>
                Theory</a>
        </div>
        <div className="boxq">
            <a className="internal_link" href="#procedure">
                <img className="icon" src="https://cdn4.iconfinder.com/data/icons/project-management-1-11/65/23-512.png"/><br/>
                Procedure</a>
        </div>
        <div className="boxq">
            <a className="internal_link" href="#practice">
                <img className="icon" src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo-animation/editable-minimal.png?v=6"/><br/>
                Practice</a>
        </div>
        <div className="boxq">
            <a className="internal_link" href="#code">
                <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png"/><br/>
                Python Code</a>
        </div>
        <div className="boxq">
            <a className="internal_link" href="#quiz">
                <img className="icon" src="https://img.favpng.com/21/11/8/new-york-city-fotolia-stock-photography-sales-png-favpng-f9ZiUMqBcZK0LNfZPfC674ZxZ_t.jpg"/><br/>
                Quiz</a>
        </div>
        {/* <div className="boxq">
            <a className="internal_link" href="#observation">
                <img className="icon"
                    src="https://img.freepik.com/free-vector/business-management-vector_53876-44131.jpg?size=338&ext=jpg"/><br/>
                Observations</a>
        </div>  */}
        <div className="boxq">
            <a className="internal_link" href="#result">
                <img className="icon" src="https://cdn4.iconfinder.com/data/icons/collection-of-online-business-icons/64/Board_Chart_Results_Business-512.png"/><br/>
                Result</a>
        </div>
        <div className="boxq">
            <a className="internal_link" href="#references">
                <img className="icon" src="https://image.pngaaa.com/134/5592134-middle.png"/><br/>
                References</a>
        </div>
    </nav>
    </div>
  );
}

export default Nav;
