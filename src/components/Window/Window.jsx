import './Window.css';

function Window() {
  return (
    <div className="window" id='aboutMe'>
        <div className="window__header">
            <div className="header__semaphore">
                <span className="semaphore"></span>
                <span className="semaphore"></span>
                <span className="semaphore"></span>
            </div>
            <h4 className="header__title">About me</h4>
        </div>
        <div className="window__body">
          <div className="body__col1">
            <div className="body__item">
              <h5 className="body__title">Name</h5>
              <h4 className="body__content">Alexander Micael</h4>
            </div>
            <div className="body__item">
              <h5 className="body__title">Last name</h5>
              <h4 className="body__content">Bernal Pufahl</h4>
            </div>
            <div className="body__item">
              <h5 className="body__title">Languages</h5>
              <h4 className="body__content">Spanish (Native)</h4>
              <h4 className="body__content">English (Fluent)</h4>
              <h4 className="body__content">Portuguese (Intermediate)</h4>
            </div>
          </div>
          <div className="body__col2">
            <div className="body__item">
              <h5 className="body__title">Skills</h5>
              <h4 className="body__content">Frameworks and libraries, <br /> version control, web design, communication</h4>
            </div>
            <div className="body__item">
              <h5 className="body__title">Interest</h5>
              <h4 className="body__content">Graphic design, photography,<br /> running, astronomy, science.</h4>
            </div>
          </div>
          <div className="body__col3">
            <div className="body__item">
              <h5 className="body__title">Front-End</h5>
              <h4 className="body__content">HTML<br />CSS<br />Bootstrap<br />React.js<br />jQuery</h4>
            </div>
            <div className="body__iten">
              <h5 className="body__title">Back-End</h5>
              <h4 className="body__content">Node.js<br />Express.js<br />MongoDB<br />Mongoose<br />MySQL</h4>
            </div>
            <div className="body__iten">
              <h5 className="body__title">General</h5>
              <h4 className="body__content">JavaScript<br />Git/GitHub</h4>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Window;
