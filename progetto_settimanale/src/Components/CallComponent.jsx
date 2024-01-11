import React, { Component } from 'react'
import { ListGroup, Container, Spinner, Alert, Button } from 'react-bootstrap'

export default class UsersComponent extends Component {

    state = {
        users: [],
        isLoading: false,
        errMsg: false
    }


    componentDidMount = async () => {


        try {
            this.setState({
                isLoading: true
            })

            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if (response.ok) {
                const data = await response.json()
                setTimeout(() => {
                    this.setState({
                        users: data,
                        isLoading: false
                    })
                }, 3000)

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
            <Container>
                <h1>User List</h1>

                {this.state.isLoading && <Spinner animation="grow" />}

                {this.state.errMsg &&
                    <Alert variant="warning">
                        Si è verificato un errore nel caricamento dei dati
                    </Alert>
                }

                <ListGroup defaultActiveKey="#link1">
                    {this.state.users.map(u => (
                        <ListGroup.Item action key={u.id} >
                            {u.name}
                            <Button variant="danger" onClick={() => this.deleteUser(u)}>Delete</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        )
    }
}