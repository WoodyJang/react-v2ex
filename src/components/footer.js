import React, { Component } from 'react'
import '../less/footer.less'

class Footer extends Component {
  render() {
    return (
      <div id="bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="inner">
                <span className="small">
                    V2EX  Made By WoodyJang <br />
                <a href="">Github Repo</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer
