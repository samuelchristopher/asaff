import React from "react"

import LogoImage from "./logo-image"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedKeywordIndex: 0,
      keywords: ['ICT', 'Shipping', 'Freight Forwarding']
    }

    this.setState = this.setState.bind(this)
    let that = this

    // setInterval(function () {
    //   console.log('change selected keyword')
    //   let { selectedKeywordIndex } = that.state
    //   if (selectedKeywordIndex < 3) {
    //     return that.setState({
    //       selectedKeywordIndex: selectedKeywordIndex++
    //     })
    //   }

    //   that.setState({
    //     selectedKeywordIndex: 0
    //   })
    // }, 2000)
  }

  render() {
    
    return (
        <header 
          style={{
            textAlign: `center`
          }}>
          <div 
            style={{
            height: `43px`,
            width: `43px`,
            margin: `64px auto 38px auto`,
            }}>
            <LogoImage />
          </div>
          <p 
            style={{
            color: `#828282`,
          }}
          >
            We can help you with
          </p>
          <h1
            style={{
              color: `#272C77`,
              fontWeight: `bold`,
              marginTop: `0`
            }}>
            {
              this.state.keywords[this.state.selectedKeywordIndex]
            }
          </h1>
        </header>
      )
  }
}





export default Header
