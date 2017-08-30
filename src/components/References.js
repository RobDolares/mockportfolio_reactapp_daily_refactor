import React from 'react';

const References = (props)=> {

  let quoteStyles = {
    paddingBottom: "20px"
  }
    return (
      <div className="container-fluid">
        <header>
          <h1>References</h1>
        </header>
        <main>
          <div>
            <div style={quoteStyles} className="card card-block col-sm-6 col-xs-12">
              <h3>Chishimba Mowa, M.D. D.V.M</h3>
              <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis elit vel neque ullamcorper molestie. Sed placerat augue felis, quis dapibus ex mollis vel."</blockquote>
            </div>
            <div style={quoteStyles} className="card card-block col-sm-6 col-xs-12">
              <h3>Charles Lindbergh</h3>
              <blockquote>"Sed placerat augue felis, quis dapibus ex mollis vel. Suspendisse eget odio nec massa elementum pharetra. Morbi lacinia urna vel euismod bibendum. Donec lacinia in ex et hendrerit. Proin feugiat sem eget mi sagittis gravida."</blockquote>
            </div>
            <div style={quoteStyles} className="card card-block col-sm-6 col-xs-12">
              <h3>Frank Fredericks</h3>
              <blockquote>"Proin mollis elit vel neque ullamcorper molestie. Sed placerat augue felis, quis dapibus ex mollis vel. Suspendisse eget odio nec massa elementum pharetra. Morbi lacinia urna vel euismod bibendum. Proin feugiat sem eget mi sagittis gravida."</blockquote>
            </div>
            <div style={quoteStyles} className="card card-block col-sm-6 col-xs-12">
              <h3>Lucille Ball</h3>
              <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor posuere fringilla. Nulla velit nulla, tristique tempus nisl ac, ultrices lobortis justo. Phasellus quis nisi nec eros varius fringilla ac vitae nulla. Mauris auctor tortor at felis mattis, efficitur iaculis eros luctus. Sed lobortis purus."</blockquote>
            </div>
          </div>
        </main>
      </div>
    )
}

export default References;
