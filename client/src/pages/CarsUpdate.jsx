import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class CarsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            mileage: '',
            price: ''
        }
    }

    handleChangeInputMileage = async event => {
        const mileage = event.target.value
        this.setState({ mileage })
    }

    handleUpdateCar = async () => {
        const { id, mileage } = this.state
        const payload = { mileage }

        await api.updateCarById(id, payload).then(res => {
            window.alert(`Car updated successfully`)
            this.setState({
                mileage: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const car = await api.getCarById(id)

        this.setState({
            mileage: car.data.data.mileage
        })
    }

    render() {
        const { mileage } = this.state
        return (
            <Wrapper>
                <Title>Update Car</Title>

                <Label>Mileage: </Label>
                <InputText
                    type="text"
                    value={mileage}
                    onChange={this.handleChangeInputMileage}
                />

                <Button onClick={this.handleUpdateCar}>Update Car</Button>
                <CancelButton href={'/cars/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default CarsUpdate
