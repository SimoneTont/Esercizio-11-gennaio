import React, { Component } from 'react'
import { Spinner, Alert, Col, Row } from 'react-bootstrap'
let URL = "https://www.omdbapi.com/?apikey=f8bd2434&s=lord%20of%20the%20rings"

export default class HarryPotterComp extends Component {
  state = {
    movies: [],
    isLoading: false,
    errMsg: false
  }

  componentDidMount = async () => {
    try {
      this.setState({
        isLoading: true
      })
      const response = await fetch(URL)
      if (response.ok) {
        const data = await response.json()
        setTimeout(() => {
          this.setState({
            movies: data.Search,
            isLoading: false
          })
        }, 1000)
      } else {
        console.log('error while fetching')
        this.setState({
          isLoading: false,
          errMsg: true
        })
      }
    } catch (e) {
      console.log(e)
      this.setState({
        isLoading: false,
        errMsg: true
      })
    }
  }
  render() {
    return (

      <div className='myContainer'>
        {this.state.isLoading && <Spinner animation="grow" />}

        {this.state.errMsg &&
          <Alert variant="warning">
            Loading Error
          </Alert>
        }
        <Row>
          {this.state.movies.map(m => (
            <Col>
              <img className="img-fluid" src={m.Poster} alt="Carosello1"></img>
            </Col>))}
        </Row>
      </div>

    )
  }
}