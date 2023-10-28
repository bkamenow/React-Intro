export default function Stats() {
    return(
        <section className="stats">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center stat-box">
              <h1 className="purple"><span className="counter">3.2</span>k</h1>
              <h3>Hours</h3>
            </div>
            <div className="col-md-4 text-center stat-box">
              <h1 className="blue counter">217</h1>
              <h3>Projects</h3>
            </div>
            <div className="col-md-4 text-center stat-box">
              <h1 className="pink"><span className="counter">18.3</span>k</h1>
              <h3>Cups of Coffee</h3>
            </div>
          </div>
        </div>
      </section>
    );
}